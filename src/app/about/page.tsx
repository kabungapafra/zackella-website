import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircleIcon, PencilIcon, PinIcon } from "@/components/Icon";
import { HeroPhoto } from "@/components/HeroPhoto";
import { PageHero } from "@/components/PageHero";
import { ReelWatermark } from "@/components/ReelWatermark";
import {
  ButtonLink,
  ButtonRow,
  Container,
  CtaBand,
  SectionLabel,
} from "@/components/ui";
import { site, team } from "@/lib/site";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Zackella Tours and Travel is a Kampala travel company offering tailor-made tours, car hire and the practical services that keep a trip running smoothly.",
};

const values = [
  {
    Icon: CheckCircleIcon,
    title: "Reliable",
    body: "When we confirm a pick-up, a vehicle or a booking, it happens as agreed. That is what service beyond boundaries means to us.",
  },
  {
    Icon: PinIcon,
    title: "Local",
    body: "We know Uganda's roads, parks and people, so your trip runs on local knowledge, not guesswork.",
  },
  {
    Icon: PencilIcon,
    title: "Tailor-made",
    body: "No fixed packages to squeeze into. Tell us your pace and budget, and we shape the trip around you.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        variant="about"
        crumb="About us"
        headline={
          <>
            Service <span className="text-gold">beyond</span> boundaries.
          </>
        }
        intro="Meet the Kampala team behind your tours, your car hire and the details in between."
        tall
        media={
          <HeroPhoto
            src="/about-hero.jpg"
            // Portrait source on a wide band. Framed so the sign lettering and
            // the figure under it both clear the crop rather than being cut off
            // at the top edge.
            position="object-[center_42%] lg:object-[center_40%]"
            preload
          />
        }
      />

      {/* Story */}
      <section className="pt-13 pb-9 lg:pt-25 lg:pb-20">
        <Container className="grid items-start gap-x-18 gap-y-4.5 lg:grid-cols-2 lg:gap-y-10">
          <div>
            <SectionLabel>Who we are</SectionLabel>
            <h2 className="mt-3.5 text-[clamp(31px,4vw,52px)] leading-[1.1] text-balance lg:mt-5">
              A Kampala travel company that looks after the whole journey.
            </h2>
          </div>
          <div className="text-ink-soft flex flex-col gap-4 text-base leading-relaxed lg:gap-5 lg:text-lg">
            <p>
              {site.name} is based in Kampala, Uganda. We help visitors and locals
              explore the country with tailor-made tours, dependable car hire and the
              practical services that keep a trip running smoothly.
            </p>
            <p>
              Tours and car hire are what we do best. Around them we offer airport
              pick-ups and drop-offs, hotel booking, travel consultancy, event planning
              and management, and product deliveries
              <span className="hidden lg:inline">
                , so one team can take care of everything
              </span>
              .
            </p>
            {/* Real copy now, so it loses the dashed placeholder treatment and
                keeps only the label, marked off by a rule. */}
            <div className="border-gold/55 mt-0.5 border-l-2 pl-4.5 lg:pl-5">
              <p className="text-gold-800 text-xs font-bold tracking-[0.14em] uppercase">
                Our story
              </p>
              <p className="mt-1.5 lg:mt-2">{site.story}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="pb-13 lg:pt-5 lg:pb-25">
        <Container>
          <div className="grid gap-3.5 md:grid-cols-3 lg:gap-5.5">
            {values.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="reveal lift border-line rounded-[20px] border bg-white p-5.5 lg:rounded-[22px] lg:p-7.5"
              >
                <Icon size={34} className="stroke-forest-800 lg:size-[38px]" />
                <h2 className="mt-3 text-[25px] lg:mt-4.5 lg:text-[28px]">{title}</h2>
                <p className="text-ink-muted mt-2 text-base leading-relaxed lg:mt-2.5 lg:text-[17px]">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What we do */}
      <section className="bg-forest-900 text-cream py-13 lg:py-25">
        <Container>
          <SectionLabel tone="dark">What we do</SectionLabel>
          <h2 className="mt-3.5 max-w-[760px] text-[clamp(31px,4vw,52px)] leading-[1.1] text-balance lg:mt-5">
            Two things done well, and the rest handled for you.
          </h2>
          <div className="mt-6 grid gap-3.5 md:grid-cols-2 lg:mt-12 lg:gap-5.5">
            <Link
              href="/tours"
              className="reveal lift bg-gold text-forest-900 flex flex-col gap-2 rounded-[22px] p-6 lg:min-h-[200px] lg:gap-3 lg:rounded-3xl lg:p-8.5"
            >
              <h3 className="text-[28px] lg:text-[34px]">Tours &amp; Travel</h3>
              <p className="max-w-[420px] text-base leading-normal lg:text-[17px]">
                Safaris, gorilla treks and weekends away, built around you.
              </p>
              <p className="mt-1.5 font-bold lg:mt-auto">
                See the tours <span aria-hidden="true">&rarr;</span>
              </p>
            </Link>
            <Link
              href="/car-hire"
              className="reveal lift bg-cream text-ink flex flex-col gap-2 rounded-[22px] p-6 lg:min-h-[200px] lg:gap-3 lg:rounded-3xl lg:p-8.5"
            >
              <h3 className="text-[28px] lg:text-[34px]">Car Hire</h3>
              <p className="text-ink-muted max-w-[420px] text-base leading-normal lg:text-[17px]">
                Saloons to safari cruisers, with a driver or self-drive.
              </p>
              <p className="text-forest-800 mt-1.5 font-bold lg:mt-auto">
                See the fleet <span aria-hidden="true">&rarr;</span>
              </p>
            </Link>
          </div>
          <p className="text-on-dark-soft mt-5.5 max-w-[760px] text-[15px] leading-relaxed lg:mt-8 lg:text-[17px]">
            Plus airport pick-ups and drop-offs, hotel booking, travel consultancy,
            event planning and management, and product deliveries.{" "}
            <Link
              href="/services"
              className="text-gold font-bold underline underline-offset-4"
            >
              See all services
            </Link>
          </p>
        </Container>
      </section>

      {/* Team */}
      <section className="py-13 lg:py-25">
        <Container>
          <SectionLabel>The team</SectionLabel>
          <h2 className="mt-3.5 max-w-[760px] text-[clamp(31px,4vw,52px)] leading-[1.1] text-balance lg:mt-5">
            The people behind Zackella.
          </h2>
          {/* Two of them, so each gets a card of its own with the name set
              beside the photograph rather than under it. */}
          <ul className="mt-6 grid gap-4.5 md:mt-12 md:grid-cols-2 md:gap-7">
            {team.map((member, index) => (
              <li
                key={index}
                className="reveal border-line bg-cream-200 flex items-center gap-4.5 rounded-[22px] border p-4 lg:gap-6 lg:p-5"
              >
                <div className="border-line relative h-[138px] w-[104px] shrink-0 overflow-hidden rounded-[16px] border lg:h-[168px] lg:w-[127px] lg:rounded-[18px]">
                  <Image
                    src={member.photo}
                    alt={`${member.name}, ${member.role} at ${site.name}`}
                    fill
                    sizes="(min-width: 1024px) 127px, 104px"
                    className="object-cover object-[center_28%]"
                  />
                </div>
                <div>
                  <p className="font-display text-[21px] leading-[1.15] font-bold tracking-[-0.015em] text-balance lg:text-[26px]">
                    {member.name}
                  </p>
                  {/* Separates the name from the role without another rule of type. */}
                  <span className="bg-gold mt-3 block h-[3px] w-9 rounded-full" />
                  <p className="text-ink-muted mt-3 text-[15px] lg:text-[17px]">{member.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand
        heading="Let's plan your next journey."
        backdrop={
          <ReelWatermark />
        }
        actions={
          <ButtonRow>
            <ButtonLink href="/contact" variant="gold" size="lg">
              Contact us
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
