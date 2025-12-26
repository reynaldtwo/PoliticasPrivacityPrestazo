import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Optional: Change links `/me` -> `/me/` and compliant hosting
  trailingSlash: true,
  // Optional: Prevent automatic image optimization which requires a server
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
