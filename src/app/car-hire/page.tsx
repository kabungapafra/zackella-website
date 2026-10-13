import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import Image from "next/image";
import {
  DateRangeIcon,
  GroupIcon,
  PinIcon,
  TickIcon,
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
            src="/fleet-blurred.jpg"
            // The fleet sits across the lower middle of the frame.
            position="object-[center_58%]"
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
            <h2 className="font-display mt-3 text-[clamp(30px,4vw,50px)] font-extrabold leading-[1.08] tracking-tight text-forest-900">
              Choose your vehicle, <span className="text-gold-700">conquer every road.</span>
            </h2>
            <p className="text-ink-soft mt-3 max-w-[660px] text-base leading-relaxed lg:mt-4 lg:text-[17px]">
              Not sure which one suits your trip? Tell us the route, the group size and
              the luggage, and our team will recommend the ideal match.
            </p>
          </div>

          {/* Horizontal Split Fleet Showcase */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {fleet.map(
              ({
                slug,
                name,
                blurb,
                bestFor,
                hireTags,
                cta,
                photo,
                photoPosition,
                teaser,
                accent,
                tileTagShort,
              }) => (
                <article
                  key={slug}
                  id={slug}
                  className="reveal group relative grid grid-cols-1 overflow-hidden rounded-[24px] border border-line-200/90 bg-white shadow-[0_4px_24px_rgb(12_51_32/0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_20px_45px_rgb(12_51_32/0.1)] lg:grid-cols-[1.1fr_1.3fr] lg:rounded-[30px]"
                >
                  {/* Left Column: Cinematic Vehicle Photo */}
                  <div className="relative h-[250px] w-full overflow-hidden bg-sand sm:h-[300px] lg:h-full lg:min-h-[360px]">
                    <Image
                      src={photo}
                      alt={`${name} available for hire from ${site.name}`}
                      fill
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className={`object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${
                        photoPosition ?? "object-center"
                      }`}
                    />
                    {/* Gradient Overlay for photo readability */}
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-black/25" />

                    {/* Top Floating Badge */}
                    <div className="absolute top-4 left-4">
                      {accent ? (
                        <span className="font-display rounded-full bg-gold px-3.5 py-1 text-xs font-black tracking-wide uppercase text-forest-900 shadow-md">
                          ★ Flagship 4x4
                        </span>
                      ) : (
                        <span className="font-display rounded-full bg-forest-900/85 px-3.5 py-1 text-xs font-bold text-cream backdrop-blur-md border border-white/20">
                          {tileTagShort || "Safari & Travel"}
                        </span>
                      )}
                    </div>

                    {/* Bottom Photo Tagline */}
                    <div className="absolute bottom-3.5 inset-x-4">
                      <p className="text-white text-xs sm:text-sm font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] line-clamp-1">
                        {teaser}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Vehicle Specs, Best For & Actions */}
                  <div className="flex flex-col justify-between p-6 sm:p-7 lg:p-8">
                    <div>
                      {/* Top Meta & Title */}
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <span className="font-display text-[11px] font-black uppercase tracking-[0.16em] text-forest-800/60">
                            Available in Kampala &amp; Nationwide
                          </span>
                          <h3 className="font-display text-[24px] sm:text-[28px] font-extrabold leading-tight tracking-tight text-forest-900 transition-colors group-hover:text-forest-800 lg:text-[30px] mt-0.5">
                            {name}
                          </h3>
                        </div>
                        {/* Rental Options Tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {hireTags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-cream border border-line-300 px-3 py-1 text-xs font-bold text-forest-900"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <p className="text-ink-soft mt-3 text-[14.5px] leading-relaxed text-pretty lg:text-[15.5px]">
                        {blurb}
                      </p>

                      {/* Best for feature highlights grid */}
                      <div className="my-5 rounded-2xl border border-line-200/70 bg-[#faf8f4] p-4.5 sm:p-5">
                        <p className="font-display text-forest-900/50 mb-3 text-[11px] font-extrabold tracking-[0.14em] uppercase">
                          Ideal for this vehicle
                        </p>
                        <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                          {bestFor.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-[13px] leading-snug text-ink/85 sm:text-[13.5px]"
                            >
                              <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-gold/25 text-forest-900">
                                <TickIcon size={11} className="stroke-[2.5]" />
                              </span>
                              <span className="font-medium">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Card Footer with CTA & WhatsApp */}
                    <div className="flex flex-col items-stretch justify-between gap-3 border-t border-line-200/80 pt-4 sm:flex-row sm:items-center mt-2">
                      <ButtonLink
                        href="/contact"
                        variant="dark"
                        className="w-full !px-6 !py-3.5 text-[14px] font-bold shadow-sm transition-all group-hover:bg-forest-800 sm:w-auto lg:text-[15px]"
                      >
                        <span>{cta}</span>
                        <span
                          aria-hidden="true"
                          className="transition-transform duration-200 group-hover:translate-x-1"
                        >
                          &rarr;
                        </span>
                      </ButtonLink>
                      <a
                        href={site.whatsapp.href}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center justify-center gap-2 text-xs font-bold text-forest-800 transition-colors hover:text-gold-700 py-1"
                      >
                        <WhatsAppIcon size={16} className="stroke-current" />
                        <span>Quick WhatsApp quote</span>
                      </a>
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
                <p className="text-on-dark-soft mt-1.5 text-[15px] leading-relaxed lg:mt-2.5 lg:text-base">
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
                  <h3 className="font-sans text-base font-bold lg:text-[17px]">
                    {title}
                  </h3>
                  <p className="text-ink-muted mt-0.75 text-[15px] leading-snug lg:mt-1 lg:text-base lg:leading-normal">
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
