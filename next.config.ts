import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/personal-web-page",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
