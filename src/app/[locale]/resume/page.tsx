import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { Link } from "@/i18n/navigation";
import { resumeContent, siteContacts, text, textList } from "@/data/content";
import { buildMetadata } from "@/lib/metadata";
import { getLocaleFromParams } from "../layout";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = getLocaleFromParams(locale);

  return buildMetadata({
    locale: safeLocale,
    path: `/${safeLocale}/resume`,
    title: safeLocale === "ru" ? "Резюме" : safeLocale === "en" ? "Resume" : "CV"
  });
}

export default async function ResumePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = getLocaleFromParams(locale);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          name: "Artem Sidnev Resume",
          url: `https://sidnevart.github.io/personal-web-page/${safeLocale}/resume`
        }}
      />

      <section className="pt-8">
        <div className="container-shell">
          <div className="grid gap-8 border-b border-[var(--line)] pb-12 xl:grid-cols-[0.92fr_1.08fr]">
            <div>
              <p className="eyebrow">{text(resumeContent.title, safeLocale)}</p>
              <h1 className="section-title mt-4">
                {safeLocale === "ru"
                  ? "Резюме Артёма Сиднева"
                  : safeLocale === "en"
                    ? "Artem Sidnev Resume"
                    : "CV de Artem Sidnev"}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--fg-muted)]">
                {text(resumeContent.summary, safeLocale)}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/resume/artem-sidnev-resume-ru.pdf"
                  download
                  className="inline-flex rounded-full border border-[var(--line-strong)] bg-[var(--surface-strong)] px-5 py-3 text-sm font-semibold text-[var(--fg)] transition hover:opacity-90"
                >
                  {safeLocale === "ru"
                    ? "Скачать RU PDF"
                    : safeLocale === "en"
                      ? "Download RU PDF"
                      : "Descargar RU PDF"}
                </a>
                <a
                  href="/resume/artem-sidnev-resume-en.pdf"
                  download
                  className="inline-flex rounded-full border border-[var(--line-strong)] bg-[var(--surface-strong)] px-5 py-3 text-sm font-semibold text-[var(--fg)] transition hover:opacity-90"
                >
                  {safeLocale === "ru"
                    ? "Скачать EN PDF"
                    : safeLocale === "en"
                      ? "Download EN PDF"
                      : "Descargar EN PDF"}
                </a>
                <Link
                  href="/resume/latex"
                  className="inline-flex rounded-full border border-[var(--line)] px-5 py-3 text-sm font-semibold transition hover:border-[var(--line-strong)] hover:bg-[var(--surface)]"
                >
                  {safeLocale === "ru"
                    ? "Смотреть LaTeX резюме"
                    : safeLocale === "en"
                      ? "View LaTeX resume"
                      : "Ver CV en LaTeX"}
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex rounded-full border border-[var(--line)] px-5 py-3 text-sm font-semibold transition hover:border-[var(--line-strong)] hover:bg-[var(--surface)]"
                >
                  {safeLocale === "ru"
                    ? "Связаться"
                    : safeLocale === "en"
                      ? "Contact"
                      : "Contacto"}
                </Link>
              </div>
            </div>

            <div className="rounded-[32px] border border-[var(--line)] bg-[var(--surface)] p-7">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--fg-soft)]">
                {safeLocale === "ru"
                  ? "Кратко"
                  : safeLocale === "en"
                    ? "At a glance"
                    : "En breve"}
              </p>
              <div className="mt-5 grid gap-3 text-base leading-7 text-[var(--fg-muted)]">
                {textList(resumeContent.highlights, safeLocale).map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
              <div className="mt-6 border-t border-[var(--line)] pt-5 text-sm text-[var(--fg-soft)]">
                <p>
                  <a href={`mailto:${siteContacts.email}`} className="hover:text-[var(--fg)]">
                    {siteContacts.email}
                  </a>
                </p>
                <p className="mt-1">
                  <a href={siteContacts.telegram} className="hover:text-[var(--fg)]">
                    Telegram: @sidnevart
                  </a>
                </p>
                <p className="mt-1">
                  <a href={siteContacts.linkedin} className="hover:text-[var(--fg)]">
                    linkedin.com/in/artem-sidnev-b109ab401
                  </a>
                </p>
                <p className="mt-1">
                  <a href={siteContacts.github} className="hover:text-[var(--fg)]">
                    GitHub: sidnevart
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-12 pb-4">
        <div className="container-shell grid gap-6 xl:grid-cols-[0.72fr_1.28fr]">
          <div className="rounded-[32px] border border-[var(--line)] bg-[var(--surface)] p-7">
            <p className="eyebrow">
              {safeLocale === "ru"
                ? "Основной стек"
                : safeLocale === "en"
                  ? "Core stack"
                  : "Stack principal"}
            </p>
            <div className="mt-4 grid gap-3 text-base leading-7 text-[var(--fg-muted)]">
              <p>
                {safeLocale === "ru"
                  ? "Языки: Java, Kotlin, Python, Go, TypeScript, SQL"
                  : safeLocale === "en"
                    ? "Languages: Java, Kotlin, Python, Go, TypeScript, SQL"
                    : "Lenguajes: Java, Kotlin, Python, Go, TypeScript, SQL"}
              </p>
              <p>
                {safeLocale === "ru"
                  ? "Данные и очереди: PostgreSQL, ClickHouse, Redis, Kafka, очереди задач на PostgreSQL"
                  : safeLocale === "en"
                    ? "Data and queues: PostgreSQL, ClickHouse, Redis, Kafka, Postgres-backed task queues"
                    : "Datos y colas: PostgreSQL, ClickHouse, Redis, Kafka"}
              </p>
              <p>
                {safeLocale === "ru"
                  ? "API и интеграции: REST/gRPC, партнёрские потоки данных, вебхуки, ролевые сценарии"
                  : safeLocale === "en"
                    ? "APIs and integrations: REST/gRPC, partner data pipelines, webhooks, role-based flows"
                    : "APIs e integraciones: REST/gRPC, datos de partners, webhooks, roles"}
              </p>
              <p>
                {safeLocale === "ru"
                  ? "Открыт к ролям: бэкенд-разработчик уровня Middle+ / Senior- в продуктовых и платформенных командах"
                  : safeLocale === "en"
                    ? "Open to roles: Backend Engineer (Middle+ / Senior-) in product and platform teams"
                    : "Open to roles: Backend Engineer (Middle+ / Senior-) en producto y plataforma"}
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            {resumeContent.sections.map((section) => (
              <div
                key={section.title.ru}
                className="rounded-[32px] border border-[var(--line)] bg-[var(--surface)] p-7"
              >
                <p className="eyebrow">{text(section.title, safeLocale)}</p>
                <div className="mt-5 grid gap-3">
                  {textList(section.items, safeLocale).map((item) => (
                    <p key={item} className="text-base leading-7 text-[var(--fg-muted)]">
                      • {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
