/**
 * Prepare knowledge base: read markdown files, chunk them,
 * and upsert into Supabase (full-text search, no embeddings).
 *
 * Usage:
 *   SUPABASE_URL=... SUPABASE_SERVICE_KEY=... npx tsx scripts/prepare-knowledge-base.ts
 */

import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

const KNOWLEDGE_BASE_DIR = join(__dirname, "..", "knowledge-base");

function chunkMarkdown(content: string, source: string): Array<{ content: string; metadata: Record<string, unknown> }> {
  const chunks: Array<{ content: string; metadata: Record<string, unknown> }> = [];

  // Split by H2 headers
  const sections = content.split(/^## /gm).filter(Boolean);

  for (const section of sections) {
    const lines = section.trim().split("\n");
    const title = lines[0]?.replace(/^#+\s*/, "").trim() || "";
    const body = lines.slice(1).join("\n").trim();

    if (body.length < 20) continue; // Skip very short sections

    chunks.push({
      content: `## ${title}\n\n${body}`,
      metadata: { source, section: title },
    });
  }

  // If no H2 sections found, use the whole content
  if (chunks.length === 0 && content.trim().length > 20) {
    chunks.push({
      content: content.trim(),
      metadata: { source, section: "full" },
    });
  }

  return chunks;
}

async function main() {
  const files = readdirSync(KNOWLEDGE_BASE_DIR).filter((f) => f.endsWith(".md"));
  console.log(`Found ${files.length} knowledge base files`);

  // Clear existing documents
  const { error: deleteError } = await supabase
    .from("documents")
    .delete()
    .neq("id", 0);

  if (deleteError) {
    console.error("Error clearing documents:", deleteError);
  } else {
    console.log("Cleared existing documents");
  }

  let totalChunks = 0;

  for (const file of files) {
    const filePath = join(KNOWLEDGE_BASE_DIR, file);
    const content = readFileSync(filePath, "utf-8");
    const source = file.replace(".md", "");

    const chunks = chunkMarkdown(content, source);
    console.log(`  ${file}: ${chunks.length} chunks`);

    for (const chunk of chunks) {
      const { error } = await supabase.from("documents").insert({
        content: chunk.content,
        metadata: { ...chunk.metadata, file },
      });

      if (error) {
        console.error(`  Error inserting chunk from ${file}:`, error);
      } else {
        totalChunks++;
      }
    }
  }

  console.log(`\nDone! Inserted ${totalChunks} chunks from ${files.length} files.`);
}

main().catch(console.error);
