import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { HeroPhoto } from "@/components/HeroPhoto";
import { PageHero } from "@/components/PageHero";
import { ReelWatermark } from "@/components/ReelWatermark";
import { ServicesShowcase } from "@/components/ServicesShowcase";
import {
  ButtonLink,
  ButtonRow,
  Container,
  CtaBand,
} from "@/components/ui";
import { servicesSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Flight and ticket booking from your own country, airport pick-ups and drop-offs, hotel booking, travel consultancy, event planning and management, and product deliveries from Zackella in Kampala.",
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
        intro="Tours and car hire are our core. These six services make them easier. We can even book and pay for your tickets from your own country, and for the journey home. Add them to a trip, or book them on their own."
        media={
          <HeroPhoto
            src="/services-hero.jpg"
            // Keeps the vehicle and the horizon in the band.
            position="object-[center_52%]"
            preload
          />
        }
      />

      <section className="pt-10 pb-8 lg:pt-18 lg:pb-14">
        <Container>
          {/* Section Introduction */}
          <div className="mb-8 max-w-3xl lg:mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-forest-900/10 bg-forest-900/5 px-3.5 py-1.5 text-xs font-bold tracking-[0.14em] uppercase text-forest-800">
              <span className="size-1.5 rounded-full bg-gold" />
              Tailored Travel Capabilities
            </div>
            <h2 className="font-display mt-3 text-[clamp(28px,3.5vw,44px)] font-bold leading-tight text-forest-900">
              Six dedicated services, <span className="text-gold-700 font-serif font-medium">handled with perfection.</span>
            </h2>
            <p className="text-ink-soft mt-3 text-[17px] leading-relaxed text-pretty lg:text-[19px]">
              Every moving piece of your journey coordinated by our Kampala team. Switch between services below to explore what&apos;s included and request your quote.
            </p>
          </div>

          {/* Interactive Tabbed Showcase */}
          <ServicesShowcase />
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
