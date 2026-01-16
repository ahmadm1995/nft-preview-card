import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/YOUR_REPO_NAME',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
