import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { LodgeCard } from "@/components/LodgeCard";
import { HeroPhoto } from "@/components/HeroPhoto";
import { PageHero } from "@/components/PageHero";
import { ReelWatermark } from "@/components/ReelWatermark";
import { TourMedia } from "@/components/TourMedia";
import {
  ButtonLink,
  ButtonRow,
  Container,
  CtaBand,
  SectionLabel,
} from "@/components/ui";
import { lodges } from "@/data/lodges";
import { tourChips, tours } from "@/data/tours";
import { site } from "@/lib/site";
import { toursSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Tours & Travel",
  description:
    "Seven tailor-made Uganda journeys: gorilla trekking in Bwindi, Murchison Falls, Queen Elizabeth, Jinja, Lake Bunyonyi, Sipi Falls and Kidepo Valley.",
  alternates: { canonical: "/tours/" }
};

const included = [
  {
    title: "Transport",
    body: "A suitable vehicle and a driver who knows the route, from pick-up to drop-off.",
  },
  {
    title: "Stays",
    body: "Hotels and lodges chosen to match your route and your budget.",
  },
  {
    title: "Bookings",
    body: "Park entry, permits and activities arranged ahead of time.",
  },
  {
    title: "Arrival",
    body: "Airport pick-up when you land, with the same team looking after you throughout.",
  },
];

export default function ToursPage() {
  return (
    <>
      <JsonLd data={toursSchema} />
      <PageHero
        variant="tours"
        crumb="Tours & Travel"
        headline={
          <>
            Uganda, one <span className="text-gold">destination</span> at a time.
          </>
        }
        intro="Seven favourites, all tailor-made. Pick one, or combine several into a single journey. Prices depend on season, group size and where you stay, so every trip is quoted individually."
        media={
          <HeroPhoto
            src="/tours-hero.jpg"
            // Keeps the herd's heads in the band rather than the grass above.
            position="object-[center_45%]"
            preload
          />
        }
      />

      {/* Quick-Jump Navigation — scrolls away with the page */}
      <nav
        aria-label="Destinations"
        className="border-b border-line-300/80 bg-cream/95 shadow-[0_2px_12px_rgb(12_51_32/0.04)]"
      >
        <div className="scroller flex items-center gap-2 px-4 py-3 sm:px-7 lg:mx-auto lg:max-w-[1280px] lg:flex-wrap lg:py-3">
          {tourChips.map(({ slug, label, short }) => (
            <a
              key={slug}
              href={`#${slug}`}
              className="border-line-300 text-ink-soft hover:bg-forest-900 hover:text-cream hover:border-forest-900 shrink-0 rounded-full border bg-white/80 px-3.5 py-1.5 text-xs font-semibold shadow-2xs transition-all sm:text-[15px]"
            >
              <span className="lg:hidden">{short}</span>
              <span className="hidden lg:inline">{label}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* Destinations — 4-up card grid */}
      <section className="py-10 lg:py-16">
        <Container>
          {/* Section header */}
          <div className="mb-7 lg:mb-10">
            <SectionLabel>Uganda Safari Routes</SectionLabel>
            <h2 className="mt-3 text-[clamp(26px,3.2vw,40px)] leading-[1.1] text-balance">
              Seven favourites. Every one tailor-made.
            </h2>
            <p className="text-ink-muted mt-2 max-w-[560px] text-[17px] leading-relaxed">
              Prices depend on season, group size and where you stay — every trip is quoted individually.
            </p>
          </div>

          {/* 4-column grid of cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {tours.map((tour, index) => {
              const { slug, name, badge, blurb, highlights, length, goodFor } = tour;
              const isFeatured = index === 0;

              return (
                <article
                  key={slug}
                  id={slug}
                  className="group flex scroll-mt-24 flex-col overflow-hidden rounded-2xl border border-line-200/80 bg-white shadow-[0_2px_12px_rgb(12_51_32/0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgb(12_51_32/0.12)]"
                >
                  {/* Card Photo */}
                  <div className="relative h-[210px] shrink-0 overflow-hidden bg-forest-900 sm:h-[220px]">
                    <TourMedia
                      tour={tour}
                      variant="tile"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Floating top badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {isFeatured && (
                        <span className="bg-gold text-forest-900 rounded-full px-2.5 py-0.5 text-[13px] font-bold uppercase tracking-wide shadow-sm">
                          Featured
                        </span>
                      )}
                      <span className="flex items-center gap-1 rounded-full bg-forest-900/80 px-2.5 py-0.5 text-[13px] font-bold text-white backdrop-blur-sm">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                        {length}
                      </span>
                      <span className="flex items-center gap-1 rounded-full bg-forest-900/80 px-2.5 py-0.5 text-[13px] font-bold text-white backdrop-blur-sm">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><circle cx="12" cy="10" r="3"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
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

                    {/* Areas */}
                    <p className="text-ink-muted mt-1.5 text-[14px] leading-relaxed">
                      <span className="font-bold text-forest-900/80">Areas: </span>
                      {highlights.slice(0, 2).join(" · ")}
                    </p>

                    {/* Blurb */}
                    <p className="text-ink-soft mt-2.5 text-[17px] leading-relaxed line-clamp-3">
                      {blurb}
                    </p>

                    {/* Good For */}
                    <p className="text-ink-muted mt-2 flex items-center gap-1.5 text-[15px]">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-forest-700" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                      {goodFor}
                    </p>

                    {/* Spacer */}
                    <div className="mt-auto pt-4">
                      <div className="flex items-center justify-between gap-2">
                        <a
                          href={`/contact`}
                          className="bg-forest-900 text-cream hover:bg-forest-800 inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2.5 text-[17px] font-bold transition-colors"
                        >
                          Plan this trip <span aria-hidden="true">→</span>
                        </a>
                        <span className="text-ink-muted text-right">
                          <span className="block text-[13px] font-bold uppercase tracking-wider">Days</span>
                          <span className="font-bold text-forest-900 text-[19px] leading-none">{length.split(" ")[0]}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Lodges */}
      <section id="lodges" className="bg-sand mt-9 scroll-mt-8 py-14 lg:mt-17.5 lg:py-22.5">
        <Container>
          <div className="grid items-end gap-x-16 gap-y-3 lg:grid-cols-2 lg:gap-y-5">
            <div>
              <SectionLabel>Lodges</SectionLabel>
              <h2 className="mt-3.5 text-[clamp(30px,4vw,52px)] leading-[1.1] text-balance lg:mt-5">
                Where you sleep is half the trip.
              </h2>
            </div>
          </div>

          <div className="mt-6.5 flex flex-col gap-6 lg:mt-12 lg:gap-10">
            {lodges.map((lodge) => (
              <LodgeCard key={lodge.slug} lodge={lodge} />
            ))}
          </div>

          <div className="border-forest-800/30 mt-7 flex flex-col items-center gap-4 rounded-3xl border border-dashed px-6 py-7 text-center sm:flex-row sm:justify-between sm:text-left lg:mt-10 lg:px-9 lg:py-8">
            <p className="text-ink-soft max-w-[620px] text-base leading-relaxed lg:text-[19px]">
              Looking for somewhere in particular? We book city hotels, tented camps
              and lodges across Uganda, at every budget.
            </p>
            <ButtonLink href="/contact" className="shrink-0">
              Ask about a stay <span aria-hidden="true">&rarr;</span>
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* What's taken care of */}
      <section className="bg-forest-900 text-cream py-13 lg:py-24">
        <Container>
          <SectionLabel tone="dark">On every trip</SectionLabel>
          <h2 className="mt-3.5 max-w-[760px] text-[clamp(30px,4vw,52px)] leading-[1.1] text-balance lg:mt-5">
            What we take care of, so you don&apos;t have to.
          </h2>
          <div className="mt-6.5 grid gap-4.5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-6">
            {included.map(({ title, body }) => (
              <div key={title} className="border-gold border-t-2 pt-3.5 lg:pt-5">
                <h3 className="text-[22px] lg:text-2xl">{title}</h3>
                <p className="text-on-dark-soft mt-1.5 text-[17px] leading-relaxed lg:mt-2.5 lg:text-base">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        heading="Not sure where to start?"
        body="Tell us how many days you have and what you love. We'll suggest a route."
        backdrop={<ReelWatermark />}
        actions={
          <ButtonRow>
            <ButtonLink href="/contact" variant="gold" size="lg">
              Get a quote
            </ButtonLink>
            <ButtonLink href={site.whatsapp.href} variant="outlineCream" size="lg">
              WhatsApp us
            </ButtonLink>
          </ButtonRow>
        }
      />
    </>
  );
}
