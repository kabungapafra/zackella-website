import Image from "next/image";
import Link from "next/link";
import { Carousel } from "@/components/Carousel";
import { EnquiryPanel } from "@/components/EnquiryPanel";
import {
  ClockIcon,
  PaperPlaneIcon,
  PersonIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "@/components/Icon";
import { HeroPhoto } from "@/components/HeroPhoto";
import { ReelWatermark } from "@/components/ReelWatermark";
import { TourMedia } from "@/components/TourMedia";
import {
  ButtonLink,
  ButtonRow,
  Container,
  CtaBand,
  SectionLabel,
} from "@/components/ui";
import { fleet } from "@/data/fleet";
import { services } from "@/data/services";
import { tours } from "@/data/tours";
import { site } from "@/lib/site";

const steps = [
  {
    number: "01",
    title: "Tell us the plan",
    body: "Where, when and with how many people. A message or a call is all we need to start.",
  },
  {
    number: "02",
    title: "We shape your trip",
    body: "We put together the route, the vehicle and the stays, then send you a clear quote to adjust.",
  },
  {
    number: "03",
    title: "You just travel",
    body: "Your driver, transfers and bookings are handled, so all that is left is the journey.",
  },
];

const carHirePromises = [
  {
    Icon: ClockIcon,
    title: "Day hire to long-term",
    body: "One transfer or a month on the road.",
  },
  {
    Icon: PersonIcon,
    title: "Driver or self-drive",
    body: "Relax in the back or choose your own route.",
  },
  {
    Icon: PaperPlaneIcon,
    title: "Airport meet & transfer",
    body: "Arrive, find your driver, go.",
  },
  {
    Icon: PinIcon,
    title: "Upcountry & cross-country",
    body: "Parks, towns and borders, planned with you.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest-900 text-cream relative overflow-hidden">
        <HeroPhoto
          src="/hero-gorilla.jpg"
          position="object-[center_58%]"
          preload
        />
        <Container className="relative pt-11 pb-32 lg:pt-24 lg:pb-50">
          <SectionLabel tone="dark">
            <span className="lg:hidden">Kampala &middot; Uganda</span>
            <span className="hidden lg:inline">
              Kampala &middot; Uganda &middot; East Africa
            </span>
          </SectionLabel>
          <h1 className="mt-4.5 max-w-[880px] text-[clamp(44px,7vw,98px)] leading-[1.03] tracking-[-0.01em] text-balance lg:mt-6.5">
            See Uganda the <span className="text-gold">unhurried</span> way.
          </h1>
          <p className="text-on-dark mt-4.5 max-w-[560px] text-[17px] leading-relaxed text-pretty lg:mt-7 lg:text-[clamp(18px,1.6vw,21px)]">
            Safaris, gorilla treks and dependable car hire, planned by a Kampala team
            that answers you on WhatsApp.
          </p>
          <div className="mt-6.5 lg:mt-9.5">
            <ButtonRow>
              <ButtonLink href="/tours" variant="gold" size="lg">
                Explore tours
              </ButtonLink>
              <ButtonLink href="/car-hire" variant="outlineCream" size="lg">
                Hire a car
              </ButtonLink>
            </ButtonRow>
          </div>
        </Container>
      </section>

      <EnquiryPanel />

      {/* Tours */}
      <section id="tours" className="pt-16 pb-14 lg:pt-30 lg:pb-27.5">
        <Container>
          <div className="grid items-end gap-x-16 gap-y-3 lg:grid-cols-2 lg:gap-y-6">
            <div>
              <SectionLabel>Tours &amp; Travel</SectionLabel>
              <h2 className="mt-3.5 text-[clamp(33px,4.6vw,60px)] leading-[1.08] text-balance lg:mt-5">
                Pick a place. We&apos;ll build the trip.
              </h2>
            </div>
            <p className="text-ink-muted text-base leading-relaxed text-pretty lg:text-lg">
              <span className="lg:hidden">
                Every journey is tailor-made around your dates, pace and budget.
              </span>
              <span className="hidden lg:inline">
                Every journey is tailor-made. Tell us your dates and your pace, and we
                shape the route, the stays and the transport around you, from a weekend
                on the Nile to a week with the gorillas.
              </span>
            </p>
          </div>
        </Container>

        <Carousel
          gridClassName="mt-6.5 lg:mt-14 lg:grid-cols-3"
          className="lg:px-7"
        >
          {tours.map((tour) => {
            const { slug, shortName, badge, teaser, teaserShort, wide } = tour;
            return (
              <Link
                key={slug}
                href={`/tours#${slug}`}
                className={`reveal tile-wrap bg-forest-700 relative block h-[380px] w-[280px] overflow-hidden rounded-[22px] lg:h-[360px] lg:w-auto lg:rounded-3xl ${
                  wide ? "lg:col-span-2" : ""
                }`}
              >
                <TourMedia tour={tour} variant="tile" className="tile-art" />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-b from-transparent from-40% to-[rgb(12_51_32_/_0.93)] lg:from-30%"
                />
                <div className="text-cream absolute inset-x-5 bottom-5 lg:inset-x-7 lg:bottom-7">
                  <span className="bg-gold text-forest-900 inline-block rounded-full px-2.5 py-1.25 text-[11px] font-bold tracking-[0.1em] uppercase lg:px-3 lg:py-1.5 lg:text-xs">
                    {badge}
                  </span>
                  <h3
                    className={`mt-2.5 text-[25px] leading-tight lg:mt-3.5 ${
                      wide ? "lg:text-[34px]" : "lg:text-[28px]"
                    }`}
                  >
                    {shortName}
                  </h3>
                  <p className="text-on-dark mt-1.5 max-w-[520px] text-sm leading-snug lg:mt-2 lg:text-base lg:leading-normal">
                    <span className="lg:hidden">{teaserShort}</span>
                    <span className="hidden lg:inline">{teaser}</span>
                  </p>
                  {/* The rail already invites a tap, so this prompt is desktop only. */}
                  <p className="text-gold mt-3 hidden text-[15px] font-bold lg:block">
                    Ask for a quote{" "}
                    <span className="tile-arrow" aria-hidden="true">
                      &rarr;
                    </span>
                  </p>
                </div>
              </Link>
            );
          })}
        </Carousel>

        <Container className="mt-4.5 lg:mt-8">
          <div className="flex flex-wrap items-center justify-between gap-x-7 gap-y-4">
            <p className="text-ink-muted hidden text-base lg:block">
              Something else in mind? Weddings, honeymoons, school trips, regional
              tours:{" "}
              <Link
                href="/contact"
                className="text-forest-800 font-bold underline underline-offset-4"
              >
                tell us and we&apos;ll plan it.
              </Link>
            </p>
            <ButtonLink href="/tours" block className="lg:w-auto">
              See all tour details
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Car hire */}
      <section
        id="car-hire"
        className="bg-forest-900 text-cream pt-15 pb-14 lg:pt-27.5 lg:pb-25"
      >
        <Container>
          <div className="grid items-end gap-x-16 gap-y-3 lg:grid-cols-2 lg:gap-y-6">
            <div>
              <SectionLabel tone="dark">Car Hire</SectionLabel>
              <h2 className="mt-3.5 text-[clamp(33px,4.6vw,60px)] leading-[1.08] text-balance lg:mt-5">
                <span className="lg:hidden">The right vehicle for every road.</span>
                <span className="hidden lg:inline">
                  The right vehicle for every road in Uganda.
                </span>
              </h2>
            </div>
            <p className="text-on-dark-soft text-base leading-relaxed text-pretty lg:text-lg">
              <span className="lg:hidden">
                With a driver who knows the route, or take the wheel yourself.
              </span>
              <span className="hidden lg:inline">
                From airport transfers to park roads and long upcountry drives. Hire
                with a driver who knows the route, or take the wheel yourself.
              </span>
            </p>
          </div>
        </Container>

        {/* Three shown large here - the full fleet is on the Car Hire page. */}
        <Carousel
          gridClassName="mt-6.5 lg:mt-14 lg:grid-cols-3"
          className="lg:px-7"
        >
          {fleet.slice(0, 3).map(
            ({
              slug,
              name,
              teaser,
              teaserShort,
              tileTags,
              tileTagShort,
              accent,
              photo,
              photoPosition,
            }) => (
              <div
                key={slug}
                className={`reveal lift flex w-[300px] flex-col gap-3.5 rounded-[22px] p-4.5 lg:w-auto lg:gap-5 lg:rounded-3xl lg:p-6 ${
                  accent ? "bg-gold text-forest-900" : "bg-cream text-ink"
                }`}
              >
                <div
                  className={`photo-zoom relative h-[200px] overflow-hidden rounded-[14px] lg:h-[280px] lg:rounded-[18px] ${
                    accent ? "bg-gold-soft" : "bg-sand"
                  }`}
                >
                  <Image
                    src={photo}
                    alt={name}
                    fill
                    sizes="(min-width: 1024px) 33vw, 300px"
                    className={`object-cover ${photoPosition ?? "object-center"}`}
                  />
                </div>
                <h3 className="text-2xl lg:text-[28px]">{name}</h3>
                <p
                  className={`text-[15px] leading-normal lg:text-base ${
                    accent ? "text-ink-dim" : "text-ink-muted"
                  }`}
                >
                  <span className="lg:hidden">{teaserShort}</span>
                  <span className="hidden lg:inline">{teaser}</span>
                </p>

                <div className="flex flex-wrap gap-2">
                  <span
                    className={`rounded-full px-3 py-1.5 text-[13px] font-semibold lg:hidden ${
                      accent ? "bg-forest-900 text-cream" : "bg-sand-deep"
                    }`}
                  >
                    {tileTagShort}
                  </span>
                  {tileTags.map((tag) => (
                    <span
                      key={tag}
                      className={`hidden rounded-full px-3 py-1.5 text-[13px] font-semibold lg:inline-block ${
                        accent ? "bg-forest-900 text-cream" : "bg-sand-deep"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href="#enquire"
                  className={`mt-auto hidden text-[15px] font-bold lg:block ${
                    accent ? "text-forest-900" : "text-forest-800"
                  }`}
                >
                  Check availability <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            ),
          )}
        </Carousel>

        <Container className="mt-6 lg:mt-10">
          <div className="border-gold/40 flex flex-col items-center gap-4 rounded-3xl border border-dashed px-6 py-7 text-center sm:flex-row sm:justify-between sm:text-left lg:px-9 lg:py-8">
            <p className="text-cream max-w-[560px] text-[17px] leading-relaxed lg:text-lg">
              Three of our {fleet.length} vehicles. See the rest, with hire options
              and what each one suits.
            </p>
            <ButtonLink href="/car-hire" variant="gold" className="shrink-0">
              See all {fleet.length} vehicles <span aria-hidden="true">&rarr;</span>
            </ButtonLink>
          </div>

          <div className="border-forest-rule mt-11 hidden gap-6 border-t pt-9 sm:grid sm:grid-cols-2 lg:grid-cols-4">
            {carHirePromises.map(({ Icon, title, body }) => (
              <div key={title} className="flex items-start gap-3.5">
                <Icon size={28} className="stroke-gold shrink-0" />
                <div>
                  <h3 className="font-sans text-[17px] font-bold">{title}</h3>
                  <p className="text-on-dark-soft mt-1 text-[15px] leading-normal">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-forest-800 mt-11 hidden flex-wrap items-center justify-between gap-x-7 gap-y-4 rounded-[20px] px-7 py-6.5 lg:flex">
            <p className="text-cream max-w-[640px] text-lg leading-normal">
              Rates depend on the vehicle, route and number of days. Send us your dates
              and we&apos;ll come back with a clear quote.
            </p>
            <ButtonLink href="/car-hire" variant="gold">
              See the fleet &amp; hire options
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section id="how" className="pt-15 pb-12 lg:pt-27.5 lg:pb-25">
        <Container>
          <SectionLabel>How it works</SectionLabel>
          <h2 className="mt-3.5 max-w-[760px] text-[clamp(33px,4.6vw,60px)] leading-[1.08] text-balance lg:mt-5">
            Planning is the easy part.
          </h2>
          <div className="mt-7 grid gap-5.5 md:grid-cols-3 lg:mt-14 lg:gap-7">
            {steps.map(({ number, title, body }) => (
              <div key={number} className="border-forest-800 border-t-2 pt-4 lg:pt-5.5">
                <p className="font-display text-gold-600 text-[44px] leading-none font-extrabold tracking-[-0.02em] lg:text-[64px]">
                  {number}
                </p>
                <h3 className="mt-2.5 text-[23px] lg:mt-4 lg:text-[26px]">{title}</h3>
                <p className="text-ink-muted mt-2 text-base leading-relaxed lg:mt-2.5 lg:text-[17px]">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Add-on services */}
      <section id="services" className="bg-sand py-14 lg:py-22.5">
        <Container>
          <div className="grid items-end gap-x-16 gap-y-3 lg:grid-cols-2 lg:gap-y-5">
            <div>
              <SectionLabel>Also from Zackella</SectionLabel>
              <h2 className="mt-3.5 text-[clamp(30px,3.4vw,44px)] leading-tight text-balance lg:mt-4.5">
                Everything around the trip, handled.
              </h2>
            </div>
            <p className="text-ink-muted hidden text-[17px] leading-relaxed text-pretty lg:block">
              Add these to a tour or car hire, or book them on their own.
            </p>
          </div>

          {/* Icon-beside-text rows on phones, a five-across strip on desktop. */}
          <div className="mt-6 flex flex-col gap-2.5 lg:mt-10 lg:grid lg:grid-cols-5 lg:gap-4">
            {services.map(({ slug, name, teaser, teaserShort, Icon }) => (
              <Link
                key={slug}
                href={`/services#${slug}`}
                className="reveal lift bg-cream flex items-center gap-3.5 rounded-2xl p-4 lg:flex-col lg:items-start lg:gap-3 lg:rounded-[18px] lg:p-5.5"
              >
                <Icon size={28} className="stroke-forest-800 shrink-0 lg:size-[30px]" />
                <div>
                  <h3 className="font-sans text-base leading-tight font-bold lg:text-lg">
                    {name}
                  </h3>
                  <p className="text-ink-muted mt-0.5 text-sm leading-normal lg:mt-2 lg:text-[15px]">
                    <span className="lg:hidden">{teaserShort}</span>
                    <span className="hidden lg:inline">{teaser}</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        heading="Tell us where. We'll plan the rest."
        body={`${site.tagline}, one message away.`}
        backdrop={
          <ReelWatermark />
        }
        actions={
          <ButtonRow>
            <ButtonLink href={site.whatsapp.href} variant="gold" size="lg">
              <WhatsAppIcon size={20} className="stroke-forest-900" strokeWidth={2} />
              WhatsApp us
            </ButtonLink>
            <ButtonLink href={site.phone.href} variant="outlineCream" size="lg">
              <PhoneIcon size={20} className="stroke-cream" strokeWidth={2} />
              Call {site.phone.display}
            </ButtonLink>
          </ButtonRow>
        }
      />
    </>
  );
}
