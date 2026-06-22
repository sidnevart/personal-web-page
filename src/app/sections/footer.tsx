import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer
      className="border-t border-border py-8 px-4 sm:px-6 lg:px-8 xl:px-12"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.
        </p>
      </div>
    </footer>
  );
}
