"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { LocaleSwitcher } from "./locale-switcher";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { href: "/", label: "nav.home" },
  { href: "/projects", label: "nav.projects" },
  { href: "/resume", label: "nav.resume" },
  { href: "/about", label: "nav.about" },
  { href: "/contact", label: "nav.contact" }
] as const;

export function SiteHeader() {
  const t = useTranslations();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 pt-4">
      <div className="container-shell">
        <div className="flex flex-col gap-4 rounded-[28px] border border-[var(--line)] bg-[var(--surface-header)] px-5 py-4 backdrop-blur md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <div>
              <Link
                href="/"
                className="font-[var(--font-heading)] text-lg font-bold tracking-[-0.04em]"
              >
                Artem Sidnev
              </Link>
              <p className="mt-1 text-sm text-[var(--fg-muted)]">
                {t("nav.mode")}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <nav className="flex flex-wrap gap-2">
              {navItems.map((item) => {
                const active =
                  pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-full border border-transparent px-3 py-2 text-sm font-semibold transition",
                      active
                        ? "border-[var(--line-strong)] bg-[var(--surface-strong)] text-[var(--fg)]"
                        : "text-[var(--fg-muted)] hover:border-[var(--line)] hover:bg-[var(--surface)] hover:text-[var(--fg)]"
                    )}
                  >
                    {t(item.label)}
                  </Link>
                );
              })}
            </nav>
            <div className="flex flex-wrap gap-2">
              <LocaleSwitcher />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
