import Image from "next/image";
import Link from "next/link";
import { footerServices, nav, site } from "@/lib/site";

const exploreLinks = nav.filter((item) => item.href !== "/");

const headingClasses =
  "text-gold font-sans text-xs font-bold tracking-[0.16em] uppercase lg:text-[13px]";

export function SiteFooter() {
  return (
    <footer className="bg-forest-900 text-on-dark pt-11 pb-7 lg:pt-18 lg:pb-9">
      <div className="shell">
        <div className="grid gap-7 lg:grid-cols-4 lg:gap-10">
          <div>
            <div className="inline-block rounded-xl bg-white px-3 py-2 lg:rounded-[14px] lg:px-3.5 lg:py-2.5">
              <Image
                src="/zackella-logo.png"
                alt={site.name}
                width={1170}
                height={340}
                sizes="180px"
                className="block h-[42px] w-auto lg:h-[52px]"
              />
            </div>
            <p className="mt-3.5 max-w-[300px] text-[15px] leading-relaxed lg:mt-4.5 lg:text-base">
              Tours, travel and car hire from Kampala. {site.tagline}.
            </p>
          </div>

          <div className="mt-3.5 lg:mt-0">
            <h2 className={headingClasses}>Contact</h2>
            <div className="mt-3 flex flex-col gap-2.5 text-base lg:mt-4 lg:gap-3">
              <a href={site.phone.href}>Tel: {site.phone.display}</a>
              <a href={site.whatsapp.href} target="_blank" rel="noopener">
                WhatsApp: {site.whatsapp.display}
              </a>
              <a href={site.email.href} className="break-words">
                {site.email.display}
              </a>
              <span>{site.address.oneLine}</span>
            </div>
          </div>

          {/* On phones these two sit side by side, as the mobile artboards show. */}
          <div className="mt-3.5 grid grid-cols-2 gap-6 lg:col-span-2 lg:mt-0 lg:gap-10">
            <div>
              <h2 className={headingClasses}>Explore</h2>
              <div className="mt-3 flex flex-col gap-2.5 text-[15px] lg:mt-4 lg:gap-3 lg:text-base">
                {exploreLinks.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <span className="lg:hidden">{item.label}</span>
                    <span className="hidden lg:inline">
                      {item.label === "Tours" ? "Tours & Travel" : item.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className={headingClasses}>
                <span className="lg:hidden">Services</span>
                <span className="hidden lg:inline">More services</span>
              </h2>
              <ul className="mt-3 flex flex-col gap-2.5 text-[15px] lg:mt-4 lg:gap-3 lg:text-base">
                {footerServices.map((service) => (
                  <li key={service.full}>
                    <span className="lg:hidden">{service.short}</span>
                    <span className="hidden lg:inline">{service.full}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-forest-rule text-on-dark-dim mt-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t pt-4.5 text-[13px] lg:mt-14 lg:pt-6 lg:text-sm">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            Crafted by{" "}
            <a
              href={site.developer.href}
              target="_blank"
              rel="noopener"
              className="text-on-dark-soft font-semibold underline-offset-4 hover:underline"
            >
              {site.developer.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
