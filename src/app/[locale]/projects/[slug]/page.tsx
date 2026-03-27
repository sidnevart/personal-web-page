import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { ProjectCover } from "@/components/project-cover";
import {
  categoryLabel,
  getProjectBySlug,
  getProjectSlugs,
  text,
  textList
} from "@/data/content";
import { buildMetadata } from "@/lib/metadata";
import { getLocaleFromParams } from "../../layout";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const safeLocale = getLocaleFromParams(locale);
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return buildMetadata({
    locale: safeLocale,
    path: `/${safeLocale}/projects/${slug}`,
    title: text(project.title, safeLocale),
    description: text(project.summary, safeLocale)
  });
}

export default async function ProjectPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const safeLocale = getLocaleFromParams(locale);
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: text(project.title, safeLocale),
          description: text(project.summary, safeLocale),
          url: `https://portfolio.example.com/${safeLocale}/projects/${project.slug}`,
          creator: {
            "@type": "Person",
            name: "Artem Sidnev"
          }
        }}
      />

      <section className="pt-8">
        <div className="container-shell">
          <div className="max-w-5xl">
            <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.14em] text-[var(--fg-soft)]">
              <span className="rounded-full border border-[var(--line)] px-3 py-1">
                {text(categoryLabel[project.category], safeLocale)}
              </span>
            </div>

            <h1 className="section-title mt-6">{text(project.title, safeLocale)}</h1>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-[var(--fg-muted)]">
              {text(project.summary, safeLocale)}
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-[24px] border border-[var(--line)] bg-[var(--surface)] p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--fg-soft)]">
                {safeLocale === "ru" ? "Роль" : safeLocale === "en" ? "Role" : "Rol"}
              </p>
              <p className="mt-3 text-sm leading-6 text-[var(--fg-muted)]">
                {text(project.detail.role, safeLocale)}
              </p>
            </div>
            <div className="rounded-[24px] border border-[var(--line)] bg-[var(--surface)] p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--fg-soft)]">
                {safeLocale === "ru"
                  ? "Что это"
                  : safeLocale === "en"
                    ? "What it is"
                    : "Que es"}
              </p>
              <p className="mt-3 text-sm leading-6 text-[var(--fg-muted)]">
                {text(project.short, safeLocale)}
              </p>
            </div>
            <div className="rounded-[24px] border border-[var(--line)] bg-[var(--surface)] p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--fg-soft)]">
                {safeLocale === "ru"
                  ? "Период"
                  : safeLocale === "en"
                    ? "Period"
                    : "Periodo"}
              </p>
              <p className="mt-3 text-sm leading-6 text-[var(--fg-muted)]">{project.year}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10">
        <div className="container-shell">
          <ProjectCover
            project={project}
            locale={safeLocale}
            priority
            className="min-h-[340px] md:min-h-[500px]"
          />
        </div>
      </section>

      <section className="pt-10">
        <div className="container-shell grid gap-6 xl:grid-cols-[0.82fr_1.18fr]">
          <div className="rounded-[32px] border border-[var(--line)] bg-[var(--surface)] p-6">
            <p className="eyebrow">
              {safeLocale === "ru"
                ? "Коротко"
                : safeLocale === "en"
                  ? "In short"
                  : "En corto"}
            </p>
            <p className="mt-4 text-2xl leading-9 tracking-[-0.04em]">
              {text(project.short, safeLocale)}
            </p>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--fg-soft)]">
                {safeLocale === "ru"
                  ? "Tech stack"
                  : safeLocale === "en"
                    ? "Tech stack"
                    : "Stack"}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-[var(--surface-strong)] px-3 py-1 text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.detail.note ? (
              <p className="mt-8 border-t border-[var(--line)] pt-5 text-sm leading-6 text-[var(--fg-soft)]">
                {text(project.detail.note, safeLocale)}
              </p>
            ) : null}
          </div>

          <div className="grid gap-6">
            <div className="rounded-[32px] border border-[var(--line)] bg-[var(--surface)] p-6">
              <p className="eyebrow">
                {safeLocale === "ru"
                  ? "Контекст / проблема"
                  : safeLocale === "en"
                    ? "Context / problem"
                    : "Contexto / problema"}
              </p>
              <p className="mt-4 text-base leading-8 text-[var(--fg-muted)]">
                {text(project.detail.challenge, safeLocale)}
              </p>
            </div>

            <div className="rounded-[32px] border border-[var(--line)] bg-[var(--surface)] p-6">
              <p className="eyebrow">
                {safeLocale === "ru"
                  ? "Что было сделано"
                  : safeLocale === "en"
                    ? "What was built"
                    : "Qué se construyó"}
              </p>
              <div className="mt-4 grid gap-3">
                {textList(project.detail.solution, safeLocale).map((item) => (
                  <p key={item} className="text-base leading-7 text-[var(--fg-muted)]">
                    • {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10">
        <div className="container-shell grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] border border-[var(--line)] bg-[var(--surface)] p-6">
            <p className="eyebrow">
              {safeLocale === "ru"
                ? "Моя роль"
                : safeLocale === "en"
                  ? "My role"
                  : "Mi rol"}
            </p>
            <p className="mt-4 text-base leading-8 text-[var(--fg-muted)]">
              {text(project.detail.role, safeLocale)}
            </p>
          </div>

          <div className="rounded-[32px] border border-[var(--line)] bg-[var(--surface)] p-6">
            <p className="eyebrow">
              {safeLocale === "ru"
                ? "Результат"
                : safeLocale === "en"
                  ? "Result"
                  : "Resultado"}
            </p>
            <div className="mt-4 grid gap-3">
              {textList(project.detail.result, safeLocale).map((item) => (
                <p key={item} className="text-base leading-7 text-[var(--fg-muted)]">
                  • {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10">
        <div className="container-shell">
          <div className="rounded-[32px] border border-[var(--line)] bg-[var(--surface)] p-6">
            <p className="eyebrow">
              {safeLocale === "ru" ? "Links" : safeLocale === "en" ? "Links" : "Links"}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {project.links.length > 0 ? (
                project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                    className="inline-flex rounded-full border border-[var(--line)] px-4 py-2 text-sm font-semibold transition hover:border-[var(--line-strong)] hover:bg-[var(--surface-strong)]"
                  >
                    {text(link.label, safeLocale)}
                  </a>
                ))
              ) : (
                <p className="text-sm text-[var(--fg-soft)]">
                  {safeLocale === "ru"
                    ? "Публичных ссылок пока нет или для этого кейса всё ещё не хватает материалов."
                    : safeLocale === "en"
                      ? "There are no public links yet, or the case still needs more source material."
                      : "Todavía no hay enlaces públicos o al caso aún le falta más material fuente."}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
