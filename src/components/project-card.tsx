import type { AppLocale } from "@/i18n/routing";
import { categoryLabel, text, type Project } from "@/data/content";
import { Link } from "@/i18n/navigation";
import { ProjectCover } from "./project-cover";

export function ProjectCard({
  project,
  locale
}: {
  project: Project;
  locale: AppLocale;
}) {
  return (
    <article className="group overflow-hidden rounded-[32px] border border-[var(--line)] bg-[var(--surface)] transition hover:border-[var(--line-strong)]">
      <Link href={`/projects/${project.slug}`} aria-label={text(project.title, locale)}>
        <ProjectCover project={project} locale={locale} className="min-h-[260px]" />
      </Link>
      <div className="space-y-4 p-6">
        <p className="text-sm text-[var(--fg-soft)]">
          {project.year} • {text(categoryLabel[project.category], locale)}
        </p>
        <div>
          <Link href={`/projects/${project.slug}`} className="block">
            <h3 className="font-[var(--font-heading)] text-3xl font-semibold tracking-[-0.05em] transition group-hover:opacity-80">
              {text(project.title, locale)}
            </h3>
          </Link>
          <p className="mt-3 text-base leading-7 text-[var(--fg-muted)]">
            {text(project.summary, locale)}
          </p>
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex rounded-full border border-[var(--line)] px-4 py-2 text-sm font-semibold transition hover:border-[var(--line-strong)] hover:bg-[var(--surface-strong)]"
        >
          {locale === "ru"
            ? "Открыть кейс"
            : locale === "en"
              ? "Open case study"
              : "Abrir caso"}
        </Link>
      </div>
    </article>
  );
}
