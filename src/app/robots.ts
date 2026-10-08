import type { MetadataRoute } from "next";

// Required by `output: "export"`.
export const dynamic = "force-static";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: new URL("/sitemap.xml", site.url).toString(),
  };
}
