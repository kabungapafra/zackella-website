import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { HeroPhoto } from "@/components/HeroPhoto";
import { PageHero } from "@/components/PageHero";
import { ReelWatermark } from "@/components/ReelWatermark";
import {
  ButtonLink,
  ButtonRow,
  CheckList,
  Container,
  CtaBand,
} from "@/components/ui";
import { services } from "@/data/services";
import { servicesSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Airport pick-ups and drop-offs, hotel booking, travel consultancy, event planning and management, and product deliveries from Zackella in Kampala.",
  alternates: { canonical: "/services/" }
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesSchema} />
      <PageHero
        variant="services"
        crumb="Services"
        headline={
          <>
            Everything around <span className="text-gold">the trip.</span>
          </>
        }
        intro="Tours and car hire are our core. These five services make them easier. Add them to a trip, or book them on their own."
        media={
          <HeroPhoto
            src="/services-hero.jpg"
            // Keeps the vehicle and the horizon in the band.
            position="object-[center_52%]"
            preload
          />
        }
      />

      <section className="pt-7 pb-5 lg:pt-17.5 lg:pb-10">
        <Container>
          {services.map(({ slug, name, blurb, details, cta, Icon }, index) => (
            <article
              key={slug}
              id={slug}
              className={`reveal grid scroll-mt-8 items-start gap-x-16 gap-y-4 py-7.5 lg:gap-y-7 lg:py-11 ${
                index === 0
                  ? "border-forest-800 border-t-2"
                  : "border-line-300 border-t"
              } lg:grid-cols-2`}
            >
              <div className="flex items-center gap-4 lg:items-start lg:gap-5.5">
                {/* The icon tile alternates gold and forest down the list. */}
                <div
                  className={`flex size-16 shrink-0 items-center justify-center rounded-[18px] lg:size-19 lg:rounded-[22px] ${
                    index % 2 === 0 ? "bg-gold" : "bg-forest-800"
                  }`}
                >
                  <Icon
                    size={32}
                    className={`lg:size-[38px] ${
                      index % 2 === 0 ? "stroke-forest-900" : "stroke-gold"
                    }`}
                  />
                </div>
                <div>
                  <p className="font-display text-gold-800 text-[17px] font-extrabold tracking-[-0.02em] lg:text-xl">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-0.5 text-[26px] leading-tight lg:mt-1 lg:text-[clamp(28px,3vw,38px)]">
                    {name}
                  </h2>
                </div>
              </div>
              <div>
                <p className="text-ink-soft text-base leading-relaxed text-pretty lg:text-lg">
                  {blurb}
                </p>
                <CheckList items={details} className="mt-3.5 lg:mt-4.5" />
                <ButtonLink
                  href="/contact"
                  block
                  className="mt-4 !text-[15px] lg:mt-6 lg:w-auto lg:!text-base"
                >
                  {cta} <span aria-hidden="true">&rarr;</span>
                </ButtonLink>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <div className="mt-6 lg:mt-12.5">
        <CtaBand
          heading="Planning a trip? Bundle it all."
          body="Tour, vehicle, transfers and stays from one team, with one quote."
          backdrop={<ReelWatermark />}
          actions={
            <ButtonRow>
              <ButtonLink href="/tours" variant="gold" size="lg">
                Browse tours
              </ButtonLink>
              <ButtonLink href="/car-hire" variant="outlineCream" size="lg">
                See car hire
              </ButtonLink>
            </ButtonRow>
          }
        />
      </div>
    </>
  );
}
