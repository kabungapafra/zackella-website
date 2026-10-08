import type { MetadataRoute } from "next";

// Required by `output: "export"`.
export const dynamic = "force-static";
import { nav, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // A plain date. `toISOString()` carries milliseconds, which is the one part
  // of this file that does not match the format every other sitemap uses, and
  // the time of a build says nothing useful about when a page last changed.
  const lastModified = new Date().toISOString().slice(0, 10);
  return nav.map((item) => ({
    // `trailingSlash` is on, so "/tours" would 301 to "/tours/".
    url: new URL(item.href === "/" ? "/" : `${item.href}/`, site.url).toString(),
    lastModified,
  }));
}
