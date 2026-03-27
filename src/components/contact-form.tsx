"use client";

import { useState } from "react";
import type { AppLocale } from "@/i18n/routing";
import { siteContacts } from "@/data/content";

const inquiryTypes = {
  ru: ["Hiring", "Contract", "Startup", "OSS / networking"],
  en: ["Hiring", "Contract", "Startup", "OSS / networking"],
  es: ["Hiring", "Contract", "Startup", "OSS / networking"]
} as const;

export function ContactForm({ locale }: { locale: AppLocale }) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [inquiry, setInquiry] = useState<string>(inquiryTypes[locale][0]);
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(`[Portfolio] ${inquiry} — ${company || name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company}\nTrack: ${inquiry}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:${siteContacts.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[32px] border border-[var(--line)] bg-[var(--surface)] p-6 md:p-7"
    >
      <div className="mb-6 border-b border-[var(--line)] pb-5">
        <p className="text-sm uppercase tracking-[0.18em] text-[var(--fg-soft)]">
          {locale === "ru" ? "Email draft" : locale === "en" ? "Email draft" : "Borrador de email"}
        </p>
        <p className="mt-3 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
          {locale === "ru"
            ? "Оставь короткий контекст. Дальше сайт откроет письмо с уже собранной темой и структурой."
            : locale === "en"
              ? "Leave a short context. The site will open an email draft with a prefilled subject and structure."
              : "Deja un contexto breve. El sitio abrirá un borrador de email con asunto y estructura ya preparados."}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-[var(--fg-muted)]">
            {locale === "ru" ? "Имя" : locale === "en" ? "Name" : "Nombre"}
          </span>
          <input
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="rounded-2xl border border-[var(--line)] bg-transparent px-4 py-3 outline-none transition focus:border-[var(--line-strong)]"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-[var(--fg-muted)]">
            {locale === "ru" ? "Компания" : locale === "en" ? "Company" : "Empresa"}
          </span>
          <input
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            className="rounded-2xl border border-[var(--line)] bg-transparent px-4 py-3 outline-none transition focus:border-[var(--line-strong)]"
          />
        </label>
      </div>

      <label className="mt-4 grid gap-2">
        <span className="text-sm font-semibold text-[var(--fg-muted)]">
          {locale === "ru" ? "Сценарий" : locale === "en" ? "Track" : "Escenario"}
        </span>
        <select
          value={inquiry}
          onChange={(event) => setInquiry(event.target.value)}
          className="rounded-2xl border border-[var(--line)] bg-transparent px-4 py-3 outline-none transition focus:border-[var(--line-strong)]"
        >
          {inquiryTypes[locale].map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>

      <label className="mt-4 grid gap-2">
        <span className="text-sm font-semibold text-[var(--fg-muted)]">
          {locale === "ru" ? "Сообщение" : locale === "en" ? "Message" : "Mensaje"}
        </span>
        <textarea
          required
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={6}
          className="rounded-2xl border border-[var(--line)] bg-transparent px-4 py-3 outline-none transition focus:border-[var(--line-strong)]"
        />
      </label>

      <button
        type="submit"
        className="mt-6 inline-flex rounded-full bg-[var(--fg)] px-5 py-3 text-sm font-semibold text-[var(--bg)] transition hover:opacity-90"
      >
        {locale === "ru"
          ? "Открыть письмо"
          : locale === "en"
            ? "Open email draft"
            : "Abrir borrador"}
      </button>
    </form>
  );
}
