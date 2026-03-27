# Web Portfolio

Portfolio site for Artem Sidnev. The current version is intentionally calmer, more editorial, and more content-led than the first implementation.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- next-intl
- Static content layer in `src/data/content.ts`
- Local SVG project covers in `public/covers`

## What is implemented

- Localized routing for `ru`, `en`, `es`
- Light and dark themes with system preference support and persisted manual override
- Pages:
  - `/[locale]`
  - `/[locale]/projects`
  - `/[locale]/projects/[slug]`
  - `/[locale]/about`
  - `/[locale]/contact`
- Project filtering and detailed case study pages
- Structured data and localized metadata
- Dynamic Open Graph image per locale
- Contact flow with direct email draft generation
- Content architecture focused on Artem Sidnev and his case studies
- Project visuals driven by local SVG covers instead of synthetic placeholder UI scenes

## Run locally

```bash
npm install
npm run dev
```

Open:

- `http://localhost:3000/ru`
- `http://localhost:3000/en`
- `http://localhost:3000/es`

## Verification

```bash
npm run lint
npm run build
```

## Content editing

### Main content and people

Edit:

- `src/data/content.ts`

This file contains:

- hero copy
- profile data
- about copy
- positioning framing
- all project data
- links and contacts
- cover asset paths

### UI dictionary

Edit:

- `src/messages/ru.json`
- `src/messages/en.json`
- `src/messages/es.json`

Use these for navigation labels and other short UI strings. Longer narrative content lives in `src/data/content.ts`.

### Add a new project

1. Add a new project object to `projects` in `src/data/content.ts`
2. Provide all localized fields for `ru`, `en`, `es`
3. Choose:
   - `category`
   - `status`
   - `owner`
   - `featured`
4. Add a cover to `public/covers`
5. The slug list for static generation is derived automatically from `getProjectSlugs()`

## Update contacts

Edit:

- `siteContacts` in `src/data/content.ts`

Current direct channels:

- email
- Telegram
- GitHub

If LinkedIn, portraits, partner profile details, or branding assets appear later, the content layer is ready to absorb them without changing the route structure.

## Design and architecture decisions

### 1. Content-first architecture

The site uses a central typed content layer instead of scattering copy through JSX. That makes multilingual editing and project maintenance predictable.

### 2. No fake big tech screenshots

Internal platform cases use editorial cover visuals instead of fake screenshots. Product-oriented cases use believable local SVG previews that behave like polished mockups, not generic UI placeholders.

### 3. Minimal visual system over saturated UI

The redesign removes the old dense card language, placeholder step blocks, and overly technical stats. Spacing, typography, and project imagery now carry more of the experience.

### 4. next-intl only for routing + UI chrome

The app uses `next-intl` for locale-aware routing and interface strings, while deeper portfolio content lives in typed data. This keeps structured long-form case studies easier to maintain.

### 5. Single-profile model

The current data is intentionally focused on Artem Sidnev and his strongest backend/devops/SWE case studies. The structure still supports future expansion if needed.

## Deployment

The app is ready for standard Next.js hosting:

- Vercel
- self-hosted Node runtime
- Dockerized Next.js deployment

For Vercel:

1. Import the repo
2. Keep the default Next.js build command: `npm run build`
3. Set the production domain
4. Update `metadataBase` values in `src/app/layout.tsx` and `src/lib/metadata.ts`

## Content gaps

See [CONTENT_GAPS.md](./CONTENT_GAPS.md).
