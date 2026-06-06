export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "corporate" | "freelance" | "personal" | "open-source" | "university";
  risk: "public" | "private" | "confidential";
  featured: boolean;
  needsFrontend: boolean;
  hasRealScreenshots: boolean;
  showcaseType: "case-study" | "cv-only" | "mention";
  isSyntheticDemo: boolean;
  summary: string;
  problem: string;
  solution: string;
  responsibilities: string[];
  results: string[];
  stack: string[];
  metrics: { label: string; value: string }[];
  links: { label: string; href: string }[];
  screenshots?: { src: string; alt: string }[];
  confidentialityNotes: string;
  todos: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  stack: string[];
}

export const projects: Project[] = [
  {
    id: "ai-code-review",
    slug: "ai-code-review",
    title: "AI Code Review for GitLab",
    subtitle: "AI-powered merge request review automation",
    category: "corporate",
    risk: "confidential",
    featured: true,
    needsFrontend: true,
    hasRealScreenshots: false,
    showcaseType: "case-study",
    isSyntheticDemo: true,
    summary:
      "Introduced AI-assisted code review in GitLab to improve feedback loops and reduce repetitive review work. The system analyzes merge requests, generates summaries, identifies issues by severity, and suggests fixes.",
    problem:
      "Manual code review was time-consuming and repetitive. Reviewers spent significant time on style issues, common bugs, and boilerplate feedback.",
    solution:
      "Built an AI-powered review bot integrated with GitLab API that automatically analyzes MRs, categorizes issues by severity, and provides actionable fix suggestions.",
    responsibilities: [
      "Integrated AI model with GitLab API",
      "Built MR analysis pipeline",
      "Designed severity classification system",
      "Created approval workflow with human oversight",
    ],
    results: [
      "Reduced repetitive review work",
      "Faster feedback loops for developers",
      "Consistent issue detection across teams",
    ],
    stack: ["Python", "GitLab API", "OpenAI", "FastAPI", "Docker"],
    metrics: [
      { label: "Review pipeline", value: "Automated" },
      { label: "Issue detection", value: "Consistent" },
    ],
    links: [],
    confidentialityNotes: "Mock UI only. No real MR data, internal repos, or proprietary code exposed.",
    todos: [
      "Build mock GitLab review dashboard",
      "Add synthetic MR data",
      "Create feature walkthrough",
    ],
  },
  {
    id: "ai-ci-refactor",
    slug: "ai-ci-refactor",
    title: "AI CI Refactor Bot",
    subtitle: "Automated refactoring and draft MR preparation in CI",
    category: "corporate",
    risk: "confidential",
    featured: true,
    needsFrontend: true,
    hasRealScreenshots: false,
    showcaseType: "case-study",
    isSyntheticDemo: true,
    summary:
      "Built an AI-driven CI job that detects tech debt, generates refactoring plans, creates branches, and prepares draft merge requests for human approval.",
    problem:
      "Tech debt accumulated across legacy codebases. Manual refactoring was slow and error-prone. CI pipelines were flaky and took too long.",
    solution:
      "Created a CI-integrated bot that scans code for debt patterns, generates refactoring plans, and prepares draft MRs with automated test runs.",
    responsibilities: [
      "Built tech debt detection heuristics",
      "Designed automated refactoring pipeline",
      "Created branch/MR generation workflow",
      "Integrated with existing CI infrastructure",
    ],
    results: [
      "Accelerated CI pipeline by 5-7 minutes",
      "Reduced flaky tests",
      "Automated draft MR preparation",
    ],
    stack: ["Python", "GitLab CI", "Docker", "Kotlin", "Java"],
    metrics: [
      { label: "Pipeline speedup", value: "5–7 min" },
      { label: "Flaky test reduction", value: "Significant" },
    ],
    links: [],
    confidentialityNotes: "Mock UI only. No real pipeline data or internal repo structures exposed.",
    todos: ["Build mock automation control center", "Add pipeline timeline visualization"],
  },
  {
    id: "rag-onboarding",
    slug: "rag-onboarding",
    title: "RAG Onboarding Agent",
    subtitle: "AI knowledge assistant for intern onboarding",
    category: "corporate",
    risk: "confidential",
    featured: true,
    needsFrontend: true,
    hasRealScreenshots: false,
    showcaseType: "case-study",
    isSyntheticDemo: true,
    summary:
      "Built a RAG-based onboarding assistant that helps new team members navigate internal documentation, answer questions, and track their onboarding progress.",
    problem:
      "New interns faced steep learning curves. Internal documentation was scattered and onboarding was inconsistent across teams.",
    solution:
      "Created a RAG agent with chat interface, document source retrieval, confidence scoring, and structured onboarding checklist.",
    responsibilities: [
      "Designed RAG pipeline with document retrieval",
      "Built chat interface with context awareness",
      "Created onboarding checklist system",
      "Implemented confidence scoring for answers",
    ],
    results: [
      "Faster intern onboarding",
      "Consistent knowledge access",
      "Reduced senior engineer interruptions",
    ],
    stack: ["Python", "LangChain", "PostgreSQL", "Redis", "FastAPI", "React"],
    metrics: [
      { label: "Knowledge access", value: "Consistent" },
      { label: "Onboarding feedback", value: "Faster" },
    ],
    links: [],
    confidentialityNotes: "Mock UI only. No real intern data, internal docs, or proprietary info exposed.",
    todos: ["Build mock AI knowledge assistant UI", "Add chat interface demo"],
  },
  {
    id: "n8n-automation",
    slug: "n8n-automation",
    title: "n8n Cashback Audience Automation",
    subtitle: "Workflow automation for cashback campaign management",
    category: "corporate",
    risk: "confidential",
    featured: false,
    needsFrontend: true,
    hasRealScreenshots: false,
    showcaseType: "case-study",
    isSyntheticDemo: true,
    summary:
      "Built n8n automations for management workflows including cashback audience campaign creation, partner integration status monitoring, and result tracking.",
    problem:
      "Manual campaign setup and audience management consumed significant time. Integration statuses required constant monitoring.",
    solution:
      "Created automated workflows for campaign creation, audience builder integration, execution monitoring, and result summarization.",
    responsibilities: [
      "Designed n8n workflow architecture",
      "Built campaign creation automation",
      "Created audience builder integration",
      "Implemented execution monitoring and logging",
    ],
    results: [
      "Automated repetitive campaign tasks",
      "Real-time integration status visibility",
      "Structured result reporting",
    ],
    stack: ["n8n", "JavaScript", "REST APIs", "PostgreSQL"],
    metrics: [
      { label: "Manual tasks", value: "Automated" },
      { label: "Status visibility", value: "Real-time" },
    ],
    links: [],
    confidentialityNotes: "Mock UI only. No real campaign data or partner info exposed.",
    todos: ["Build mock business automation dashboard", "Add workflow visualization"],
  },
  {
    id: "cian-mole",
    slug: "cian-mole",
    title: "CIAN Mole",
    subtitle: "Commercial real estate analytics platform",
    category: "freelance",
    risk: "private",
    featured: true,
    needsFrontend: true,
    hasRealScreenshots: false,
    showcaseType: "case-study",
    isSyntheticDemo: true,
    summary:
      "Built backend and automation for a commercial real estate analytics platform combining auction data, CIAN listings, geocoding, Telegram bot, admin panel, and searchable catalog.",
    problem:
      "Realtors spent hours manually collecting and analyzing property data from multiple sources. No unified tool for economic evaluation or market analysis.",
    solution:
      "Created an integrated platform with automated data collection, economic calculators, district-level market analysis, and Telegram bot interface.",
    responsibilities: [
      "Built backend with FastAPI and SQLAlchemy",
      "Integrated CIAN listings and auction data",
      "Implemented geocoding and map visualization",
      "Created Telegram bot for mobile access",
      "Built admin panel for data management",
    ],
    results: [
      "Property economics evaluation in ~10 minutes",
      "District market analysis in 7-10 minutes",
      "Unified data source replacing manual cross-checking of multiple sources",
      "Automated data collection and normalization pipeline",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Telegram Bot", "Geocoding"],
    metrics: [
      { label: "Property eval time", value: "~10 min" },
      { label: "Market analysis time", value: "7-10 min" },
    ],
    links: [],
    confidentialityNotes:
      "All property data in mock UI is synthetic. No real client data, addresses, or transaction details are exposed.",
    todos: [
      "Build mock admin panel and analytics dashboard",
      "Create synthetic property data set",
      "Add economic calculator demo",
    ],
  },
  {
    id: "svobodno",
    slug: "svobodno",
    title: "Svobodno (УРВИ!)",
    subtitle: "Last-minute service slot booking Telegram Mini App",
    category: "freelance",
    risk: "public",
    featured: true,
    needsFrontend: false,
    hasRealScreenshots: true,
    showcaseType: "case-study",
    isSyntheticDemo: false,
    summary:
      "Built an MVP Telegram Mini App for booking discounted last-minute service slots. Supports customer, partner, and admin flows with YClients integration.",
    problem:
      "Service businesses had empty slots going unused. Customers wanted discounted last-minute bookings. No unified platform connected them.",
    solution:
      "Created a three-sided marketplace in Telegram: customers discover hot slots, partners publish availability, admin manages the platform.",
    responsibilities: [
      "Built FastAPI backend",
      "Created React/Vite/Tailwind frontend",
      "Integrated YClients for slot synchronization",
      "Built partner onboarding flow",
      "Implemented customer booking flow",
    ],
    results: [
      "Live MVP at urvi.app",
      "Three-sided marketplace in Telegram",
      "Partner integration with YClients",
      "3 major partners onboarded (including DoubleKiss)",
      "Slot vacancy reduced by 35% (MVP stage, partner-reported)",
      "Partner revenue increased by 20% (MVP stage, partner-reported)",
      "Booking conversion improved by 25% (MVP stage)",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis", "React", "Vite", "Tailwind", "Telegram Mini App", "YClients"],
    metrics: [],
    links: [{ label: "Live App", href: "https://urvi.app" }],
    screenshots: [
      { src: "images/projects/svobodno/screen-1.png", alt: "URVI app main screen — hot last-minute slots" },
      { src: "images/projects/svobodno/screen-2.png", alt: "Service category selection" },
      { src: "images/projects/svobodno/screen-3.png", alt: "Partner slot publishing flow" },
      { src: "images/projects/svobodno/screen-4.png", alt: "Booking confirmation screen" },
      { src: "images/projects/svobodno/screen-5.png", alt: "Admin dashboard overview" },
      { src: "images/projects/svobodno/screen-6.png", alt: "YClients integration status" },
      { src: "images/projects/svobodno/screen-7.png", alt: "Booking history — billiards confirmed via YClients" },
    ],
    confidentialityNotes: "Screenshots must avoid exposing partner PII or customer data.",
    todos: [
      "Capture screenshots from live urvi.app",
      "Verify app is still functional",
      "Anonymize any visible user data",
    ],
  },
  {
    id: "cumock",
    slug: "cumock",
    title: "CUMock",
    subtitle: "University competitive coding platform with real-time sabotage",
    category: "university",
    risk: "public",
    featured: false,
    needsFrontend: true,
    hasRealScreenshots: true,
    showcaseType: "case-study",
    isSyntheticDemo: false,
    summary:
      "Built a competitive coding platform for Central University where participants solve problems simultaneously with real-time sabotage mechanics.",
    problem:
      "Traditional coding competitions were static. Students wanted more engaging, interactive formats similar to battle games.",
    solution:
      "Created a real-time competition platform with live coding arenas, sabotage actions (e.g., 'bombs' that reset opponent progress), and spectator mode.",
    responsibilities: [
      "Built real-time competition backend",
      "Created live coding arena frontend",
      "Implemented sabotage mechanics",
      "Built spectator and leaderboard views",
    ],
    results: [
      "More engaging than LeetCode-style competitions",
      "Real-time progress tracking",
      "Transparent participant status",
      "10+ active competitions per day",
      "80+ students participated",
      "Open source with 240+ GitHub issues resolved",
    ],
    stack: ["TypeScript", "React", "Node.js", "WebSocket", "PostgreSQL"],
    metrics: [],
    links: [
      { label: "Frontend", href: "https://github.com/sidnevart/cumock_frontend" },
      { label: "Backend", href: "https://github.com/sidnevart/cumock_backend" },
    ],
    confidentialityNotes: "Mock UI styled after Central University. No real student data.",
    todos: [
      "Build mock competition arena UI",
      "Add real-time leaderboard demo",
      "Create synthetic participant data",
    ],
  },
  {
    id: "proof-forge",
    slug: "proof-forge",
    title: "ProofForge",
    subtitle: "Open-source peer accountability platform for employee development",
    category: "open-source",
    risk: "public",
    featured: true,
    needsFrontend: true,
    hasRealScreenshots: true,
    showcaseType: "case-study",
    isSyntheticDemo: false,
    summary:
      "Built an open-source accountability platform that helps teams and organizations drive employee growth through buddy-based goal tracking, proof submission, AI-generated growth dossiers, and structured workspaces.",
    problem:
      "Employee development is often inconsistent and invisible. Managers rely on annual reviews biased by recency. Teams lack structured accountability and peer support for growth initiatives.",
    solution:
      "Created a peer accountability platform with goal-setting, buddy approval workflows, artifact-based proof submission, AI-assisted goal refinement, weekly recaps, and team workspaces for 1:1s and performance reviews.",
    responsibilities: [
      "Designed buddy-based accountability system",
      "Built Go backend with chi, pgx, and Goose migrations",
      "Created Next.js 15 frontend with App Router",
      "Implemented AI assistant for goal refinement (OpenAI)",
      "Built team workspaces and growth dossiers",
      "Set up Docker Compose and GitHub Actions CI/CD",
    ],
    results: [
      "Full-stack platform deployed with real landing page",
      "Buddy-based accountability mechanics with proof workflows",
      "AI-generated growth dossiers for 1:1 and review readiness",
      "Team workspaces for structured employee development",
    ],
    stack: ["Go", "Next.js", "TypeScript", "PostgreSQL", "pgvector", "Redis", "MinIO", "Docker", "GitHub Actions"],
    metrics: [],
    links: [
      { label: "GitHub", href: "https://github.com/sidnevart/proof-forge" },
    ],
    screenshots: [
      { src: "images/projects/proof-forge/screen-01.png", alt: "ProofForge landing page hero" },
      { src: "images/projects/proof-forge/screen-02.png", alt: "App dashboard overview" },
      { src: "images/projects/proof-forge/screen-03.png", alt: "Circle workspace detail" },
      { src: "images/projects/proof-forge/screen-04.png", alt: "Buddy approval workflow" },
      { src: "images/projects/proof-forge/screen-05.png", alt: "Goal tracking interface" },
      { src: "images/projects/proof-forge/screen-06.png", alt: "Proof submission flow" },
      { src: "images/projects/proof-forge/screen-07.png", alt: "AI growth dossier" },
      { src: "images/projects/proof-forge/screen-08.png", alt: "Team workspace view" },
      { src: "images/projects/proof-forge/screen-09.png", alt: "Weekly recap screen" },
      { src: "images/projects/proof-forge/screen-10.png", alt: "1:1 meeting notes" },
      { src: "images/projects/proof-forge/screen-11.png", alt: "Performance review page" },
    ],
    confidentialityNotes:
      "Open source (MIT). Real screenshots from the landing page and app. No sensitive user data exposed.",
    todos: [
      "Add real screenshots to project page",
      "Create feature walkthrough video",
    ],
  },
  {
    id: "ai-office",
    slug: "ai-office",
    title: "AI Office (OpenClaw)",
    subtitle: "Virtual AI-powered office environment for distributed teams",
    category: "corporate",
    risk: "confidential",
    featured: true,
    needsFrontend: true,
    hasRealScreenshots: false,
    showcaseType: "case-study",
    isSyntheticDemo: true,
    summary:
      "Built a virtual AI office where team members collaborate in real-time across Desk, Meeting, Hot Desk, and Lounge zones. Integrated AI assistants for task management, weekly opportunity reports, and automated business analysis.",
    problem:
      "Distributed teams lacked a sense of shared workspace. Video calls were exhausting and informal collaboration disappeared. No unified environment for AI-assisted teamwork.",
    solution:
      "Created a persistent virtual office with spatial zones, real-time presence, AI-generated weekly reports, and integrated chat. Teams could 'sit' at desks, join meeting rooms, and lounge areas naturally.",
    responsibilities: [
      "Designed spatial office zone architecture",
      "Integrated AI report generation pipeline",
      "Built real-time presence and avatar system",
      "Created chat and notification integration",
      "Implemented AI-assisted opportunity analysis",
    ],
    results: [
      "Persistent virtual office with spatial zones and real-time presence",
      "AI-generated weekly opportunity reports and business analysis",
      "Faster informal decisions via lounge and hot-desk zones",
      "AI office achieved measurable token cost reduction with Grafana monitoring",
    ],
    stack: ["OpenClaw", "Grafana", "OpenAI", "WebSocket", "Docker"],
    metrics: [
      { label: "Token cost reduction", value: "60%" },
    ],
    links: [],
    confidentialityNotes:
      "Mock UI only. No real team data, internal reports, or proprietary workflows exposed.",
    todos: [
      "Build mock virtual office dashboard",
      "Add AI report viewer demo",
      "Create spatial zone walkthrough",
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: "t-bank",
    company: "T-Bank",
    role: "Software Engineer (Backend)",
    period: "Oct 2025 – Present",
    description:
      "Building backend systems for a cashback audience platform that selects customers for partner-funded offers. Led a major acceleration of the audience-gathering pipeline from initiative to production rollout.",
    highlights: [
      "Made audience gathering size-independent — 1–10 seconds for any audience (down from 6+ min typical, hours for large ones)",
      "Cut Auditory Export time from 8+ hours to ~15 minutes (>32×)",
      "Migrated audience-building to ClickHouse-as-a-Service, making a critical scenario ~5× faster",
      "Designed control-plane/data-plane split: Kotlin/Spring orchestration + Go execution backend over gRPC with ClickHouse/S3",
      "Built contract-first async integration with idempotency, cancellation, retry, feature flags, and legacy fallback",
      "Built a quantitative latency model for the DAG pipeline, proving the bottleneck was queue-wait (~96%) rather than execution speed",
      "Delivered spend/income targeting over ~30M transactions/day and 1.5 years of history; estimated product impact up to RUB 7.5M/year",
      "Automated partner-region substitution and early targeting validation, saving ~40–60 manual hours per month",
      "Accelerated main CI pipeline by 5–7 minutes (15–20%) and reduced flaky tests",
      "Built AI-assisted tools: GitLab MR review, CI refactoring, n8n automation, RAG onboarding",
      "Fixed a production document-generation defect, removing recurring manual support follow-ups",
    ],
    stack: [
      "Java",
      "Kotlin",
      "Go",
      "Spring Boot",
      "ClickHouse",
      "PostgreSQL",
      "Kafka",
      "Redis",
      "GitLab CI",
      "n8n",
      "Grafana",
      "gRPC",
      "Kubernetes",
    ],
  },
  {
    id: "real-estate",
    company: "Large Real Estate Agency",
    role: "Backend & Automation Engineer",
    period: "Aug 2024 – Aug 2025",
    description:
      "Built backend and automation for a commercial real estate analytics platform combining auction data, CIAN listings, geocoding, and Telegram bot.",
    highlights: [
      "Property economics evaluation in ~10 minutes",
      "District market analysis in 7-10 minutes",
      "Unified admin panel and structured catalog",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Telegram Bot", "Geocoding"],
  },
  {
    id: "freelance",
    company: "Freelance",
    role: "Backend & Automation Engineer",
    period: "May 2022 – Present",
    description:
      "Built Telegram Mini Apps, booking systems, loyalty integrations, and automation workflows for various clients.",
    highlights: [
      "Svobodno – last-minute slot booking marketplace",
      "Multiple Telegram bots and CRM integrations",
    ],
    stack: ["Python", "Go", "FastAPI", "PostgreSQL", "Redis", "React", "Vite", "Tailwind", "Telegram Mini Apps", "YClients"],
  },
];

export const siteConfig = {
  name: "Artem Sidnev",
  title: "Backend / Platform / AI Automation Engineer",
  description:
    "Backend engineer focused on data-intensive systems, internal platforms, AI automation, and developer productivity. 3+ years of experience across banking, analytics, Telegram Mini Apps, and open-source.",
  url: "https://sidnevart.github.io/personal-web-page/",
  email: "a.sidnevart@gmail.com",
  social: {
    github: "https://github.com/sidnevart",
    linkedin: "https://www.linkedin.com/in/artem-sidnev-b109ab401/",
    telegram: "https://t.me/sidnevart",
    habr: "https://habr.com/ru/users/sidnevart/",
    twitter: "https://x.com/ArtemkaWeb3",
  },
};
