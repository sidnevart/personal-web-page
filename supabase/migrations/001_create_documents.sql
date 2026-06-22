-- Documents table for RAG knowledge base (full-text search, no vector needed)
create table if not exists documents (
  id bigserial primary key,
  content text not null,
  metadata jsonb default '{}'::jsonb,
  created_at timestamptz default now()
);

-- Full-text search index
create index if not exists documents_content_fts
  on documents using gin (to_tsvector('english', content));

-- GIN index on metadata for filtering
create index if not exists documents_metadata_gin
  on documents using gin (metadata);
