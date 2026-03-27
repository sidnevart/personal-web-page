"use client";

import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="inline-flex rounded-full border border-[var(--line)] bg-[var(--surface)] p-1">
      {routing.locales.map((entry) => (
        <Link
          key={entry}
          href={pathname}
          locale={entry}
          className={cn(
            "rounded-full px-3 py-1.5 text-xs font-semibold uppercase transition",
            entry === locale
              ? "bg-[var(--surface-strong)] text-[var(--fg)]"
              : "text-[var(--fg-muted)] hover:text-[var(--fg)]"
          )}
        >
          {entry}
        </Link>
      ))}
    </div>
  );
}
