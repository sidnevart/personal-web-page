"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const options = [
  { key: "system", label: "Auto" },
  { key: "light", label: "Light" },
  { key: "dark", label: "Dark" }
] as const;

type ThemeMode = (typeof options)[number]["key"];

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>("system");

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-theme");
    setTheme(stored === "light" || stored === "dark" ? stored : "system");
  }, []);

  function applyTheme(nextTheme: ThemeMode) {
    setTheme(nextTheme);

    if (nextTheme === "system") {
      window.localStorage.removeItem("portfolio-theme");
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.dataset.theme = systemDark ? "dark" : "light";
      document.documentElement.style.colorScheme = systemDark ? "dark" : "light";
      return;
    }

    window.localStorage.setItem("portfolio-theme", nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
  }

  return (
    <div className="inline-flex rounded-full border border-[var(--line)] bg-[var(--surface)] p-1">
      {options.map((option) => (
        <button
          key={option.key}
          type="button"
          onClick={() => applyTheme(option.key)}
          className={cn(
            "rounded-full px-3 py-1.5 text-xs font-semibold transition",
            theme === option.key
              ? "bg-[var(--surface-strong)] text-[var(--fg)]"
              : "text-[var(--fg-muted)] hover:text-[var(--fg)]"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
