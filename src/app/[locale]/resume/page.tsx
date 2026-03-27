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
          url: `https://portfolio.example.com/${safeLocale}/resume`
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
                  href={safeLocale === "ru" ? "/resume/artem-sidnev-resume-ru.pdf" : "/resume/artem-sidnev-resume-en.pdf"}
                  download
                  className="inline-flex rounded-full border border-[var(--line-strong)] bg-[var(--surface-strong)] px-5 py-3 text-sm font-semibold text-[var(--fg)] transition hover:opacity-90"
                >
                  {safeLocale === "ru"
                    ? "Скачать PDF"
                    : safeLocale === "en"
                      ? "Download PDF"
                      : "Descargar PDF"}
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
                <p>{siteContacts.email}</p>
                <p className="mt-1">Telegram: @sidnevart</p>
                <p className="mt-1">GitHub: sidnevart</p>
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
                  ? "Языки: Java, Kotlin, Go, Rust, TypeScript"
                  : safeLocale === "en"
                    ? "Languages: Java, Kotlin, Go, Rust, TypeScript"
                    : "Lenguajes: Java, Kotlin, Go, Rust, TypeScript"}
              </p>
              <p>
                {safeLocale === "ru"
                  ? "Данные: PostgreSQL, ClickHouse, Redis, Kafka"
                  : safeLocale === "en"
                    ? "Data: PostgreSQL, ClickHouse, Redis, Kafka"
                    : "Datos: PostgreSQL, ClickHouse, Redis, Kafka"}
              </p>
              <p>
                {safeLocale === "ru"
                  ? "Продукты: внутренние платформы, аналитические сервисы, CRM, Telegram-боты"
                  : safeLocale === "en"
                    ? "Product work: internal platforms, analytical services, CRM, Telegram bots"
                    : "Trabajo de producto: plataformas internas, servicios analíticos, CRM y bots de Telegram"}
              </p>
              <p>
                {safeLocale === "ru"
                  ? "Open to roles: Middle Backend / DevOps (product + platform teams)"
                  : safeLocale === "en"
                    ? "Open to roles: Middle Backend / DevOps (product + platform teams)"
                    : "Open to roles: Middle Backend / DevOps (equipos de producto y plataforma)"}
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
