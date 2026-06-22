import createNextIntlPlugin from "next-intl/plugin";
import path from "node:path";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  output: "export",
  outputFileTracingRoot: path.join(process.cwd()),
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com"
      }
    ]
  }
};

export default withNextIntl(nextConfig);
