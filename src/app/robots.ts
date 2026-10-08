import type { MetadataRoute } from "next";

// Required by `output: "export"`.
export const dynamic = "force-static";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    // Everything is public, and the assistants people now ask about Uganda
    // travel are named explicitly so the intent to be quoted is unambiguous.
    rules: [
      { userAgent: "*", allow: "/" },
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-User",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended",
        ],
        allow: "/",
      },
    ],
    sitemap: new URL("/sitemap.xml", site.url).toString(),
  };
}
