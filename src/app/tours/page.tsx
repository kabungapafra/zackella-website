import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
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
        <Container className="flex flex-col gap-14 lg:gap-27.5">
          {tours.map((tour, index) => {
            const { slug, name, badge, blurb, highlights, length, goodFor } = tour;
            // Alternate which column the illustration sits in on desktop.
            const artRight = index % 2 === 1;
            return (
              <article
                key={slug}
                id={slug}
                className="grid scroll-mt-8 items-center gap-x-16 gap-y-4.5 lg:grid-cols-2 lg:gap-y-9"
              >
                <div
                  className={`photo-zoom bg-forest-700 relative h-[230px] overflow-hidden rounded-[22px] lg:aspect-5/4 lg:h-auto lg:rounded-[26px] ${
                    artRight ? "lg:order-2" : ""
                  }`}
                >
                  <TourMedia tour={tour} variant="feature" />
                </div>
                <div>
                  <span className="bg-gold text-forest-900 inline-block rounded-full px-2.5 py-1.25 text-[11px] font-bold tracking-[0.1em] uppercase lg:px-3 lg:py-1.5 lg:text-xs">
                    {badge}
                  </span>
                  <h2 className="mt-3 text-[clamp(29px,3.6vw,46px)] leading-[1.1] lg:mt-4">
                    {name}
                  </h2>
                  <p className="text-ink-soft mt-3 text-base leading-relaxed text-pretty lg:mt-4 lg:text-lg">
                    {blurb}
                  </p>
                  <CheckList items={highlights} className="mt-3.5 lg:mt-5" />

                  {/* Label-left, value-right rows on phones; two tiles on desktop. */}
                  <dl className="mt-4 flex flex-col gap-2 lg:mt-6 lg:grid lg:grid-cols-2 lg:gap-3">
                    <div className="bg-sand flex justify-between gap-3 rounded-xl px-3.5 py-3 text-[15px] lg:flex-col lg:justify-start lg:gap-0 lg:rounded-[14px] lg:px-4 lg:py-3.5">
                      <dt className="text-ink-muted font-semibold lg:text-xs lg:font-bold lg:tracking-[0.12em] lg:uppercase">
                        Suggested length
                      </dt>
                      <dd className="font-bold lg:mt-1 lg:text-[17px]">{length}</dd>
                    </div>
                    <div className="bg-sand flex justify-between gap-3 rounded-xl px-3.5 py-3 text-[15px] lg:flex-col lg:justify-start lg:gap-0 lg:rounded-[14px] lg:px-4 lg:py-3.5">
                      <dt className="text-ink-muted font-semibold lg:text-xs lg:font-bold lg:tracking-[0.12em] lg:uppercase">
                        Good for
                      </dt>
                      <dd className="text-right font-bold lg:mt-1 lg:text-left lg:text-[17px]">
                        {goodFor}
                      </dd>
                    </div>
                  </dl>

                  <ButtonLink
                    href="/contact"
                    block
                    className="mt-4.5 lg:mt-6.5 lg:w-auto"
                  >
                    Plan this trip <span aria-hidden="true">&rarr;</span>
                  </ButtonLink>
                </div>
              </article>
            );
          })}
        </Container>
      </section>

      {/* What's taken care of */}
      <section className="bg-forest-900 text-cream mt-9 py-13 lg:mt-17.5 lg:py-24">
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
