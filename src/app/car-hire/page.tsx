import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import Image from "next/image";
import {
  DateRangeIcon,
  GroupIcon,
  PinIcon,
  WhatsAppIcon,
} from "@/components/Icon";
import { HeroPhoto } from "@/components/HeroPhoto";
import { PageHero } from "@/components/PageHero";
import { VideoBackdrop } from "@/components/VideoBackdrop";
import {
  ButtonLink,
  ButtonRow,
  CheckList,
  Container,
  CtaBand,
  SectionLabel,
} from "@/components/ui";
import { fleet, hireOptions } from "@/data/fleet";
import { site } from "@/lib/site";
import { fleetSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Car Hire",
  description:
    "Hire a saloon, SUV, 4x4 safari cruiser or minibus in Uganda, with a driver or self-drive. Airport transfers, day hire and long-term rentals from Kampala.",
  alternates: { canonical: "/car-hire/" }
};

const checklist = [
  {
    Icon: DateRangeIcon,
    title: "Dates and pick-up point",
    body: "When you need the vehicle and where we should meet you.",
    bodyShort: "When you need it and where we meet you.",
  },
  {
    Icon: PinIcon,
    title: "Your route",
    body: "City only, upcountry or a national park, so we pick the right vehicle.",
    bodyShort: "City, upcountry or a national park.",
  },
  {
    Icon: GroupIcon,
    title: "Group size and luggage",
    body: "How many people and how many bags.",
    bodyShort: "How many people and how many bags.",
  },
];

export default function CarHirePage() {
  return (
    <>
      <JsonLd data={fleetSchema} />
      <PageHero
        variant="carHire"
        crumb="Car Hire"
        headline={
          <>
            The right wheels for <span className="text-gold">every road</span> in
            Uganda.
          </>
        }
        intro="Saloons for the city, SUVs for the weekend, safari cruisers for the parks. Hire with a driver who knows the route, or take the wheel yourself."
        media={
          <HeroPhoto
            src="/car-hire-hero.jpg"
            // The elephant and the cruiser both sit below the horizon.
            position="object-[center_52%]"
            preload
          />
        }
        actions={
          <ButtonRow>
            <ButtonLink href="/contact" variant="gold">
              Request a quote
            </ButtonLink>
            <ButtonLink href={site.whatsapp.href} variant="outlineCream">
              Ask on WhatsApp
            </ButtonLink>
          </ButtonRow>
        }
      />

      {/* Fleet */}
      <section className="pt-12 pb-14 lg:pt-22 lg:pb-20">
        <Container>
          {/* Section Introduction */}
          <div className="mb-10 max-w-3xl lg:mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-forest-900/10 bg-forest-900/5 px-3.5 py-1.5 text-xs font-bold tracking-[0.14em] uppercase text-forest-800">
              <span className="size-1.5 rounded-full bg-gold" />
              4x4 Safari &amp; Commercial Fleet
            </div>
            <h2 className="mt-3 text-[clamp(30px,4vw,50px)] leading-[1.08] text-forest-900">
              Choose your vehicle, <span className="text-gold-700 font-serif font-medium">conquer every road.</span>
            </h2>
            <p className="text-ink-soft mt-3 max-w-[660px] text-base leading-relaxed lg:mt-4 lg:text-[19px]">
              Not sure which one suits your trip? Tell us the route, the group size and
              the luggage, and our team will recommend the ideal match.
            </p>
          </div>

          {/* Fleet grid — same card shape as the tours page */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {fleet.map(
              ({
                slug,
                name,
                blurb,
                bestFor,
                hireTags,
                photo,
                photoPosition,
                accent,
                tileTagShort,
              }) => (
                <article
                  key={slug}
                  id={slug}
                  className="group flex scroll-mt-24 flex-col overflow-hidden rounded-2xl border border-line-200/80 bg-white shadow-[0_2px_12px_rgb(12_51_32/0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgb(12_51_32/0.12)]"
                >
                  {/* Card Photo */}
                  <div className="relative h-[210px] shrink-0 overflow-hidden bg-forest-900 sm:h-[220px]">
                    <Image
                      src={photo}
                      alt={`${name} available for hire from ${site.name}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
                        photoPosition ?? "object-center"
                      }`}
                    />

                    {/* Floating top badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {accent && (
                        <span className="bg-gold text-forest-900 rounded-full px-2.5 py-0.5 text-[13px] font-bold uppercase tracking-wide shadow-sm">
                          Flagship
                        </span>
                      )}
                      <span className="flex items-center gap-1 rounded-full bg-forest-900/80 px-2.5 py-0.5 text-[13px] font-bold text-white backdrop-blur-sm">
                        <GroupIcon size={10} className="stroke-current stroke-[2.5]" />
                        {tileTagShort}
                      </span>
                      <span className="flex items-center gap-1 rounded-full bg-forest-900/80 px-2.5 py-0.5 text-[13px] font-bold text-white backdrop-blur-sm">
                        <PinIcon size={10} className="stroke-current stroke-[2.5]" />
                        Uganda
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    {/* Title */}
                    <h3 className="font-display text-forest-900 text-[19px] font-bold leading-[1.2] group-hover:text-forest-700 transition-colors">
                      {name}
                    </h3>

                    {/* Ideal for */}
                    <p className="text-ink-muted mt-1.5 text-[14px] leading-relaxed">
                      <span className="font-bold text-forest-900/80">Ideal for: </span>
                      {bestFor.slice(0, 2).join(" · ")}
                    </p>

                    {/* Blurb */}
                    <p className="text-ink-soft mt-2.5 text-[17px] leading-relaxed line-clamp-3">
                      {blurb}
                    </p>

                    {/* Hire options */}
                    <p className="text-ink-muted mt-2 flex items-center gap-1.5 text-[15px]">
                      <DateRangeIcon size={11} className="stroke-forest-700 shrink-0 stroke-[2.5]" />
                      {hireTags.join(" · ")}
                    </p>

                    {/* Footer */}
                    <div className="mt-auto pt-4">
                      <div className="flex items-center justify-between gap-2">
                        <a
                          href="/contact"
                          className="bg-forest-900 text-cream hover:bg-forest-800 inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2.5 text-[17px] font-bold transition-colors"
                        >
                          Request a quote <span aria-hidden="true">→</span>
                        </a>
                        <a
                          href={site.whatsapp.href}
                          target="_blank"
                          rel="noopener"
                          className="text-forest-800 hover:text-gold-700 inline-flex items-center gap-1.5 text-xs font-bold transition-colors"
                        >
                          <WhatsAppIcon size={15} className="stroke-current" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              )
            )}
          </div>
        </Container>
      </section>

      {/* Hire options */}
      <section className="bg-forest-900 text-cream py-13 lg:py-25">
        <Container>
          <SectionLabel tone="dark">Hire options</SectionLabel>
          <h2 className="mt-3.5 max-w-[760px] text-[clamp(32px,4vw,52px)] leading-[1.08] text-balance lg:mt-5">
            However you like to travel.
          </h2>
          <div className="mt-6.5 grid gap-4.5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-6">
            {hireOptions.map(({ name, body }) => (
              <div key={name} className="border-gold border-t-2 pt-3.5 lg:pt-5">
                <h3 className="text-[23px] lg:text-[26px]">{name}</h3>
                <p className="text-on-dark-soft mt-1.5 text-[17px] leading-relaxed lg:mt-2.5 lg:text-base">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Before you book */}
      <section className="py-13 lg:py-25">
        <Container className="grid items-start gap-x-18 gap-y-5.5 lg:grid-cols-2 lg:gap-y-10">
          <div>
            <SectionLabel>Before you book</SectionLabel>
            <h2 className="mt-3.5 text-[clamp(30px,3.6vw,46px)] leading-[1.1] text-balance lg:mt-5">
              Have these ready and booking takes minutes.
            </h2>
            <p className="text-ink-muted mt-3 text-base leading-relaxed lg:mt-4.5 lg:text-lg">
              Rates depend on the vehicle, route, driver option and number of days, so
              each hire is quoted individually.
            </p>
          </div>
          <div className="flex flex-col gap-2.5 lg:gap-3.5">
            {checklist.map(({ Icon, title, body, bodyShort }) => (
              <div
                key={title}
                className="border-line flex items-start gap-3.5 rounded-2xl border bg-white p-4 lg:gap-4 lg:rounded-[18px] lg:px-5.5 lg:py-5"
              >
                <Icon size={26} className="stroke-forest-800 shrink-0" />
                <div>
                  <h3 className="font-sans text-base font-bold lg:text-[19px]">
                    {title}
                  </h3>
                  <p className="text-ink-muted mt-0.75 text-[17px] leading-snug lg:mt-1 lg:text-base lg:leading-normal">
                    <span className="lg:hidden">{bodyShort}</span>
                    <span className="hidden lg:inline">{body}</span>
                  </p>
                </div>
              </div>
            ))}
            {/* Real terms now, so they take the page's own list treatment
                rather than the dashed note that marks something missing. */}
            <div className="border-line bg-cream-200 rounded-2xl border p-4 lg:rounded-[18px] lg:px-6 lg:py-5.5">
              <p className="text-gold-800 text-xs font-bold tracking-[0.14em] uppercase">
                Self-drive terms
              </p>
              <CheckList items={site.selfDriveTerms} className="mt-3 lg:mt-3.5" />
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        heading="Tell us the dates. We'll find the vehicle."
        body="A quick message is all we need to get you a quote."
        backdrop={
          <VideoBackdrop
            sources={[{ src: "/hero-reel.mp4", type: "video/mp4" }]}
            photo="/uganda-road.jpg"
          />
        }
        actions={
          <ButtonRow>
            <ButtonLink href="/contact" variant="gold" size="lg">
              Request a quote
            </ButtonLink>
            <ButtonLink href={site.phone.href} variant="dark" size="lg">
              Call {site.phone.display}
            </ButtonLink>
          </ButtonRow>
        }
      />
    </>
  );
}
