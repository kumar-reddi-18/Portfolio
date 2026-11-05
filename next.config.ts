import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site is fully static: export plain HTML/CSS/JS to ./out
  // and serve it as static assets on Cloudflare (see wrangler.jsonc).
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
