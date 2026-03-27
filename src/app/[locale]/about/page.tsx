import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { ProfileCard } from "@/components/profile-card";
import { artemProfile, siteContent, text, textList } from "@/data/content";
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
    path: `/${safeLocale}/about`,
    title: safeLocale === "ru" ? "Профиль" : safeLocale === "en" ? "About" : "Perfil"
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

      <section className="pt-8">
        <div className="container-shell">
          <div className="max-w-4xl border-b border-[var(--line)] pb-12">
            <p className="eyebrow">
              {safeLocale === "ru" ? "About" : safeLocale === "en" ? "About" : "Perfil"}
            </p>
            <h1 className="section-title mt-4">
              {safeLocale === "ru"
                ? "Middle Backend / DevOps engineer: внутренние платформы, data-heavy сервисы и продуктовые backend-сценарии."
                : safeLocale === "en"
                  ? "Middle Backend / DevOps engineer: internal platforms, data-heavy services, and product backend flows."
                  : "Middle Backend / DevOps engineer: plataformas internas, servicios intensivos en datos y flujos backend de producto."}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--fg-muted)]">
              {safeLocale === "ru"
                ? "Фокус: надёжность, скорость критичных контуров и измеримый бизнес-эффект — меньше ручных операций, больше предсказуемости и качества."
                : safeLocale === "en"
                  ? "Focus: reliability, faster critical flows, and measurable business impact — less manual work, more predictability, better quality."
                  : "Foco: fiabilidad, flujos críticos más rápidos e impacto medible: menos trabajo manual y más previsibilidad."}
            </p>
          </div>
        </div>
      </section>

      <section className="pt-12">
        <div className="container-shell max-w-3xl">
          <ProfileCard profile={artemProfile} locale={safeLocale} />
        </div>
      </section>

      <section className="pt-12">
        <div className="container-shell grid gap-6 xl:grid-cols-2">
          <article className="rounded-[28px] border border-[var(--line)] bg-[var(--surface)] p-6">
            <p className="eyebrow">{text(siteContent.currentWork.title, safeLocale)}</p>
            <p className="mt-4 text-base leading-7 text-[var(--fg-muted)]">
              {text(siteContent.currentWork.intro, safeLocale)}
            </p>
            <div className="mt-4 grid gap-2 text-sm leading-7 text-[var(--fg-muted)]">
              {textList(siteContent.currentWork.points, safeLocale).map((point) => (
                <p key={point}>• {point}</p>
              ))}
            </div>
          </article>

          <article className="rounded-[28px] border border-[var(--line)] bg-[var(--surface)] p-6">
            <p className="eyebrow">{text(siteContent.freelance.title, safeLocale)}</p>
            <p className="mt-4 text-base leading-7 text-[var(--fg-muted)]">
              {text(siteContent.freelance.intro, safeLocale)}
            </p>
            <div className="mt-4 grid gap-2 text-sm leading-7 text-[var(--fg-muted)]">
              {textList(siteContent.freelance.points, safeLocale).map((point) => (
                <p key={point}>• {point}</p>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="pt-12">
        <div className="container-shell">
          <div className="mb-8 max-w-3xl">
            <p className="eyebrow">{text(siteContent.capabilities.title, safeLocale)}</p>
            <h2 className="section-title mt-4">
              {safeLocale === "ru"
                ? "Как я обычно строю работу"
                : safeLocale === "en"
                  ? "How I usually structure the work"
                  : "Cómo suelo estructurar el trabajo"}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {siteContent.capabilities.items.map((item) => (
              <article
                key={item.title.ru}
                className="rounded-[28px] border border-[var(--line)] bg-[var(--surface)] p-6"
              >
                <h3 className="font-[var(--font-heading)] text-3xl font-semibold tracking-[-0.05em]">
                  {text(item.title, safeLocale)}
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--fg-muted)]">
                  {text(item.body, safeLocale)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-12">
        <div className="container-shell">
          <div className="grid gap-8 border-t border-[var(--line)] pt-10 xl:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow">{text(siteContent.approach.title, safeLocale)}</p>
              <h2 className="section-title mt-4">
                {safeLocale === "ru"
                  ? "Как я обычно подхожу к работе"
                  : safeLocale === "en"
                    ? "How I usually approach the work"
                    : "Cómo suelo abordar el trabajo"}
              </h2>
            </div>

            <div className="grid gap-4 text-base leading-8 text-[var(--fg-muted)]">
              <p>{text(siteContent.approach.intro, safeLocale)}</p>
              {textList(siteContent.approach.points, safeLocale).map((point) => (
                <p key={point}>{point}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
