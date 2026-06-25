import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { Link } from "@/i18n/navigation";
import { siteContacts, siteContent, text, textList, getFeaturedProjects } from "@/data/content";
import { buildMetadata } from "@/lib/metadata";
import { getLocaleFromParams } from "@/lib/locale";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = getLocaleFromParams(locale);
  return buildMetadata({ locale: safeLocale, path: `/${safeLocale}` });
}

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = getLocaleFromParams(locale);
  const featured = getFeaturedProjects();

  const labels = {
    ru: { projects: "Проекты", resume: "Резюме", contact: "Связаться", experience: "Опыт", selected: "Избранные проекты", skills: "Навыки", openCase: "→ Кейс" },
    en: { projects: "Projects", resume: "Resume", contact: "Contact", experience: "Experience", selected: "Selected Projects", skills: "Skills", openCase: "→ Case study" },
    es: { projects: "Proyectos", resume: "CV", contact: "Contacto", experience: "Experiencia", selected: "Proyectos seleccionados", skills: "Habilidades", openCase: "→ Caso" }
  }[safeLocale];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Artem Sidnev",
          jobTitle: "Software Engineer",
          url: `https://sidnevart.github.io/personal-web-page/${safeLocale}`,
          sameAs: [siteContacts.github, siteContacts.telegram, siteContacts.linkedin],
          email: siteContacts.email,
          worksFor: { "@type": "Organization", name: "T-Bank" },
          knowsAbout: ["Backend Engineering", "High-Load Systems", "Data Platforms", "AI/LLM Automation", "Kotlin", "Java", "Go"],
          description: "Software Engineer at T-Bank, Technical Lead of CDP. ~4 years of experience."
        }}
      />

      <section className="container pt-16 md:pt-24">
        {/* ─── Hero ─── */}
        <div>
          <h1 className="text-display">Artem Sidnev</h1>
          <p className="mt-3 text-caption">
            Software Engineer · Java / Kotlin / Go · ~4 years
          </p>
          <p className="mt-6 text-body max-w-xl">
            {text(siteContent.hero.subheadline, safeLocale)}
          </p>
          <div className="mt-6 flex gap-6 text-small">
            <Link href="/projects" className="link">{labels.projects}</Link>
            <Link href="/resume" className="link">{labels.resume}</Link>
            <Link href="/contact" className="link">{labels.contact}</Link>
          </div>
        </div>

        {/* ─── Key Metrics ─── */}
        <div className="mt-12 pt-8 border-t border-[var(--line)]">
          <div className="flex flex-wrap gap-x-1 gap-y-2 text-small">
            {textList(siteContent.hero.proof, safeLocale).map((point, i) => (
              <span key={point}>
                {i > 0 && <span className="mx-2 text-[var(--fg-soft)]">·</span>}
                {point}
              </span>
            ))}
          </div>
        </div>

        {/* ─── Experience ─── */}
        <section className="mt-16">
          <h2 className="text-h2">{labels.experience}</h2>
          <hr className="section-rule mt-3" />

          <div className="mt-8 space-y-10">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-h3">T-Bank — Software Engineer</h3>
                <span className="text-small">Oct 2025 – Present</span>
              </div>
              <p className="mt-1 text-caption">Technical Lead of CDP · Customer Data Platform</p>
              <ul className="mt-4 space-y-2 text-body list-disc list-inside marker:text-[var(--fg-soft)]">
                {textList(siteContent.currentWork.points, safeLocale).map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-h3">Freelance & Client Projects</h3>
                <span className="text-small">May 2022 – Aug 2024</span>
              </div>
              <p className="mt-1 text-caption">Booking · Loyalty · Real Estate Analytics</p>
              <ul className="mt-4 space-y-2 text-body list-disc list-inside marker:text-[var(--fg-soft)]">
                {textList(siteContent.freelance.points, safeLocale).map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Selected Projects ─── */}
        <section className="mt-16">
          <div className="flex items-baseline justify-between">
            <h2 className="text-h2">{labels.selected}</h2>
            <Link href="/projects" className="text-small link-muted">{labels.projects} →</Link>
          </div>
          <hr className="section-rule mt-3" />

          <div className="mt-6 space-y-8">
            {featured.map((project) => (
              <div key={project.slug} className="group">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <Link href={`/projects/${project.slug}`}>
                    <h3 className="text-h3 group-hover:text-[var(--accent)] transition-colors">
                      {text(project.title, safeLocale)}
                    </h3>
                  </Link>
                  <span className="text-small">{project.year}</span>
                </div>
                <p className="mt-2 text-body">{text(project.summary, safeLocale)}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-3 inline-block text-small text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
                >
                  {labels.openCase}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Skills ─── */}
        <section className="mt-16">
          <h2 className="text-h2">{labels.skills}</h2>
          <hr className="section-rule mt-3" />

          <dl className="mt-6 space-y-4">
            {siteContent.capabilities.items.map((item) => (
              <div key={item.title.ru} className="grid grid-cols-[140px_1fr] gap-4">
                <dt className="text-caption pt-0.5">{text(item.title, safeLocale)}</dt>
                <dd className="text-body">{text(item.body, safeLocale)}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ─── Contact ─── */}
        <section className="mt-16 pt-8 border-t border-[var(--line)]">
          <h2 className="text-h2">{text(siteContent.contact.title, safeLocale)}</h2>
          <p className="mt-4 text-body">{text(siteContent.contact.body, safeLocale)}</p>
          <div className="mt-6 flex flex-wrap gap-6 text-small">
            <a href={`mailto:${siteContacts.email}`} className="link-muted">{siteContacts.email}</a>
            <a href={siteContacts.telegram} target="_blank" rel="noreferrer" className="link-muted">Telegram</a>
            <a href={siteContacts.github} target="_blank" rel="noreferrer" className="link-muted">GitHub</a>
            <a href={siteContacts.linkedin} target="_blank" rel="noreferrer" className="link-muted">LinkedIn</a>
            <a href={siteContacts.medium} target="_blank" rel="noreferrer" className="link-muted">Medium</a>
          </div>
        </section>
      </section>
    </>
  );
}
