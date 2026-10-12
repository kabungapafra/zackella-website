import Image from "next/image";
import Link from "next/link";
import { Carousel } from "@/components/Carousel";
import { EnquiryPanel } from "@/components/EnquiryPanel";
import {
  ArrowUpIcon,
  CheckCircleIcon,
  ClockIcon,
  PaperPlaneIcon,
  PencilIcon,
  PersonIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "@/components/Icon";
import { HeroPhoto } from "@/components/HeroPhoto";
import { VideoBackdrop } from "@/components/VideoBackdrop";
import { TourMedia } from "@/components/TourMedia";
import {
  ButtonLink,
  ButtonRow,
  Container,
  SectionLabel,
} from "@/components/ui";
import { fleet } from "@/data/fleet";
import { services } from "@/data/services";
import { tours } from "@/data/tours";
import { site } from "@/lib/site";

const reasons = [
  {
    Icon: WhatsAppIcon,
    title: "You talk to the people who plan the trip",
    body: "A message or a call reaches the team that builds the route, not a form in a queue. Most questions are answered the same day, on WhatsApp.",
    cta: { label: "Message us on WhatsApp", href: site.whatsapp.href },
  },
  {
    Icon: PencilIcon,
    title: "The route is shaped around your dates",
    body: "Tell us how long you have and the pace you want. We put together the route, the vehicle and the stays, then send a clear quote you can adjust.",
    cta: { label: "See the tours", href: "/tours" },
  },
  {
    Icon: PinIcon,
    title: "The vehicles and the drivers are ours",
    body: "Saloons, vans and pop-top safari cruisers, kept on the road by the same team that plans your trip, with drivers who know the routes.",
    cta: { label: "See the fleet", href: "/car-hire" },
  },
  {
    Icon: CheckCircleIcon,
    title: "From the airport to the last night, handled",
    body: "Pick-up when you land, permits and park entry booked ahead, lodges confirmed and transfers timed. Nothing left to arrange once you arrive.",
    cta: { label: "Get a quote", href: "/contact" },
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
      <section className="photo-zoom bg-forest-900 text-cream relative flex min-h-[88svh] overflow-hidden lg:min-h-[100svh]">
        <HeroPhoto
          src="/hero-gorilla.jpg"
          position="object-[center_58%]"
          preload
          scrim="even"
        />
        {/* The scrim is held back so the photograph reads; the copy carries its
            own soft shadow instead, which keeps it legible over the bright
            leaves without flattening the picture behind it. */}
        <Container className="relative flex flex-col items-center justify-center pt-11 pb-32 text-center [text-shadow:0_2px_14px_rgb(12_51_32/0.6)] lg:pt-24 lg:pb-50">
          <SectionLabel tone="dark" rule={false}>
            Discover the Pearl of Africa
          </SectionLabel>
          {/* Sized off the viewport so the whole line always fits across one
              line, down to the narrowest phone. */}
          <h1 className="mt-4.5 text-[clamp(23px,5.4vw,64px)] leading-[1.1] tracking-[-0.01em] whitespace-nowrap lg:mt-6.5">
            {/* The brush stroke is drawn under the word rather than ruled
                across it, so it reads as a mark someone made by hand. */}
            <span className="whitespace-nowrap">
              <span className="relative inline-block">
                Uganda
                <svg
                  viewBox="0 0 200 20"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="text-gold absolute -right-1.5 -bottom-[0.14em] -left-1.5 h-[0.24em]"
                >
                  <path
                    d="M3 12c40-7 110-10 194-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              ,
            </span>{" "}
            <span className="text-gold">fully handled.</span>
          </h1>
          <p className="text-on-dark mt-4 max-w-[560px] text-[14px] leading-relaxed text-pretty lg:mt-6 lg:text-[clamp(15px,1.05vw,16px)]">
            From your arrival at Entebbe to your last adventure, we take care of every
            detail. Big Five safaris, unforgettable gorilla trekking, breathtaking
            mountains, beautiful lakes and rivers &mdash; plus reliable 4x4 vehicle
            hire.
          </p>
          <div className="mt-6.5 w-full lg:mt-9.5">
            <ButtonRow className="sm:justify-center">
              <ButtonLink href="/tours" variant="gold">
                Explore tours
              </ButtonLink>
              <ButtonLink href="/car-hire" variant="outlineCream">
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
        <Container className="lg:grid lg:grid-cols-[minmax(0,330px)_1fr] lg:items-start lg:gap-16">
          <div className="lg:pt-28">
            <SectionLabel tone="dark" rule={false}>
              Car Hire
            </SectionLabel>
            <h2 className="mt-3.5 text-[clamp(31px,3.6vw,50px)] leading-[1.08] text-balance lg:mt-5">
              The right vehicle{" "}
              <span className="text-gold">for every road.</span>
            </h2>
            <p className="text-on-dark-soft mt-3.5 text-base leading-relaxed text-pretty lg:mt-5 lg:text-[17px]">
              From airport transfers to park tracks and long upcountry drives. Hire
              with a driver who knows the route, or take the wheel yourself. Rates
              follow the vehicle, the route and the number of days.
            </p>
            <ButtonLink href="/car-hire" variant="gold" className="mt-5 lg:mt-7">
              See all {fleet.length} vehicles <span aria-hidden="true">&rarr;</span>
            </ButtonLink>
          </div>

          {/* A rail on phones; from `lg` the three columns sit at different
              heights, so the fleet reads as a wall of photographs. */}
          <div className="scroller mt-6.5 gap-3.5 pb-2 lg:mt-0 lg:grid lg:grid-cols-3 lg:items-start lg:gap-5 lg:overflow-visible lg:pb-0 lg:[&>*:nth-child(3n+1)]:mt-14 lg:[&>*:nth-child(3n)]:mt-7">
            {fleet.map(({ slug, name, tileTagShort, photo, photoPosition }) => (
              <Link
                key={slug}
                href="/car-hire"
                className="tile-wrap photo-zoom bg-forest-700 relative block h-[300px] w-[240px] overflow-hidden rounded-[20px] lg:h-[300px] lg:w-auto lg:rounded-[22px]"
              >
                <Image
                  src={photo}
                  alt={name}
                  fill
                  sizes="(min-width: 1024px) 33vw, 240px"
                  className={`tile-art object-cover ${photoPosition ?? "object-center"}`}
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-b from-transparent from-45% to-[rgb(12_51_32_/_0.94)]"
                />
                <span className="absolute inset-x-4.5 bottom-4.5 pr-12 lg:inset-x-5 lg:bottom-5">
                  <span className="text-gold block text-[11px] font-bold tracking-[0.12em] uppercase">
                    {tileTagShort}
                  </span>
                  <span className="font-display text-cream mt-1 block text-[20px] leading-tight font-bold lg:text-[22px]">
                    {name}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="bg-gold text-forest-900 absolute right-4 bottom-4 flex size-9 items-center justify-center rounded-full lg:right-4.5 lg:bottom-4.5 lg:size-10"
                >
                  <ArrowUpIcon size={18} className="stroke-forest-900 rotate-90" />
                </span>
              </Link>
            ))}
          </div>
        </Container>

        <Container>
          <div className="border-forest-rule mt-11 hidden gap-6 border-t pt-9 sm:grid sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
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
        </Container>
      </section>

      {/* Why Zackella */}
      <section id="why" className="pt-15 pb-12 lg:pt-27.5 lg:pb-25">
        <Container>
          <div className="bg-forest-900 text-cream border-gold overflow-hidden rounded-[24px] border-t-4 lg:rounded-[30px]">
            <div className="grid gap-x-16 gap-y-4 px-6 py-8 lg:grid-cols-2 lg:px-12 lg:py-11">
              <div>
                <SectionLabel tone="dark">Why Zackella</SectionLabel>
                <h2 className="mt-3.5 text-[clamp(29px,3.4vw,46px)] leading-[1.1] text-balance lg:mt-5">
                  Why travel with{" "}
                  <span className="text-gold">Zackella?</span>
                </h2>
              </div>
              <p className="text-on-dark-soft text-base leading-relaxed text-pretty lg:text-[17px]">
                Tours, car hire, airport transfers and the stays in between all come
                from one team in Kampala. One person to ask, one quote to read. Here
                is what that means in practice.
              </p>
            </div>

            {/* A 1px gap over the rule colour draws the dividers, so no cell
                carries a border that would run off the rounded corners. */}
            <div className="bg-forest-rule border-forest-rule grid gap-px border-t sm:grid-cols-2">
              {reasons.map(({ Icon, title, body, cta }, index) => {
                const external = cta.href.startsWith("http");
                const linkClasses =
                  "text-gold mt-3.5 inline-flex items-center gap-2 text-[15px] font-bold";
                const label = (
                  <>
                    {cta.label} <span aria-hidden="true">&rarr;</span>
                  </>
                );
                return (
                  <div
                    key={title}
                    className="bg-forest-900 flex gap-4 px-6 py-7 lg:gap-5 lg:px-12 lg:py-10"
                  >
                    <span className="bg-forest-800 flex size-11 shrink-0 items-center justify-center rounded-full lg:size-12">
                      <Icon size={21} className="stroke-gold" />
                    </span>
                    <div>
                      <p className="font-display text-gold text-xs font-extrabold tracking-[0.14em]">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-1.5 text-[20px] leading-snug lg:text-[23px]">
                        {title}
                      </h3>
                      <p className="text-on-dark-soft mt-2 text-[15px] leading-relaxed lg:mt-2.5 lg:text-base">
                        {body}
                      </p>
                      {external ? (
                        <a
                          href={cta.href}
                          target="_blank"
                          rel="noopener"
                          className={linkClasses}
                        >
                          {label}
                        </a>
                      ) : (
                        <Link href={cta.href} className={linkClasses}>
                          {label}
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
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
              Add these to a tour or car hire, or book them on their own. We can even
              book and pay for your tickets from your own country, and for the journey
              home again.
            </p>
          </div>

          {/* Icon-beside-text rows on phones, a five-across strip on desktop. */}
          <div className="mt-6 flex flex-col gap-2.5 lg:mt-10 lg:grid lg:grid-cols-3 lg:gap-4">
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

      {/* The reel plays out the page on its own: the words that sat here were
          saying again what the section above already says. */}
      <section className="text-cream relative min-h-[320px] overflow-hidden lg:min-h-[560px]">
        <VideoBackdrop
          sources={[{ src: "/hero-reel.mp4", type: "video/mp4" }]}
          variant="clear"
        />
      </section>

      {/* Over to you */}
      <section className="bg-forest-900 text-cream border-gold/60 border-b-2 py-14 lg:py-24">
        <Container className="flex flex-col items-center text-center">
          <p className="text-gold flex items-center gap-3.5 text-xs font-bold tracking-[0.18em] uppercase lg:text-[13px]">
            <span aria-hidden="true" className="bg-gold/40 block h-px w-10 lg:w-16" />
            Over to you
            <span aria-hidden="true" className="bg-gold/40 block h-px w-10 lg:w-16" />
          </p>

          <h2 className="mt-4.5 max-w-[760px] text-[clamp(30px,4vw,54px)] leading-[1.08] text-balance lg:mt-6">
            Every trip here starts{" "}
            <span className="text-gold">with a message.</span>
          </h2>

          <p className="text-on-dark-soft mt-4 max-w-[620px] text-base leading-relaxed text-pretty lg:mt-5 lg:text-[17px]">
            It reaches the people who plan the routes and drive them, not a booking
            engine. There is nothing to pay on this site. Tell us your dates and we
            come back with a plan and a clear quote.
          </p>

          <span className="border-gold/35 mt-7 flex size-16 items-center justify-center rounded-full border lg:mt-9 lg:size-20">
            <WhatsAppIcon size={28} className="stroke-gold lg:size-8" />
          </span>

          <div className="mt-7 w-full lg:mt-9">
            <ButtonRow className="sm:justify-center">
              <ButtonLink href={site.whatsapp.href} variant="gold" size="lg">
                <WhatsAppIcon size={20} className="stroke-forest-900" strokeWidth={2} />
                WhatsApp us
              </ButtonLink>
              <ButtonLink href={site.phone.href} variant="outlineCream" size="lg">
                <PhoneIcon size={20} className="stroke-cream" strokeWidth={2} />
                Call {site.phone.display}
              </ButtonLink>
            </ButtonRow>
          </div>
        </Container>
      </section>
    </>
  );
}
