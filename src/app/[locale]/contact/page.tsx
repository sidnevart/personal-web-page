import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";
import { siteContacts, siteContent, text } from "@/data/content";
import { buildMetadata } from "@/lib/metadata";
import { getLocaleFromParams } from "@/lib/locale";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = getLocaleFromParams(locale);
  return buildMetadata({
    locale: safeLocale,
    path: `/${safeLocale}/contact`,
    title: safeLocale === "ru" ? "Контакт" : safeLocale === "en" ? "Contact" : "Contacto"
  });
}

export default async function ContactPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = getLocaleFromParams(locale);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Artem Sidnev"
        }}
      />

      <section className="container pt-16 md:pt-24">
        <h1 className="text-h1">
          {safeLocale === "ru" ? "Связаться" : safeLocale === "en" ? "Contact" : "Contacto"}
        </h1>
        <p className="mt-4 text-body max-w-xl">
          {text(siteContent.contact.body, safeLocale)}
        </p>

        {/* ─── Direct channels ─── */}
        <section className="mt-12">
          <h2 className="text-h2">
            {safeLocale === "ru" ? "Прямые каналы" : safeLocale === "en" ? "Direct" : "Directo"}
          </h2>
          <hr className="section-rule mt-3" />
          <div className="mt-6 space-y-2 text-body">
            <p><a href={`mailto:${siteContacts.email}`} className="link">{siteContacts.email}</a></p>
            <p><a href={siteContacts.telegram} target="_blank" rel="noreferrer" className="link">Telegram: @sidnevart</a></p>
            <p><a href={siteContacts.github} target="_blank" rel="noreferrer" className="link">GitHub: sidnevart</a></p>
            <p><a href={siteContacts.linkedin} target="_blank" rel="noreferrer" className="link">LinkedIn</a></p>
            <p><a href={siteContacts.medium} target="_blank" rel="noreferrer" className="link">Medium: @a.sidnevart</a></p>
          </div>
        </section>

        {/* ─── Scenarios ─── */}
        <section className="mt-12">
          <h2 className="text-h2">
            {safeLocale === "ru" ? "По каким вопросам" : safeLocale === "en" ? "What I can help with" : "En qué puedo ayudar"}
          </h2>
          <hr className="section-rule mt-3" />
          <ul className="mt-6 space-y-2 text-body list-disc list-inside marker:text-[var(--fg-soft)]">
            <li>
              {safeLocale === "ru"
                ? "Hiring и долгосрочные инженерные роли"
                : safeLocale === "en"
                  ? "Hiring and longer-term engineering roles"
                  : "Hiring y roles de ingeniería a más largo plazo"}
            </li>
            <li>
              {safeLocale === "ru"
                ? "Контрактная работа: backend, внутренние платформы, прикладные сервисы"
                : safeLocale === "en"
                  ? "Contract work: backend, internal platforms, applied services"
                  : "Trabajo contractual: backend, plataformas internas, servicios aplicados"}
            </li>
            <li>
              {safeLocale === "ru"
                ? "Telegram-сервисы, CRM-сценарии, новые продуктовые запуски"
                : safeLocale === "en"
                  ? "Telegram services, CRM workflows, new product launches"
                  : "Servicios en Telegram, flujos CRM, nuevos lanzamientos de producto"}
            </li>
          </ul>
        </section>

        {/* ─── Email form ─── */}
        <section className="mt-12">
          <h2 className="text-h2">
            {safeLocale === "ru" ? "Написать письмо" : safeLocale === "en" ? "Send an email" : "Enviar un email"}
          </h2>
          <hr className="section-rule mt-3" />
          <p className="mt-6 text-body">
            {safeLocale === "ru"
              ? "Заполни короткую форму — сайт откроет письмо с уже собранной темой и структурой."
              : safeLocale === "en"
                ? "Fill in a short form — the site will open an email draft with a prefilled subject and structure."
                : "Rellena un formulario breve — el sitio abrirá un borrador de email con asunto y estructura preparados."}
          </p>
          <ContactForm locale={safeLocale} />
        </section>
      </section>
    </>
  );
}
