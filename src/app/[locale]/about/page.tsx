import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { artemProfile, siteContent, text, textList } from "@/data/content";
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
    path: `/${safeLocale}/about`,
    title: safeLocale === "ru" ? "Обо мне" : safeLocale === "en" ? "About" : "Perfil"
  });
}

export default async function AboutPage({
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
          "@type": "AboutPage",
          name: "About Artem Sidnev"
        }}
      />

      <section className="container pt-16 md:pt-24">
        {/* ─── Profile ─── */}
        <h1 className="text-display">Artem Sidnev</h1>
        <p className="mt-3 text-caption">{text(artemProfile.role, safeLocale)}</p>
        <p className="mt-6 text-body max-w-xl">{text(artemProfile.summary, safeLocale)}</p>

        {artemProfile.contacts && (
          <div className="mt-6 flex flex-wrap gap-4 text-small">
            {artemProfile.contacts.email && (
              <a href={`mailto:${artemProfile.contacts.email}`} className="link-muted">{artemProfile.contacts.email}</a>
            )}
            {artemProfile.contacts.telegram && (
              <a href={artemProfile.contacts.telegram} target="_blank" rel="noreferrer" className="link-muted">Telegram</a>
            )}
            {artemProfile.contacts.github && (
              <a href={artemProfile.contacts.github} target="_blank" rel="noreferrer" className="link-muted">GitHub</a>
            )}
            {artemProfile.contacts.linkedin && (
              <a href={artemProfile.contacts.linkedin} target="_blank" rel="noreferrer" className="link-muted">LinkedIn</a>
            )}
          </div>
        )}

        {/* ─── Current Work ─── */}
        <section className="mt-16">
          <h2 className="text-h2">{text(siteContent.currentWork.title, safeLocale)}</h2>
          <hr className="section-rule mt-3" />
          <p className="mt-6 text-body">{text(siteContent.currentWork.intro, safeLocale)}</p>
          <ul className="mt-4 space-y-2 text-body list-disc list-inside marker:text-[var(--fg-soft)]">
            {textList(siteContent.currentWork.points, safeLocale).map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>

        {/* ─── Freelance ─── */}
        <section className="mt-16">
          <h2 className="text-h2">{text(siteContent.freelance.title, safeLocale)}</h2>
          <hr className="section-rule mt-3" />
          <p className="mt-6 text-body">{text(siteContent.freelance.intro, safeLocale)}</p>
          <ul className="mt-4 space-y-2 text-body list-disc list-inside marker:text-[var(--fg-soft)]">
            {textList(siteContent.freelance.points, safeLocale).map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>

        {/* ─── Capabilities ─── */}
        <section className="mt-16">
          <h2 className="text-h2">{text(siteContent.capabilities.title, safeLocale)}</h2>
          <hr className="section-rule mt-3" />
          <dl className="mt-6 space-y-4">
            {siteContent.capabilities.items.map((item) => (
              <div key={item.title.ru} className="grid grid-cols-[140px_1fr] gap-4">
                <dt className="text-caption pt-0.5">{text(item.title, safeLocale)}</dt>
                <dd className="text-body">{text(item.body, safeLocale)}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ─── Approach ─── */}
        <section className="mt-16">
          <h2 className="text-h2">{text(siteContent.approach.title, safeLocale)}</h2>
          <hr className="section-rule mt-3" />
          <p className="mt-6 text-body">{text(siteContent.approach.intro, safeLocale)}</p>
          <ul className="mt-4 space-y-2 text-body list-disc list-inside marker:text-[var(--fg-soft)]">
            {textList(siteContent.approach.points, safeLocale).map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>
      </section>
    </>
  );
}
