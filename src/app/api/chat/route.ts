import { NextRequest } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "edge";

const ANTHROPIC_BASE_URL =
  process.env.ANTHROPIC_BASE_URL || "https://api.xiaomimimo.com/anthropic";
const ANTHROPIC_AUTH_TOKEN = process.env.ANTHROPIC_AUTH_TOKEN || "";
const ANTHROPIC_MODEL = process.env.ANTHROPIC_MODEL || "mimo-v2.5-pro";

function getSupabase() {
  return createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
  );
}

const SYSTEM_PROMPT = `You are Artem Sidnev, a Software Engineer at T-Bank. You answer questions about your professional experience, skills, projects, and career in first person. Be concise, specific, and honest — use real metrics and achievements from the context provided.

Key facts about you:
- Software Engineer at T-Bank, Technical Lead of the Customer Data Platform (CDP)
- ~4 years of experience (since May 2022)
- Main stack: Java, Kotlin, Go, Python, Spring Boot, PostgreSQL, ClickHouse, Kafka
- Audience gathering accelerated to 1–10 seconds (size-independent, ~30–50× typical)
- Data export accelerated 32× (8h → 15min) via cross-team RFC integration
- Deployed AI/LLM tools in production: code review bot, CI refactoring bot, RAG onboarding agent
- Open-source projects: ProofForge (Go + Next.js), ARC (Go CLI + Wails), Chappi AI Office (multi-agent)

Rules:
- Answer as Artem in first person ("I", "my", etc.)
- Use the retrieved context to give accurate, specific answers
- If you don't know something, say so honestly rather than making things up
- Be conversational but professional
- When discussing metrics, be honest about framing (e.g., "analyst-estimated", "best-case")
- Never reveal confidential company information (internal codenames, prod configs, etc.)
- Keep responses concise — 2-4 paragraphs maximum unless asked for detail`;

async function getContext(query: string): Promise<string> {
  try {
    const supabase = getSupabase();

    const { data, error } = await supabase
      .from("documents")
      .select("content")
      .textSearch("content", query, {
        type: "websearch",
        config: "english",
      })
      .limit(5);

    if (error || !data?.length) {
      return "";
    }

    return data
      .map((doc: { content: string }) => doc.content)
      .join("\n\n---\n\n");
  } catch {
    return "";
  }
}

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  if (!messages?.length) {
    return new Response("No messages provided", { status: 400 });
  }

  const lastMessage = messages[messages.length - 1];
  const context = await getContext(lastMessage.content);

  const contextBlock = context
    ? `\n\nRelevant context from knowledge base:\n${context}`
    : "";

  // Call Anthropic-compatible API directly via fetch
  const response = await fetch(`${ANTHROPIC_BASE_URL}/v1/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": ANTHROPIC_AUTH_TOKEN,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: ANTHROPIC_MODEL,
      max_tokens: 1024,
      stream: true,
      system: SYSTEM_PROMPT + contextBlock,
      messages: messages.map((m: { role: string; content: string }) => ({
        role: m.role,
        content: m.content,
      })),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Anthropic API error:", errorText);
    return new Response("Failed to get response from model", { status: 502 });
  }

  // Transform Anthropic SSE to our simple format
  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();
      const reader = response.body?.getReader();
      if (!reader) {
        controller.close();
        return;
      }

      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const data = line.slice(6).trim();
          if (data === "[DONE]") continue;

          try {
            const parsed = JSON.parse(data);
            // Anthropic streaming format: content_block_delta has text
            if (
              parsed.type === "content_block_delta" &&
              parsed.delta?.type === "text_delta" &&
              parsed.delta?.text
            ) {
              controller.enqueue(
                encoder.encode(
                  `data: ${JSON.stringify({ text: parsed.delta.text })}\n\n`
                )
              );
            }
          } catch {
            // Skip malformed JSON
          }
        }
      }

      controller.enqueue(encoder.encode("data: [DONE]\n\n"));
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
