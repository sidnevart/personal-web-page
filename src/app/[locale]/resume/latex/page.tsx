import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { getLocaleFromParams } from "../../layout";

function readTex(fileName: string) {
  const fullPath = path.join(process.cwd(), "public", "resume", fileName);
  return fs.readFileSync(fullPath, "utf8");
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = getLocaleFromParams(locale);

  return buildMetadata({
    locale: safeLocale,
    path: `/${safeLocale}/resume/latex`,
    title: safeLocale === "ru" ? "LaTeX резюме" : safeLocale === "en" ? "LaTeX resume" : "CV LaTeX"
  });
}

export default async function LatexResumePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = getLocaleFromParams(locale);

  const ruTex = readTex("artem-sidnev-resume-ru.tex");
  const enTex = readTex("artem-sidnev-resume-en.tex");
  const ruPdfPath = path.join(process.cwd(), "public", "resume", "artem-sidnev-resume-ru.pdf");
  const enPdfPath = path.join(process.cwd(), "public", "resume", "artem-sidnev-resume-en.pdf");
  const hasRuPdf = fs.existsSync(ruPdfPath);
  const hasEnPdf = fs.existsSync(enPdfPath);

  return (
    <section className="pt-8 pb-12">
      <div className="container-shell">
        <div className="border-b border-[var(--line)] pb-8">
          <p className="eyebrow">LaTeX</p>
          <h1 className="section-title mt-4">
            {safeLocale === "ru"
              ? "LaTeX-версии резюме (RU / EN)"
              : safeLocale === "en"
                ? "Resume in LaTeX (RU / EN)"
                : "CV en LaTeX (RU / EN)"}
          </h1>
          <p className="mt-4 text-base leading-7 text-[var(--fg-muted)]">
            {safeLocale === "ru"
              ? "Ниже можно прямо посмотреть исходники .tex и скачать их."
              : safeLocale === "en"
                ? "You can view and download both .tex source files below."
                : "Abajo puedes ver y descargar ambos archivos .tex."}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a
              href="/resume/artem-sidnev-resume-ru.tex"
              download
              className="inline-flex rounded-full border border-[var(--line)] px-4 py-2 font-semibold hover:border-[var(--line-strong)] hover:bg-[var(--surface)]"
            >
              RU .tex
            </a>
            <a
              href="/resume/artem-sidnev-resume-en.tex"
              download
              className="inline-flex rounded-full border border-[var(--line)] px-4 py-2 font-semibold hover:border-[var(--line-strong)] hover:bg-[var(--surface)]"
            >
              EN .tex
            </a>
          </div>
        </div>

        <div className="mt-8 grid gap-8 xl:grid-cols-2">
          <article className="rounded-[28px] border border-[var(--line)] bg-[var(--surface)] p-5">
            <h2 className="font-[var(--font-heading)] text-3xl font-semibold tracking-[-0.05em]">
              RU resume.tex
            </h2>
            <pre className="mt-4 overflow-x-auto rounded-xl border border-[var(--line)] bg-[var(--bg)] p-4 text-xs leading-6 text-[var(--fg-muted)]">
              <code>{ruTex}</code>
            </pre>
          </article>

          <article className="rounded-[28px] border border-[var(--line)] bg-[var(--surface)] p-5">
            <h2 className="font-[var(--font-heading)] text-3xl font-semibold tracking-[-0.05em]">
              EN resume.tex
            </h2>
            <pre className="mt-4 overflow-x-auto rounded-xl border border-[var(--line)] bg-[var(--bg)] p-4 text-xs leading-6 text-[var(--fg-muted)]">
              <code>{enTex}</code>
            </pre>
          </article>
        </div>

        <div className="mt-8 grid gap-8 xl:grid-cols-2">
          <article className="rounded-[28px] border border-[var(--line)] bg-[var(--surface)] p-5">
            <h2 className="font-[var(--font-heading)] text-3xl font-semibold tracking-[-0.05em]">
              RU resume.pdf
            </h2>
            {hasRuPdf ? (
              <iframe
                title="RU resume PDF"
                src="/resume/artem-sidnev-resume-ru.pdf"
                className="mt-4 h-[70vh] w-full rounded-xl border border-[var(--line)] bg-white"
              />
            ) : (
              <p className="mt-4 text-sm text-[var(--fg-muted)]">
                {safeLocale === "ru"
                  ? "PDF пока не найден: добавь файл public/resume/artem-sidnev-resume-ru.pdf"
                  : safeLocale === "en"
                    ? "PDF not found yet: add public/resume/artem-sidnev-resume-ru.pdf"
                    : "PDF no encontrado: añade public/resume/artem-sidnev-resume-ru.pdf"}
              </p>
            )}
          </article>

          <article className="rounded-[28px] border border-[var(--line)] bg-[var(--surface)] p-5">
            <h2 className="font-[var(--font-heading)] text-3xl font-semibold tracking-[-0.05em]">
              EN resume.pdf
            </h2>
            {hasEnPdf ? (
              <iframe
                title="EN resume PDF"
                src="/resume/artem-sidnev-resume-en.pdf"
                className="mt-4 h-[70vh] w-full rounded-xl border border-[var(--line)] bg-white"
              />
            ) : (
              <p className="mt-4 text-sm text-[var(--fg-muted)]">
                {safeLocale === "ru"
                  ? "PDF пока не найден: добавь файл public/resume/artem-sidnev-resume-en.pdf"
                  : safeLocale === "en"
                    ? "PDF not found yet: add public/resume/artem-sidnev-resume-en.pdf"
                    : "PDF no encontrado: añade public/resume/artem-sidnev-resume-en.pdf"}
              </p>
            )}
          </article>
        </div>
      </div>
    </section>
  );
}
