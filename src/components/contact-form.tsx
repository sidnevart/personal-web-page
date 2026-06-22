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
    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-caption block mb-2">
            {locale === "ru" ? "Имя" : locale === "en" ? "Name" : "Nombre"}
          </span>
          <input
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full border-b border-[var(--line)] bg-transparent py-2 text-body outline-none transition focus:border-[var(--fg)]"
          />
        </label>

        <label className="block">
          <span className="text-caption block mb-2">
            {locale === "ru" ? "Компания" : locale === "en" ? "Company" : "Empresa"}
          </span>
          <input
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            className="w-full border-b border-[var(--line)] bg-transparent py-2 text-body outline-none transition focus:border-[var(--fg)]"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-caption block mb-2">
          {locale === "ru" ? "Сценарий" : locale === "en" ? "Track" : "Escenario"}
        </span>
        <select
          value={inquiry}
          onChange={(event) => setInquiry(event.target.value)}
          className="w-full border-b border-[var(--line)] bg-transparent py-2 text-body outline-none transition focus:border-[var(--fg)]"
        >
          {inquiryTypes[locale].map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="text-caption block mb-2">
          {locale === "ru" ? "Сообщение" : locale === "en" ? "Message" : "Mensaje"}
        </span>
        <textarea
          required
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={5}
          className="w-full border-b border-[var(--line)] bg-transparent py-2 text-body outline-none transition focus:border-[var(--fg)] resize-none"
        />
      </label>

      <button
        type="submit"
        className="text-small text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors underline underline-offset-4"
      >
        {locale === "ru" ? "Открыть письмо →" : locale === "en" ? "Open email draft →" : "Abrir borrador →"}
      </button>
    </form>
  );
}
