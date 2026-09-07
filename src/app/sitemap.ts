import type { MetadataRoute } from "next";

import { publicEnv } from "@config/env.public";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: publicEnv.NEXT_PUBLIC_SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
