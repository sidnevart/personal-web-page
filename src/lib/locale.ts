import { notFound } from "next/navigation";
import { routing, type AppLocale } from "@/i18n/routing";

export function getLocaleFromParams(locale: string): AppLocale {
  if (!routing.locales.includes(locale as AppLocale)) {
    notFound();
  }
  return locale as AppLocale;
}
