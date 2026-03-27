import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { ProjectCard } from "@/components/project-card";
import { Link } from "@/i18n/navigation";
import { getFeaturedProjects, siteContacts, siteContent, text, textList } from "@/data/content";
import { buildMetadata } from "@/lib/metadata";
import { getLocaleFromParams } from "./layout";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = getLocaleFromParams(locale);

  return buildMetadata({
    locale: safeLocale,
    path: `/${safeLocale}`,
    title: safeLocale === "ru" ? "Портфолио" : "Portfolio"
  });
}

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = getLocaleFromParams(locale);
  const featured = getFeaturedProjects();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Artem Sidnev",
          jobTitle: "Middle Software Engineer (Backend / DevOps)",
          url: `https://portfolio.example.com/${safeLocale}`,
          sameAs: [siteContacts.github, siteContacts.telegram],
          email: siteContacts.email,
          knowsAbout: [
            "Backend Engineering",
            "Internal Platforms",
            "Analytical Services",
            "CRM",
            "Applied Software"
          ]
        }}
      />

      <section className="pt-8 md:pt-12">
        <div className="container-shell">
          <div className="grid gap-10 border-b border-[var(--line)] pb-14 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-4xl">
              <p className="eyebrow">{text(siteContent.hero.eyebrow, safeLocale)}</p>
              <h1 className="section-title mt-6 max-w-4xl text-balance">
                {text(siteContent.hero.headline, safeLocale)}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--fg-muted)] md:text-xl">
                {text(siteContent.hero.subheadline, safeLocale)}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="inline-flex rounded-full border border-[var(--line-strong)] bg-[var(--surface-strong)] px-5 py-3 text-sm font-semibold text-[var(--fg)] transition hover:opacity-90"
                >
                  {safeLocale === "ru"
                    ? "Смотреть проекты"
                    : safeLocale === "en"
                      ? "View projects"
                      : "Ver proyectos"}
                </Link>
                <Link
                  href="/resume"
                  className="inline-flex rounded-full border border-[var(--line)] px-5 py-3 text-sm font-semibold transition hover:border-[var(--line-strong)] hover:bg-[var(--surface)]"
                >
                  {safeLocale === "ru"
                    ? "Открыть резюме"
                    : safeLocale === "en"
                      ? "Open resume"
                      : "Ver CV"}
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex rounded-full border border-[var(--line)] px-5 py-3 text-sm font-semibold transition hover:border-[var(--line-strong)] hover:bg-[var(--surface)]"
                >
                  {safeLocale === "ru"
                    ? "Связаться"
                    : safeLocale === "en"
                      ? "Get in touch"
                      : "Contactar"}
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              {textList(siteContent.hero.proof, safeLocale).map((point) => (
                <div
                  key={point}
                  className="rounded-[28px] border border-[var(--line)] bg-[var(--surface)] p-6"
                >
                  <p className="text-base leading-7 text-[var(--fg-muted)]">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-16 md:pt-20" id="featured">
        <div className="container-shell">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">
                {safeLocale === "ru"
                  ? "Избранные кейсы"
                  : safeLocale === "en"
                    ? "Selected work"
                    : "Casos seleccionados"}
              </p>
              <h2 className="section-title mt-4">
                {safeLocale === "ru"
                  ? "Ключевые проекты"
                  : safeLocale === "en"
                    ? "Selected projects"
                    : "Proyectos clave"}
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden rounded-full border border-[var(--line)] px-4 py-2 text-sm font-semibold text-[var(--fg)] transition hover:border-[var(--line-strong)] hover:bg-[var(--surface)] md:inline-flex"
            >
              {safeLocale === "ru"
                ? "Все проекты"
                : safeLocale === "en"
                  ? "All projects"
                  : "Todos los proyectos"}
            </Link>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} locale={safeLocale} />
            ))}
          </div>
        </div>
      </section>

      <section className="pt-16 md:pt-20">
        <div className="container-shell">
          <div className="mb-8 max-w-3xl">
            <p className="eyebrow">{text(siteContent.capabilities.title, safeLocale)}</p>
            <h2 className="section-title mt-4">
              {safeLocale === "ru"
                ? "Сферы, где я наиболее полезен"
                : safeLocale === "en"
                  ? "Where I am most useful"
                  : "Dónde aporto más valor"}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {siteContent.capabilities.items.map((item) => (
              <article
                key={item.title.ru}
                className="rounded-[28px] border border-[var(--line)] bg-[var(--surface)] p-6"
              >
                <h3 className="font-[var(--font-heading)] text-3xl font-semibold tracking-[-0.05em]">
                  {text(item.title, safeLocale)}
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--fg-muted)]">
                  {text(item.body, safeLocale)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-16 md:pt-20">
        <div className="container-shell">
          <div className="grid gap-6 xl:grid-cols-2">
            <article className="rounded-[28px] border border-[var(--line)] bg-[var(--surface)] p-6">
              <p className="eyebrow">{text(siteContent.currentWork.title, safeLocale)}</p>
              <p className="mt-4 text-base leading-7 text-[var(--fg-muted)]">
                {text(siteContent.currentWork.intro, safeLocale)}
              </p>
              <div className="mt-4 grid gap-2 text-sm leading-7 text-[var(--fg-muted)]">
                {textList(siteContent.currentWork.points, safeLocale).map((point) => (
                  <p key={point}>• {point}</p>
                ))}
              </div>
            </article>

            <article className="rounded-[28px] border border-[var(--line)] bg-[var(--surface)] p-6">
              <p className="eyebrow">{text(siteContent.freelance.title, safeLocale)}</p>
              <p className="mt-4 text-base leading-7 text-[var(--fg-muted)]">
                {text(siteContent.freelance.intro, safeLocale)}
              </p>
              <div className="mt-4 grid gap-2 text-sm leading-7 text-[var(--fg-muted)]">
                {textList(siteContent.freelance.points, safeLocale).map((point) => (
                  <p key={point}>• {point}</p>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="pt-16 md:pt-20">
        <div className="container-shell">
          <div className="grid gap-8 border-t border-[var(--line)] pt-10 xl:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow">
                {safeLocale === "ru" ? "Контакт" : safeLocale === "en" ? "Contact" : "Contacto"}
              </p>
              <h2 className="section-title mt-4">{text(siteContent.contact.title, safeLocale)}</h2>
            </div>

            <div className="grid gap-6">
              <p className="max-w-3xl text-base leading-8 text-[var(--fg-muted)]">
                {text(siteContent.contact.body, safeLocale)}
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-[var(--fg-soft)]">
                <a href={`mailto:${siteContacts.email}`} className="transition hover:text-[var(--fg)]">
                  {siteContacts.email}
                </a>
                <a
                  href={siteContacts.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-[var(--fg)]"
                >
                  Telegram
                </a>
                <a
                  href={siteContacts.github}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-[var(--fg)]"
                >
                  GitHub
                </a>
              </div>

              <div>
                <Link
                  href="/contact"
                  className="inline-flex rounded-full border border-[var(--line-strong)] bg-[var(--surface-strong)] px-5 py-3 text-sm font-semibold text-[var(--fg)] transition hover:opacity-90"
                >
                  {safeLocale === "ru"
                    ? "Открыть контакт"
                    : safeLocale === "en"
                      ? "Open contact page"
                      : "Abrir contacto"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
