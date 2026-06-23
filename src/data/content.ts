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
    ru: "Backend & Platform Engineer с 4+ годами опыта в high-load системах и Big Data пайплайнах. Технический лид CDP: архитектура, приносящая ~$155K/мес, ускорение выгрузки 32×, внедрение AI/LLM в продакшен-процессы.",
    en: "Backend & Platform Engineer with 4+ years in high-load systems and Big Data pipelines. Technical Lead of CDP: architected a system generating ~$155K/month, accelerated data export 32×, deployed AI/LLM in production workflows.",
    es: "Backend & Platform Engineer con 4+ años en sistemas de alta carga y pipelines de Big Data. Líder técnico de CDP: diseñé un sistema que genera ~$155K/mes, aceleré la exportación 32×, implementé AI/LLM en flujos de producción."
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
      ru: "Software Engineer · Java / Kotlin / Go. Технический лид CDP, AI-автоматизация, high-load пайплайны.",
      en: "Software Engineer · Java / Kotlin / Go. Technical Lead of CDP, AI automation, high-load pipelines.",
      es: "Software Engineer · Java / Kotlin / Go. Líder técnico de CDP, automatización AI, pipelines de alta carga."
    },
    subheadline: {
      ru: "Беру задачи от неясных требований до продакшен-внедрения: проектирую бэкенд-контракты, ускоряю критичные пайплайны, внедряю AI/LLM в процессы и оставляю измеримый результат.",
      en: "I take work from unclear requirements to production rollout: design backend contracts, speed up critical pipelines, deploy AI/LLM in workflows, and leave measurable results.",
      es: "Llevo tareas desde requisitos difusos hasta producción: diseño contratos backend, acelero pipelines críticos, implemento AI/LLM en flujos y dejo resultados medibles."
    },
    proof: {
      ru: [
        "Ускорил сборку аудиторий до 1–10 секунд (размер-независимо) и выгрузку данных 32× (8ч → 15мин).",
        "Спроектировал систему, приносящую ~$155K/мес аналитически-оценённого дохода.",
        "Автоматизацией снимал до 40–60 часов ручной работы в месяц."
      ],
      en: [
        "Accelerated audience gathering to 1–10 seconds (size-independent) and data export 32× (8h → 15min).",
        "Architected a system generating ~$155K/month in analyst-estimated revenue.",
        "Automation removed up to 40–60 manual hours per month."
      ],
      es: [
        "Aceleré la construcción de audiencias a 1–10 segundos (independiente del tamaño) y exportación 32× (8h → 15min).",
        "Diseñé un sistema que genera ~$155K/mes en ingresos estimados por analistas.",
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
        "T-Bank — Software Engineer, окт 2025 — н.в.: технический лид CDP (Customer Data Platform), продакшен-бэкенд для кэшбэк-таргетинга, обработки данных и AI/LLM автоматизации.",
        "Ускорил сборку аудиторий до 1–10 секунд (размер-независимо, ~30–50× типично, до 360× в лучшем случае), driving ~$155K/мес аналитически-оценённого дохода.",
        "Флагманское лидерство: инициировал и провёл кросс-командную RFC-интеграцию, ускорившую выгрузку данных 32× (8ч → 15мин) и приведшую к объединению команды в CDP.",
        "Внедрил AI/LLM: AI code review бот, CI рефакторинг бот, RAG-агент для онбординга, n8n автоматизации — сэкономил 40–60 часов ручной работы в месяц."
      ],
      en: [
        "T-Bank — Software Engineer, Oct 2025 — present: Technical Lead of CDP (Customer Data Platform), production backend for cashback targeting, data processing, and AI/LLM automation.",
        "Accelerated audience gathering to 1–10 seconds (size-independent, ~30–50× typical, up to 360× best case), driving ~$155K/month in analyst-estimated revenue.",
        "Flagship leadership: self-initiated and drove a cross-team RFC integration, accelerating data export 32× (8h → 15min) and leading to team consolidation into CDP.",
        "Deployed AI/LLM: AI code review bot, CI refactoring bot, RAG onboarding agent, n8n automations — saved 40–60 manual hours per month."
      ],
      es: [
        "T-Bank — Software Engineer, oct 2025 — actual: Líder técnico de CDP (Customer Data Platform), backend de producción para targeting de cashback, procesamiento de datos y automatización AI/LLM.",
        "Aceleré la construcción de audiencias a 1–10 segundos (independiente del tamaño, ~30–50× típico, hasta 360× en el mejor caso), generando ~$155K/mes en ingresos estimados.",
        "Liderazgo insignia: inicié y conduje una integración RFC entre equipos, acelerando la exportación 32× (8h → 15min) y llevando a la consolidación del equipo en CDP.",
        "Implementé AI/LLM: bot de code review, bot de refactorización CI, agente RAG de onboarding, automatizaciones n8n — ahorré 40–60 horas manuales al mes."
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
      "Сборка аудиторий 1–10 сек (размер-независимо), выгрузка 32× (8ч→15мин), ~$155K/мес",
      "Технический лид CDP: RFC, кросс-командная интеграция, объединение команд, AI/LLM в продакшене"
    ],
    en: [
      "Java/Kotlin/Python/Go, Spring Boot, REST/gRPC, PostgreSQL, ClickHouse, Kafka",
      "Audience gathering 1–10s (size-independent), export 32× (8h→15min), ~$155K/month",
      "Technical Lead of CDP: RFC, cross-team integration, team consolidation, AI/LLM in production"
    ],
    es: [
      "Java/Kotlin/Python/Go, Spring Boot, REST/gRPC, PostgreSQL, ClickHouse, Kafka",
      "Audiencias 1–10s (independiente del tamaño), exportación 32× (8h→15min), ~$155K/mes",
      "Líder técnico de CDP: RFC, integración entre equipos, consolidación, AI/LLM en producción"
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
      ru: "Новые параметры таргетинга на 1.5 года истории и ~30 млн транзакций/день; ~$165K/год прибыли.",
      en: "New targeting parameters on 1.5 years of history and ~30M transactions/day; ~$165K/year profit.",
      es: "Nuevos parámetros de targeting sobre 1,5 años y ~30M transacciones/día; ~$165K/año de beneficio."
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
    techDetails: [
      { name: "Kotlin", role: { ru: "Control plane, бизнес-логика", en: "Control plane, business logic", es: "Control plane, lógica de negocio" } },
      { name: "Spring Boot", role: { ru: "REST API, интеграции", en: "REST API, integrations", es: "REST API, integraciones" } },
      { name: "Go", role: { ru: "Data plane, gRPC, экспорт", en: "Data plane, gRPC, export", es: "Data plane, gRPC, exportación" } },
      { name: "ClickHouse", role: { ru: "Аналитика, ~30M txn/день", en: "Analytics, ~30M txn/day", es: "Analítica, ~30M txn/día" } },
      { name: "Kafka", role: { ru: "Потоковая обработка", en: "Stream processing", es: "Procesamiento de streams" } },
      { name: "PostgreSQL", role: { ru: "Задачи, DAG, очереди", en: "Tasks, DAG, queues", es: "Tareas, DAG, colas" } }
    ],
    metrics: [
      { label: { ru: "Сборка аудиторий", en: "Audience gathering", es: "Construcción de audiencias" }, value: "1–10s" },
      { label: { ru: "Ускорение выгрузки", en: "Export acceleration", es: "Aceleración de exportación" }, value: "32×" },
      { label: { ru: "Транзакций/день", en: "Transactions/day", es: "Transacciones/día" }, value: "~30M" },
      { label: { ru: "Доход/мес", en: "Revenue/month", es: "Ingresos/mes" }, value: "~$155K" }
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
          "Система таргетинга приносит ~$165K/год прибыли; сборка аудиторий ускорена до 1–10 секунд (размер-независимо)."
        ],
        en: [
          "Offer audiences are built automatically on 1.5 years of history and ~30M transactions/day, without manual data loads.",
          "Managers got precise include/exclude targeting with fewer manual edits and fewer campaign mistakes.",
          "Targeting system generates ~$165K/year profit; audience gathering accelerated to 1–10 seconds (size-independent)."
        ],
        es: [
          "Las audiencias se construyen automáticamente sobre 1,5 años de histórico y ~30M transacciones/día sin cargas manuales.",
          "Los managers obtuvieron targeting preciso con menos ajustes manuales y menos errores.",
          "El sistema de targeting genera ~$165K/año de beneficio; audiencias aceleradas a 1–10 segundos (independiente del tamaño)."
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
    featured: false,
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
