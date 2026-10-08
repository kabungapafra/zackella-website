import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Cloudflare Pages serves this as static files, so Next writes a plain
  // `out/` directory.
  output: "export",
  images: {
    // No optimisation server comes with a static export, so `image-loader.ts`
    // serves variants that `scripts/optimize-images.mjs` built ahead of time.
    // Both lists must match the widths that script generates.
    loader: "custom",
    loaderFile: "./image-loader.ts",
    deviceSizes: [640, 828, 1080, 1440, 1920],
    imageSizes: [200, 320, 400],
  },
  trailingSlash: true,
};

export default nextConfig;
