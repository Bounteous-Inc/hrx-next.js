import { z } from "zod";

// Exposed to the browser. Next.js only inlines vars prefixed NEXT_PUBLIC_
// into client bundles, so anything read from a Client Component belongs here.
const publicSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.url(),
});

export const publicEnv = publicSchema.parse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
});
