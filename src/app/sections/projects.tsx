"use client";

import { projects } from "@/lib/data";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeader } from "@/components/section-header";
import { ProjectCard } from "@/components/project-card";

export function ProjectsSection() {
  const caseStudyProjects = projects.filter((p) => p.showcaseType === "case-study");

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeader
            id="projects-title"
            title="Selected Projects"
            subtitle="Backend systems, AI automation, and full-stack products."
          />
        </ScrollReveal>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          role="list"
          aria-label="Projects"
        >
          {caseStudyProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <div role="listitem">
                <ProjectCard project={project} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
