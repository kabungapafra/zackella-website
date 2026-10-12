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
  CheckList,
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
        media={<HeroPhoto src="/uganda-road.jpg" preload />}
      />

      {/* Jump links: a scrolling rail on phones, a wrapping row on desktop. */}
      <nav aria-label="Destinations" className="bg-sand border-line-200 border-b">
        <div className="scroller gap-2.5 px-5 py-3.5 sm:px-7 lg:mx-auto lg:max-w-[1600px] lg:flex-wrap lg:items-center lg:py-4.5">
          <span className="text-ink-muted mr-1.5 hidden text-[13px] font-bold tracking-[0.14em] uppercase lg:inline">
            Jump to
          </span>
          {tourChips.map(({ slug, label, short }) => (
            <a
              key={slug}
              href={`#${slug}`}
              className="border-line-300 bg-cream hover:bg-forest-800 hover:text-cream rounded-full border px-4.5 py-2.5 text-[15px] font-semibold transition-colors"
            >
              <span className="lg:hidden">{short}</span>
              <span className="hidden lg:inline">{label}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* Destinations */}
      <section className="pt-11 pb-5 lg:pt-22.5 lg:pb-10">
        <Container className="flex flex-col gap-5 lg:gap-7">
          {tours.map((tour, index) => {
            const { slug, name, badge, blurb, highlights, length, goodFor } = tour;

            // The first destination is the one most people come for, so it
            // keeps the full-width card; the rest read as a list beneath it.
            if (index === 0) {
              return (
                <article
                  key={slug}
                  id={slug}
                  className="bg-cream border-line-300 scroll-mt-8 overflow-hidden rounded-[22px] border lg:rounded-[26px]"
                >
                  <div className="photo-zoom bg-forest-700 relative h-[260px] w-full overflow-hidden lg:h-[420px]">
                    <TourMedia tour={tour} variant="feature" />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-linear-to-b from-transparent from-40% to-[rgb(12_51_32_/_0.93)]"
                    />
                    <div className="text-cream absolute inset-x-5 bottom-5 lg:inset-x-8 lg:bottom-7">
                      <span className="bg-gold text-forest-900 inline-block rounded-full px-2.5 py-1.25 text-[11px] font-bold tracking-[0.1em] uppercase lg:px-3 lg:py-1.5 lg:text-xs">
                        {badge}
                      </span>
                      <h2 className="mt-2.5 text-[27px] leading-tight lg:mt-3.5 lg:text-[40px]">
                        {name}
                      </h2>
                    </div>
                  </div>

                  <div className="grid items-start gap-x-14 gap-y-4.5 px-5 py-5.5 lg:grid-cols-[1.4fr_1fr] lg:px-8 lg:py-8">
                    <div>
                      <p className="text-ink-soft text-base leading-relaxed text-pretty lg:text-lg">
                        {blurb}
                      </p>
                      <CheckList items={highlights} className="mt-3.5 lg:mt-5" />
                    </div>
                    <div>
                      <dl className="flex flex-col gap-2 lg:gap-3">
                        <div className="bg-sand flex justify-between gap-3 rounded-xl px-3.5 py-3 text-[15px] lg:flex-col lg:justify-start lg:gap-0 lg:rounded-[14px] lg:px-4.5 lg:py-4">
                          <dt className="text-ink-muted font-semibold lg:text-xs lg:font-bold lg:tracking-[0.12em] lg:uppercase">
                            Suggested length
                          </dt>
                          <dd className="font-bold lg:mt-1 lg:text-[17px]">{length}</dd>
                        </div>
                        <div className="bg-sand flex justify-between gap-3 rounded-xl px-3.5 py-3 text-[15px] lg:flex-col lg:justify-start lg:gap-0 lg:rounded-[14px] lg:px-4.5 lg:py-4">
                          <dt className="text-ink-muted font-semibold lg:text-xs lg:font-bold lg:tracking-[0.12em] lg:uppercase">
                            Good for
                          </dt>
                          <dd className="text-right font-bold lg:mt-1 lg:text-left lg:text-[17px]">
                            {goodFor}
                          </dd>
                        </div>
                      </dl>
                      <ButtonLink href="/contact" block className="mt-4 lg:mt-3">
                        Plan this trip <span aria-hidden="true">&rarr;</span>
                      </ButtonLink>
                    </div>
                  </div>
                </article>
              );
            }

            return (
              <article
                key={slug}
                id={slug}
                className="bg-cream border-line-300 grid scroll-mt-8 overflow-hidden rounded-[22px] border lg:grid-cols-[340px_1fr] lg:rounded-[26px]"
              >
                <div className="photo-zoom bg-forest-700 relative h-[200px] overflow-hidden lg:h-auto lg:min-h-[280px]">
                  <TourMedia tour={tour} variant="row" />
                </div>

                <div className="px-5 py-5 lg:px-8 lg:py-7">
                  <div className="flex flex-wrap items-center gap-x-3.5 gap-y-2">
                    <span className="bg-gold text-forest-900 inline-block rounded-full px-2.5 py-1.25 text-[11px] font-bold tracking-[0.1em] uppercase lg:px-3 lg:py-1.5 lg:text-xs">
                      {badge}
                    </span>
                    <p className="text-ink-muted text-[13px] font-bold tracking-[0.1em] uppercase">
                      {length} &middot; {goodFor}
                    </p>
                  </div>

                  <h2 className="mt-2.5 text-[25px] leading-tight lg:mt-3 lg:text-[clamp(27px,2.6vw,34px)]">
                    {name}
                  </h2>
                  <p className="text-ink-soft mt-2 text-base leading-relaxed text-pretty lg:mt-2.5 lg:text-[17px]">
                    {blurb}
                  </p>

                  {/* Two columns from `lg`, so a long list does not stretch the row. */}
                  <CheckList
                    items={highlights}
                    className="mt-3 lg:mt-4 lg:grid lg:grid-cols-2 lg:gap-x-7 lg:text-base"
                  />

                  <ButtonLink
                    href="/contact"
                    block
                    className="mt-4 lg:mt-5 lg:inline-flex lg:w-auto"
                  >
                    Plan this trip <span aria-hidden="true">&rarr;</span>
                  </ButtonLink>
                </div>
              </article>
            );
          })}
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
            <p className="text-ink-muted text-base leading-relaxed text-pretty lg:text-lg">
              A few of the stays we book on these routes. Tap a lodge to see more of
              it. We&apos;ll be adding more pictures, and more lodges, soon.
            </p>
          </div>

          <div className="mt-6.5 flex flex-col gap-6 lg:mt-12 lg:gap-10">
            {lodges.map((lodge) => (
              <LodgeCard key={lodge.slug} lodge={lodge} />
            ))}
          </div>

          <div className="border-forest-800/30 mt-7 flex flex-col items-center gap-4 rounded-3xl border border-dashed px-6 py-7 text-center sm:flex-row sm:justify-between sm:text-left lg:mt-10 lg:px-9 lg:py-8">
            <p className="text-ink-soft max-w-[620px] text-base leading-relaxed lg:text-[17px]">
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
                <p className="text-on-dark-soft mt-1.5 text-[15px] leading-relaxed lg:mt-2.5 lg:text-base">
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
