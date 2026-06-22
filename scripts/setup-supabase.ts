/**
 * Create the documents table in Supabase and populate the knowledge base.
 *
 * Usage:
 *   SUPABASE_URL=... SUPABASE_SERVICE_KEY=... npx tsx scripts/setup-supabase.ts
 */

import { createClient } from "@supabase/supabase-js";
import { readFileSync, readdirSync } from "fs";
import { join } from "path";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

const KNOWLEDGE_BASE_DIR = join(__dirname, "..", "knowledge-base");

function chunkMarkdown(
  content: string,
  source: string
): Array<{ content: string; metadata: Record<string, unknown> }> {
  const chunks: Array<{
    content: string;
    metadata: Record<string, unknown>;
  }> = [];

  const sections = content.split(/^## /gm).filter(Boolean);

  for (const section of sections) {
    const lines = section.trim().split("\n");
    const title = lines[0]?.replace(/^#+\s*/, "").trim() || "";
    const body = lines.slice(1).join("\n").trim();

    if (body.length < 20) continue;

    chunks.push({
      content: `## ${title}\n\n${body}`,
      metadata: { source, section: title },
    });
  }

  if (chunks.length === 0 && content.trim().length > 20) {
    chunks.push({
      content: content.trim(),
      metadata: { source, section: "full" },
    });
  }

  return chunks;
}

async function main() {
  console.log("Checking Supabase connection...\n");

  const { error: checkError } = await supabase
    .from("documents")
    .select("id")
    .limit(1);

  if (checkError) {
    console.log(
      "✗ Cannot connect to 'documents' table."
    );
    console.log(
      "  Run the SQL in supabase/migrations/001_create_documents.sql first.\n"
    );
    console.log("  SQL Editor → https://supabase.com/dashboard/project/YOUR_PROJECT/sql\n");
    return;
  }

  console.log("✓ Table 'documents' exists. Populating...\n");

  const files = readdirSync(KNOWLEDGE_BASE_DIR).filter((f) =>
    f.endsWith(".md")
  );
  console.log(`Found ${files.length} knowledge base files`);

  const { error: deleteError } = await supabase
    .from("documents")
    .delete()
    .neq("id", 0);

  if (deleteError) {
    console.error("  Error clearing:", deleteError.message);
  } else {
    console.log("  Cleared existing documents");
  }

  let total = 0;

  for (const file of files) {
    const content = readFileSync(join(KNOWLEDGE_BASE_DIR, file), "utf-8");
    const source = file.replace(".md", "");
    const chunks = chunkMarkdown(content, source);
    console.log(`  ${file}: ${chunks.length} chunks`);

    for (const chunk of chunks) {
      const { error } = await supabase.from("documents").insert({
        content: chunk.content,
        metadata: { ...chunk.metadata, file },
      });

      if (error) {
        console.error(`    Error: ${error.message}`);
      } else {
        total++;
      }
    }
  }

  console.log(`\n✓ Done! Inserted ${total} chunks from ${files.length} files.`);
}

main().catch(console.error);
