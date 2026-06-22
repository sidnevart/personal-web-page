"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { LocaleSwitcher } from "./locale-switcher";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { href: "/projects", label: "nav.projects" },
  { href: "/resume", label: "nav.resume" },
  { href: "/about", label: "nav.about" },
  { href: "/contact", label: "nav.contact" }
] as const;

export function SiteHeader() {
  const t = useTranslations();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg)] border-b border-[var(--line)]">
      <div className="container flex items-center justify-between h-14">
        <Link
          href="/"
          className="font-heading text-base font-semibold tracking-[-0.02em] hover:text-[var(--accent)] transition-colors"
        >
          Artem Sidnev
        </Link>

        <nav className="flex items-center gap-5">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm transition-colors hidden sm:block",
                  active
                    ? "text-[var(--fg)] font-medium"
                    : "text-[var(--fg-soft)] hover:text-[var(--fg)]"
                )}
              >
                {t(item.label)}
              </Link>
            );
          })}
          <div className="flex items-center gap-3">
            <LocaleSwitcher />
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
