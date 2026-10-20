import Image from "next/image";
import Link from "next/link";
import { EnquiryPanel } from "@/components/EnquiryPanel";
import {
  CheckCircleIcon,
  ClockIcon,
  PaperPlaneIcon,
  PencilIcon,
  PersonIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "@/components/Icon";
import { HeroSlideshow } from "@/components/HeroSlideshow";
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

/** The hero's crossfade, in the order they appear. */
const heroSlides = [
  { src: "/hero-cheetah.jpg" },
  { src: "/hero-elephants.jpg" },
  { src: "/hero-plains.jpg" },
  { src: "/hero-giraffe.jpg" },
];

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
/* The fleet wall: three columns of two, each column offset and each tile a
   different height, so the photographs stagger instead of lining up. */
const fleetColumns = [
  { offset: "lg:pt-[90px]", heights: ["lg:h-[300px]", "lg:h-[250px]"] },
  { offset: "lg:pt-0", heights: ["lg:h-[250px]", "lg:h-[300px]"] },
  { offset: "lg:pt-[140px]", heights: ["lg:h-[300px]", "lg:h-[200px]"] },
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
      <section className="bg-forest-900 text-cream relative flex min-h-[88svh] overflow-hidden lg:min-h-[100svh]">
        <HeroSlideshow slides={heroSlides} scrim="even" />
        {/* The scrim is held back so the photograph reads; the copy carries its
            own soft shadow instead, which keeps it legible over the bright
            leaves without flattening the picture behind it. */}
        <Container className="relative flex flex-col items-center justify-center pt-11 pb-32 text-center lg:pt-24 lg:pb-50">
          <SectionLabel tone="dark" rule={false}>
            <span className="text-white">Discover the Pearl of Africa</span>
          </SectionLabel>
          {/* Sized off the viewport so the whole line always fits across one
              line, down to the narrowest phone. */}
          <h1 className="font-hero text-white mt-4.5 text-[clamp(23px,5.4vw,64px)] leading-[1.1] whitespace-nowrap lg:mt-6.5">
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
          <p className="text-on-dark mt-4 max-w-[560px] text-[17px] leading-relaxed text-pretty lg:mt-6 lg:text-[clamp(18px,1.2vw,20px)]">
            From your home to the last Airport. All itinerary sorted. Meet the big
            five in the wild, gorilla trekking, rivers, lakes and breathtaking
            mountains.
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
          {/* Section header */}
          <div className="max-w-[760px]">
            <SectionLabel>Tours &amp; Travel</SectionLabel>
            <h2 className="mt-3.5 text-[clamp(33px,4.6vw,60px)] leading-[1.08] text-balance lg:mt-5">
              Pick a place.{" "}
                <span className="font-serif font-medium">We&apos;ll build the trip.</span>
            </h2>
            <p className="text-ink-muted mt-3 text-base leading-relaxed text-pretty lg:mt-4 lg:text-lg">
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

          {/* Journey cards — spec rows, then the two actions */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-5">
            {tours.slice(0, 4).map((tour) => {
              const { slug, name, badge, highlights, length, goodFor } = tour;
              return (
                <article
                  key={slug}
                  className="reveal group flex flex-col overflow-hidden rounded-2xl border border-line-200/80 bg-white shadow-[0_2px_12px_rgb(12_51_32/0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgb(12_51_32/0.12)]"
                >
                  {/* Photo */}
                  <div className="relative h-[150px] shrink-0 overflow-hidden bg-forest-900">
                    <TourMedia
                      tour={tour}
                      variant="tile"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-gold text-forest-900 rounded-full px-2.5 py-1 text-[11px] font-bold tracking-[0.1em] uppercase shadow-sm">
                        {badge}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="text-forest-900 text-[18px] font-bold leading-[1.25] text-balance lg:text-[19px]">
                      {name}
                    </h3>

                    {/* Labelled spec rows */}
                    <dl className="mt-3 flex flex-col gap-2.5 border-t border-line-200/80 pt-3">
                      <div>
                        <dt className="text-forest-900/50 text-[12px] font-bold tracking-[0.14em] uppercase">
                          Highlights
                        </dt>
                        <dd className="text-ink mt-1 text-[14.5px] leading-snug">
                          {highlights.slice(0, 2).join(" · ")}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-forest-900/50 text-[12px] font-bold tracking-[0.14em] uppercase">
                          Duration
                        </dt>
                        <dd className="text-ink mt-1 text-[14.5px] leading-snug">
                          {length}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-forest-900/50 text-[12px] font-bold tracking-[0.14em] uppercase">
                          Good for
                        </dt>
                        <dd className="text-ink mt-1 text-[14.5px] leading-snug">
                          {goodFor}
                        </dd>
                      </div>
                    </dl>

                    {/* Price slot — we quote per trip rather than list a rate */}
                    <div className="border-line-200/80 mt-3 border-t pt-3">
                      <p className="text-forest-900/50 text-[12px] font-bold tracking-[0.14em] uppercase">
                        Price
                      </p>
                      <p className="text-forest-900 mt-1 text-[17px] font-bold leading-none">
                        Quoted individually
                      </p>
                      <p className="text-ink-muted mt-1.5 text-[13px] leading-snug">
                        Season, group size and where you stay set the rate.
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="mt-auto flex items-center gap-2 pt-4">
                      <Link
                        href={`/tours#${slug}`}
                        className="border-forest-900/20 text-forest-900 hover:border-forest-900 hover:bg-cream inline-flex flex-1 items-center justify-center rounded-lg border px-2.5 py-2 text-[13px] font-bold transition-colors"
                      >
                        See details
                      </Link>
                      <Link
                        href="/contact"
                        className="bg-forest-900 text-cream hover:bg-forest-800 inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg px-2.5 py-2 text-[13px] font-bold transition-colors"
                      >
                        Inquire <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-x-7 gap-y-4 lg:mt-10">
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
        className="bg-forest-900 text-cream pt-15 pb-14 lg:pt-22.5 lg:pb-27.5"
      >
        <Container className="lg:mx-auto lg:grid lg:max-w-[1308px] lg:grid-cols-[minmax(0,380px)_minmax(0,812px)] lg:items-center lg:gap-15">
          {/* Text block, beside the wall from lg */}
          <div>
            <SectionLabel tone="dark" rule={false}>
              Car Hire
            </SectionLabel>
            <h2 className="mt-3 text-[clamp(31px,3.6vw,50px)] leading-[1.08] text-balance">
              The right vehicle
              <span className="text-gold font-serif font-medium block">for every road.</span>
            </h2>
            <p className="text-on-dark-soft mt-4 text-base leading-relaxed text-pretty lg:mt-5.5 lg:text-[19px]">
              From airport transfers to park tracks and long upcountry drives. Hire
              with a driver who knows the route, or take the wheel yourself. Rates
              follow the vehicle, the route and the number of days.
            </p>
            <ButtonLink href="/car-hire" variant="gold" className="mt-5 lg:mt-7.5">
              See all {fleet.length} vehicles <span aria-hidden="true">&rarr;</span>
            </ButtonLink>
          </div>

          {/* A rail on phones; a staggered wall of photographs from lg. */}
          <div className="scroller mt-6.5 gap-3.5 pb-2 lg:mt-0 lg:grid lg:grid-cols-3 lg:gap-[22px] lg:overflow-visible lg:pb-0">
            {fleetColumns.map(({ offset, heights }, column) => (
              <div
                key={column}
                className={`contents lg:flex lg:flex-col lg:gap-[22px] ${offset}`}
              >
                {fleet.slice(column * 2, column * 2 + 2).map(
                  ({ slug, name, tileTagShort, photo, photoPosition }, row) => (
                    <Link
                      key={slug}
                      href="/car-hire"
                      className={`tile-wrap photo-zoom bg-forest-700 relative block h-[250px] w-[185px] shrink-0 overflow-hidden rounded-[18px] lg:w-auto ${heights[row]}`}
                    >
                      <Image
                        src={photo}
                        alt={name}
                        fill
                        sizes="(min-width: 1024px) 256px, 185px"
                        className={`tile-art object-cover ${photoPosition ?? "object-center"}`}
                      />
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-linear-to-b from-transparent from-40% to-[rgb(12_51_32_/_0.94)]"
                      />
                      <span className="absolute inset-x-4 bottom-4">
                        <span className="text-gold block text-[11px] font-bold tracking-[0.12em] uppercase">
                          {tileTagShort}
                        </span>
                        <span className="text-cream mt-1 block text-[19px] leading-tight font-bold lg:text-[21px]">
                          {name}
                        </span>
                      </span>
                    </Link>
                  )
                )}
              </div>
            ))}
          </div>
        </Container>

        <Container>
          <div className="border-forest-rule mt-11 hidden gap-6 border-t pt-9 sm:grid sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {carHirePromises.map(({ Icon, title, body }) => (
              <div key={title} className="flex items-start gap-3.5">
                <Icon size={28} className="stroke-gold shrink-0" />
                <div>
                  <h3 className="font-sans text-[19px] font-bold">{title}</h3>
                  <p className="text-on-dark-soft mt-1 text-[17px] leading-normal">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Everything we run — a quick index of every tour and vehicle */}
      <section className="pt-13 pb-12 lg:pt-20 lg:pb-18">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
            <h2 className="text-[clamp(28px,3.2vw,44px)] leading-[1.08] text-balance">
              Everything we run,
              <span className="text-ink-muted font-serif font-medium block">in one place.</span>
            </h2>
            <ButtonLink href="/tours" variant="outlineForest" className="shrink-0">
              Compare tours
            </ButtonLink>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:mt-10 lg:grid-cols-7">
            {[
              ...tours.map(({ slug, shortName, length }) => ({
                key: `tour-${slug}`,
                href: `/tours#${slug}`,
                label: shortName,
                meta: length,
              })),
              ...fleet.map(({ slug, shortName, tileTagShort }) => ({
                key: `car-${slug}`,
                href: `/car-hire#${slug}`,
                label: shortName,
                meta: tileTagShort,
              })),
            ].map(({ key, href, label, meta }) => (
              <Link
                key={key}
                href={href}
                className="border-line hover:border-forest-900 hover:bg-cream-200 flex min-h-[74px] flex-col items-center justify-center gap-1 rounded-[10px] border px-2 py-2.5 text-center transition-colors"
              >
                <span className="text-ink text-[15px] leading-[1.2] font-semibold text-balance lg:text-[16px]">
                  {label}
                </span>
                <span className="text-ink-muted text-[12px] font-bold">{meta}</span>
              </Link>
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
                  <span className="text-gold font-serif font-medium">Zackella?</span>
                </h2>
              </div>
              <p className="text-on-dark-soft text-base leading-relaxed text-pretty lg:text-[19px]">
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
                  "text-gold mt-3.5 inline-flex items-center gap-2 text-[17px] font-bold";
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
                      <p className="font-display text-gold text-xs font-bold tracking-[0.14em]">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-1.5 text-[20px] leading-snug lg:text-[23px]">
                        {title}
                      </h3>
                      <p className="text-on-dark-soft mt-2 text-[17px] leading-relaxed lg:mt-2.5 lg:text-base">
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
                  <p className="text-ink-muted mt-0.5 text-sm leading-normal lg:mt-2 lg:text-[17px]">
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
          <p className="text-gold flex items-center gap-3.5 text-xs font-bold tracking-[0.18em] uppercase lg:text-[15px]">
            <span aria-hidden="true" className="bg-gold/40 block h-px w-10 lg:w-16" />
            Over to you
            <span aria-hidden="true" className="bg-gold/40 block h-px w-10 lg:w-16" />
          </p>

          <h2 className="mt-4.5 max-w-[760px] text-[clamp(30px,4vw,54px)] leading-[1.08] text-balance lg:mt-6">
            Every trip here starts{" "}
            <span className="text-gold font-serif font-medium">with a message.</span>
          </h2>

          <p className="text-on-dark-soft mt-4 max-w-[620px] text-base leading-relaxed text-pretty lg:mt-5 lg:text-[19px]">
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
