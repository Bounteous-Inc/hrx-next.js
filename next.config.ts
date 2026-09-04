import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  typedRoutes: true,
  output: "standalone",
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    // TODO: no remotePatterns yet — DAM/AEM asset hosts aren't confirmed.
    // Add remotePatterns here once those origins are known.
    remotePatterns: [],
  },
};

export default nextConfig;
