"use client";

import { motion } from "framer-motion";
import { Project } from "@/lib/data";
import Link from "next/link";
import { Tag } from "./tag";
import { MetricsGrid } from "./metrics-grid";
import { DemoUIManager } from "./demo-ui/demo-ui-manager";
import { ArrowUpRight, ArrowLeft, Monitor, AlertTriangle, Camera, Lightbulb, Target, ListChecks, Trophy, FileText, CheckSquare } from "lucide-react";

interface ProjectDetailPageProps {
  project: Project;
}

function imgPath(src: string) {
  return `/personal-web-page/${src}`;
}

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 xl:px-12"
      >
        <div className="max-w-6xl mx-auto">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded px-1"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              {project.category}
            </span>
            {project.isSyntheticDemo && (
              <span className="inline-flex items-center gap-1 text-xs font-mono text-yellow-500">
                <Monitor className="w-3 h-3" /> Demo UI
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mb-6">
            {project.subtitle}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.stack.map((tech) => (
              <Tag key={tech} label={tech} />
            ))}
          </div>

          {project.links.length > 0 && (
            <div className="flex gap-4 mb-8">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-foreground transition-colors"
                >
                  {link.label}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          )}
        </div>
      </motion.section>

      {/* Metrics */}
      {project.metrics.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 xl:px-12 border-y border-border">
          <div className="max-w-6xl mx-auto">
            <MetricsGrid metrics={project.metrics} />
          </div>
        </section>
      )}

      {/* Problem & Solution */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-border bg-card p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                <Lightbulb className="w-4 h-4 text-red-400" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Problem</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {project.problem}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl border border-border bg-card p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                <Target className="w-4 h-4 text-green-400" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Solution</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {project.solution}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Demo UI */}
      {project.isSyntheticDemo && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 xl:px-12 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                <Monitor className="w-4 h-4 text-yellow-500" />
              </div>
              <div>
                <span className="text-sm font-mono text-yellow-500">
                  Synthetic Demo UI
                </span>
                <p className="text-xs text-muted-foreground">
                  Reconstructed visualization based on project description.
                </p>
              </div>
            </div>

            <DemoUIManager project={project} />
          </div>
        </section>
      )}

      {/* Real Screenshots */}
      {project.hasRealScreenshots && project.screenshots && project.screenshots.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 xl:px-12 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                <Camera className="w-4 h-4 text-green-500" />
              </div>
              <div>
                <span className="text-sm font-mono text-green-500">
                  Production Screenshots
                </span>
                <p className="text-xs text-muted-foreground">
                  Real screenshots from the live application or landing page.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {project.screenshots.map((shot, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-xl border border-border bg-card overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imgPath(shot.src)}
                    alt={shot.alt}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  <div className="p-3 border-t border-border">
                    <p className="text-xs text-muted-foreground">{shot.alt}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Responsibilities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <ListChecks className="w-4 h-4 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Key Responsibilities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.responsibilities.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
              >
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <CheckSquare className="w-3 h-3 text-primary" />
                </span>
                <span className="text-sm text-muted-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
              <Trophy className="w-4 h-4 text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Results & Impact</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.results.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
              >
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center mt-0.5">
                  <CheckSquare className="w-3 h-3 text-green-400" />
                </span>
                <span className="text-sm text-muted-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Confidentiality & TODOs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-border">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-border bg-card p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <FileText className="w-4 h-4 text-amber-400" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Confidentiality Notes
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.confidentialityNotes}
            </p>
          </motion.div>

          {project.todos.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <CheckSquare className="w-4 h-4 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  TODOs
                </h3>
              </div>
              <ul className="space-y-3">
                {project.todos.map((todo, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="flex-shrink-0 w-5 h-5 rounded border border-muted-foreground/30 flex items-center justify-center mt-0.5"></span>
                    {todo}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
