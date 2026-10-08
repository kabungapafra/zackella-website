import type { Metadata } from "next";
import Image from "next/image";
import { DateRangeIcon, GroupIcon, PinIcon } from "@/components/Icon";
import { HeroPhoto } from "@/components/HeroPhoto";
import { PageHero } from "@/components/PageHero";
import { VideoBackdrop } from "@/components/VideoBackdrop";
import {
  ButtonLink,
  ButtonRow,
  CheckList,
  Container,
  CtaBand,
  PlaceholderNote,
  SectionLabel,
} from "@/components/ui";
import { fleet, hireOptions } from "@/data/fleet";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Car Hire",
  description:
    "Hire a saloon, SUV, 4x4 safari cruiser or minibus in Uganda, with a driver or self-drive. Airport transfers, day hire and long-term rentals from Kampala.",
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
      <section className="pt-13 pb-12 lg:pt-25 lg:pb-22.5">
        <Container>
          <SectionLabel>The fleet</SectionLabel>
          <h2 className="mt-3.5 max-w-[760px] text-[clamp(32px,4vw,52px)] leading-[1.08] text-balance lg:mt-5">
            Choose your vehicle.
          </h2>
          <p className="text-ink-muted mt-3 max-w-[640px] text-base leading-relaxed lg:mt-4 lg:text-lg">
            Not sure which one suits your trip? Tell us the route, the group size and
            the luggage, and we&apos;ll recommend one.
          </p>

          <div className="mt-6.5 grid gap-4 lg:mt-13 lg:grid-cols-2 lg:gap-6">
            {fleet.map(({ slug, name, blurb, bestFor, hireTags, cta, accent, photo, photoPosition }) => (
              <article
                key={slug}
                id={slug}
                className={`reveal lift flex scroll-mt-8 flex-col gap-3.5 rounded-[22px] p-4.5 lg:gap-5 lg:rounded-[26px] lg:p-6.5 ${
                  accent ? "bg-gold text-forest-900" : "border-line border bg-white"
                }`}
              >
                <div
                  className={`relative aspect-4/3 overflow-hidden rounded-[14px] lg:rounded-[18px] ${
                    accent ? "bg-gold-soft" : "bg-sand"
                  }`}
                >
                  <Image
                    src={photo}
                    alt={`${name} available for hire from ${site.name}`}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className={`object-cover ${photoPosition ?? "object-center"}`}
                  />
                </div>
                <h3 className="text-[28px] lg:text-[32px]">{name}</h3>
                <p
                  className={`text-base leading-relaxed lg:text-[17px] ${
                    accent ? "text-ink-dim" : "text-ink-muted"
                  }`}
                >
                  {blurb}
                </p>
                <CheckList
                  items={bestFor}
                  tone={accent ? "gold" : "light"}
                  className="lg:text-base"
                />
                <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {hireTags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full px-3 py-1.5 text-[13px] font-semibold ${
                          accent ? "bg-forest-900 text-cream" : "bg-sand-deep"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ButtonLink
                    href="/contact"
                    variant={accent ? "dark" : "forest"}
                    block
                    className="!text-[15px] lg:!w-auto"
                  >
                    {cta}
                  </ButtonLink>
                </div>
              </article>
            ))}
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
            <PlaceholderNote label="Self-drive terms">
              {site.selfDriveTerms}
            </PlaceholderNote>
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
