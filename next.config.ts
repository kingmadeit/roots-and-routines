import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    // Only use this for TEMPORARY workarounds.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
