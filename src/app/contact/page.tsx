import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/Icon";
import { HeroPhoto } from "@/components/HeroPhoto";
import { PageHero } from "@/components/PageHero";
import { Container, SectionLabel } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call, WhatsApp or email Zackella Tours and Travel in Kampala to plan a tour, hire a car or arrange an airport transfer.",
  alternates: { canonical: "/contact/" }
};

const cardBase =
  "lift border-line flex items-center gap-4 rounded-[20px] border bg-white p-5 lg:gap-4.5 lg:p-6";
const cardLabel =
  "text-ink-muted text-xs font-bold tracking-[0.12em] uppercase lg:text-[13px]";

export default function ContactPage() {
  return (
    <>
      <PageHero
        variant="contact"
        crumb="Contact"
        headline={
          <>
            Let&apos;s plan your <span className="text-gold">trip.</span>
          </>
        }
        intro="Message us on WhatsApp, call, or fill in the form. Tell us where and when, and we'll come back with a plan."
        deep
        media={<HeroPhoto src="/uganda-road.jpg" preload />}
      />

      {/* Contact details and form */}
      <section className="relative z-[3] -mt-17.5 pb-9 lg:-mt-22.5 lg:pb-22.5">
        <Container className="grid items-start gap-3 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-7">
          <div className="flex flex-col gap-3 lg:gap-3.5">
            <a
              href={site.whatsapp.href}
              target="_blank"
              rel="noopener"
              className="reveal lift bg-gold text-forest-900 flex items-center gap-4 rounded-[20px] p-5 shadow-[0_16px_32px_rgb(12_51_32_/_0.18)] lg:gap-4.5 lg:p-6"
            >
              <WhatsAppIcon size={34} className="stroke-forest-900 shrink-0" />
              <div>
                <p className="text-[13px] font-bold tracking-[0.12em] uppercase">
                  WhatsApp
                </p>
                <p className="font-display mt-0.5 text-2xl font-bold tracking-[-0.015em] lg:mt-1 lg:text-[26px]">
                  {site.whatsapp.display}
                </p>
              </div>
            </a>

            <a href={site.phone.href} className={cardBase}>
              <PhoneIcon size={34} className="stroke-forest-800 shrink-0" />
              <div>
                <p className={cardLabel}>Call</p>
                <p className="font-display mt-0.5 text-2xl font-bold tracking-[-0.015em] lg:mt-1 lg:text-[26px]">
                  {site.phone.display}
                </p>
              </div>
            </a>

            <a href={site.email.href} className={cardBase}>
              <MailIcon size={34} className="stroke-forest-800 shrink-0" />
              <div className="min-w-0">
                <p className={cardLabel}>Email</p>
                <p className="font-display mt-0.5 text-[19px] font-bold tracking-[-0.015em] [overflow-wrap:anywhere] lg:mt-1 lg:text-[21px]">
                  {site.email.display}
                </p>
              </div>
            </a>

            <div className="border-line flex items-center gap-4 rounded-[20px] border bg-white p-5 lg:gap-4.5 lg:p-6">
              <PinIcon size={34} className="stroke-forest-800 shrink-0" />
              <div>
                <p className={cardLabel}>Visit us</p>
                <p className="font-display mt-0.5 text-[19px] leading-tight font-bold tracking-[-0.015em] lg:mt-1 lg:text-[21px]">
                  {site.address.oneLine}
                </p>
              </div>
            </div>

            <div className="bg-sand rounded-[20px] px-5 py-4.5 lg:px-6 lg:py-5.5">
              <p className={cardLabel}>Opening hours</p>
              <p className="text-ink-soft mt-1 text-base lg:mt-1.5 lg:text-[17px]">
                {site.openingHours}
              </p>
            </div>
          </div>

          <ContactForm />
        </Container>
      </section>

      {/* Find us */}
      <section className="bg-sand py-13 lg:py-22.5">
        <Container className="grid items-center gap-x-14 gap-y-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-y-10">
          <div>
            <SectionLabel>Find us</SectionLabel>
            <h2 className="mt-3.5 text-[clamp(30px,3.6vw,46px)] leading-tight text-balance lg:mt-5">
              Come and plan it over a cup of tea.
            </h2>
            <p className="text-ink-soft mt-3.5 text-base leading-relaxed lg:mt-4.5 lg:text-lg">
              Our office is at {site.address.oneLine}. Call or message before you come
              so we can have your trip ideas ready.
            </p>
          </div>
          <div className="border-line-300 relative min-h-[240px] overflow-hidden rounded-[22px] border lg:min-h-[340px] lg:rounded-[26px]">
            <iframe
              title={`Map showing ${site.name} at ${site.address.oneLine}`}
              src={site.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />
            {/* The embed carries its own "Open in Maps" control, so this one
                starts navigation instead of repeating it. */}
            <a
              href={site.directionsLink}
              target="_blank"
              rel="noopener"
              className="text-forest-800 absolute right-4.5 bottom-4.5 flex items-center gap-2 rounded-xl bg-white px-3.5 py-2.5 text-sm font-bold shadow-[0_6px_16px_rgb(12_51_32_/_0.25)]"
            >
              <PinIcon size={18} className="stroke-forest-800" />
              Get directions
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
