"use client";

import { experiences } from "@/lib/data";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeader } from "@/components/section-header";
import { Tag } from "@/components/tag";
import { Building2, Briefcase, Code2, GraduationCap } from "lucide-react";

const companyIcons: Record<string, React.ReactNode> = {
  "T-Bank": <Briefcase className="w-5 h-5 text-primary" />,
  "Large Real Estate Agency": <Building2 className="w-5 h-5 text-primary" />,
  Freelance: <Code2 className="w-5 h-5 text-primary" />,
};

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeader
            id="experience-title"
            title="Experience"
            subtitle="Corporate, freelance, and open-source work."
          />
        </ScrollReveal>

        <div className="space-y-8" role="list" aria-label="Work experience">
          {experiences.map((exp, index) => (
            <ScrollReveal key={exp.id} delay={index * 0.1}>
              <article
                className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                role="listitem"
                aria-label={`${exp.role} at ${exp.company}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary/20"
                    aria-hidden="true"
                  >
                    {companyIcons[exp.company] || <Building2 className="w-5 h-5 text-primary" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <span className="text-sm font-mono text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-primary font-medium mb-3">
                      {exp.company}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {exp.description}
                    </p>
                    <ul className="space-y-2 mb-4" aria-label="Key achievements">
                      {exp.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="text-sm text-foreground flex items-start gap-2"
                        >
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" aria-hidden="true" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <div
                      className="flex flex-wrap gap-1.5"
                      aria-label="Technologies used"
                    >
                      {exp.stack.map((tech) => (
                        <Tag key={tech} label={tech} />
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
