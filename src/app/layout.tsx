import type { Metadata } from "next";
import { ChatWidget } from "@/components/chat-widget";
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
  metadataBase: new URL("https://sidnevart.github.io/personal-web-page"),
  title: {
    default: "Artem Sidnev — Software Engineer",
    template: "%s | Artem Sidnev"
  },
  description:
    "Software Engineer at T-Bank. Backend, high-load pipelines, AI/LLM automation, and product-focused case studies.",
  applicationName: "Artem Sidnev Portfolio"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;0,8..60,700;1,8..60,400&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[var(--bg)] text-[var(--fg)] antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
