"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeader } from "@/components/section-header";
import { Cpu, Database, Bot, Code2 } from "lucide-react";

const focusAreas = [
  {
    icon: Database,
    title: "Data-Intensive Systems",
    description:
      "Building backend services that process millions of transactions daily. ClickHouse, PostgreSQL, Kafka, and Redis.",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "AI-assisted code review, RAG onboarding agents, CI refactor bots, and workflow automation with n8n.",
  },
  {
    icon: Cpu,
    title: "Internal Platforms",
    description:
      "Developer productivity tooling, skill libraries, and platform engineering for engineering teams.",
  },
  {
    icon: Code2,
    title: "Full-Stack Products",
    description:
      "Telegram Mini Apps with FastAPI backends, React frontends, and YClients integrations.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeader
            id="about-title"
            title="About"
            subtitle="Engineering focus areas and expertise."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal>
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                I build backend systems, internal platforms, and AI-enabled automation that make complex workflows faster, clearer, and easier to scale.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With nearly 3 years of experience across banking, partner platforms, commercial real-estate analytics, Telegram Mini Apps, and open-source, my strongest areas are data-intensive services, internal platforms, integrations, CI/CD improvement, and applying AI agents to real operational workflows.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                At T-Bank, I work on a cashback targeting platform that processes partner audience data and helps deliver relevant offers to customers. I have built targeting logic over large transaction flows, contributed to ClickHouse-based analytical workflows, automated manual setup steps, improved validation, and accelerated CI pipelines.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Core skills: Java, Kotlin, Go, Python, TypeScript, Spring Boot, FastAPI, PostgreSQL, ClickHouse, Redis, Kafka, GitLab CI, Docker, n8n, RAG, AI agents, internal platforms, workflow automation, and analytical services.
              </p>
            </div>
          </ScrollReveal>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            role="list"
            aria-label="Engineering focus areas"
          >
            {focusAreas.map((area, index) => (
              <ScrollReveal key={area.title} delay={index * 0.1}>
                <article
                  className="rounded-xl border border-border bg-card p-6 h-full"
                  role="listitem"
                >
                  <div
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4"
                    aria-hidden="true"
                  >
                    <area.icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {area.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {area.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
