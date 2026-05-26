import type { NextConfig } from "next";

const isProd = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? "/cinematic-store" : "",
  assetPrefix: isProd ? "/cinematic-store" : "",
};

export default nextConfig;
