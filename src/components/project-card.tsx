"use client";

import { useRouter } from "next/navigation";
import { Project } from "@/lib/data";
import { Tag } from "./tag";
import { ArrowUpRight, Monitor, Smartphone, Star } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/projects/${project.slug}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleCardClick();
    }
  };

  return (
    <article
      className={`group relative rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-within:shadow-lg cursor-pointer ${
        project.featured
          ? "border-primary/30 bg-card/80 backdrop-blur-sm shadow-primary/5 hover:border-primary/50 hover:shadow-primary/10"
          : "border-border bg-card hover:border-ring/50"
      }`}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="link"
      aria-label={`${project.title} project — view case study`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
            {project.category}
          </span>
          {project.featured && (
            <span className="inline-flex items-center gap-1 text-[10px] font-mono text-primary bg-primary/10 px-1.5 py-0.5 rounded">
              <Star className="w-2.5 h-2.5" /> Featured
            </span>
          )}
          {project.isSyntheticDemo && (
            <span className="text-xs font-mono text-yellow-500" aria-label="Demo user interface">Demo UI</span>
          )}
        </div>
        <div className="flex gap-2" aria-hidden="true">
          {project.needsFrontend && !project.hasRealScreenshots && (
            <Monitor className="w-4 h-4 text-muted-foreground" />
          )}
          {project.hasRealScreenshots && (
            <Smartphone className="w-4 h-4 text-muted-foreground" />
          )}
        </div>
      </div>

      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>

      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {project.subtitle}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4" aria-label="Tech stack">
        {project.stack.slice(0, 5).map((tech) => (
          <Tag key={tech} label={tech} />
        ))}
        {project.stack.length > 5 && (
          <Tag label={`+${project.stack.length - 5}`} variant="muted" />
        )}
      </div>

      {project.metrics.length > 0 && (
        <div className="grid grid-cols-2 gap-2 mb-4" role="list" aria-label="Project metrics">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className={`rounded-md p-2 ${project.featured ? "bg-primary/5 border border-primary/10" : "bg-secondary/30"}`}
              role="listitem"
            >
              <div className="text-sm font-mono font-semibold text-foreground">{metric.value}</div>
              <div className="text-xs text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>
      )}

      {(project.links.length > 0 || project.showcaseType === "case-study") && (
        <div className="flex gap-3 mt-4">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-primary hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded px-1"
              aria-label={`${link.label} — ${project.title}`}
              onClick={(e) => e.stopPropagation()}
            >
              {link.label}
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          ))}
          {project.showcaseType === "case-study" && (
            <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
              View case study
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </span>
          )}
        </div>
      )}
    </article>
  );
}
