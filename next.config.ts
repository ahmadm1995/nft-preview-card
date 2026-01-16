import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/nft-preview-card',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;