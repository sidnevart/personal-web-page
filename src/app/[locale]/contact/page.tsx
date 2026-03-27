import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";
import { siteContacts, siteContent, text } from "@/data/content";
import { buildMetadata } from "@/lib/metadata";
import { getLocaleFromParams } from "../layout";

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
    title:
      safeLocale === "ru" ? "Контакт" : safeLocale === "en" ? "Contact" : "Contacto"
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

      <section className="pt-8">
        <div className="container-shell grid gap-8 xl:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-6">
            <div className="border-b border-[var(--line)] pb-8">
              <p className="eyebrow">
                {safeLocale === "ru"
                  ? "Contact"
                  : safeLocale === "en"
                    ? "Contact"
                    : "Contacto"}
              </p>
              <h1 className="section-title mt-4">
                {safeLocale === "ru"
                  ? "Лучше короткий понятный контакт, чем тяжёлый процесс ради формы"
                  : safeLocale === "en"
                    ? "A short, clear contact path works better than a heavy process around the form"
                    : "Un camino de contacto corto y claro funciona mejor que un proceso pesado alrededor del formulario"}
              </h1>
              <p className="mt-6 text-base leading-8 text-[var(--fg-muted)]">
                {text(siteContent.contact.body, safeLocale)}
              </p>
            </div>

            <div className="rounded-[28px] border border-[var(--line)] bg-[var(--surface)] p-6">
              <p className="eyebrow">
                {safeLocale === "ru"
                  ? "Direct"
                  : safeLocale === "en"
                    ? "Direct"
                    : "Directo"}
              </p>
              <div className="mt-4 grid gap-3 text-base text-[var(--fg-muted)]">
                <a href={`mailto:${siteContacts.email}`} className="transition hover:text-[var(--fg)]">
                  {siteContacts.email}
                </a>
                <a
                  href={siteContacts.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-[var(--fg)]"
                >
                  Telegram
                </a>
                <a
                  href={siteContacts.github}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-[var(--fg)]"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-[var(--line)] bg-[var(--surface)] p-6">
              <p className="eyebrow">
                {safeLocale === "ru"
                  ? "Scenarios"
                  : safeLocale === "en"
                    ? "Scenarios"
                    : "Escenarios"}
              </p>
              <div className="mt-4 grid gap-3 text-sm leading-6 text-[var(--fg-muted)]">
                <p>
                  {safeLocale === "ru"
                    ? "Hiring и долгосрочные инженерные роли"
                    : safeLocale === "en"
                      ? "Hiring and longer-term engineering roles"
                      : "Hiring y roles de ingeniería a más largo plazo"}
                </p>
                <p>
                  {safeLocale === "ru"
                    ? "Контрактная работа по backend, внутренним платформам и прикладным сервисам"
                    : safeLocale === "en"
                      ? "Contract work across backend, internal platforms, and applied services"
                      : "Trabajo contractual en backend, plataformas internas y servicios aplicados"}
                </p>
                <p>
                  {safeLocale === "ru"
                    ? "Telegram-сервисы, CRM-сценарии и новые продуктовые запуски"
                    : safeLocale === "en"
                      ? "Telegram services, CRM workflows, and new product launches"
                      : "Servicios en Telegram, flujos CRM y nuevos lanzamientos de producto"}
                </p>
              </div>
              <p className="mt-5 text-sm leading-6 text-[var(--fg-soft)]">
                {safeLocale === "ru"
                  ? "Форма справа открывает email draft, а не делает лишний backend там, где он не нужен."
                  : safeLocale === "en"
                    ? "The form opens an email draft instead of adding unnecessary backend complexity where it is not needed."
                    : "El formulario abre un borrador de email en lugar de añadir complejidad backend innecesaria."}
              </p>
            </div>
          </div>

          <ContactForm locale={safeLocale} />
        </div>
      </section>
    </>
  );
}
