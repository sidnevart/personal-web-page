import type { Metadata } from "next";
import "./globals.css";

const themeScript = `
  (() => {
    const storageKey = 'portfolio-theme';
    const root = document.documentElement;
    const stored = localStorage.getItem(storageKey);
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored === 'light' || stored === 'dark' ? stored : systemDark ? 'dark' : 'light';
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
  })();
`;

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.example.com"),
  title: {
    default: "Artem Sidnev Portfolio",
    template: "%s | Artem Sidnev"
  },
  description:
    "Middle Backend / DevOps engineer. Internal platforms, high-load services, automation, and product-focused case studies.",
  applicationName: "Artem Sidnev Portfolio"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="ru">
      <body className="bg-[var(--bg)] text-[var(--fg)] antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
