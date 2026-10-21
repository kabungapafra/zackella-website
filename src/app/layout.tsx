import type { Metadata, Viewport } from "next";
import { BackToTop } from "@/components/BackToTop";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TopBar } from "@/components/TopBar";
import { site } from "@/lib/site";
import { organizationSchema } from "@/lib/structured-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  // Pages are served with a trailing slash, so the canonical has to carry one
  // too or it points at a URL that redirects.
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_UG",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.tagline}`,
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.jpg"] },
  verification: { other: { "msvalidate.01": "BC2EEDCAF70531487F6B483F26F90179" } },
};

export const viewport: Viewport = {
  themeColor: "#0c3320",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="bg-forest-900 text-cream focus-visible:outline-gold sr-only rounded-full px-5 py-3 font-semibold focus-visible:not-sr-only focus-visible:absolute focus-visible:top-3 focus-visible:left-3 focus-visible:z-50"
        >
          Skip to content
        </a>
        <JsonLd data={organizationSchema} />
        <TopBar />
        <SiteHeader />
        {/* tabIndex lets both the skip link and Back to top land focus here. */}
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
        <BackToTop />
      </body>
    </html>
  );
}
