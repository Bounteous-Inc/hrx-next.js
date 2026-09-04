import "server-only";
import { z } from "zod";

// Server-only — never sent to the browser.
const serverSchema = z.object({
  AEM_AUTHOR_URL: z.url().optional(),
  // TODO: make required again once lib/fetchClient.ts exists and a real
  // WSO2 Experience API endpoint is confirmed.
  WSO2_API_BASE_URL: z.url().optional(),
});

export const serverEnv = serverSchema.parse({
  AEM_AUTHOR_URL: process.env.AEM_AUTHOR_URL,
  WSO2_API_BASE_URL: process.env.WSO2_API_BASE_URL,
});
