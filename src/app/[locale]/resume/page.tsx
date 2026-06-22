import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { Link } from "@/i18n/navigation";
import { resumeContent, siteContacts, text, textList } from "@/data/content";
import { buildMetadata } from "@/lib/metadata";
import { getLocaleFromParams } from "@/lib/locale";

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
          name: "Artem Sidnev Resume"
        }}
      />

      <section className="container pt-16 md:pt-24">
        {/* ─── CV Header ─── */}
        <h1 className="text-display">Artem Sidnev</h1>
        <p className="mt-3 text-body">{text(resumeContent.summary, safeLocale)}</p>

        <div className="mt-6 flex flex-wrap gap-4 text-small">
          <a href={`mailto:${siteContacts.email}`} className="link-muted">{siteContacts.email}</a>
          <a href={siteContacts.telegram} target="_blank" rel="noreferrer" className="link-muted">Telegram: @sidnevart</a>
          <a href={siteContacts.github} target="_blank" rel="noreferrer" className="link-muted">GitHub: sidnevart</a>
          <a href={siteContacts.linkedin} target="_blank" rel="noreferrer" className="link-muted">LinkedIn</a>
        </div>

        <div className="mt-6 flex flex-wrap gap-4 text-small">
          <a href="/resume/artem-sidnev-resume-ru.pdf" download className="link">
            {safeLocale === "ru" ? "Скачать PDF (RU)" : safeLocale === "en" ? "Download PDF (RU)" : "Descargar PDF (RU)"}
          </a>
          <a href="/resume/artem-sidnev-resume-en.pdf" download className="link">
            {safeLocale === "ru" ? "Скачать PDF (EN)" : safeLocale === "en" ? "Download PDF (EN)" : "Descargar PDF (EN)"}
          </a>
          <Link href="/resume/latex" className="link">
            {safeLocale === "ru" ? "LaTeX версия" : safeLocale === "en" ? "LaTeX version" : "Versión LaTeX"}
          </Link>
        </div>

        {/* ─── Highlights ─── */}
        <section className="mt-12">
          <h2 className="text-h2">
            {safeLocale === "ru" ? "Ключевые достижения" : safeLocale === "en" ? "Key Highlights" : "Logros clave"}
          </h2>
          <hr className="section-rule mt-3" />
          <ul className="mt-6 space-y-2 text-body list-disc list-inside marker:text-[var(--fg-soft)]">
            {textList(resumeContent.highlights, safeLocale).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {/* ─── Experience ─── */}
        {resumeContent.sections.map((section) => (
          <section key={section.title.ru} className="mt-12">
            <h2 className="text-h2">{text(section.title, safeLocale)}</h2>
            <hr className="section-rule mt-3" />
            <ul className="mt-6 space-y-3 text-body list-disc list-inside marker:text-[var(--fg-soft)]">
              {textList(section.items, safeLocale).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}

        {/* ─── Stack ─── */}
        <section className="mt-12">
          <h2 className="text-h2">
            {safeLocale === "ru" ? "Стек" : safeLocale === "en" ? "Stack" : "Stack"}
          </h2>
          <hr className="section-rule mt-3" />
          <dl className="mt-6 space-y-3">
            <div className="grid grid-cols-[120px_1fr] gap-4">
              <dt className="text-caption pt-0.5">{safeLocale === "ru" ? "Языки" : safeLocale === "en" ? "Languages" : "Lenguajes"}</dt>
              <dd className="text-body">Java, Kotlin, Python, Go, TypeScript, SQL</dd>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-4">
              <dt className="text-caption pt-0.5">{safeLocale === "ru" ? "Данные" : safeLocale === "en" ? "Data" : "Datos"}</dt>
              <dd className="text-body">PostgreSQL, ClickHouse, Kafka, Redis, pgvector</dd>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-4">
              <dt className="text-caption pt-0.5">API</dt>
              <dd className="text-body">REST, gRPC, Spring Boot, FastAPI</dd>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-4">
              <dt className="text-caption pt-0.5">{safeLocale === "ru" ? "Инфра" : safeLocale === "en" ? "Infra" : "Infra"}</dt>
              <dd className="text-body">Docker, Kubernetes, GitLab CI/CD, Prometheus, Grafana</dd>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-4">
              <dt className="text-caption pt-0.5">AI/LLM</dt>
              <dd className="text-body">RAG, LangChain, OpenAI, MCP, n8n, Ollama</dd>
            </div>
          </dl>
        </section>
      </section>
    </>
  );
}
