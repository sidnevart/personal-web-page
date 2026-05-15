import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sidnev.dev"),
  title: {
    default: "Artem Sidnev — Backend / Platform / AI Automation Engineer",
    template: "%s | Artem Sidnev",
  },
  description:
    "Backend engineer focused on data-intensive systems, internal platforms, AI automation, and developer productivity. Nearly 3 years of experience across banking, analytics, Telegram Mini Apps, and open-source.",
  keywords: [
    "Backend Engineer",
    "Platform Engineer",
    "AI Automation",
    "Java",
    "Kotlin",
    "Go",
    "Python",
    "ClickHouse",
    "Spring Boot",
    "FastAPI",
    "Telegram Mini Apps",
    "AI Agents",
    "RAG",
  ],
  authors: [{ name: "Artem Sidnev" }],
  creator: "Artem Sidnev",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sidnev.dev",
    siteName: "Artem Sidnev",
    title: "Artem Sidnev — Backend / Platform / AI Automation Engineer",
    description:
      "Backend engineer focused on data-intensive systems, internal platforms, AI automation, and developer productivity.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Artem Sidnev — Backend / Platform / AI Automation Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ArtemkaWeb3",
    title: "Artem Sidnev — Backend / Platform / AI Automation Engineer",
    description:
      "Backend engineer focused on data-intensive systems, internal platforms, AI automation, and developer productivity.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://sidnev.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
