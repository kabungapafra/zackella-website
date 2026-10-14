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
};

export const viewport: Viewport = {
  themeColor: "#0c3320",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://p.typekit.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.typekit.net/qjg3uyr.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap"
        />
      </head>
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
