"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, Send, FileDown } from "lucide-react";
import { GithubIcon, LinkedInIcon, TelegramIcon } from "@/components/icons";
import { siteConfig } from "@/lib/data";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 xl:px-12 py-20 overflow-hidden"
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-sm font-mono text-muted-foreground mb-4">
            {siteConfig.title}
          </p>
        </motion.div>

        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6"
        >
          Artem Sidnev
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-wrap gap-4 mb-6"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            View Projects
            <ArrowDown className="w-4 h-4" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary/80 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Get in Touch
            <Send className="w-4 h-4" aria-hidden="true" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-wrap gap-3 mb-12"
        >
          <a
            href={siteConfig.resume.en}
            download
            className="inline-flex items-center gap-2 border border-border bg-card text-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-secondary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            aria-label="Download CV in English"
          >
            <FileDown className="w-4 h-4" aria-hidden="true" />
            CV (EN)
          </a>
          <a
            href={siteConfig.resume.ru}
            download
            className="inline-flex items-center gap-2 border border-border bg-card text-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-secondary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            aria-label="Скачать резюме на русском"
          >
            <FileDown className="w-4 h-4" aria-hidden="true" />
            CV (RU)
          </a>
        </motion.div>

        <motion.nav
          aria-label="Social links"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex gap-6"
        >
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded"
            aria-label="GitHub profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon className="w-5 h-5" />
          </a>
          <a
            href={siteConfig.social.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded"
            aria-label="Telegram contact"
          >
            <TelegramIcon className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded"
            aria-label="Send email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.nav>
      </div>
    </section>
  );
}
