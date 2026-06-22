import type { MetadataRoute } from "next";
import { getProjectSlugs } from "@/data/content";

export const dynamic = "force-static";

const BASE_URL = "https://sidnevart.github.io/personal-web-page";
const locales = ["ru", "en", "es"];

export default function sitemap(): MetadataRoute.Sitemap {
  const projectSlugs = getProjectSlugs();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    });
    entries.push({
      url: `${BASE_URL}/${locale}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });
    entries.push({
      url: `${BASE_URL}/${locale}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    });
    entries.push({
      url: `${BASE_URL}/${locale}/resume`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });
    entries.push({
      url: `${BASE_URL}/${locale}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    });

    for (const slug of projectSlugs) {
      entries.push({
        url: `${BASE_URL}/${locale}/projects/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
