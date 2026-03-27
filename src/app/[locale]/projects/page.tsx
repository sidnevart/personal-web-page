import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { JsonLd } from "@/components/json-ld";
import { projects } from "@/data/content";
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
    path: `/${safeLocale}/projects`,
    title: safeLocale === "ru" ? "Проекты" : safeLocale === "en" ? "Projects" : "Proyectos",
    description:
      safeLocale === "ru"
        ? "Ключевые проекты Артёма Сиднева: внутренние платформы, аналитические сервисы, CRM и прикладные продукты."
        : safeLocale === "en"
          ? "Selected work by Artem Sidnev across internal platforms, analytical services, CRM, and applied products."
          : "Proyectos clave de Artem Sidnev entre plataformas internas, servicios analíticos, CRM y productos aplicados."
  });
}

export default async function ProjectsPage({
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
          "@type": "CollectionPage",
          name: "Projects",
          url: `https://portfolio.example.com/${safeLocale}/projects`
        }}
      />

      <section className="pt-8">
        <div className="container-shell">
          <div className="max-w-4xl border-b border-[var(--line)] pb-12">
            <p className="eyebrow">
              {safeLocale === "ru"
                ? "Проекты"
                : safeLocale === "en"
                  ? "Projects"
                  : "Proyectos"}
            </p>
            <h1 className="section-title mt-4">
              {safeLocale === "ru"
                ? "Ключевые кейсы"
                : safeLocale === "en"
                  ? "Selected work"
                  : "Casos clave"}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--fg-muted)]">
              {safeLocale === "ru"
                ? "Здесь оставлены только проекты, которые лучше всего показывают мой уровень, тип задач и прикладную ценность работы."
                : safeLocale === "en"
                  ? "This page keeps only the projects that show my level, my type of work, and the practical value of what I build."
                  : "Esta página conserva solo los proyectos que mejor muestran mi nivel, mi tipo de trabajo y el valor práctico de lo que construyo."}
            </p>
          </div>
        </div>
      </section>

      <section className="pt-12 pb-4">
        <div className="container-shell">
          <div className="grid gap-6 xl:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} locale={safeLocale} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
