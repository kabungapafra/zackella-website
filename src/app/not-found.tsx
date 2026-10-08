import type { Metadata } from "next";
import Link from "next/link";
import { HeroPhoto } from "@/components/HeroPhoto";
import { WhatsAppIcon } from "@/components/Icon";
import { ButtonLink, ButtonRow, Container } from "@/components/ui";
import { nav, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  // A 404 should never be indexed, whatever links to it.
  robots: { index: false, follow: true },
};

const elsewhere = nav.filter((item) => item.href !== "/");

export default function NotFound() {
  return (
    <>
      <section className="bg-forest-900 text-cream relative overflow-hidden">
        <HeroPhoto
          src="/kidepo-valley.jpg"
          position="object-[center_55%]"
          preload
        />
        <Container className="relative pt-16 pb-20 lg:pt-28 lg:pb-32">
          <p className="text-gold text-[13px] font-bold tracking-[0.18em] uppercase">
            Error 404
          </p>
          <h1 className="mt-4 max-w-[800px] text-[clamp(40px,6vw,82px)] leading-[1.05] text-balance lg:mt-5.5">
            This one has wandered <span className="text-gold">off the route.</span>
          </h1>
          <p className="text-on-dark mt-4 max-w-[560px] text-base leading-relaxed text-pretty lg:mt-5.5 lg:text-[clamp(17px,1.5vw,20px)]">
            The page you were after isn&apos;t here. It may have moved, or the link
            may have a typo in it. Everything below will get you back on track.
          </p>
          <div className="mt-6.5 lg:mt-7.5">
            <ButtonRow>
              <ButtonLink href="/" variant="gold" size="lg">
                Back to home
              </ButtonLink>
              <ButtonLink
                href={site.whatsapp.href}
                variant="outlineCream"
                size="lg"
              >
                <WhatsAppIcon size={20} className="stroke-cream" strokeWidth={2} />
                Ask us on WhatsApp
              </ButtonLink>
            </ButtonRow>
          </div>
        </Container>
      </section>

      <section className="py-14 lg:py-22">
        <Container>
          <h2 className="text-[clamp(28px,3.4vw,42px)] leading-tight text-balance">
            Where were you heading?
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:mt-10 lg:grid-cols-5 lg:gap-4">
            {elsewhere.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="lift border-line bg-cream-100 flex h-full items-center justify-between gap-3 rounded-2xl border px-5 py-4.5 font-sans text-base font-bold lg:rounded-[18px]"
                >
                  {item.label === "Tours" ? "Tours & Travel" : item.label}
                  <span aria-hidden="true" className="text-forest-800">
                    &rarr;
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-ink-muted mt-6 text-base leading-relaxed lg:mt-8">
            Still stuck? Call{" "}
            <a href={site.phone.href} className="text-forest-800 font-bold underline underline-offset-4">
              {site.phone.display}
            </a>{" "}
            or email{" "}
            <a href={site.email.href} className="text-forest-800 font-bold underline underline-offset-4">
              {site.email.display}
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
