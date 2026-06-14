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
    portfolio?: string;
    email?: string;
  };
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
  portfolio: "https://sidnevart.github.io/personal-web-page/"
};

export const artemProfile: PersonProfile = {
  id: "artem",
  name: "Artem Sidnev",
  role: {
    ru: "Бэкенд-разработчик. Продакшен-сервисы, платформы обработки данных, интеграции и автоматизация",
    en: "Backend engineer. Production services, data-intensive platforms, integrations, and automation",
    es: "Ingeniero backend. Plataformas internas, servicios analíticos, CRM y productos aplicados"
  },
  summary: {
    ru: "Строю бэкенд-системы, где важны надёжность, сложная бизнес-логика, данные, интеграции и измеримый эффект.",
    en: "I build backend systems where reliability, complex business logic, data, integrations, and measurable impact matter.",
    es: "Construyo sistemas backend y productos internos que ayudan a los negocios a lanzar flujos más rápido, eliminar trabajo manual y tomar mejores decisiones."
  },
  contacts: {
    telegram: siteContacts.telegram,
    github: siteContacts.github,
    linkedin: siteContacts.linkedin,
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
      ru: "Бэкенд-разработчик. Продакшен-сервисы, платформы обработки данных, интеграции и инициативы по производительности.",
      en: "Backend Engineer. Production services, data-intensive platforms, integrations, and performance initiatives.",
      es: "Middle Software Engineer (Backend / DevOps). Servicios de alta carga, plataformas de datos e infraestructura fiable."
    },
    subheadline: {
      ru: "Беру задачи от неясных требований до продакшен-внедрения: проектирую бэкенд-контракты, ускоряю критичные пайплайны, автоматизирую ручные процессы и оставляю измеримый результат.",
      en: "I take work from unclear requirements to production rollout: design backend contracts, speed up critical pipelines, automate manual workflows, and leave measurable results.",
      es: "Construyo y mejoro sistemas que soportan carga y dan resultados claros: fiabilidad, flujos críticos más rápidos, automatización e impacto medible."
    },
    proof: {
      ru: [
        "Фичи с измеримым эффектом: до 7.5 млн руб./год бизнес-импакта.",
        "Сокращал задержку отдельных сценариев сборки аудиторий с ~170 минут до 5–10 секунд.",
        "Автоматизацией снимал до 40–60 часов ручной работы в месяц."
      ],
      en: [
        "Metric-backed impact: up to RUB 7.5M/year business effect.",
        "Reduced selected audience-flow latency from ~170 minutes to 5–10 seconds.",
        "Automation removed up to 40–60 manual hours per month."
      ],
      es: [
        "Impacto con métricas: hasta 7,5M RUB/año.",
        "Aceleré flujos críticos de producción ~5x.",
        "Automatización eliminó 40–60 horas manuales al mes."
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
          ru: "Бэкенд-сервисы, очереди и API, которые должны выдерживать нагрузку и быть предсказуемыми в продакшене.",
          en: "Backend systems that must handle load and remain predictable in production.",
          es: "Sistemas backend que deben soportar carga y ser predecibles en producción."
        }
      },
      {
        title: {
          ru: "Data платформы и ETL",
          en: "Data platforms & ETL",
          es: "Plataformas de datos y ETL"
        },
        body: {
          ru: "Пайплайны, интеграции и витрины, которые превращают данные в рабочее решение для бизнеса.",
          en: "Pipelines, integrations, and data products that turn data into business decisions.",
          es: "Pipelines e интеграции que convierten datos en decisiones de negocio."
        }
      },
      {
        title: {
          ru: "AI/LLM автоматизация",
          en: "AI/LLM automation",
          es: "Automatización AI/LLM"
        },
        body: {
          ru: "Практические AI-интеграции в процессы: код-ревью, CI, онбординг, оркестрация и контроль качества.",
          en: "Practical AI integrations: code review, CI, onboarding, orchestration, and quality control.",
          es: "Integraciones AI prácticas: code review, CI, onboarding, orquestación y control de calidad."
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
      ru: "Обычно начинаю не со стека, а с узких мест в процессе: где всё ломается, где дорого, где медленно, где слишком много ручной работы. Дальше собираю решение так, чтобы оно было понятно тем, кто будет пользоваться и поддерживать его каждый день.",
      en: "I usually start not with the stack, but with bottlenecks: where things break, where it’s costly, where it’s slow, where manual work accumulates. Then I build the solution so it stays clear for the people who will use and support it daily.",
      es: "Suelo empezar no por el stack, sino por los cuellos de botella: dónde falla, dónde es caro, dónde es lento y dónde se acumula trabajo manual. Luego construyo la solución para que sea clara para quien la usa y la mantiene a diario."
    },
    points: {
      ru: [
        "Перевожу расплывчатую задачу в рабочий план, ограничения и последовательность внедрения.",
        "Собираю бэкенд и данные так, чтобы система давала понятный результат, а не просто технически работала.",
        "Оставляю после себя более устойчивый процесс, а не зависимость от ручных разборов."
      ],
      en: [
        "I turn a vague request into a working plan, clear constraints, and a practical rollout sequence.",
        "I build backend logic and data flows so the system produces a clear result, not just a technically valid one.",
        "I try to leave behind a more reliable process rather than another manual support burden."
      ],
      es: [
        "Convierto una petición difusa en un plan de trabajo, restricciones claras y una secuencia práctica de entrega.",
        "Construyo backend y flujos de datos para que el sistema produzca un resultado claro, no solo algo técnicamente válido.",
        "Intento dejar un proceso más fiable y no otra carga manual para soporte."
      ]
    }
  },
  currentWork: {
    title: {
      ru: "Над чем работаю сейчас в big-tech",
      en: "What I build now in big-tech",
      es: "En qué trabajo ahora en big tech"
    },
    intro: {
      ru: "Развиваю платформу кэшбэк‑таргетинга: менеджеры формируют аудитории под офферы партнёров, а система определяет, кому показать предложение по данным клиентов.",
      en: "I build a cashback targeting platform: managers define offer audiences, and the system decides which customers should receive which offer based on customer data.",
      es: "Trabajo en una plataforma de targeting de cashback: managers definen audiencias y el sistema decide a qué clientes mostrar cada oferta según sus datos."
    },
    points: {
      ru: [
        "Реализую новые параметры таргетинга (включая финансовые и терминальные сигналы).",
        "Ускоряю и стабилизирую пайплайны сборки аудиторий в продакшене.",
        "Внедряю AI/LLM в процессы: ревью кода, CI-задачи и RAG-агент для онбординга.",
        "Добавляю валидации и проверки качества, чтобы снижать ошибки до запуска кампаний."
      ],
      en: [
        "Implement new targeting parameters (including financial and terminal signals).",
        "Speed up and harden audience-building production flows.",
        "Bring AI/LLM into workflows: AI code review, AI CI job, RAG onboarding agent.",
        "Add validation and quality checks to reduce campaign-time errors."
      ],
      es: [
        "Implemento nuevos parámetros de targeting (incluyendo señales financieras y de terminal).",
        "Acelero y estabilizo flujos de producción para construir audiencias.",
        "Incorporo AI/LLM: AI code review, AI CI job, agente RAG de onboarding.",
        "Añado validaciones y controles de calidad para reducir errores de campaña."
      ]
    }
  },
  freelance: {
    title: {
      ru: "Что делаю как freelancer / в сторонних проектах",
      en: "What I can do for freelance and side projects",
      es: "Qué hago en freelance y proyectos externos"
    },
    intro: {
      ru: "Беру задачи, где нужен надёжный бэкенд и масштаб: ETL/data-пайплайны, API и высоконагруженные сервисы под рост.",
      en: "I take projects that need reliable, scalable backend: ETL/data pipelines, APIs, and high‑load services built to grow.",
      es: "Tomo proyectos que requieren backend fiable y escalable: ETL/pipelines de datos, APIs y servicios de alta carga para crecer."
    },
    points: {
      ru: [
        "Проектирование и запуск бэкенд-сервисов под высокую нагрузку.",
        "ETL/data-пайплайны и автоматизация рутинных процессов.",
        "Оптимизация существующих продакшен-сервисов (скорость, надёжность, стоимость)."
      ],
      en: [
        "Design and delivery of high-load backend services.",
        "ETL/data pipelines and workflow automation.",
        "Optimization of existing production systems (speed, reliability, cost)."
      ],
      es: [
        "Diseño y entrega de servicios backend de alta carga.",
        "Pipelines ETL/datos y automatización de flujos.",
        "Optimización de sistemas en producción (velocidad, fiabilidad, coste)."
      ]
    }
  },
  contact: {
    title: {
      ru: "Если нужен инженер, который может собрать прикладной продукт или масштабный бэкенд под реальную бизнес-задачу, напишите.",
      en: "If you need an engineer who can build an applied product or a scalable backend for a real business task, reach out.",
      es: "Si necesitas un ingeniero que construya un producto aplicado o un backend escalable para un problema real, escríbeme."
    },
    body: {
      ru: "Это может быть высоконагруженный бэкенд, ETL/данные, интеграции, автоматизация, миграции или запуск нового сервиса под рост.",
      en: "This can include high-load backend, ETL/data work, integrations, automation, migrations, or launching a new service designed to scale.",
      es: "Puede incluir backend de alta carga, ETL/datos, integraciones, automatización, migraciones o lanzar un nuevo servicio para escalar."
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
        "T-Bank — бэкенд-разработчик, окт 2025 — н.в.: продакшен-бэкенд для платформы управления аудиториями, кэшбэк-офферов, потоков обработки данных и корпоративных интеграций.",
        "Лидировал архитектурную инициативу между сервисами: вынес тяжёлую материализацию и выгрузку аудиторий из основной платформы во внутренний сервис обработки данных с gRPC API, ClickHouse-исполнением, S3-выгрузкой и отдельными лимитами воркеров.",
        "Результаты: сборка аудиторий для кэшбэк-кампаний ускорилась с ~170 минут до 5–10 секунд в оптимизированных сценариях — в 1000–2000 раз."
      ],
      en: [
        "T-Bank — Software Engineer (Backend), Oct 2025 — present: production backend for cashback targeting, partner-funded offers, data-intensive audience workflows, and corporate integrations.",
        "Led a cross-service architecture initiative: moved heavy audience materialization/export work from the core Kotlin/Spring service to an internal Go data-processing service with gRPC API, ClickHouse execution, S3 export, and bounded worker concurrency.",
        "Results: cashback audience gathering from ~170 minutes to 5–10 seconds in optimized scenarios, up to 1000–2000x speedup."
      ],
      es: [
        "T-Bank — Middle Backend / DevOps Engineer (oct 2025 — actual): backend de alta carga, plataforma de cashback, flujos productivos e integraciones.",
        "Flujos AI/LLM: AI code review en GitLab, AI CI job, automatizaciones n8n y agente RAG de onboarding.",
        "Resultados: hasta 7,5M RUB/año, flujo crítico ~5x más rápido, 40–60 h/mes ahorradas, AI workflows ~1.5x más rápidos y hasta 3x menos tokens."
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
    ru: "Бэкенд-разработчик в T‑Bank. Строю продакшен-бэкенд, потоки обработки данных, API, очереди задач, интеграции и автоматизацию. Беру задачи, где важны надёжность, сложная бизнес-логика, скорость критичных пайплайнов и измеримый эффект.",
    en: "Backend engineer at T‑Bank. I build production backend, data-intensive workflows, APIs, task queues, integrations, and automation. I take work where reliability, complex business logic, critical-flow speed, and measurable impact matter.",
    es: "Middle Backend / DevOps engineer en T‑Bank. Construyo sistemas de alta carga, plataformas de datos y automatización AI/LLM. Trabajo donde importan fiabilidad, velocidad y métricas."
  },
  highlights: {
    ru: [
      "Java/Kotlin/Python, Spring Boot, REST/gRPC, PostgreSQL, ClickHouse, Kafka",
      "Метрики: сборка аудиторий с ~170 минут до 5–10 секунд, ускорение в 1000–2000 раз, p95 до оптимизации доходил до 7.8 часа",
      "Продакшен-подход: поэтапное внедрение, резервный путь, наблюдаемость, валидация и стабильные менеджерские процессы"
    ],
    en: [
      "Java/Kotlin/Python, Spring Boot, REST/gRPC, PostgreSQL, ClickHouse, Kafka",
      "Metrics: cashback audience gathering from ~170 minutes to 5–10 seconds, up to 1000–2000x speedup",
      "Production mindset: rollout, fallback, observability, validation, and stable manager-facing workflows"
    ],
    es: [
      "Backend de alta carga + plataformas de datos + automatización AI/LLM",
      "Métricas: hasta 7,5M RUB/año, ~5x aceleración, 40–60 h/mes ahorradas",
      "Implementaciones AI: code review, AI CI job, n8n, agentes RAG"
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
      ru: "Новые параметры таргетинга на 1.5 года истории и ~30 млн транзакций/день; эффект до 7.5 млн руб./год.",
      en: "New targeting parameters on 1.5 years of history and ~30M transactions/day; impact up to RUB 7.5M/year.",
      es: "Nuevos parámetros de targeting sobre 1,5 años y ~30M transacciones/día; impacto hasta 7,5M RUB/año."
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
    links: [],
    detail: {
      challenge: {
        ru: "Менеджерам нужен был инструмент, который быстро и надёжно собирает аудитории под кэшбэк-офферы. Требовалось добавить новые параметры таргетинга (в т.ч. траты/доходы и терминальные данные) и гарантировать корректность на истории и в потоке.",
        en: "Managers needed a tool to build target audiences for cashback offers quickly and reliably. The platform had to add new targeting parameters (incl. spend/income and terminal-based data) and stay correct on both history and live streams.",
        es: "Los managers necesitaban una herramienta fiable para construir audiencias para ofertas de cashback. Había que añadir nuevos parámetros (incl. ingresos/gastos y datos de terminal) y mantener corrección en histórico y en vivo."
      },
      solution: {
        ru: [
          "Сформулировал требования вместе со стейкхолдерами: какие офферы бывают, какие данные партнёры приносят, какие ограничения по качеству и срокам.",
          "Разложил задачу на данные (история + поток), контракты и фильтры; добавил таргетинг по тратам/доходам и терминальным параметрам.",
          "Добавил ранние проверки/валидации и понятные ошибки, чтобы менеджеры и аналитики быстро понимали, почему аудитория не собрана."
        ],
        en: [
          "Aligned requirements and split the work into data delivery, contracts, and filter logic.",
          "Launched spend/income targeting on 1.5 years of history and the live transaction stream.",
          "Added early validation and clearer errors for critical audience-building flows."
        ],
        es: [
          "Alineé requisitos y dividí el trabajo entre datos, contratos y lógica de filtros.",
          "Lancé targeting por gastos/ingresos sobre 1,5 años de histórico y flujo en vivo.",
          "Añadí validaciones tempranas y errores más claros en flujos críticos."
        ]
      },
      role: {
        ru: "Бэкенд-разработчик: требования, реализация фичи, качество (проверки/валидации), тестирование и доведение до продакшена.",
        en: "Backend engineer: requirements + implementation, quality (validation), testing, and production rollout.",
        es: "Ingeniero backend: requisitos e implementación, calidad (validación), testing y despliegue."
      },
      result: {
        ru: [
          "Аудитории под офферы собираются автоматически на истории 1.5 года и на потоке ~30 млн транзакций/день, без ручных проливок.",
          "Менеджеры получили точные параметры включения/исключения клиентов, меньше ручных правок и меньше ошибок в кампаниях.",
          "По оценке бизнеса ожидаемый эффект — до 7.5 млн руб./год; после миграции критичный пайплайн сборки ускорился примерно в 5 раз."
        ],
        en: [
          "Offer audiences are built automatically on 1.5 years of history and ~30M transactions/day, without manual data loads.",
          "Managers got precise include/exclude targeting with fewer manual edits and fewer campaign mistakes.",
          "Expected impact: up to RUB 7.5M/year; after migration, a critical flow became ~5x faster."
        ],
        es: [
          "Las audiencias se construyen automáticamente sobre 1,5 años de histórico y ~30M transacciones/día sin cargas manuales.",
          "Los managers obtuvieron targeting preciso con menos ajustes manuales y menos errores.",
          "Impacto esperado: hasta 7,5M RUB/año; tras la migración el flujo crítico fue ~5x más rápido."
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
      ru: "Практическая AI-автоматизация: процессы быстрее ~1.5x, расход токенов ниже до 3x.",
      en: "Practical AI automation: workflows ~1.5x faster, token usage down up to 3x.",
      es: "Automatización práctica: flujos ~1.5x más rápido y hasta 3x menos tokens."
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
    detail: {
      challenge: {
        ru: "Нужно было внедрить AI так, чтобы он реально ускорял работу, а не создавал шум: качественные ревью, быстрые MR и понятный онбординг.",
        en: "AI had to deliver real productivity, not noise: reliable reviews, faster MRs, and clear onboarding.",
        es: "La IA debía aportar productividad real: revisiones fiables, MRs más rápidos y onboarding claro."
      },
      solution: {
        ru: [
          "Запустил AI code review в GitLab и CI job для рефакторинга/подготовки MR.",
          "Собрал n8n-автоматизации для менеджеров и RAG-агента для онбординга стажёров.",
          "Встроил контроль качества и ограничение расходов токенов."
        ],
        en: [
          "Launched AI code review in GitLab and an AI CI job for refactoring and MR prep.",
          "Built n8n automations for managers and a RAG agent for intern onboarding.",
          "Added quality checks and token-cost controls."
        ],
        es: [
          "Lancé AI code review en GitLab y un AI CI job para refactor y MR.",
          "Construí automatizaciones n8n y un agente RAG para onboarding.",
          "Añadí control de calidad y costes de tokens."
        ]
      },
      role: {
        ru: "Бэкенд-разработчик: архитектура, интеграции, оркестрация и внедрение в продакшен-процессы.",
        en: "Backend engineer: architecture, integrations, orchestration, and production rollout.",
        es: "Ingeniero backend: arquitectura, integraciones, orquestación y despliegue."
      },
      result: {
        ru: [
          "Процессы ускорились примерно в 1.5 раза, расход токенов снизился до 3x.",
          "AI стал частью ежедневных инженерных и менеджерских процессов, а не отдельной демо-фичей."
        ],
        en: [
          "Workflows got ~1.5x faster, token usage dropped up to 3x.",
          "AI became part of daily engineering and manager workflows, not a demo feature."
        ],
        es: [
          "Los flujos fueron ~1.5x más rápidos y el consumo de tokens bajó hasta 3x.",
          "La IA pasó a ser parte del día a día, no una demo."
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
      ru: "Собрал сервис с real-time сценариями и регулярным пользовательским циклом, а не очередной статичный список задач.",
      en: "Built a service with real-time workflows and a recurring user loop rather than another static task list.",
      es: "Construí un servicio con flujos en tiempo real y un ciclo de uso recurrente, no otra lista estática de tareas."
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
          "Получился цельный edtech-продукт с регулярным пользовательским циклом, а не набор разрозненных функций.",
          "Кейс показывает умение строить продуктовую механику удержания, а не только бэкенд API.",
          "В портфолио этот проект закрывает направление “education + real-time + продуктовый цикл”."
        ],
        en: [
          "Shipped a coherent edtech product with a recurring usage loop, not a set of isolated features.",
          "Shows ability to build retention mechanics, not just backend APIs.",
          "In the portfolio, it covers education + real-time + product-loop experience."
        ],
        es: [
          "Entregué un producto edtech coherente con ciclo de uso recurrente.",
          "Demuestra capacidad de construir retención, no solo APIs.",
          "Cubre educación + real-time + ciclo de producto en el portfolio."
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
    featured: true,
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
          "Получился понятный продуктовый кейс про business software и ежедневную операционную работу.",
          "Проект показывает умение связывать бэкенд и UI в систему, где важна целостность сценариев.",
          "Хороший “второй” кейс в портфолио: меньше бигтеха, больше прикладного продукта."
        ],
        en: [
          "A clear business-software case centered on daily operational work.",
          "Shows the ability to connect backend and UI into a cohesive system.",
          "A solid secondary case: less big-tech, more applied product."
        ],
        es: [
          "Caso claro de business software para trabajo diario.",
          "Demuestra capacidad de conectar backend y UI en un sistema cohesivo.",
          "Buen caso secundario: menos big tech, más producto aplicado."
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
          "Получился продуктовый чат с персональным контекстом, который опирается на реальные транзакции пользователя.",
          "Кейс показывает умение связывать данные, бизнес-логику и интерфейс в один понятный сценарий."
        ],
        en: [
          "Delivered a product chat with personalized context grounded in real transaction data.",
          "Shows the ability to connect data, business logic, and UI into one coherent flow."
        ],
        es: [
          "Entregué un chat con contexto personalizado basado en transacciones reales.",
          "Demuestra capacidad de conectar datos, lógica de negocio y UI en un flujo coherente."
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
      ru: "Показывает продуктовую приземлённость: полезная фича, понятный UX и аккуратная реализация.",
      en: "Shows product sense: useful feature, clear UX, clean implementation.",
      es: "Muestra sentido de producto: funcionalidad útil, UX claro, implementación limpia."
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
          "Получился законченный мини‑продукт с понятной ценностью и чистой реализацией.",
          "Хороший демонстрационный кейс: быстро собрать полезную фичу end‑to‑end."
        ],
        en: [
          "Shipped a small but complete product with clear value and clean implementation.",
          "A good demo case for building useful features end to end quickly."
        ],
        es: [
          "Entregué un mini‑producto completo con valor claro e implementación limpia.",
          "Buen caso demo para construir features útiles end-to-end rápidamente."
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
          "Кейс добавляет сигнал про эксплуатационное мышление: воспроизводимость, диагностика, наблюдаемость.",
          "Можно развивать дальше в сторону платформенного контура и risk‑контролей."
        ],
        en: [
          "Adds operational-thinking signals: reproducibility, debugging, observability.",
          "A good base to extend with platform and risk-control layers."
        ],
        es: [
          "Aporta señales de pensamiento operacional: reproducibilidad, diagnóstico, observabilidad.",
          "Buena base para extender con capas de plataforma y control de riesgo."
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
      ru: "Кейс про системность: несколько компонентов, интеграции и эксплуатация как единый контур.",
      en: "A systems-thinking case: multiple components, integrations, and operations as one flow.",
      es: "Caso de pensamiento sistémico: múltiples componentes, integraciones y operación."
    },
    year: "2023–2024",
    category: "infra",
    status: "experimental",
    owner: "artem",
    featured: true,
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
          "Кейс усиливает портфолио эксплуатационным мышлением и системностью.",
          "Хорошо показывает, что умею делать не только один сервис, но и связанный набор компонентов."
        ],
        en: [
          "Adds operational thinking and systems design signals to the portfolio.",
          "Shows ability to build not just one service but a connected set of components."
        ],
        es: [
          "Aporta señales de operación y diseño de sistemas.",
          "Demuestra capacidad de construir un conjunto de componentes conectados."
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
