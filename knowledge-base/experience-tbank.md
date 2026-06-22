# T-Bank Experience (Oct 2025 – Present)

## Role

Software Engineer, Technical Lead of the Customer Data Platform (CDP) team.

## Customer Data Platform (CDP)

The CDP is a manager-facing cashback audience platform that selects customers for partner-funded offers using transaction, customer, and partner data. Managers define targeting criteria, and the system builds audiences from ~30 million daily transactions across 1.5 years of history.

## Flagship Achievement: Marketing Delivery Acceleration (32×)

As CDP lead, Artem self-initiated and championed a cross-team RFC to integrate with another team's Go data-processing service.

**Architecture:**
- Control-plane (Kotlin/Spring Boot): business logic, statuses, correctness
- Data-plane (Go, gRPC): heavy export/materialization, ClickHouse→S3, bounded worker concurrency
- Contract-first integration with idempotency, retry/fallback, and shadow mode

**Impact:**
- Cut marketing data delivery 32× (from 8+ hours to ~15 minutes)
- Campaigns can now launch the same day a task is filed
- The integration drove organizational consolidation: the other team and its service were absorbed into the CDP

## Audience Gathering Speedup (Solo Engineering)

Separately from the RFC-driven delivery work, Artem reworked the DAG/queue/ClickHouse architecture for audience gathering:

- Made audience gathering size-independent: 1–10 seconds for any audience (from ~6 minutes typical)
- Best-case 360× improvement (6 min → 1 s), honest typical ~30–50×
- Analyst-estimated ~RUB 14M/month in additional revenue
- Authored a ~28-page technical proposal with 23 optimization ideas and a phased execution roadmap

## Performance & Observability

- Built a quantitative latency model for the Postgres-backed DAG pipeline
- Identified queue wait as ~96.5% of total time (not execution)
- Migrated audience-building to ClickHouse-as-a-Service → ~5× faster critical scenarios
- End-to-end observability: wait/exec metrics, p95, worker timings, ClickHouse query tracking

## Targeting System

- Delivered spend/income targeting on ~30M transactions/day and 1.5 years of historical data
- Targeting system generates ~RUB 15M/year in profit
- Added financial and terminal-based targeting parameters

## AI/LLM Automation

- **AI Code Review Bot:** GitLab MR analysis pipeline — summarizes changes, classifies issues, suggests fixes (OpenAI, GitLab API, FastAPI)
- **AI CI Refactoring Bot:** detects tech-debt patterns, generates refactoring plans, prepares draft MRs — accelerated main pipeline by 5–7 min (15–20%)
- **RAG Onboarding Agent:** retrieval pipeline over internal docs, context-aware chat, source citation, confidence scoring (LangChain, PostgreSQL, Redis)
- **n8n Automations:** campaign workflow automation (creation, partner monitoring, result reporting) — saves 40–60 manual hours/month

## Mentorship

Mentor of intern software engineers at T-Bank. Shares architecture experience, discusses initiatives, helps with product thinking.
