# Codex Portfolio Workspace

## Canonical Sources

For public-facing work in this repository, treat these files as the source of truth:

- `portfolio-site.skill.md` for site copy, visual hierarchy, and anti-AI-text constraints.
- `cv-writing.skill.md` for resume structure, scope, and evidence selection.
- `global-market-positioning.skill.md` for the final editorial and market-positioning pass.
- `resources.md` for project facts, metrics, and what belongs on the site.
- `CONTENT_GAPS.md` for missing screenshots, links, resume assets, and unresolved inputs.

If resume structure needs an external benchmark, use the referenced `awesome-resumes` repository as inspiration for ATS-safe ordering and clarity, not as a source of fabricated claims.

## Local Skills

Use only these local skills under `.codex/skills/`:

- `$portfolio-site` for public site copy, page hierarchy, project naming, and concise business-readable wording.
- `$cv-writing` for resume writing and resume rewrites.
- `$global-market-positioning` as the mandatory final pass on any public-facing text.
- `$portfolio-verification` for lint, build, route checks, and sanity checks after edits.

## Default Flow

1. Decide whether the task is primarily site work or resume work.
2. Use `$portfolio-site` for site pages and project descriptions.
3. Use `$cv-writing` for resume content, resume route content, and downloadable resume assets.
4. Always run `$global-market-positioning` after writing or rewriting any public-facing text.
5. Run `$portfolio-verification` after substantive changes.
6. Update `CONTENT_GAPS.md` when stronger output is blocked by missing materials.

## Repository Contract

- Do not invent facts or metrics. Use the evidence available in `resources.md`, the project repositories, and existing source files.
- For the resume, prioritize only big-tech platform work and the commercial real estate analytics project unless the user explicitly changes scope.
- Translate internal jargon into external market language.
- Prefer concise, serious, business-readable copy over explanatory, hype-heavy, or AI-sounding text.
- Keep the public site focused on Artem unless the user explicitly asks for a team page.
- Prefer a shorter, stronger project list over a broad repository dump.

