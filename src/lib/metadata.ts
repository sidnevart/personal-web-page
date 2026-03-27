import type { Metadata } from "next";
import type { AppLocale } from "@/i18n/routing";

const siteUrl = "https://portfolio.example.com";

const defaults = {
  ru: {
    title: "Артём Сиднев",
    description:
      "Middle Backend / DevOps engineer focused on internal platforms, reliability, and measurable product impact."
  },
  en: {
    title: "Artem Sidnev",
    description:
      "Middle Backend / DevOps engineer focused on internal platforms, reliability, and measurable product impact."
  },
  es: {
    title: "Artem Sidnev",
    description:
      "Middle Backend / DevOps engineer enfocado en plataformas internas, fiabilidad e impacto medible en producto."
  }
} as const;

export function buildMetadata({
  locale,
  title,
  description,
  path
}: {
  locale: AppLocale;
  title?: string;
  description?: string;
  path: string;
}): Metadata {
  const base = defaults[locale];
  const fullTitle = title ? `${title} | ${base.title}` : base.title;
  const fullDescription = description ?? base.description;
  const url = `${siteUrl}${path}`;

  return {
    title: fullTitle,
    description: fullDescription,
    alternates: {
      canonical: path,
      languages: {
        ru: path.replace(/^\/(ru|en|es)/, "/ru"),
        en: path.replace(/^\/(ru|en|es)/, "/en"),
        es: path.replace(/^\/(ru|en|es)/, "/es")
      }
    },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url,
      siteName: "Artem Sidnev Portfolio",
      locale,
      type: "website",
      images: [
        {
          url: `${siteUrl}/${locale}/opengraph-image`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: [`${siteUrl}/${locale}/opengraph-image`]
    }
  };
}
