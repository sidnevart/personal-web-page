import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { Link } from "@/i18n/navigation";
import { projects, text, categoryLabel } from "@/data/content";
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
    path: `/${safeLocale}/projects`,
    title: safeLocale === "ru" ? "Проекты" : safeLocale === "en" ? "Projects" : "Proyectos"
  });
}

export default async function ProjectsPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = getLocaleFromParams(locale);

  const labels = {
    ru: { open: "→ Кейс" },
    en: { open: "→ Case study" },
    es: { open: "→ Caso" }
  }[safeLocale];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Projects — Artem Sidnev"
        }}
      />

      <section className="container pt-16 md:pt-24">
        <h1 className="text-h1">
          {safeLocale === "ru" ? "Проекты" : safeLocale === "en" ? "Projects" : "Proyectos"}
        </h1>
        <p className="mt-4 text-body max-w-xl">
          {safeLocale === "ru"
            ? "Проекты, которые лучше всего показывают мой уровень, тип задач и прикладную ценность работы."
            : safeLocale === "en"
              ? "Projects that best show my level, the type of work I do, and the practical value of what I build."
              : "Proyectos que mejor muestran mi nivel, tipo de trabajo y valor práctico."}
        </p>

        <hr className="section-rule mt-8" />

        <div className="mt-8 space-y-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block border border-[var(--line)] rounded-lg overflow-hidden hover:border-[var(--line-strong)] transition"
            >
              {/* Cover image as thumbnail */}
              <div className="overflow-hidden">
                <img
                  src={`/personal-web-page${project.cover.src}`}
                  alt={text(project.cover.alt, safeLocale)}
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* Text content */}
              <div className="p-5">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h2 className="text-h3 group-hover:text-[var(--accent)] transition-colors">
                    {text(project.title, safeLocale)}
                  </h2>
                  <span className="text-small">{project.year}</span>
                </div>
                <p className="mt-1 text-caption">
                  {text(categoryLabel[project.category], safeLocale)}
                </p>
                <p className="mt-2 text-body">{text(project.summary, safeLocale)}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
                <span className="mt-3 inline-block text-small text-[var(--accent)] group-hover:text-[var(--accent-hover)] transition-colors">
                  {labels.open}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
