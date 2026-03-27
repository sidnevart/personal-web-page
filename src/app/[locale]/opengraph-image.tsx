import { ImageResponse } from "next/og";
import { siteContent } from "@/data/content";
import { routing, type AppLocale } from "@/i18n/routing";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default async function OpenGraphImage({
  params
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  const safeLocale = routing.locales.includes(locale) ? locale : "ru";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at top left, rgba(159,108,58,0.18), transparent 30%), #101516",
          color: "#eef0ea",
          padding: "64px",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "sans-serif"
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#d7ab74"
          }}
        >
          Artem Sidnev
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 72,
              lineHeight: 1,
              letterSpacing: "-0.06em",
              maxWidth: 920,
              fontWeight: 700
            }}
          >
            {siteContent.hero.headline[safeLocale]}
          </div>
          <div
          style={{
            fontSize: 28,
            lineHeight: 1.4,
            maxWidth: 920,
            color: "rgba(238,240,234,0.76)"
          }}
        >
          {siteContent.hero.subheadline[safeLocale]}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap"
          }}
        >
          {siteContent.hero.proof[safeLocale].slice(0, 3).map((item) => (
            <div
              key={item}
              style={{
                border: "1px solid rgba(238,240,234,0.14)",
                padding: "12px 18px",
                borderRadius: 999,
                fontSize: 20,
                color: "rgba(238,240,234,0.8)"
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
