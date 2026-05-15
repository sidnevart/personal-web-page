# Artem Sidnev Portfolio

Premium personal portfolio website for Artem Sidnev — Backend / Platform / AI Automation Engineer.

## Tech Stack

- Next.js 16 (App Router, static export)
- TypeScript (strict mode)
- Tailwind CSS v4
- shadcn/ui
- Framer Motion

## Install Dependencies

```bash
cd portfolio
npm install
```

## Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Output goes to `out/`.

## Add a New Project

1. Edit `src/lib/data.ts`
2. Add a new project object to the `projects` array
3. Include all required fields (see existing projects for examples)
4. If the project needs mock UI, set `needsFrontend: true` and `isSyntheticDemo: true`

## Add Screenshots Manually

1. Place screenshot files in `public/images/projects/`
2. Use naming convention: `{project-slug}-{index}.png`
3. Update the project's screenshots array in `src/lib/data.ts`

## Capture Screenshots with Playwright

```bash
# Install Playwright browsers
npx playwright install

# Capture all configured screenshots
npm run capture:screenshots

# Capture a specific project
npm run capture:project -- --project=cashback-targeting
```

**Privacy rules:**
- Never capture production private data
- Use demo/staging/local apps only
- Support credentials through environment variables
- Anonymize all user data

## Deploy to Vercel

```bash
npx vercel --prod
```

Or connect the GitHub repository to Vercel for automatic deployments.

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── sections/       # Page sections (Hero, Projects, etc.)
│   │   ├── layout.tsx      # Root layout with metadata
│   │   ├── page.tsx        # Main page composition
│   │   └── globals.css     # Global styles
│   ├── components/         # Reusable components
│   ├── lib/
│   │   ├── data.ts         # Project and experience data
│   │   └── utils.ts        # Utility functions
│   └── types/              # TypeScript types
├── public/
│   └── images/projects/    # Project screenshots
├── docs/
│   └── portfolio-agent-output/  # Agent documentation
├── scripts/
│   └── capture-screenshots.ts # Playwright pipeline
├── config/
│   └── screenshot-projects.ts # Screenshot config
└── next.config.ts
```

## License

MIT
