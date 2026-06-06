"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeader } from "@/components/section-header";
import { siteConfig } from "@/lib/data";
import { Mail, FileDown } from "lucide-react";
import { GithubIcon, LinkedInIcon, TelegramIcon } from "@/components/icons";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12"
    >
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <SectionHeader
            id="contact-title"
            title="Get in Touch"
            subtitle="Open to backend, platform, and AI tooling roles."
            centered
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            I am interested in backend, platform, AI tooling, and developer productivity roles where engineering work has a direct product or business impact.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors w-full sm:w-auto justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              aria-label={`Send email to ${siteConfig.email}`}
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
              {siteConfig.email}
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <p className="text-sm text-muted-foreground mb-4">Download CV:</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <a
              href={siteConfig.resume.en}
              download
              className="inline-flex items-center gap-2 border border-border bg-card text-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors w-full sm:w-auto justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              aria-label="Download CV in English"
            >
              <FileDown className="w-5 h-5" aria-hidden="true" />
              CV (English)
            </a>
            <a
              href={siteConfig.resume.ru}
              download
              className="inline-flex items-center gap-2 border border-border bg-card text-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors w-full sm:w-auto justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              aria-label="Скачать резюме на русском"
            >
              <FileDown className="w-5 h-5" aria-hidden="true" />
              CV (Русский)
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <nav aria-label="Social media links" className="flex justify-center gap-6">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded"
              aria-label="GitHub profile"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon className="w-6 h-6" />
            </a>
            <a
              href={siteConfig.social.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded"
              aria-label="Telegram contact"
            >
              <TelegramIcon className="w-6 h-6" />
            </a>
          </nav>
        </ScrollReveal>
      </div>
    </section>
  );
}
