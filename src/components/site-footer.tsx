import { useTranslations } from "next-intl";
import { siteContacts } from "@/data/content";
import { Link } from "@/i18n/navigation";

export function SiteFooter() {
  const t = useTranslations();

  return (
    <footer className="pb-10 pt-24">
      <div className="container-shell">
        <div className="grid gap-8 border-t border-[var(--line)] py-8 md:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.04em]">
              Artem Sidnev
            </p>
            <p className="mt-3 max-w-2xl text-sm text-[var(--fg-muted)]">
              {t("footer.rights")}
            </p>
          </div>
          <div className="grid gap-2 text-sm text-[var(--fg-muted)]">
            <Link href="/resume" className="transition hover:text-[var(--fg)]">
              {t("nav.resume")}
            </Link>
            <a href={`mailto:${siteContacts.email}`} className="transition hover:text-[var(--fg)]">
              {siteContacts.email}
            </a>
            <a href={siteContacts.telegram} target="_blank" rel="noreferrer">
              Telegram
            </a>
            <a href={siteContacts.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
