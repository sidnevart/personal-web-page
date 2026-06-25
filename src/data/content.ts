import type { AppLocale } from "@/i18n/routing";

type LocalizedString = Record<AppLocale, string>;
type LocalizedStringList = Record<AppLocale, readonly string[]>;

export type PersonId = "artem" | "egor";
export type ProjectOwner = "artem" | "egor" | "together";
export type ProjectStatus = "shipped" | "in-progress" | "experimental" | "pending";
export type ProjectCategory =
  | "big-tech"
  | "product"
  | "telegram"
  | "proptech"
  | "infra"
  | "trading"
  | "education"
  | "web3";

export type PersonProfile = {
  id: PersonId;
  name: string;
  role: LocalizedString;
  summary: LocalizedString;
  note?: LocalizedString;
  contacts?: {
    telegram?: string;
    github?: string;
    linkedin?: string;
    medium?: string;
    portfolio?: string;
    email?: string;
  };
};

export type TechDetail = {
  name: string;
  role: LocalizedString;
};

export type Metric = {
  label: LocalizedString;
  value: string;
};

export type Screenshot = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: LocalizedString;
  summary: LocalizedString;
  short: LocalizedString;
  year: string;
  category: ProjectCategory;
  status: ProjectStatus;
  owner: ProjectOwner;
  featured: boolean;
  cover: {
    src: string;
    alt: LocalizedString;
  };
  stack: string[];
  links: {
    href: string;
    label: LocalizedString;
    external?: boolean;
  }[];
  techDetails?: TechDetail[];
  metrics?: Metric[];
  screenshots?: Screenshot[];
  detail: {
    challenge: LocalizedString;
    solution: LocalizedStringList;
    role: LocalizedString;
    result: LocalizedStringList;
    note?: LocalizedString;
  };
};

type ResumeSection = {
  title: LocalizedString;
  items: LocalizedStringList;
};

export const siteContacts = {
  email: "a.sidnevart@gmail.com",
  telegram: "https://t.me/sidnevart",
  github: "https://github.com/sidnevart",
  linkedin: "https://www.linkedin.com/in/artem-sidnev-b109ab401/",
  medium: "https://medium.com/@a.sidnevart",
  portfolio: "https://sidnevart.github.io/personal-web-page/"
};

export const artemProfile: PersonProfile = {
  id: "artem",
  name: "Artem Sidnev",
  role: {
    ru: "Software Engineer · Java / Kotlin / Go · ~4 года опыта. Технический лид CDP, AI-автоматизация",
    en: "Software Engineer · Java / Kotlin / Go · ~4 years. Technical Lead of CDP, AI automation",
    es: "Software Engineer · Java / Kotlin / Go · ~4 años. Líder técnico de CDP, automatización AI"
  },
  summary: {
    ru: "Backend & Platform Engineer с ~4 годами опыта в high-load системах и Big Data пайплайнах. Руководитель CDP (2 команды / 9 инженеров): кросс-командная интеграция с выгрузкой 32× и 99.9% надёжностью, ускорение сборки аудиторий до 1–10с, AI/LLM в продакшене. Ментор стажёров, преподавал в ВШЭ.",
    en: "Backend & Platform Engineer with ~4 years in high-load systems and Big Data pipelines. CDP lead (2 teams / 9 engineers): cross-team integration with 32× export at 99.9% reliability, audience gathering accelerated to 1–10s, AI/LLM in production. Mentor of interns, taught at HSE.",
    es: "Backend & Platform Engineer con ~4 años en sistemas de alta carga y pipelines de Big Data. Líder de CDP (2 equipos / 9 ingenieros): integración entre equipos con exportación 32× y 99.9% de fiabilidad, audiencias aceleradas a 1–10s, AI/LLM en producción. Mentor de interns, docente en HSE."
  },
  contacts: {
    telegram: siteContacts.telegram,
    github: siteContacts.github,
    linkedin: siteContacts.linkedin,
    medium: siteContacts.medium,
    portfolio: siteContacts.portfolio,
    email: siteContacts.email
  }
};

export const siteContent = {
  hero: {
    eyebrow: {
      ru: "Артём Сиднев",
      en: "Artem Sidnev",
      es: "Artem Sidnev"
    },
    headline: {
      ru: "Software Engineer · Java / Kotlin / Go. Технический лид CDP, AI-автоматизация, high-load пайплайны.",
      en: "Software Engineer · Java / Kotlin / Go. Technical Lead of CDP, AI automation, high-load pipelines.",
      es: "Software Engineer · Java / Kotlin / Go. Líder técnico de CDP, automatización AI, pipelines de alta carga."
    },
    subheadline: {
      ru: "В T-Bank веду платформу кэшбэк-таргетинга для ~40M клиентов. До этого — буккинг-маркетплейс на Telegram, аналитика коммерческой недвижимости, торговые CRM. Go, Kotlin, Java в продакшене.",
      en: "At T-Bank I run the cashback targeting platform for ~40M customers. Before that — a Telegram booking marketplace, commercial real estate analytics, trading CRM. Go, Kotlin, Java in production.",
      es: "En T-Bank dirijo la plataforma de targeting de cashback para ~40M de clientes. Antes — marketplace de reservas en Telegram, analítica inmobiliaria comercial, CRM de trading. Go, Kotlin, Java en producción."
    },
    proof: {
      ru: [
        "Ускорил сборку аудиторий до 1–10 секунд (размер-независимо) и выгрузку данных 32× (8ч → 15мин).",
        "Спроектировал систему, приносящую ~$155K/мес аналитически-оценённого дохода.",
        "Автоматизацией снимал до 40–60 часов ручной работы в месяц.",
        "Как руководитель CDP (2 команды / 9 инженеров) провёл кросс-командную интеграцию с 99.9% надёжностью и объединил команду-партнёра в CDP."
      ],
      en: [
        "Accelerated audience gathering to 1–10 seconds (size-independent) and data export 32× (8h → 15min).",
        "Architected a system generating ~$155K/month in analyst-estimated revenue.",
        "Automation removed up to 40–60 manual hours per month.",
        "As CDP lead (2 teams / 9 engineers) drove a cross-team integration at 99.9% reliability and absorbed the partner team into the CDP."
      ],
      es: [
        "Aceleré la construcción de audiencias a 1–10 segundos (independiente del tamaño) y exportación 32× (8h → 15min).",
        "Diseñé un sistema que genera ~$155K/mes en ingresos estimados por analistas.",
        "Automatización eliminó 40–60 horas manuales al mes.",
        "Como líder de CDP (2 equipos / 9 ingenieros) conduje una integración entre equipos con 99.9% de fiabilidad e integré al equipo partner en el CDP."
      ]
    }
  },
  capabilities: {
    title: {
      ru: "Что я делаю",
      en: "What I Build",
      es: "Qué construyo"
    },
    items: [
      {
        title: {
          ru: "High-load системы",
          en: "High-load systems",
          es: "Sistemas de alta carga"
        },
        body: {
          ru: "ClickHouse + Kafka пайплайны на ~30 млн транзакций/день, интеграция с Go data-plane, Spring Boot control-plane. p95-наблюдаемость и safe-rollout: shadow mode, feature flags, fallback, reconciliation.",
          en: "ClickHouse + Kafka pipelines on ~30M transactions/day, integration with a Go data-plane, Spring Boot control-plane. p95 observability and safe-rollout: shadow mode, feature flags, fallback, reconciliation.",
          es: "Pipelines ClickHouse + Kafka sobre ~30M transacciones/día, integración con Go data-plane, Spring Boot control-plane. Observabilidad p95 y safe-rollout: shadow mode, feature flags, fallback, reconciliation."
        }
      },
      {
        title: {
          ru: "Data платформы и ETL",
          en: "Data platforms & ETL",
          es: "Plataformas de datos y ETL"
        },
        body: {
          ru: "ETL по финансовым данным (транзакции, терминальные сигналы) на истории 1.5 года, CDC-миграции, кросс-командные RFC и доставка до прода с idempotency и retry/fallback.",
          en: "ETL on financial data (transactions, terminal signals) over 1.5 years of history, CDC migrations, cross-team RFCs and delivery to production with idempotency and retry/fallback.",
          es: "ETL sobre datos financieros (transacciones, señales de terminal) con 1,5 años de histórico, migraciones CDC, RFC entre equipos y entrega a producción con idempotencia y retry/fallback."
        }
      },
      {
        title: {
          ru: "AI/LLM автоматизация",
          en: "AI/LLM automation",
          es: "Automatización AI/LLM"
        },
        body: {
          ru: "4 инструмента в продакшене: AI code review, CI-рефакторинг бот (−15–20% времени пайплайна), RAG-агент онбординга, n8n. 40–60 часов ручной работы в месяц снято.",
          en: "4 tools in production: AI code review, CI refactoring bot (−15–20% pipeline time), RAG onboarding agent, n8n. 40–60 manual hours per month removed.",
          es: "4 herramientas en producción: AI code review, bot de refactorización CI (−15–20% del pipeline), agente RAG de onboarding, n8n. 40–60 horas manuales al mes eliminadas."
        }
      }
    ]
  },
  approach: {
    title: {
      ru: "Как я работаю",
      en: "How I Work",
      es: "Cómo trabajo"
    },
    intro: {
      ru: "Начинаю не со стека, а с узких мест: где медленно, где дорого, где копится ручная работа. На сборке аудиторий это дало конкретный результат — количественная модель показала, что ~96.5% времени уходило на ожидание в очереди, а не на исполнение, и фокус сместился с «быстрых запросов» на планирование и fairness.",
      en: "I start not with the stack but with bottlenecks: where it’s slow, costly, or manual. On audience gathering this paid off concretely — a quantitative model showed ~96.5% of time was queue wait, not execution, so the focus shifted from “faster queries” to scheduling and fairness.",
      es: "Empiezo no por el stack sino por los cuellos de botella: dónde es lento, caro o manual. En la construcción de audiencias dio un resultado concreto — un modelo cuantitativo mostró que ~96.5% del tiempo era espera en cola, no ejecución, y el foco pasó de «queries más rápidas» a scheduling y fairness."
    },
    points: {
      ru: [
        "Перевожу расплывчатую задачу в рабочий план, ограничения и последовательность безопасного внедрения (shadow → feature flag → прод).",
        "Собираю бэкенд и данные так, чтобы система давала измеримый результат — 1–10с сборка, 32× выгрузка, −15–20% CI, а не «технически работало».",
        "Оставляю после себя наблюдаемость (p95, wait/exec метрики) и устойчивый процесс, а не зависимость от ручных разборов."
      ],
      en: [
        "I turn a vague request into a working plan, clear constraints, and a safe rollout sequence (shadow → feature flag → prod).",
        "I build backend and data flows for measurable results — 1–10s gathering, 32× export, −15–20% CI — not just “technically works”.",
        "I leave behind observability (p95, wait/exec metrics) and a reliable process, not a manual support burden."
      ],
      es: [
        "Convierto una petición difusa en un plan, restricciones claras y una secuencia segura (shadow → feature flag → prod).",
        "Construyo backend y flujos de datos para resultados medibles — 1–10s audiencias, 32× exportación, −15–20% CI — no solo «funciona».",
        "Dejo observabilidad (p95, métricas wait/exec) y un proceso fiable, no una carga manual de soporte."
      ]
    }
  },
  currentWork: {
    title: {
      ru: "Сейчас — T-Bank, CDP",
      en: "Now — T-Bank, CDP",
      es: "Ahora — T-Bank, CDP"
    },
    intro: {
      ru: "Развиваю платформу кэшбэк‑таргетинга: менеджеры формируют аудитории под офферы партнёров, а система определяет, кому показать предложение по данным клиентов.",
      en: "I build a cashback targeting platform: managers define offer audiences, and the system decides which customers should receive which offer based on customer data.",
      es: "Trabajo en una plataforma de targeting de cashback: managers definen audiencias y el sistema decide a qué clientes mostrar cada oferta según sus datos."
    },
    points: {
      ru: [
        "Реализую новые параметры таргетинга (включая финансовые и терминальные сигналы).",
        "Ускоряю и стабилизирую пайплайны сборки аудиторий в продакшене: 1–10с размер-независимо (~30–50× типично).",
        "Внедряю AI/LLM в процессы: AI code review, CI-рефакторинг бот, RAG-агент для онбординга — экономия 40–60 часов ручной работы в месяц.",
        "Добавляю валидации и проверки качества, чтобы снижать ошибки до запуска кампаний.",
        "Руковожу CDP (2 команды / 9 инженеров): квартальное планирование, architecture reviews, стратегические сессии; инициировал кросс-командную RFC-интеграцию (32× выгрузка, 99.9% надёжности) с объединением команды-партнёра в CDP.",
        "Менторю стажёров-разработчиков до успешного перехода в штат (онбординг + техническое сопровождение)."
      ],
      en: [
        "Implement new targeting parameters (including financial and terminal signals).",
        "Speed up and harden audience-building production flows: 1–10s size-independent (~30–50× typical).",
        "Bring AI/LLM into workflows: AI code review, CI refactoring bot, RAG onboarding agent — saving 40–60 manual hours per month.",
        "Add validation and quality checks to reduce campaign-time errors.",
        "Lead the CDP (2 teams / 9 engineers): quarterly planning, architecture reviews, strategic sessions; self-initiated a cross-team RFC integration (32× export, 99.9% reliability) that absorbed the partner team into the CDP.",
        "Mentor intern software engineers to successful full-time conversion (onboarding + technical guidance)."
      ],
      es: [
        "Implemento nuevos parámetros de targeting (incluyendo señales financieras y de terminal).",
        "Acelero y estabilizo flujos de producción para construir audiencias: 1–10s independiente del tamaño (~30–50× típico).",
        "Incorporo AI/LLM: AI code review, bot de refactorización CI, agente RAG de onboarding — ahorro de 40–60 horas manuales al mes.",
        "Añado validaciones y controles de calidad para reducir errores de campaña.",
        "Lidero el CDP (2 equipos / 9 ingenieros): planificación trimestral, architecture reviews, sesiones estratégicas; inicié una integración RFC entre equipos (32× exportación, 99.9% fiabilidad) que integró al equipo partner en el CDP.",
        "Mentorizo a interns hasta su conversión a full-time (onboarding + guía técnica)."
      ]
    }
  },
  leadership: {
    title: {
      ru: "Лидерство и менторство",
      en: "Leadership & Mentorship",
      es: "Liderazgo y mentoría"
    },
    intro: {
      ru: "Руковожу CDP в T-Bank и развиваю людей рядом с собой — от стажёров до архитектурных решений команды.",
      en: "I lead the CDP at T-Bank and grow the people around me — from interns to team-wide architecture decisions.",
      es: "Lidero el CDP en T-Bank y hago crecer a la gente a mi alrededor — de interns a decisiones de arquitectura del equipo."
    },
    points: {
      ru: [
        "Руководитель CDP: 2 команды / 9 инженеров, квартальное OKR и планирование, architecture reviews, стратегические сессии, 1:1 менторство.",
        "Флагман leadership: инициировал и провёл кросс-командную RFC-интеграцию с чужим Go-сервисом — выгрузка 32× (8ч → 15мин) при 99.9% надёжности; интеграция привела к объединению команды-партнёра в CDP.",
        "Ментор стажёров-разработчиков в T-Bank до успешного перехода в штат: проектировал онбординг и вёл техническое сопровождение.",
        "Преподавал в ВШЭ (Higher School of Economics) — топ-университет России (QS 322): доносил сложные технические темы до студентов.",
        "Автор ~28-страничного технического предложения по ускорению сборки аудиторий: 23 идеи оптимизации, количественная модель задержек и поэтапный roadmap запуска."
      ],
      en: [
        "CDP lead: 2 teams / 9 engineers, quarterly OKR and planning, architecture reviews, strategic sessions, 1:1 mentorship.",
        "Flagship leadership: self-initiated and drove a cross-team RFC integration with another team's Go service — 32× export (8h → 15min) at 99.9% reliability; the integration drove the partner team's consolidation into the CDP.",
        "Mentor of intern software engineers at T-Bank through to successful full-time conversion: designed onboarding and provided technical guidance.",
        "Taught at HSE (Higher School of Economics) — Russia's top university (QS 322): communicated complex technical topics to students.",
        "Author of a ~28-page technical proposal on audience-gathering acceleration: 23 optimization ideas, a quantitative latency model, and a phased rollout roadmap."
      ],
      es: [
        "Líder de CDP: 2 equipos / 9 ingenieros, OKR trimestral y planificación, architecture reviews, sesiones estratégicas, mentoría 1:1.",
        "Liderazgo insignia: inicié y conduje una integración RFC entre equipos con un servicio Go ajeno — exportación 32× (8h → 15min) con 99.9% de fiabilidad; la integración llevó a la consolidación del equipo partner en el CDP.",
        "Mentor de interns en T-Bank hasta su conversión a full-time: diseñé el onboarding y brindé guía técnica.",
        "Docente en HSE (Higher School of Economics) — la mejor universidad de Rusia (QS 322): comuniqué temas técnicos complejos a estudiantes.",
        "Autor de una propuesta técnica de ~28 páginas sobre aceleración de audiencias: 23 ideas de optimización, un modelo cuantitativo de latencia y un roadmap de despliegue por fases."
      ]
    }
  },
  freelance: {
    title: {
      ru: "Фриланс-проекты",
      en: "Freelance projects",
      es: "Proyectos freelance"
    },
    intro: {
      ru: "УРВИ! (Telegram-маркетплейс бронирований, Go + Next.js), аналитика коммерческой недвижимости (Python + ETL), торговая CRM (Go). Запускал готовые продукты, а не только бэкенд-модули.",
      en: "URVI! (Telegram booking marketplace, Go + Next.js), commercial real estate analytics (Python + ETL), trading CRM (Go). I shipped full products, not just backend modules.",
      es: "URVI! (marketplace de reservas en Telegram, Go + Next.js), analítica de inmuebles comerciales (Python + ETL), CRM de trading (Go). Lancé productos completos, no solo módulos de backend."
    },
    points: {
      ru: [
        "УРВИ!: Telegram WebApp + Go бэкенд + YClients интеграция — буккинг-маркетплейс с картой свободных слотов.",
        "Коммерческая недвижимость: Python ETL по торгам и ЦИАН, Telegram-бот, Google Sheets выгрузка.",
        "Торговая CRM: Go сервис под трейдеров с аналитикой позиций и P&L."
      ],
      en: [
        "URVI!: Telegram WebApp + Go backend + YClients integration — booking marketplace with live slot map.",
        "Commercial real estate: Python ETL over auctions and CIAN, Telegram bot, Google Sheets export.",
        "Trading CRM: Go service for traders with position analytics and P&L."
      ],
      es: [
        "URVI!: Telegram WebApp + backend Go + integración YClients — marketplace de reservas con mapa de turnos.",
        "Inmobiliaria comercial: ETL Python sobre subastas y CIAN, bot Telegram, exportación a Google Sheets.",
        "CRM de trading: servicio Go para traders con analítica de posiciones y P&L."
      ]
    }
  },
  contact: {
    title: {
      ru: "Открыт к разговору",
      en: "Open to a conversation",
      es: "Abierto a conversar"
    },
    body: {
      ru: "Если у вас конкретная задача — бэкенд, данные, AI-интеграция или продукт с нуля — пишите напрямую. Смотрю на задачу, а не на должность в оффере.",
      en: "If you have a specific task — backend, data, AI integration, or a product from scratch — reach out directly. I look at the problem, not the job title in the offer.",
      es: "Si tienes una tarea concreta — backend, datos, integración AI o un producto desde cero — escríbeme directamente. Me fijo en el problema, no en el título del puesto."
    }
  }
} as const;

const resumeSections: readonly ResumeSection[] = [
  {
    title: {
      ru: "Опыт работы",
      en: "Work experience",
      es: "Experiencia laboral"
    },
    items: {
      ru: [
        "T-Bank — Software Engineer, окт 2025 — н.в.: руководитель CDP (Customer Data Platform, 2 команды / 9 инженеров), продакшен-бэкенд для кэшбэк-таргетинга, обработки данных и AI/LLM автоматизации.",
        "Ускорил сборку аудиторий до 1–10 секунд (размер-независимо, ~30–50× типично, до 360× в лучшем случае) — аналитически-оценённый вклад ~$155K/мес (~14M ₽/мес).",
        "Флагманское лидерство: инициировал и провёл кросс-командную RFC-интеграцию с чужим Go-сервисом — выгрузка 32× (8ч → 15мин) при 99.9% надёжности, с объединением команды-партнёра в CDP.",
        "Внедрил AI/LLM: AI code review бот, CI рефакторинг бот (−15–20% времени пайплайна), RAG-агент для онбординга, n8n автоматизации — сэкономил 40–60 часов ручной работы в месяц.",
        "Ментор стажёров-разработчиков до перехода в штат; преподавал в ВШЭ (QS 322). Автор ~28-страничного тех. предложения: 23 идеи оптимизации, модель задержек, roadmap."
      ],
      en: [
        "T-Bank — Software Engineer, Oct 2025 — present: CDP lead (Customer Data Platform, 2 teams / 9 engineers), production backend for cashback targeting, data processing, and AI/LLM automation.",
        "Accelerated audience gathering to 1–10 seconds (size-independent, ~30–50× typical, up to 360× best case) — analyst-estimated contribution ~$155K/month (~14M ₽/mo).",
        "Flagship leadership: self-initiated and drove a cross-team RFC integration with another team's Go service — 32× export (8h → 15min) at 99.9% reliability, absorbing the partner team into the CDP.",
        "Deployed AI/LLM: AI code review bot, CI refactoring bot (−15–20% pipeline time), RAG onboarding agent, n8n automations — saved 40–60 manual hours per month.",
        "Mentor of intern engineers through to full-time conversion; taught at HSE (QS 322). Author of a ~28-page technical proposal: 23 optimization ideas, latency model, roadmap."
      ],
      es: [
        "T-Bank — Software Engineer, oct 2025 — actual: líder de CDP (Customer Data Platform, 2 equipos / 9 ingenieros), backend de producción para targeting de cashback, procesamiento de datos y automatización AI/LLM.",
        "Aceleré la construcción de audiencias a 1–10 segundos (independiente del tamaño, ~30–50× típico, hasta 360× en el mejor caso) — contribución estimada por analistas ~$155K/mes (~14M ₽/mes).",
        "Liderazgo insignia: inicié y conduje una integración RFC entre equipos con un servicio Go ajeno — exportación 32× (8h → 15min) con 99.9% de fiabilidad, integrando al equipo partner en el CDP.",
        "Implementé AI/LLM: bot de code review, bot de refactorización CI (−15–20% del tiempo del pipeline), agente RAG de onboarding, automatizaciones n8n — ahorré 40–60 horas manuales al mes.",
        "Mentor de interns hasta su conversión a full-time; docente en HSE (QS 322). Autor de una propuesta técnica de ~28 páginas: 23 ideas de optimización, modelo de latencia, roadmap."
      ]
    }
  }
];

export const resumeContent = {
  title: {
    ru: "Резюме",
    en: "Resume",
    es: "CV"
  },
  summary: {
    ru: "Software Engineer в T‑Bank, технический лид CDP. Строю продакшен-бэкенд, high-load пайплайны, AI/LLM автоматизацию. Беру задачи, где важны надёжность, сложная бизнес-логика, скорость критичных пайплайнов и измеримый эффект.",
    en: "Software Engineer at T‑Bank, Technical Lead of CDP. I build production backend, high-load pipelines, and AI/LLM automation. I take work where reliability, complex business logic, critical-flow speed, and measurable impact matter.",
    es: "Software Engineer en T‑Bank, líder técnico de CDP. Construyo backend de producción, pipelines de alta carga y automatización AI/LLM. Trabajo donde importan fiabilidad, lógica compleja y métricas."
  },
  highlights: {
    ru: [
      "Java/Kotlin/Python/Go, Spring Boot, REST/gRPC, PostgreSQL, ClickHouse, Kafka",
      "Сборка аудиторий 1–10 сек (размер-независимо, ~30–50× типично), выгрузка 32× (8ч→15мин), ~$155K/мес",
      "Руководитель CDP (2 команды / 9 инженеров): кросс-командная RFC, 99.9% надёжности, объединение команды, AI/LLM в продакшене",
      "Ментор стажёров до full-time, преподавание в ВШЭ (QS 322)"
    ],
    en: [
      "Java/Kotlin/Python/Go, Spring Boot, REST/gRPC, PostgreSQL, ClickHouse, Kafka",
      "Audience gathering 1–10s (size-independent, ~30–50× typical), export 32× (8h→15min), ~$155K/month",
      "CDP lead (2 teams / 9 engineers): cross-team RFC, 99.9% reliability, team consolidation, AI/LLM in production",
      "Mentor of interns to full-time, taught at HSE (QS 322)"
    ],
    es: [
      "Java/Kotlin/Python/Go, Spring Boot, REST/gRPC, PostgreSQL, ClickHouse, Kafka",
      "Audiencias 1–10s (independiente del tamaño, ~30–50× típico), exportación 32× (8h→15min), ~$155K/mes",
      "Líder de CDP (2 equipos / 9 ingenieros): RFC entre equipos, 99.9% fiabilidad, consolidación, AI/LLM en producción",
      "Mentor de interns a full-time, docente en HSE (QS 322)"
    ]
  },
  sections: resumeSections
} as const;

export const projects: Project[] = [
  {
    slug: "customer-targeting-platform",
    title: {
      ru: "Платформа таргетирования кэшбэк-офферов",
      en: "Cashback Offer Targeting Platform",
      es: "Plataforma de targeting de ofertas de cashback"
    },
    summary: {
      ru: "Внутренняя платформа для менеджеров: сбор аудитории под кэшбэк-офферы партнёров по данным клиентов (транзакции, доходы/траты, терминалы и другие атрибуты).",
      en: "An internal manager-facing platform that builds target audiences for partner cashback offers using customer data (transactions, income/spend, terminals, and other attributes).",
      es: "Plataforma interna para managers que construye audiencias objetivo para ofertas de cashback usando datos de clientes (transacciones, ingresos/gastos, terminales y otros atributos)."
    },
    short: {
      ru: "Таргетинг на 1.5 года истории и ~30 млн транзакций/день; сборка аудиторий 1–10с, выгрузка 32× как руководитель CDP (2 команды), ~$165K/год прибыли.",
      en: "Targeting on 1.5 years of history and ~30M transactions/day; audience gathering 1–10s, 32× export as CDP lead (2 teams), ~$165K/year profit.",
      es: "Targeting sobre 1,5 años y ~30M transacciones/día; audiencias 1–10s, exportación 32× como líder de CDP (2 equipos), ~$165K/año de beneficio."
    },
    year: "2025–2026",
    category: "big-tech",
    status: "shipped",
    owner: "artem",
    featured: true,
    cover: {
      src: "/covers/big-tech-targeting.svg",
      alt: {
        ru: "Экран платформы таргетирования кэшбэк-офферов",
        en: "Screen of the cashback offer targeting platform",
        es: "Pantalla de la plataforma de targeting de cashback"
      }
    },
    stack: ["Kotlin", "Java", "Go", "ClickHouse", "Kafka"],
    links: [
      {
        href: "https://medium.com/@a.sidnevart/speeding-up-audience-gathering-45x-from-6-minutes-to-seconds-d134240a937e",
        label: { ru: "Статья: ускорение сборки аудиторий 45×", en: "Article: Speeding Up Audience Gathering 45×", es: "Artículo: aceleración de audiencias 45×" },
        external: true
      }
    ],
    techDetails: [
      { name: "Kotlin", role: { ru: "Control plane, бизнес-логика", en: "Control plane, business logic", es: "Control plane, lógica de negocio" } },
      { name: "Spring Boot", role: { ru: "REST API, интеграции", en: "REST API, integrations", es: "REST API, integraciones" } },
      { name: "Go", role: { ru: "Интеграция с Go data-plane сервисом (gRPC), ClickHouse→S3", en: "Integration with a Go data-plane service (gRPC), ClickHouse→S3", es: "Integración con servicio Go data-plane (gRPC), ClickHouse→S3" } },
      { name: "ClickHouse", role: { ru: "Аналитика, ~30M txn/день", en: "Analytics, ~30M txn/day", es: "Analítica, ~30M txn/día" } },
      { name: "Kafka", role: { ru: "Потоковая обработка", en: "Stream processing", es: "Procesamiento de streams" } },
      { name: "PostgreSQL", role: { ru: "Задачи, DAG, очереди", en: "Tasks, DAG, queues", es: "Tareas, DAG, colas" } }
    ],
    metrics: [
      { label: { ru: "Сборка аудиторий", en: "Audience gathering", es: "Construcción de audiencias" }, value: "1–10s" },
      { label: { ru: "Ускорение выгрузки", en: "Export acceleration", es: "Aceleración de exportación" }, value: "32×" },
      { label: { ru: "Транзакций/день", en: "Transactions/day", es: "Transacciones/día" }, value: "~30M" },
      { label: { ru: "Доход/мес (оценка)", en: "Revenue/month (est.)", es: "Ingresos/mes (est.)" }, value: "~$155K" }
    ],
    screenshots: [
      { src: "/screenshots/financial-targeting-01.jpg", alt: "CDP targeting interface" },
      { src: "/screenshots/financial-targeting-02.jpg", alt: "CDP audience building" },
      { src: "/screenshots/financial-targeting-03.jpg", alt: "CDP results view" }
    ],
    detail: {
      challenge: {
        ru: "Менеджерам нужен был инструмент, который быстро и надёжно собирает аудитории под кэшбэк-офферы. Требовалось добавить новые параметры таргетинга (в т.ч. траты/доходы и терминальные данные) и гарантировать корректность на истории и в потоке.",
        en: "Managers needed a tool to build target audiences for cashback offers quickly and reliably. The platform had to add new targeting parameters (incl. spend/income and terminal-based data) and stay correct on both history and live streams.",
        es: "Los managers necesitaban una herramienta fiable para construir audiencias para ofertas de cashback. Había que añadir nuevos parámetros (incl. ingresos/gastos y datos de terminal) y mantener corrección en histórico y en vivo."
      },
      solution: {
        ru: [
          "Сформулировал требования вместе со стейкхолдерами: какие офферы бывают, какие данные партнёры приносят, какие ограничения по качеству и срокам.",
          "Запустил таргетинг по тратам/доходам и терминальным параметрам на истории 1.5 года и потоке ~30 млн транзакций/день; добавил ранние валидации и понятные ошибки.",
          "Соло переработал DAG/очередь/ClickHouse: построил количественную модель задержек, обнаружил, что ~96.5% времени — ожидание в очереди, а не исполнение, и сместил фокус на планирование/fairness/isolation. Сборка стала размер-независимой — 1–10с для любой аудитории (~30–50× типично, до 360× в лучшем случае).",
          "Как руководитель CDP инициировал и провёл кросс-командную RFC-интеграцию с чужим Go data-plane сервисом (control-plane Kotlin/Spring ↔ data-plane Go через gRPC, ClickHouse→S3): idempotency, retry/fallback, shadow mode, safe-rollout через feature flags."
        ],
        en: [
          "Aligned requirements with stakeholders: offer types, partner data, quality and timing constraints.",
          "Launched spend/income and terminal-based targeting on 1.5 years of history and a ~30M transactions/day live stream, with early validation and clear errors.",
          "Solo-reworked the DAG/queue/ClickHouse path: built a quantitative latency model, found ~96.5% of time was queue wait (not execution), and refocused on scheduling/fairness/isolation. Audience gathering became size-independent — 1–10s for any audience (~30–50× typical, up to 360× best case).",
          "As CDP lead, self-initiated and drove a cross-team RFC integration with another team's Go data-plane service (control-plane Kotlin/Spring ↔ data-plane Go via gRPC, ClickHouse→S3): idempotency, retry/fallback, shadow mode, feature-flag safe-rollout."
        ],
        es: [
          "Alineé requisitos con stakeholders: tipos de oferta, datos de socios, restricciones de calidad y plazos.",
          "Lancé targeting por gastos/ingresos y terminales sobre 1,5 años de histórico y ~30M transacciones/día en vivo, con validaciones tempranas y errores claros.",
          "Solo rehíce el camino DAG/cola/ClickHouse: construí un modelo cuantitativo de latencia, hallé que ~96.5% del tiempo era espera en cola (no ejecución) y reenfoqué en scheduling/fairness/isolation. La construcción de audiencias quedó independiente del tamaño — 1–10s para cualquier audiencia (~30–50× típico, hasta 360× en el mejor caso).",
          "Como líder de CDP, inicié y conduje una integración RFC entre equipos con un servicio Go data-plane ajeno (control-plane Kotlin/Spring ↔ data-plane Go vía gRPC, ClickHouse→S3): idempotencia, retry/fallback, shadow mode, rollout seguro con feature flags."
        ]
      },
      role: {
        ru: "Руководитель CDP (2 команды / 9 инженеров) и бэкенд-разработчик: требования, реализация targeting-фичи, кросс-командная RFC-интеграция, качество (валидации), тестирование и доведение до продакшена.",
        en: "CDP lead (2 teams / 9 engineers) and backend engineer: requirements, targeting feature implementation, cross-team RFC integration, quality (validation), testing, and production rollout.",
        es: "Líder de CDP (2 equipos / 9 ingenieros) e ingeniero backend: requisitos, implementación de targeting, integración RFC entre equipos, calidad (validación), testing y despliegue."
      },
      result: {
        ru: [
          "Аудитории под офферы собираются автоматически на истории 1.5 года и потоке ~30 млн транзакций/день; сборка ускорена до 1–10 секунд (размер-независимо, ~30–50× типично) — аналитически-оценённый вклад ~$155K/мес (~14M ₽/мес).",
          "Кросс-командная интеграция как руководитель CDP ускорила выгрузку данных 32× (8ч → 15мин) с 99.9% надёжностью и привела к организационному объединению: команда-партнёр и её сервис вошли в CDP.",
          "Система таргетинга приносит ~$165K/год прибыли; менеджеры получили точные параметры включения/исключения и меньше ошибок в кампаниях."
        ],
        en: [
          "Offer audiences are built automatically on 1.5 years of history and a ~30M transactions/day stream; gathering accelerated to 1–10 seconds (size-independent, ~30–50× typical) — analyst-estimated contribution ~$155K/month (~14M ₽/mo).",
          "The cross-team integration I led as CDP lead accelerated data export 32× (8h → 15min) at 99.9% reliability and drove organizational consolidation: the partner team and its service were absorbed into the CDP.",
          "The targeting system generates ~$165K/year profit; managers got precise include/exclude targeting with fewer campaign errors."
        ],
        es: [
          "Las audiencias se construyen automáticamente sobre 1,5 años y ~30M transacciones/día; la construcción se aceleró a 1–10 segundos (independiente del tamaño, ~30–50× típico) — contribución estimada por analistas ~$155K/mes (~14M ₽/mes).",
          "La integración entre equipos que lideré como responsable de CDP aceleró la exportación 32× (8h → 15min) con 99.9% de fiabilidad y llevó a la consolidación: el equipo partner y su servicio se integraron en el CDP.",
          "El sistema de targeting genera ~$165K/año de beneficio; los managers obtuvieron targeting preciso con menos errores de campaña."
        ]
      },
      note: {
        ru: "В кейсе сознательно упрощены внутренние названия платформ и сервисов, чтобы смысл был понятен без корпоративного контекста.",
        en: "Internal platform names and contours are intentionally simplified so the case stays readable outside the original company context.",
        es: "Los nombres internos de plataformas y contornos están simplificados a propósito para que el caso siga siendo legible fuera del contexto corporativo."
      }
    }
  },
  {
    slug: "ai-automation-platform",
    title: {
      ru: "AI-автоматизация внутренних процессов",
      en: "AI Automation for Internal Workflows",
      es: "Automatización AI para flujos internos"
    },
    summary: {
      ru: "Практическое внедрение LLM в внутренние процессы: AI code review в GitLab, AI CI job для рефакторинга и подготовки MR, n8n-автоматизации и RAG-агент для онбординга.",
      en: "Practical LLM rollout for internal workflows: AI code review in GitLab, AI CI job for refactoring and MR prep, n8n automations, and a RAG onboarding agent.",
      es: "Despliegue práctico de LLM: AI code review en GitLab, AI CI job, n8n y agente RAG de onboarding."
    },
    short: {
      ru: "4 AI-инструмента в продакшене: CI быстрее на 15–20%, 40–60 часов ручной работы в месяц снято.",
      en: "4 AI tools in production: CI 15–20% faster, 40–60 manual hours per month removed.",
      es: "4 herramientas AI en producción: CI 15–20% más rápido, 40–60 horas manuales al mes eliminadas."
    },
    year: "2025–2026",
    category: "product",
    status: "shipped",
    owner: "artem",
    featured: false,
    cover: {
      src: "/covers/prod-platform.svg",
      alt: {
        ru: "Обложка проекта AI-автоматизации",
        en: "AI automation cover",
        es: "Portada de automatización AI"
      }
    },
    stack: ["Go", "GitLab", "RAG", "LLM", "n8n"],
    links: [],
    metrics: [
      { label: { ru: "CI быстрее", en: "CI speedup", es: "CI más rápido" }, value: "−15–20%" },
      { label: { ru: "Часов в месяц снято", en: "Manual hours saved/mo", es: "Horas ahorradas/mes" }, value: "40–60" },
      { label: { ru: "AI-инструментов в проде", en: "AI tools in prod", es: "Herramientas AI en prod" }, value: "4" }
    ],
    screenshots: [
      { src: "/screenshots/ai-auditory-01.jpg", alt: "AI audience gathering bot" },
      { src: "/screenshots/ai-auditory-02.jpg", alt: "AI automation workflow" },
      { src: "/screenshots/ai-auditory-03.jpg", alt: "AI automation results" }
    ],
    detail: {
      challenge: {
        ru: "Нужно было внедрить AI так, чтобы он реально ускорял работу, а не создавал шум: качественные ревью, быстрые MR и понятный онбординг.",
        en: "AI had to deliver real productivity, not noise: reliable reviews, faster MRs, and clear onboarding.",
        es: "La IA debía aportar productividad real: revisiones fiables, MRs más rápidos y onboarding claro."
      },
      solution: {
        ru: [
          "AI code review бот в GitLab: summarizes changes, классифицирует замечания, предлагает правки (OpenAI, GitLab API, FastAPI).",
          "AI CI бот: находит tech-debt-паттерны, генерирует план рефакторинга и готовит драфт MR — ускорил основной пайплайн на 5–7 мин (15–20%).",
          "RAG-агент онбординга: retrieval по внутренним докам, контекстный чат с цитированием источников и confidence-скорингом (LangChain, PostgreSQL, Redis).",
          "n8n-автоматизации менеджеров: создание кампаний, мониторинг партнёров, отчётность по результатам — снимают 40–60 часов ручной работы в месяц."
        ],
        en: [
          "AI code review bot in GitLab: summarizes changes, classifies issues, suggests fixes (OpenAI, GitLab API, FastAPI).",
          "AI CI bot: detects tech-debt patterns, generates refactoring plans, prepares draft MRs — sped up the main pipeline by 5–7 min (15–20%).",
          "RAG onboarding agent: retrieval over internal docs, context-aware chat with source citation and confidence scoring (LangChain, PostgreSQL, Redis).",
          "n8n manager automations: campaign creation, partner monitoring, result reporting — remove 40–60 manual hours per month."
        ],
        es: [
          "Bot de AI code review en GitLab: resume cambios, clasifica problemas, sugiere arreglos (OpenAI, GitLab API, FastAPI).",
          "Bot AI CI: detecta tech-debt, genera planes de refactor, prepara MRs — aceleró el pipeline 5–7 min (15–20%).",
          "Agente RAG de onboarding: retrieval sobre docs internos, chat contextual con citación y confidence (LangChain, PostgreSQL, Redis).",
          "Automatizaciones n8n para managers: creación de campañas, monitoreo de socios, reportes — eliminan 40–60 horas manuales al mes."
        ]
      },
      role: {
        ru: "Бэкенд-разработчик: архитектура, интеграции, оркестрация и внедрение в продакшен-процессы.",
        en: "Backend engineer: architecture, integrations, orchestration, and production rollout.",
        es: "Ingeniero backend: arquitectura, integraciones, orquestación y despliegue."
      },
      result: {
        ru: [
          "4 AI-инструмента работают в продакшене ежедневно, а не как демо: CI быстрее на 15–20%, 40–60 часов ручной работы в месяц снято.",
          "AI встроен в реальные инженерные и менеджерские процессы: ревью, рефакторинг, онбординг и кампании."
        ],
        en: [
          "4 AI tools run in production daily, not as demos: CI 15–20% faster, 40–60 manual hours per month removed.",
          "AI is embedded in real engineering and manager workflows: review, refactoring, onboarding, and campaigns."
        ],
        es: [
          "4 herramientas AI funcionan en producción a diario, no como demos: CI 15–20% más rápido, 40–60 horas manuales al mes eliminadas.",
          "AI integrada en flujos reales de ingeniería y managers: revisión, refactor, onboarding y campañas."
        ]
      }
    }
  },
  {
    slug: "commercial-real-estate",
    title: {
      ru: "Платформа аналитики коммерческой недвижимости",
      en: "Commercial Property Analysis Platform",
      es: "Plataforma de analítica de propiedad comercial"
    },
    summary: {
      ru: "Сервис для оценки коммерческих объектов по торгам и рыночным аналогам: цена за м², капитализация, доходность и срок окупаемости.",
      en: "A service for evaluating commercial properties against auction and market data: price per square meter, capitalization, yield, and payback period.",
      es: "Servicio para evaluar propiedades comerciales con datos de subastas y mercado: precio por metro cuadrado, capitalización, rentabilidad y plazo de recuperación."
    },
    short: {
      ru: "Собрал end-to-end продукт вокруг торгов, CIAN и Telegram, чтобы быстрее отбирать объекты по цифрам и отсекать слабые сделки.",
      en: "Built an end-to-end product around auctions, CIAN, and Telegram to evaluate properties faster and reject weak deals earlier.",
      es: "Construí un producto end-to-end con subastas, CIAN y Telegram para evaluar activos más rápido y descartar operaciones débiles antes."
    },
    year: "2025–2026",
    category: "proptech",
    status: "shipped",
    owner: "artem",
    featured: true,
    cover: {
      src: "/covers/commercial-real-estate.svg",
      alt: {
        ru: "Скрин платформы аналитики коммерческой недвижимости",
        en: "Cover of the commercial property analysis platform",
        es: "Portada de la plataforma de analítica de propiedad comercial"
      }
    },
    stack: ["Python", "Telegram Bot", "Google Sheets", "Geocoding", "ETL"],
    links: [
      {
        href: "https://github.com/sidnevart/commercial_real_estate_analysis",
        label: { ru: "GitHub", en: "GitHub", es: "GitHub" },
        external: true
      }
    ],
    detail: {
      challenge: {
        ru: "Быстро оценивать объекты с торгов сложно: данные разрознены, аналоги нужно собирать вручную, а решение часто держится на таблицах и памяти.",
        en: "Screening auction properties is hard: data is fragmented, comps are manual, and decisions often live in spreadsheets.",
        es: "Evaluar activos de subasta es difícil: datos dispersos, comparables manuales y decisiones en hojas de cálculo."
      },
      solution: {
        ru: [
          "Собрал пайплайн данных: торги + объявления + геокодирование → нормализация → расчёты метрик.",
          "Сделал выдачу в формате, пригодном для ежедневного использования (Telegram + аналитический слой).",
          "Упаковал ключевые показатели в один отчёт по объекту: цена/м², капитализация, yield, окупаемость."
        ],
        en: [
          "Built a data pipeline: auctions + listings + geocoding → normalization → metric calculation.",
          "Added delivery channels suitable for daily use (Telegram + an analytics layer).",
          "Packaged key metrics into one per-property report: price/m², cap rate, yield, payback."
        ],
        es: [
          "Construí un pipeline: subastas + anuncios + geocodificación → normalización → cálculo de métricas.",
          "Añadí canales de entrega para uso diario (Telegram + capa analítica).",
          "Unifiqué métricas clave en un reporte por activo: precio/m², cap rate, yield, payback."
        ]
      },
      role: {
        ru: "Сквозная реализация: доменная модель, сбор и очистка данных, бэкенд, деплой и Telegram-бот.",
        en: "End-to-end: domain model, data ingestion/cleaning, backend, deployment, and Telegram bot.",
        es: "End-to-end: modelo de dominio, ingesta/limpieza, backend, despliegue y bot de Telegram."
      },
      result: {
        ru: [
          "Сократил первичную оценку объекта до одного запроса вместо ручного сбора из нескольких источников.",
          "Появился единый формат сравнения объектов по цифрам — удобно для отбора и приоритизации.",
          "Кейс демонстрирует умение делать прикладной продукт на “грязных” данных: пайплайн + метрики + доставка пользователю."
        ],
        en: [
          "Reduced initial screening to one request instead of manual multi-source lookup.",
          "Introduced a consistent numeric comparison format for selecting and prioritizing properties.",
          "Shows ability to build an applied product on messy data: pipeline + metrics + delivery."
        ],
        es: [
          "Reduje la evaluación inicial a una sola consulta.",
          "Formato consistente para comparar activos por números.",
          "Demuestra capacidad de crear producto con datos imperfectos: pipeline + métricas + entrega."
        ]
      }
    }
  },
  {
    slug: "urvi",
    title: {
      ru: "УРВИ!: маркетплейс горячих слотов",
      en: "URVI!: Hot Slot Booking Marketplace",
      es: "URVI!: marketplace de reservas con descuento"
    },
    summary: {
      ru: "Маркетплейс свободных окон у салонов и сервисных центров с горячими скидками. Telegram WebApp + браузер, интеграция с YClients, партнёрский кабинет, карта свободных слотов.",
      en: "Marketplace for hot discounted slots at salons and service centers. Telegram WebApp + browser client, YClients integration, partner dashboard, map of available slots — book in a couple of taps, no calls needed.",
      es: "Marketplace de turnos disponibles con descuento en salones y centros de servicio. Telegram WebApp + cliente web, integración YClients, panel de socios, mapa de disponibilidad."
    },
    short: {
      ru: "Telegram WebApp + web-клиент для бронирования горячих слотов со скидками. YClients, партнёрский кабинет, карта Москвы.",
      en: "Telegram WebApp + web client for booking discounted hot slots. YClients API, partner office, Moscow map.",
      es: "Telegram WebApp + cliente web para reservas con descuento. API YClients, panel de socios, mapa."
    },
    year: "2023–2024",
    category: "product",
    status: "shipped",
    owner: "artem",
    featured: true,
    cover: {
      src: "/covers/urvi.svg",
      alt: {
        ru: "УРВИ! маркетплейс горячих слотов",
        en: "URVI! hot slot booking marketplace",
        es: "URVI! marketplace de reservas"
      }
    },
    screenshots: [
      { src: "/screenshots/urvi-04.jpg", alt: "URVI! landing — Hot posts nearby, connect your business" },
      { src: "/screenshots/urvi-05.jpg", alt: "URVI! login — book via Telegram, no calls needed" },
      { src: "/screenshots/urvi-01.jpg", alt: "URVI! map — available slots in Moscow (billiards, manicure)" },
      { src: "/screenshots/urvi-02.jpg", alt: "URVI! list — places sorted by distance with free slots" },
      { src: "/screenshots/urvi-03.jpg", alt: "URVI! booking detail — Svobodno billiards, available slots" }
    ],
    stack: ["Go", "Next.js", "React", "Telegram Bot", "YClients API", "PostgreSQL", "Docker"],
    links: [],
    techDetails: [
      { name: "Telegram WebApp", role: { ru: "Основной клиент: карта, бронь, профиль", en: "Primary client: map, bookings, profile", es: "Cliente principal: mapa, reservas, perfil" } },
      { name: "YClients API", role: { ru: "Интеграция с расписанием партнёров", en: "Partner schedule and booking integration", es: "Integración con agenda de socios" } },
      { name: "Go", role: { ru: "Backend API (chi, pgx)", en: "Backend API (chi, pgx)", es: "Backend API (chi, pgx)" } },
      { name: "Next.js / React", role: { ru: "Web-клиент + партнёрский кабинет", en: "Web client + partner dashboard", es: "Cliente web + panel de socios" } },
      { name: "PostgreSQL", role: { ru: "Хранение слотов, броней, пользователей", en: "Slots, bookings, user data", es: "Slots, reservas, usuarios" } },
      { name: "Admin panel", role: { ru: "Управление партнёрами и слотами", en: "Partner and slot management", es: "Gestión de socios y turnos" } }
    ],
    metrics: [
      { label: { ru: "Категорий услуг", en: "Service categories", es: "Categorías de servicio" }, value: "10+" },
      { label: { ru: "Способ входа", en: "Auth method", es: "Autenticación" }, value: "Telegram" },
      { label: { ru: "Интеграция", en: "Integration", es: "Integración" }, value: "YClients" }
    ],
    detail: {
      challenge: {
        ru: "Салоны теряют деньги на пустых окнах, клиенты — на звонках в поисках свободного времени. Нужна была платформа, где владелец одним кликом публикует горячий слот со скидкой, а клиент бронирует в паре тапов.",
        en: "Salons lose revenue on empty slots, clients waste time calling around. The goal was a platform where owners publish a hot discounted slot in one click, and clients book in a couple of taps.",
        es: "Los salones pierden dinero con turnos vacíos, los clientes pierden tiempo llamando. La meta era una plataforma donde el dueño publica un turno con descuento en un clic y el cliente reserva en dos toques."
      },
      solution: {
        ru: [
          "Telegram WebApp как основной клиент: карта Москвы с живыми слотами, фильтры по категориям (бильярд, маникюр), бронирование в пару кликов без звонков.",
          "Интеграция с YClients: партнёры подключают своё расписание за пару минут, слоты синхронизируются автоматически.",
          "Партнёрский кабинет и admin panel для управления точками, скидками и броней."
        ],
        en: [
          "Telegram WebApp as the primary client: Moscow map with live available slots, category filters (billiards, manicure, etc.), booking in a couple of taps — no calls needed.",
          "YClients integration: partners connect their schedule in minutes, slots sync automatically.",
          "Partner office and admin panel for managing locations, discounts, and reservations."
        ],
        es: [
          "Telegram WebApp como cliente principal: mapa de Moscú con turnos disponibles en vivo, filtros por categoría, reserva en dos toques sin llamadas.",
          "Integración YClients: los socios conectan su agenda en minutos, los turnos se sincronizan automáticamente.",
          "Panel de socios y admin para gestionar puntos, descuentos y reservas."
        ]
      },
      role: {
        ru: "Full-stack: архитектура, Telegram WebApp, Next.js, интеграция YClients, партнёрский кабинет, деплой.",
        en: "Full-stack: architecture, Telegram WebApp, Next.js, YClients integration, partner dashboard, deployment.",
        es: "Full-stack: arquitectura, Telegram WebApp, Next.js, integración YClients, panel de socios, despliegue."
      },
      result: {
        ru: [
          "Запущен живой продукт с картой Москвы, реальными партнёрами и Telegram-авторизацией.",
          "Партнёры подключились через YClients без кастомной разработки на своей стороне.",
          "Клиент бронирует слот за 3 шага: карта → слот → подтверждение."
        ],
        en: [
          "Shipped a live product with Moscow map, real partners, and Telegram auth.",
          "Partners onboarded via YClients with no custom development on their side.",
          "Client books a slot in 3 steps: map → slot → confirm."
        ],
        es: [
          "Producto en producción con mapa de Moscú, socios reales y auth de Telegram.",
          "Los socios se incorporaron vía YClients sin desarrollo propio.",
          "El cliente reserva en 3 pasos: mapa → turno → confirmación."
        ]
      }
    }
  },
  {
    slug: "cumock",
    title: {
      ru: "Платформа тренировки технических интервью",
      en: "Technical Interview Training Platform",
      es: "Plataforma de entrenamiento para entrevistas técnicas"
    },
    summary: {
      ru: "Продукт для регулярной подготовки к техническим интервью: тренировочные сессии, coding-раунды, прогресс и Telegram-напоминания.",
      en: "A product for regular technical interview preparation: practice sessions, coding rounds, progress tracking, and Telegram reminders.",
      es: "Producto para preparación constante de entrevistas técnicas: sesiones de práctica, rondas de código, seguimiento de progreso y recordatorios por Telegram."
    },
    short: {
      ru: "Java/Spring Boot + WebSocket: цикл тренировка → coding-раунд → фидбек, progress tracking и Telegram-напоминания.",
      en: "Java/Spring Boot + WebSocket: a practice → coding round → feedback loop, with progress tracking and Telegram reminders.",
      es: "Java/Spring Boot + WebSocket: ciclo práctica → ronda de código → feedback, con progress tracking y recordatorios de Telegram."
    },
    year: "2025",
    category: "education",
    status: "in-progress",
    owner: "artem",
    featured: false,
    cover: {
      src: "/covers/cumock.svg",
      alt: {
        ru: "Экран платформы тренировки технических интервью",
        en: "Screen of the technical interview training platform",
        es: "Pantalla de la plataforma de entrenamiento para entrevistas técnicas"
      }
    },
    stack: ["Java", "Spring Boot", "PostgreSQL", "Redis", "WebSocket"],
    links: [
      {
        href: "https://github.com/sidnevart/cumock",
        label: { ru: "GitHub", en: "GitHub", es: "GitHub" },
        external: true
      }
    ],
    detail: {
      challenge: {
        ru: "Большинство interview-prep сервисов дают только контент. Нужен был продукт, который удерживает пользователя регулярной практикой и измеримым прогрессом.",
        en: "Most interview-prep tools are content libraries. The goal was to build a product that drives recurring practice with measurable progress.",
        es: "La mayoría de herramientas de entrevistas son solo contenido. La meta fue crear práctica recurrente con progreso medible."
      },
      solution: {
        ru: [
          "Собрал сценарий “тренировка → coding-раунд → фидбек → следующий шаг” как единый цикл.",
          "Добавил progress tracking и Telegram-напоминания, чтобы продукт возвращал пользователя обратно в практику.",
          "Сделал real-time механику там, где она действительно усиливает опыт, а не ради витрины."
        ],
        en: [
          "Built a single loop: practice session → coding round → feedback → next step.",
          "Added progress tracking and Telegram reminders to improve retention.",
          "Used real-time mechanics only where they improve the user experience."
        ],
        es: [
          "Construí un ciclo único: práctica → ronda de código → feedback → siguiente paso.",
          "Añadí seguimiento de progreso y recordatorios por Telegram.",
          "Usé mecánicas en tiempo real solo donde aportan valor real."
        ]
      },
      role: {
        ru: "Бэкенд и продуктовая инженерия: архитектура сервиса, реализация ключевых сценариев, интеграции и качество продуктового потока.",
        en: "Backend/product engineering: service architecture, core flows, integrations, and product flow quality.",
        es: "Backend/product engineering: arquitectura, flujos core, integraciones y calidad del flujo."
      },
      result: {
        ru: [
          "Бэкенд на Java/Spring Boot с real-time механикой через WebSocket: тренировка → coding-раунд → фидбек → следующий шаг одним циклом.",
          "Progress tracking и Telegram-напоминания возвращают пользователя в практику; Redis — для hot-данных, PostgreSQL — основное хранилище.",
          "Публичный репозиторий: сценарий реального времени применён там, где он усиливает опыт, а не ради витрины."
        ],
        en: [
          "Java/Spring Boot backend with WebSocket real-time: practice → coding round → feedback → next step in one loop.",
          "Progress tracking and Telegram reminders pull users back into practice; Redis for hot data, PostgreSQL for the store.",
          "Public repository: real-time used where it improves the experience, not for show."
        ],
        es: [
          "Backend Java/Spring Boot con real-time vía WebSocket: práctica → ronda de código → feedback → siguiente paso en un ciclo.",
          "Progress tracking y recordatorios de Telegram retraen al usuario; Redis para hot data, PostgreSQL como store.",
          "Repositorio público: real-time donde aporta, no para lucir."
        ]
      }
    }
  },
  {
    slug: "trading-crm-suite",
    title: {
      ru: "CRM для торговых команд",
      en: "CRM for Trading Teams",
      es: "CRM para equipos de trading"
    },
    summary: {
      ru: "Рабочая CRM для клиентских карточек, сделок, коммуникаций и ежедневных операционных действий.",
      en: "A working CRM for client records, deals, communication, and daily operational actions.",
      es: "CRM funcional para fichas de clientes, operaciones, comunicación y acciones operativas diarias."
    },
    short: {
      ru: "Собрал CRM как единый рабочий контур: клиент, сделка, коммуникация и действие в одном интерфейсе.",
      en: "Packaged the CRM as one operational workflow: client, deal, communication, and action in one interface.",
      es: "Organicé el CRM como un flujo operativo único: cliente, operación, comunicación y acción en una sola interfaz."
    },
    year: "2024",
    category: "product",
    status: "shipped",
    owner: "artem",
    featured: false,
    cover: {
      src: "/covers/trading-crm.svg",
      alt: {
        ru: "Экран CRM для торговых команд",
        en: "Screen of the CRM for trading teams",
        es: "Pantalla del CRM para equipos de trading"
      }
    },
    stack: ["React", "Go", "PostgreSQL", "REST API"],
    links: [
      {
        href: "https://github.com/artemka-web3/crm_trading_webapp",
        label: { ru: "Web app", en: "Web app", es: "Web app" },
        external: true
      },
      {
        href: "https://github.com/artemka-web3/api_crm_trading",
        label: { ru: "API", en: "API", es: "API" },
        external: true
      }
    ],
    detail: {
      challenge: {
        ru: "Нужно было собрать CRM как единый рабочий контур для команды: клиент → сделка → коммуникация → действие, а не набор разрозненных экранов и эндпоинтов.",
        en: "The CRM had to be delivered as one operational workflow (client → deal → communication → action), not a pile of screens and endpoints.",
        es: "El CRM debía ser un flujo operativo único (cliente → operación → comunicación → acción), no un conjunto de pantallas."
      },
      solution: {
        ru: [
          "Спроектировал сущности и API вокруг операционного процесса команды.",
          "Собрал связку web app + API так, чтобы сценарии проходились без “ручных костылей”.",
          "Описал проект через ценность и поток работы, а технические детали оставил вторым слоем."
        ],
        en: [
          "Designed entities and APIs around the team’s operational process.",
          "Delivered a web app + API pair where core flows work end to end without manual hacks.",
          "Wrote the case around workflow and value, with technical details as a second layer."
        ],
        es: [
          "Diseñé entidades y APIs alrededor del proceso operativo del equipo.",
          "Entregué web app + API con flujos core end-to-end.",
          "Presenté el caso por valor y flujo, dejando lo técnico como segunda capa."
        ]
      },
      role: {
        ru: "Full‑stack: проектирование домена, бэкенд API, интерфейс и интеграция в цельный рабочий продукт.",
        en: "Full‑stack: domain design, backend API, UI, and integration into one working product.",
        es: "Full‑stack: diseño de dominio, API, UI e integración en un producto completo."
      },
      result: {
        ru: [
          "Рабочий CRM-контур на React + Go + PostgreSQL: клиент → сделка → коммуникация → действие в одном интерфейсе и API.",
          "Связка web app + API (оба публичны) покрывает ежедневные операционные сценарии команды без ручных костылей.",
          "Сущности и API спроектированы вокруг операционного процесса, а не набора экранов."
        ],
        en: [
          "A working CRM loop on React + Go + PostgreSQL: client → deal → communication → action in one UI and API.",
          "The web app + API pair (both public) covers the team's daily operational scenarios without manual hacks.",
          "Entities and APIs are designed around the operational process, not a pile of screens."
        ],
        es: [
          "Un ciclo CRM funcional en React + Go + PostgreSQL: cliente → operación → comunicación → acción en una UI y API.",
          "El par web app + API (ambos públicos) cubre los escenarios operativos diarios sin parches manuales.",
          "Entidades y APIs diseñadas alrededor del proceso operativo, no de pantallas sueltas."
        ]
      }
    }
  }
,
  {
    slug: "chat-app-api",
    title: {
      ru: "Персонализированный чат для мобильного банка",
      en: "Personalized Mobile Banking Chat",
      es: "Chat personalizado para banca móvil"
    },
    summary: {
      ru: "Внутренний сервис: чат, который подтягивает транзакции клиента и даёт персональные рекомендации (например, куда сходить) на основе покупок.",
      en: "An internal chat service that uses customer transactions to provide personalized recommendations (e.g., where to go) based on purchase history.",
      es: "Servicio interno de chat que usa transacciones del cliente para recomendaciones personalizadas basadas en compras."
    },
    short: {
      ru: "Кейс про продуктовый бэкенд в банке: данные транзакций → персональный контекст → ответ в чате.",
      en: "A product-backend case: transactions → personalized context → chat response.",
      es: "Caso de backend de producto: transacciones → contexto personalizado → respuesta en chat."
    },
    year: "2025",
    category: "big-tech",
    status: "shipped",
    owner: "artem",
    featured: false,
    cover: {
      src: "/covers/chat-app.svg",
      alt: {
        ru: "Обложка персонализированного чата для мобильного банка",
        en: "Cover of a personalized mobile banking chat",
        es: "Portada del chat personalizado para banca móvil"
      }
    },
    stack: ["Rust", "PostgreSQL", "Kafka", "REST API"],
    links: [],
    detail: {
      challenge: {
        ru: "Сделать чат полезным, а не декоративным: ответы должны опираться на транзакции клиента и корректно работать на потоке данных и в реальных пользовательских сценариях.",
        en: "Make the chat genuinely useful: responses must be grounded in transaction data and work reliably in real user flows.",
        es: "Hacer el chat realmente útil: respuestas basadas en transacciones y funcionamiento fiable en flujos reales."
      },
      solution: {
        ru: [
          "Собрал слой нормализации и выборки транзакционного контекста под запрос пользователя.",
          "Спроектировал контракты сервиса и интеграцию с мобильным приложением: запрос → контекст → ответ.",
          "Добавил базовые защитные механизмы качества: валидации входных данных, понятные ошибки и наблюдаемость."
        ],
        en: [
          "Built normalization and retrieval of transaction context per user query.",
          "Designed service contracts and mobile integration: request → context → response.",
          "Added baseline quality controls: validation, clear errors, and observability."
        ],
        es: [
          "Construí normalización y selección de contexto transaccional por consulta.",
          "Diseñé contratos e integración móvil: solicitud → contexto → respuesta.",
          "Añadí controles de calidad: validación, errores claros y observabilidad."
        ]
      },
      role: {
        ru: "Бэкенд-разработчик: проектирование сервиса, реализация на Rust и интеграция с контуром транзакционных данных.",
        en: "Backend engineer: service design, Rust implementation, and integration with transaction data flows.",
        es: "Ingeniero backend: diseño del servicio, implementación en Rust e integración con datos transaccionales."
      },
      result: {
        ru: [
          "Сервис на Rust с Kafka-потоком транзакций: нормализация и выборка транзакционного контекста под запрос пользователя.",
          "Персональные рекомендации в чате опираются на реальные покупки; контракты и интеграция с мобильным приложением: запрос → контекст → ответ.",
          "Базовые защитные механизмы: валидация входных данных, понятные ошибки, наблюдаемость. Внутренний продукт — публичного репозитория нет."
        ],
        en: [
          "A Rust service over a Kafka transaction stream: normalization and retrieval of transaction context per user query.",
          "Personalized chat recommendations grounded in real purchases; contracts and mobile integration: request → context → response.",
          "Baseline guardrails: input validation, clear errors, observability. Internal product — no public repository."
        ],
        es: [
          "Servicio en Rust sobre un stream Kafka de transacciones: normalización y recuperación de contexto transaccional por consulta.",
          "Recomendaciones de chat personalizadas basadas en compras reales; contratos e integración móvil: solicitud → contexto → respuesta.",
          "Controles básicos: validación, errores claros, observabilidad. Producto interno — sin repositorio público."
        ]
      },
      note: {
        ru: "Публичной ссылки на репозиторий нет: проект был внутренним продуктом.",
        en: "No public repository link: the project was an internal product.",
        es: "Sin repositorio público: fue un producto interno."
      }
    }
  },
  {
    slug: "navigator-with-weather",
    title: {
      ru: "Навигатор с погодой",
      en: "Navigator with Weather",
      es: "Navegador con clima"
    },
    summary: {
      ru: "Прикладной сервис, который объединяет маршрут и погодный контекст, чтобы планировать поездку точнее.",
      en: "An applied service that combines route and weather context to plan trips better.",
      es: "Servicio aplicado que combina ruta y clima para planificar mejor."
    },
    short: {
      ru: "TypeScript/Next.js: маршрут и прогноз погоды в одном сценарии, чтобы решать «ехать сейчас / позже / другим маршрутом».",
      en: "TypeScript/Next.js: route and weather forecast in one flow to decide “go now / later / different route”.",
      es: "TypeScript/Next.js: ruta y pronóstico en un flujo para decidir “ahora / más tarde / otra ruta”."
    },
    year: "2024",
    category: "product",
    status: "shipped",
    owner: "artem",
    featured: false,
    cover: {
      src: "/covers/navigator-weather.svg",
      alt: {
        ru: "Обложка проекта Навигатор с погодой",
        en: "Navigator with Weather cover",
        es: "Portada del navegador con clima"
      }
    },
    stack: ["TypeScript", "Next.js", "Weather API"],
    links: [
      {
        href: "https://github.com/sidnevart/navigator-with-weather",
        label: { ru: "GitHub", en: "GitHub", es: "GitHub" },
        external: true
      }
    ],
    detail: {
      challenge: {
        ru: "Пользователю сложно принимать решение о поездке, если маршрут и погодные условия живут в разных местах.",
        en: "Trip planning is harder when route and weather context live separately.",
        es: "Planificar un viaje es más difícil cuando ruta y clima están separados."
      },
      solution: {
        ru: [
          "Объединил маршрут и прогноз в один пользовательский сценарий с быстрым ответом.",
          "Сделал интерфейс минимальным: только то, что нужно для решения " +
            "«ехать сейчас / позже / другим маршрутом»."
        ],
        en: [
          "Combined route and forecast into one flow with fast feedback.",
          "Kept UI minimal: only what’s needed to decide “go now / later / different route”."
        ],
        es: [
          "Uní ruta y pronóstico en un solo flujo con respuesta rápida.",
          "Mantuvé la UI mínima: lo necesario para decidir “ahora / más tarde / otra ruta”."
        ]
      },
      role: {
        ru: "Full-stack: интеграция API, UI и сборка проекта до готового демо.",
        en: "Full-stack: API integration, UI, and shipping a complete demo.",
        es: "Full-stack: integración de API, UI y entrega de un demo completo."
      },
      result: {
        ru: [
          "Готовый мини-продукт на TypeScript/Next.js: маршрут и прогноз погоды в одном сценарии с быстрым ответом.",
          "Минимальный UI — только то, что нужно для решения «ехать сейчас / позже / другим маршрутом».",
          "Публичный репозиторий: end-to-end интеграция API + UI, аккуратная реализация."
        ],
        en: [
          "A complete mini-product on TypeScript/Next.js: route and weather forecast in one flow with fast response.",
          "Minimal UI — only what's needed to decide “go now / later / different route”.",
          "Public repository: end-to-end API + UI integration, clean implementation."
        ],
        es: [
          "Un mini-producto completo en TypeScript/Next.js: ruta y pronóstico en un flujo con respuesta rápida.",
          "UI mínima — solo lo necesario para decidir “ahora / más tarde / otra ruta”.",
          "Repositorio público: integración API + UI end-to-end, implementación limpia."
        ]
      }
    }
  },
  {
    slug: "crypto-robot",
    title: {
      ru: "Crypto Robot: автоматизация торговли",
      en: "Crypto Robot: Trading Automation",
      es: "Crypto Robot: automatización de trading"
    },
    summary: {
      ru: "Автоматизация торговых сценариев: сбор данных, сигналы, исполнение и мониторинг.",
      en: "Trading automation: ingestion, signals, execution, and monitoring.",
      es: "Automatización de trading: ingesta de datos, señales, ejecución y monitoreo."
    },
    short: {
      ru: "Кейс про инженерную дисциплину: пайплайн данных, контроль рисков и наблюдаемость.",
      en: "An engineering discipline case: data pipeline, risk controls, and observability.",
      es: "Caso de disciplina técnica: pipeline de datos, control de riesgos y observabilidad."
    },
    year: "2023–2024",
    category: "trading",
    status: "experimental",
    owner: "artem",
    featured: false,
    cover: {
      src: "/covers/crypto-robot.svg",
      alt: {
        ru: "Обложка Crypto Robot",
        en: "Crypto Robot cover",
        es: "Portada de Crypto Robot"
      }
    },
    stack: ["Go", "Exchanges API", "PostgreSQL", "Monitoring"],
    links: [
      {
        href: "https://github.com/artemka-web3/crypto_robot",
        label: { ru: "GitHub", en: "GitHub", es: "GitHub" },
        external: true
      }
    ],
    detail: {
      challenge: {
        ru: "Автоматизация торговли ломается, если нет данных/наблюдаемости: важно, чтобы контур был управляемым и диагностируемым.",
        en: "Trading automation breaks without data and observability. The system has to stay controllable and debuggable.",
        es: "La automatización de trading falla sin observabilidad. El sistema debe ser controlable y diagnosticable."
      },
      solution: {
        ru: [
          "Построил пайплайн: данные → сигналы → исполнение → телеметрия (логи/метрики).",
          "Добавил контрольные точки и понятные статусы, чтобы быстрее ловить сбои и разъезды."
        ],
        en: [
          "Built a pipeline: data → signals → execution → telemetry (logs/metrics).",
          "Added control points and clear statuses to catch failures earlier."
        ],
        es: [
          "Construí un pipeline: datos → señales → ejecución → telemetría (logs/métricas).",
          "Añadí puntos de control y estados claros para detectar fallos antes."
        ]
      },
      role: {
        ru: "Бэкенд/инфраструктура: архитектура, интеграции с биржами, данные и эксплуатационные практики.",
        en: "Backend/infra: architecture, exchange integrations, data, and operational practices.",
        es: "Backend/infra: arquitectura, integraciones, datos y operación."
      },
      result: {
        ru: [
          "Go-пайплайн: данные → сигналы → исполнение → телеметрия (логи/метрики); интеграции с биржами через их API, PostgreSQL — хранилище.",
          "Контрольные точки и понятные статусы помогают ловить сбои и расхождения раньше; публичный репозиторий.",
          "Контур рассчитан на воспроизводимость и диагностику: запуск, мониторинг и разбор инцидентов без «чёрного ящика»."
        ],
        en: [
          "A Go pipeline: data → signals → execution → telemetry (logs/metrics); exchange integrations via their APIs, PostgreSQL for storage.",
          "Control points and clear statuses catch failures and drift earlier; public repository.",
          "The loop is built for reproducibility and diagnostics: runs, monitoring, and incident review without a black box."
        ],
        es: [
          "Pipeline en Go: datos → señales → ejecución → telemetría (logs/métricas); integraciones con exchanges vía APIs, PostgreSQL como almacén.",
          "Puntos de control y estados claros detectan fallos y desviaciones antes; repositorio público.",
          "El ciclo está pensado para reproducibilidad y diagnóstico: ejecuciones, monitoreo y análisis sin caja negra."
        ]
      }
    }
  },
  {
    slug: "proofforge",
    title: {
      ru: "ProofForge (Grasp): AI-воркспейс для обучения",
      en: "ProofForge (Grasp): Agent-Native Learning Workspace",
      es: "ProofForge (Grasp): workspace de aprendizaje con agente"
    },
    summary: {
      ru: "Agent-native платформа для обучения: Claude объясняет тему, форжит капсулы знаний, создаёт карточки SM-2. 13 MCP-инструментов, FastAPI-бэкенд, плагины для VS Code и JetBrains.",
      en: "Agent-native learning platform: Claude explains topics, forges knowledge capsules, creates SM-2 flashcards. 13 MCP tools, FastAPI backend, VS Code and JetBrains plugins.",
      es: "Plataforma de aprendizaje con agente: Claude explica temas, crea cápsulas de conocimiento, tarjetas SM-2. 13 herramientas MCP, backend FastAPI, plugins VS Code y JetBrains."
    },
    short: {
      ru: "Claude-native learning: 13 MCP-инструментов, SM-2 повторение, FastAPI + PostgreSQL бэкенд, плагины для IDE.",
      en: "Claude-native learning: 13 MCP tools, SM-2 spaced repetition, FastAPI + PostgreSQL backend, IDE plugins.",
      es: "Aprendizaje Claude-native: 13 herramientas MCP, repetición espaciada SM-2, backend FastAPI + PostgreSQL, plugins IDE."
    },
    year: "2025",
    category: "product",
    status: "shipped",
    owner: "artem",
    featured: true,
    cover: {
      src: "/covers/proofforge.svg",
      alt: {
        ru: "Экран платформы ProofForge",
        en: "Screen of ProofForge platform",
        es: "Pantalla de la plataforma ProofForge"
      }
    },
    screenshots: [
      { src: "/screenshots/proofforge-01.jpg", alt: "Grasp dashboard — 256 cards in review queue" },
      { src: "/screenshots/proofforge-02.jpg", alt: "Grasp lesson complete — 30 cards, 87% easy" },
      { src: "/screenshots/proofforge-03.jpg", alt: "Grasp capsule generation in progress" },
      { src: "/screenshots/proofforge-04.jpg", alt: "Grasp landing — Learn it so it sticks" },
      { src: "/screenshots/proofforge-05.jpg", alt: "Grasp demo — agent builds learning path live" },
      { src: "/screenshots/proofforge-06.jpg", alt: "Grasp — web platform and Claude plugin setup" },
      { src: "/screenshots/proofforge-07.jpg", alt: "Grasp — knowledge fitness tracker" },
      { src: "/screenshots/proofforge-08.jpg", alt: "Grasp — install extension in VS Code / JetBrains" },
      { src: "/screenshots/proofforge-09.jpg", alt: "Grasp — knowledge capsule: Kotlin Multiplatform deep dive" }
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "Claude MCP", "Docker", "TypeScript"],
    links: [
      {
        href: "https://proof-forge.ru",
        label: { ru: "Открыть сайт", en: "Live site", es: "Sitio web" },
        external: true
      },
      {
        href: "https://github.com/sidnevart/proof-forge-v2",
        label: { ru: "GitHub", en: "GitHub", es: "GitHub" },
        external: true
      }
    ],
    techDetails: [
      { name: "FastAPI", role: { ru: "Backend API (Python 3.12)", en: "Backend API (Python 3.12)", es: "API Backend (Python 3.12)" } },
      { name: "Claude MCP", role: { ru: "13 инструментов: капсулы, карточки, мастерство", en: "13 tools: capsules, cards, mastery tracking", es: "13 herramientas: cápsulas, tarjetas, progreso" } },
      { name: "PostgreSQL", role: { ru: "SM-2 интервальное повторение", en: "SM-2 spaced repetition storage", es: "Almacenamiento SM-2" } },
      { name: "Skills system", role: { ru: "11 скиллов с триггерными фразами для Claude", en: "11 skills with trigger phrases for Claude", es: "11 skills con frases de activación para Claude" } },
      { name: "VS Code + JetBrains", role: { ru: "IDE-плагины для обучения прямо в коде", en: "IDE plugins for learning inside the codebase", es: "Plugins IDE para aprender dentro del código" } },
      { name: "Docker", role: { ru: "Self-hosted деплой", en: "Self-hosted deployment", es: "Despliegue self-hosted" } }
    ],
    metrics: [
      { label: { ru: "MCP инструментов", en: "MCP tools", es: "Herramientas MCP" }, value: "13" },
      { label: { ru: "Скиллов Claude", en: "Claude skills", es: "Skills de Claude" }, value: "11" },
      { label: { ru: "Карточек в очереди", en: "Cards in review queue", es: "Tarjetas en cola" }, value: "256" }
    ],
    detail: {
      challenge: {
        ru: "Существующие инструменты обучения работают отдельно от рабочего процесса разработчика. Нужно было встроить процесс изучения прямо в Claude — без переключения контекста.",
        en: "Existing learning tools are separate from the developer workflow. The goal was to embed the learning loop directly inside Claude — no context switching.",
        es: "Las herramientas de aprendizaje existentes están separadas del flujo de trabajo. El objetivo era integrar el aprendizaje directamente en Claude, sin cambios de contexto."
      },
      solution: {
        ru: [
          "Разработал 13 MCP-инструментов: от identify и store_capsule до get_due_cards и log_card_attempt с SM-2 интервалами.",
          "Claude объясняет тему как ментор, записывает конспект в capsule, создаёт карточки — всё в одном чате.",
          "FastAPI-бэкенд с Alembic-миграциями, плагины для VS Code и JetBrains чтобы учиться прямо в коде."
        ],
        en: [
          "Built 13 MCP tools: from identify and store_capsule to get_due_cards and log_card_attempt with SM-2 intervals.",
          "Claude acts as a mentor, captures summaries into capsules, and generates flashcards — all in one conversation.",
          "FastAPI backend with Alembic migrations, VS Code and JetBrains plugins for learning inside the codebase."
        ],
        es: [
          "Construí 13 herramientas MCP: desde identify y store_capsule hasta get_due_cards y log_card_attempt con intervalos SM-2.",
          "Claude actúa como mentor, captura resúmenes en cápsulas y genera tarjetas — todo en una conversación.",
          "Backend FastAPI con migraciones Alembic, plugins VS Code y JetBrains para aprender dentro del código."
        ]
      },
      role: {
        ru: "Full-stack: архитектура MCP-сервера, FastAPI-бэкенд, скиллы для Claude, IDE-плагины, деплой.",
        en: "Full-stack: MCP server architecture, FastAPI backend, Claude skills, IDE plugins, deployment.",
        es: "Full-stack: arquitectura del servidor MCP, backend FastAPI, skills de Claude, plugins IDE, despliegue."
      },
      result: {
        ru: [
          "Open-source (MIT), self-hosted через Docker, работает с Claude Desktop и Claude Code.",
          "256 карточек в очереди повторения у активного пользователя — система реально используется.",
          "Архитектура: агент делает всё мышление, бэкенд — чистое хранилище данных."
        ],
        en: [
          "Open-source (MIT), self-hosted via Docker, works with Claude Desktop and Claude Code.",
          "256 cards in active review queue — the system is being genuinely used.",
          "Architecture: the agent does all the thinking, the backend is a pure data store."
        ],
        es: [
          "Open-source (MIT), self-hosted vía Docker, funciona con Claude Desktop y Claude Code.",
          "256 tarjetas en cola de revisión activa — el sistema se usa de verdad.",
          "Arquitectura: el agente hace todo el razonamiento, el backend es un almacén de datos puro."
        ]
      }
    }
  },
  {
    slug: "arc-core",
    title: {
      ru: "ARC: консоль для AI-работы с кодом",
      en: "ARC: Console for AI Work on Codebases",
      es: "ARC: consola para trabajo AI en código"
    },
    summary: {
      ru: "Локальный CLI + десктопное приложение (Wails) для AI-работы с реальными кодовыми базами: раны, память, карты документации, артефакты, пресеты агентов.",
      en: "Local-first CLI + native desktop app (Wails) for AI work on real codebases: runs, memory, docs-maps, artifacts, agent presets.",
      es: "CLI + aplicación de escritorio (Wails) para trabajo AI en bases de código reales: ejecuciones, memoria, mapas de docs, artefactos, presets de agentes."
    },
    short: {
      ru: "Go CLI + Wails десктоп: 5⭐ на GitHub, инструмент для AI-разработки на реальных проектах.",
      en: "Go CLI + Wails desktop: 5⭐ on GitHub, a tool for AI development on real projects.",
      es: "Go CLI + escritorio Wails: 5⭐ en GitHub, herramienta para desarrollo AI en proyectos reales."
    },
    year: "2025",
    category: "infra",
    status: "shipped",
    owner: "artem",
    featured: false,
    cover: {
      src: "/covers/arc.svg",
      alt: {
        ru: "Экран ARC консоли",
        en: "Screen of ARC console",
        es: "Pantalla de la consola ARC"
      }
    },
    stack: ["Go", "Wails", "JavaScript", "CSS", "TypeScript"],
    links: [
      {
        href: "https://github.com/sidnevart/arc-core",
        label: { ru: "GitHub", en: "GitHub", es: "GitHub" },
        external: true
      }
    ],
    techDetails: [
      { name: "Go", role: { ru: "CLI + Desktop (67%)", en: "CLI + Desktop (67%)", es: "CLI + Desktop (67%)" } },
      { name: "Wails", role: { ru: "Нативный десктоп", en: "Native desktop", es: "Escritorio nativo" } },
      { name: "ripgrep", role: { ru: "Контекст-поиск", en: "Context search", es: "Búsqueda de contexto" } },
      { name: "ast-grep", role: { ru: "Анализ кода", en: "Code analysis", es: "Análisis de código" } },
      { name: "SQLite", role: { ru: "Локальная память", en: "Local memory", es: "Memoria local" } },
      { name: "tree-sitter", role: { ru: "Парсинг AST", en: "AST parsing", es: "Parsing AST" } }
    ],
    metrics: [
      { label: { ru: "Подсистем", en: "Subsystems", es: "Subsistemas" }, value: "7" },
      { label: { ru: "Режимов работы", en: "Operating modes", es: "Modos de operación" }, value: "3" },
      { label: { ru: "Звёзд на GitHub", en: "GitHub stars", es: "Estrellas en GitHub" }, value: "5" }
    ],
    detail: {
      challenge: {
        ru: "AI-агенты работают с кодом, но не имеют структурированного контекста: нет памяти между сессиями, нет карт документации, нет воспроизводимых пресетов.",
        en: "AI agents work with code but lack structured context: no memory between sessions, no docs maps, no reproducible presets.",
        es: "Los agentes AI trabajan con código pero carecen de contexto estructurado: sin memoria entre sesiones, sin mapas de docs, sin presets reproducibles."
      },
      solution: {
        ru: [
          "Собрал Go CLI с runtime для AI-работы: раны, память, карты документации, артефакты.",
          "Добавил нативное десктопное приложение через Wails с live preview runtime.",
          "Пресеты агентов (Study/Work/Hero) для разных сценариев AI-разработки."
        ],
        en: [
          "Built Go CLI with AI work runtime: runs, memory, docs-maps, artifacts.",
          "Added native desktop app via Wails with live preview runtime.",
          "Agent presets (Study/Work/Hero) for different AI development scenarios."
        ],
        es: [
          "Construí CLI Go con runtime para trabajo AI: ejecuciones, memoria, mapas de docs, artefactos.",
          "Añadí app de escritorio nativa con Wails y runtime de preview en vivo.",
          "Presets de agentes (Study/Work/Hero) para diferentes escenarios de desarrollo AI."
        ]
      },
      role: {
        ru: "Creator & Lead Developer: архитектура, Go-ядро, Wails-интеграция, релизы.",
        en: "Creator & Lead Developer: architecture, Go core, Wails integration, releases.",
        es: "Creator & Lead Developer: arquitectura, núcleo Go, integración Wails, releases."
      },
      result: {
        ru: [
          "5⭐ на GitHub, 4 связанных репозитория (arc-docs, arc-presets, arc-editorial) — все ⭐5.",
          "Инструмент, который сам использую для AI-разработки на реальных проектах.",
          "Демонстрирует глубокое владение Go, десктопными приложениями и AI-tooling."
        ],
        en: [
          "5⭐ on GitHub, 4 related repos (arc-docs, arc-presets, arc-editorial) — all ⭐5.",
          "A tool I use myself for AI development on real projects.",
          "Demonstrates deep mastery of Go, desktop apps, and AI tooling."
        ],
        es: [
          "5⭐ en GitHub, 4 repos relacionados (arc-docs, arc-presets, arc-editorial) — todos ⭐5.",
          "Herramienta que uso para desarrollo AI en proyectos reales.",
          "Demuestra dominio profundo de Go, apps de escritorio y herramientas AI."
        ]
      }
    }
  },
  {
    slug: "chappi-ai-office",
    title: {
      ru: "Chappi AI Office: персональный AI-офис",
      en: "Chappi AI Office: Personal AI Office",
      es: "Chappi AI Office: oficina AI personal"
    },
    summary: {
      ru: "24/7 VPS AI-офис через Telegram: мульти-агент (инфра/исследования/база знаний), голос (faster-Whisper), pgvector + MemPalace память, интеграции (Gmail/Calendar/GitHub/Notion/Jira), Grafana мониторинг.",
      en: "24/7 VPS AI office via Telegram: multi-agent (infra/research/KB), voice (faster-Whisper), pgvector + MemPalace memory, integrations (Gmail/Calendar/GitHub/Notion/Jira), Grafana monitoring.",
      es: "Oficina AI 24/7 en VPS vía Telegram: multi-agente (infra/investigación/KB), voz (faster-Whisper), pgvector + MemPalace, integraciones (Gmail/Calendar/GitHub/Notion/Jira), Grafana."
    },
    short: {
      ru: "Автономный AI-офис: мульти-агент, голос, память, интеграции с внешними сервисами.",
      en: "Autonomous AI office: multi-agent, voice, memory, integrations with external services.",
      es: "Oficina AI autónoma: multi-agente, voz, memoria, integraciones con servicios externos."
    },
    year: "2025",
    category: "product",
    status: "shipped",
    owner: "artem",
    featured: false,
    cover: {
      src: "/covers/chappi-office.svg",
      alt: {
        ru: "Экран Chappi AI Office",
        en: "Screen of Chappi AI Office",
        es: "Pantalla de Chappi AI Office"
      }
    },
    stack: ["OpenClaw", "Ollama", "PostgreSQL", "pgvector", "Python", "Docker"],
    links: [],
    metrics: [
      { label: { ru: "Стоимость токенов", en: "Token cost", es: "Coste de tokens" }, value: "−~60%" },
      { label: { ru: "Интеграций", en: "Integrations", es: "Integraciones" }, value: "5+" },
      { label: { ru: "Работа", en: "Uptime", es: "Disponibilidad" }, value: "24/7" }
    ],
    detail: {
      challenge: {
        ru: "Нужен был персональный AI-ассистент, который работает 24/7, помнит контекст, имеет голос и интеграции с рабочими инструментами.",
        en: "Needed a personal AI assistant that runs 24/7, remembers context, has voice, and integrates with work tools.",
        es: "Se necesitaba un asistente AI personal que funcione 24/7, recuerde contexto, tenga voz e integre con herramientas de trabajo."
      },
      solution: {
        ru: [
          "Собрал мульти-агентную систему на OpenClaw: агенты для инфраструктуры, исследований и базы знаний.",
          "Добавил голос через faster-Whisper и pgvector + MemPalace для долгосрочной памяти.",
          "Интеграции через Composio: Gmail, Calendar, GitHub, Notion, Jira. Grafana + pixel дашборды для мониторинга."
        ],
        en: [
          "Built multi-agent system on OpenClaw: agents for infrastructure, research, and knowledge base.",
          "Added voice via faster-Whisper and pgvector + MemPalace for long-term memory.",
          "Integrations via Composio: Gmail, Calendar, GitHub, Notion, Jira. Grafana + pixel dashboards for monitoring."
        ],
        es: [
          "Construí sistema multi-agente en OpenClaw: agentes para infraestructura, investigación y base de conocimiento.",
          "Añadí voz con faster-Whisper y pgvector + MemPalace para memoria a largo plazo.",
          "Integraciones vía Composio: Gmail, Calendar, GitHub, Notion, Jira. Grafana + dashboards para monitoreo."
        ]
      },
      role: {
        ru: "Creator & AI Engineer: архитектура мульти-агентов, интеграции, голос, память, деплой на VPS.",
        en: "Creator & AI Engineer: multi-agent architecture, integrations, voice, memory, VPS deployment.",
        es: "Creator & AI Engineer: arquitectura multi-agente, integraciones, voz, memoria, despliegue en VPS."
      },
      result: {
        ru: [
          "Автономный AI-офис, работающий 24/7 на VPS через Telegram.",
          "Демонстрирует навыки в AI-агентных системах, голосовых интерфейсах и интеграциях.",
          "MIT-лицензированный open-source проект."
        ],
        en: [
          "Autonomous AI office running 24/7 on VPS via Telegram.",
          "Demonstrates skills in AI agent systems, voice interfaces, and integrations.",
          "MIT-licensed open-source project."
        ],
        es: [
          "Oficina AI autónoma funcionando 24/7 en VPS vía Telegram.",
          "Demuestra habilidades en sistemas de agentes AI, interfaces de voz e integraciones.",
          "Proyecto open-source con licencia MIT."
        ]
      }
    }
  },
  {
    slug: "arbitrage-stack",
    title: {
      ru: "Arbitrage Stack: боты и контракты",
      en: "Arbitrage Stack: Bots + Contracts",
      es: "Arbitrage Stack: bots + contratos"
    },
    summary: {
      ru: "Композитный стек для арбитражных сценариев: боты, контракты, инфраструктура и мониторинг.",
      en: "A composite stack for arbitrage flows: bots, contracts, infrastructure, and monitoring.",
      es: "Stack compuesto para arbitraje: bots, contratos, infraestructura y monitoreo."
    },
    short: {
      ru: "3 публичных репозитория (Go + Solidity): бот, смарт-контракты, trader_bot — связаны интерфейсами, с CI/CD и мониторингом.",
      en: "3 public repos (Go + Solidity): bot, smart contracts, trader_bot — wired via interfaces, with CI/CD and monitoring.",
      es: "3 repos públicos (Go + Solidity): bot, contratos, trader_bot — conectados por interfaces, con CI/CD y monitoreo."
    },
    year: "2023–2024",
    category: "infra",
    status: "experimental",
    owner: "artem",
    featured: false,
    cover: {
      src: "/covers/arbitrage-stack.svg",
      alt: {
        ru: "Обложка Arbitrage Stack",
        en: "Arbitrage Stack cover",
        es: "Portada de Arbitrage Stack"
      }
    },
    stack: ["Go", "Solidity", "CI/CD", "Monitoring"],
    links: [
      {
        href: "https://github.com/artemka-web3/arbitrage-bot",
        label: { ru: "Bot", en: "Bot", es: "Bot" },
        external: true
      },
      {
        href: "https://github.com/artemka-web3/arbitrage-contracts",
        label: { ru: "Contracts", en: "Contracts", es: "Contracts" },
        external: true
      },
      {
        href: "https://github.com/artemka-web3/trader_bot",
        label: { ru: "Trader bot", en: "Trader bot", es: "Trader bot" },
        external: true
      }
    ],
    detail: {
      challenge: {
        ru: "Нужно было собрать несколько репозиториев в один поддерживаемый контур: боты, смарт‑контракты, окружение, мониторинг и воспроизводимые деплои.",
        en: "The goal was to connect multiple repos into a maintainable system: bots, smart contracts, environments, monitoring, and reproducible deploys.",
        es: "El objetivo era unir varios repositorios en un sistema mantenible: bots, contratos, entorno y monitoreo."
      },
      solution: {
        ru: [
          "Разделил ответственность по слоям (исполнение, интеграции, наблюдаемость) и зафиксировал интерфейсы между компонентами.",
          "Сделал упор на эксплуатацию: логирование, алерты, метрики и сценарии диагностики.",
          "Оформил как composite project с понятными ссылками на части стека."
        ],
        en: [
          "Separated responsibilities (execution, integrations, observability) and documented interfaces between components.",
          "Focused on operations: logging, alerting, metrics, and debugging playbooks.",
          "Presented it as a composite project with clear links to each part of the stack."
        ],
        es: [
          "Separé responsabilidades y documenté interfaces entre componentes.",
          "Enfoqué en operación: logs, alertas, métricas y diagnóstico.",
          "Lo presenté como proyecto compuesto con enlaces claros a cada parte."
        ]
      },
      role: {
        ru: "Бэкенд/инфраструктура: архитектура, интеграции, CI/CD-практики и наблюдаемость.",
        en: "Backend/infra: architecture, integrations, CI/CD practices, and observability.",
        es: "Backend/infra: arquitectura, integraciones, prácticas CI/CD y observabilidad."
      },
      result: {
        ru: [
          "Composite-стек из 3 публичных репозиториев: arbitrage-bot (Go), arbitrage-contracts (Solidity), trader_bot (Go) — связаны интерфейсами.",
          "Слои разделены по ответственности: исполнение, интеграции, наблюдаемость; CI/CD и воспроизводимые деплои.",
          "Эксплуатационный контур: логирование, алерты, метрики и сценарии диагностики внутри одного поддерживаемого набора."
        ],
        en: [
          "A composite stack of 3 public repositories: arbitrage-bot (Go), arbitrage-contracts (Solidity), trader_bot (Go) — wired via interfaces.",
          "Layers split by responsibility: execution, integrations, observability; CI/CD and reproducible deploys.",
          "An operational loop: logging, alerting, metrics, and debugging playbooks inside one maintainable set."
        ],
        es: [
          "Stack compuesto de 3 repositorios públicos: arbitrage-bot (Go), arbitrage-contracts (Solidity), trader_bot (Go) — conectados por interfaces.",
          "Capas separadas por responsabilidad: ejecución, integraciones, observabilidad; CI/CD y deploys reproducibles.",
          "Un ciclo operativo: logs, alertas, métricas y playbooks de diagnóstico en un conjunto mantenible."
        ]
      }
    }
  }

];

export function text(value: LocalizedString, locale: AppLocale) {
  return value[locale];
}

export function textList(value: LocalizedStringList, locale: AppLocale) {
  return value[locale];
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getProjectSlugs() {
  return projects.map((project) => project.slug);
}

export const categoryLabel: Record<ProjectCategory, LocalizedString> = {
  "big-tech": { ru: "Внутренняя платформа", en: "Internal platform", es: "Plataforma interna" },
  product: { ru: "Продукт", en: "Product", es: "Producto" },
  telegram: { ru: "Telegram", en: "Telegram", es: "Telegram" },
  proptech: { ru: "Недвижимость", en: "Real Estate", es: "Real Estate" },
  trading: { ru: "Trading", en: "Trading", es: "Trading" },
  education: { ru: "Обучение", en: "Education", es: "Educación" },
  web3: { ru: "Web3", en: "Web3", es: "Web3" },
  infra: { ru: "Инфраструктура", en: "Infrastructure", es: "Infraestructura" }
};

export const statusLabel: Record<ProjectStatus, LocalizedString> = {
  shipped: { ru: "Сделано", en: "Delivered", es: "Entregado" },
  "in-progress": { ru: "В работе", en: "In progress", es: "En progreso" },
  experimental: { ru: "В развитии", en: "In development", es: "En desarrollo" },
  pending: { ru: "Нужны детали", en: "Details pending", es: "Faltan detalles" }
};

export const ownerLabel: Record<ProjectOwner, LocalizedString> = {
  artem: { ru: "Артём", en: "Artem", es: "Artem" },
  egor: { ru: "Егор", en: "Egor", es: "Egor" },
  together: { ru: "Вместе", en: "Together", es: "Juntos" }
};
