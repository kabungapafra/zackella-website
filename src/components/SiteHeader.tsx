"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";
import { MobileNav } from "./MobileNav";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-line relative z-30 border-b bg-white">
      <div className="shell flex items-center justify-between gap-6 py-2.5 lg:py-3">
        <Link href="/" aria-label={`${site.name}, home`}>
          <Image
            src="/zackella-logo.png"
            alt={`${site.name} — ${site.tagline}`}
            width={1170}
            height={340}
            // Deliberately not preloaded: it is in the viewport so it loads
            // straight away regardless, and the head's image preload belongs
            // to the hero, which is the LCP element on every page.
            sizes="200px"
            className="block h-11 w-auto lg:h-[58px]"
          />
        </Link>

        <nav
          aria-label="Main"
          className="font-display hidden items-center gap-[30px] text-base font-semibold lg:flex"
        >
          {nav.map((item) => {
            const active = item.href === pathname;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`hover:text-forest-600 relative py-2 ${
                  active ? "text-forest-800 border-gold border-b-2" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="btn-lift font-display bg-forest-800 text-cream hidden rounded-full px-6 py-3.5 text-[15px] font-bold whitespace-nowrap sm:block"
          >
            Get a quote
          </Link>
          <MobileNav currentPath={pathname} />
        </div>
      </div>
    </header>
  );
}
