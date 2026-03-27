import Image from "next/image";
import type { AppLocale } from "@/i18n/routing";
import { text, type Project } from "@/data/content";
import { cn } from "@/lib/utils";

export function ProjectCover({
  project,
  locale,
  className,
  priority = false
}: {
  project: Project;
  locale: AppLocale;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[32px] border-b border-[var(--line)] bg-[var(--surface-strong)]",
        className
      )}
    >
      <Image
        src={project.cover.src}
        alt={text(project.cover.alt, locale)}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 60vw"
        className="object-cover"
      />
    </div>
  );
}
