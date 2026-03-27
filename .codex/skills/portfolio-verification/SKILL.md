---
name: portfolio-verification
description: Verify this portfolio repository after implementation work. Use when Codex must run lint/build, check route-level behavior, validate that project pages render, and confirm that navigation, locale routing, and critical content slices are not broken.
---

# Portfolio Verification

Use this skill after meaningful code or content changes.

## Required Reads

1. `AGENTS.md`
2. The files changed in the current slice
3. `CONTENT_GAPS.md` if a failure may be caused by missing source material rather than code

## Verification Checklist

- Run `npm run lint`
- Run `npm run build`
- Check critical routes when a local dev server is available:
  - `/ru`
  - `/ru/projects`
  - at least one featured project route
  - `/ru/about`
  - `/ru/contact`
- Confirm that project cards visibly link into case pages
- Confirm that no missing cover asset breaks featured or project pages

## Reporting

- Report exact commands run.
- Name what passed.
- Name what failed.
- Name what was not verified and why.
