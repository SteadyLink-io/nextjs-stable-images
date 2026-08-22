import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.steadylink.io",
        pathname: "/a/**",
      },
    ],
  },
};

export default nextConfig;
