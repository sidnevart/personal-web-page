import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { readFileSync } from "fs";
import { join } from "path";
import { JsonLd } from "@/components/json-ld";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { TechStackGrid } from "@/components/tech-stack-grid";
import { MetricsHighlight } from "@/components/metrics-highlight";
import {
  categoryLabel,
  getProjectBySlug,
  getProjectSlugs,
  text,
  textList
} from "@/data/content";
import { buildMetadata } from "@/lib/metadata";
import { getLocaleFromParams } from "@/lib/locale";

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

  if (!project) return {};

  return buildMetadata({
    locale: safeLocale,
    path: `/${safeLocale}/projects/${slug}`,
    title: text(project.title, safeLocale),
    description: text(project.summary, safeLocale)
  });
}

function getArchitectureSvg(slug: string): string | null {
  try {
    const svgPath = join(process.cwd(), "public", "architecture", `${slug}.svg`);
    return readFileSync(svgPath, "utf-8");
  } catch {
    return null;
  }
}

export default async function ProjectPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const safeLocale = getLocaleFromParams(locale);
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const architectureSvg = getArchitectureSvg(slug);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: text(project.title, safeLocale),
          description: text(project.summary, safeLocale),
          creator: { "@type": "Person", name: "Artem Sidnev" }
        }}
      />

      <section className="container pt-16 md:pt-24">
        {/* ─── Header ─── */}
        <p className="text-caption">{text(categoryLabel[project.category], safeLocale)}</p>
        <h1 className="text-h1 mt-3">{text(project.title, safeLocale)}</h1>
        <p className="mt-4 text-body max-w-xl">{text(project.summary, safeLocale)}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>

        {project.links.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-4 text-small">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="link"
              >
                {text(link.label, safeLocale)} ↗
              </a>
            ))}
          </div>
        )}

        {/* ─── Metrics ─── */}
        {project.metrics && project.metrics.length > 0 && (
          <section className="mt-12">
            <MetricsHighlight
              metrics={project.metrics.map((m) => ({
                label: text(m.label, safeLocale),
                value: m.value
              }))}
            />
          </section>
        )}

        {/* ─── Architecture Diagram ─── */}
        {architectureSvg && (
          <section className="mt-12">
            <h2 className="text-h2">
              {safeLocale === "ru" ? "Архитектура" : safeLocale === "en" ? "Architecture" : "Arquitectura"}
            </h2>
            <hr className="section-rule mt-3" />
            <ArchitectureDiagram svg={architectureSvg} />
          </section>
        )}

        {/* ─── Tech Stack ─── */}
        {project.techDetails && project.techDetails.length > 0 && (
          <section className="mt-12">
            <h2 className="text-h2">
              {safeLocale === "ru" ? "Стек" : safeLocale === "en" ? "Tech Stack" : "Stack"}
            </h2>
            <hr className="section-rule mt-3" />
            <TechStackGrid
              items={project.techDetails.map((t) => ({
                name: t.name,
                role: text(t.role, safeLocale)
              }))}
            />
          </section>
        )}

        {/* ─── Challenge ─── */}
        <section className="mt-12">
          <h2 className="text-h2">
            {safeLocale === "ru" ? "Проблема" : safeLocale === "en" ? "The Problem" : "El Problema"}
          </h2>
          <hr className="section-rule mt-3" />
          <p className="mt-6 text-body">{text(project.detail.challenge, safeLocale)}</p>
        </section>

        {/* ─── Solution ─── */}
        <section className="mt-12">
          <h2 className="text-h2">
            {safeLocale === "ru" ? "Решение" : safeLocale === "en" ? "The Solution" : "La Solución"}
          </h2>
          <hr className="section-rule mt-3" />
          <ul className="mt-6 space-y-2 text-body list-disc list-inside marker:text-[var(--fg-soft)]">
            {textList(project.detail.solution, safeLocale).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {/* ─── Role ─── */}
        <section className="mt-12">
          <h2 className="text-h2">
            {safeLocale === "ru" ? "Моя роль" : safeLocale === "en" ? "My Role" : "Mi Rol"}
          </h2>
          <hr className="section-rule mt-3" />
          <p className="mt-6 text-body">{text(project.detail.role, safeLocale)}</p>
        </section>

        {/* ─── Results ─── */}
        <section className="mt-12">
          <h2 className="text-h2">
            {safeLocale === "ru" ? "Результат" : safeLocale === "en" ? "Results" : "Resultados"}
          </h2>
          <hr className="section-rule mt-3" />
          <ul className="mt-6 space-y-2 text-body list-disc list-inside marker:text-[var(--fg-soft)]">
            {textList(project.detail.result, safeLocale).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {/* ─── Note ─── */}
        {project.detail.note && (
          <section className="mt-12">
            <p className="text-small italic">{text(project.detail.note, safeLocale)}</p>
          </section>
        )}
      </section>
    </>
  );
}
