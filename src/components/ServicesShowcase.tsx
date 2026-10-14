"use client";

import { useState } from "react";
import { TickIcon, WhatsAppIcon } from "@/components/Icon";
import { ButtonLink } from "@/components/ui";
import { services } from "@/data/services";
import { site } from "@/lib/site";

const tabShortLabels = [
  "Flights & Tickets",
  "Airport Transfers",
  "Hotel Stays",
  "Consultancy",
  "Event Logistics",
  "Deliveries",
];

export function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];
  const { slug, name, blurb, details, cta, teaser, Icon } = activeService;

  return (
    <div className="w-full">
      {/* Tab Switcher Pills */}
      <div
        role="tablist"
        aria-label="Travel services"
        className="flex items-center gap-2 overflow-x-auto pb-4 pt-1 sm:flex-wrap sm:justify-center scrollbar-none"
      >
        {services.map((service, index) => {
          const isSelected = index === activeIndex;
          const ServiceIcon = service.Icon;
          return (
            <button
              key={service.slug}
              role="tab"
              aria-selected={isSelected}
              aria-controls={`panel-${service.slug}`}
              id={`tab-${service.slug}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`group flex shrink-0 items-center gap-2.5 rounded-full px-4.5 py-2.5 text-[14px] font-bold transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "bg-forest-900 text-cream shadow-md ring-2 ring-forest-900"
                  : "border border-line-300 bg-cream text-forest-900 hover:border-gold hover:bg-white"
              }`}
            >
              <span
                className={`flex size-6 items-center justify-center rounded-full transition-colors ${
                  isSelected
                    ? "bg-forest-800 text-gold"
                    : "bg-forest-900/10 text-forest-900 group-hover:bg-gold/20"
                }`}
              >
                <ServiceIcon size={14} className="stroke-current" />
              </span>
              <span>{tabShortLabels[index] ?? service.name}</span>
            </button>
          );
        })}
      </div>

      {/* Active Service Showcase Card */}
      <div
        role="tabpanel"
        id={`panel-${slug}`}
        aria-labelledby={`tab-${slug}`}
        className="relative mt-5 overflow-hidden rounded-[26px] border border-line-200/90 bg-white p-6.5 shadow-[0_12px_45px_rgb(12_51_32/0.06)] transition-all duration-300 sm:p-9 lg:mt-8 lg:rounded-[34px] lg:p-12"
      >
        {/* Subtle background watermark number */}
        <span
          aria-hidden="true"
          className="font-display pointer-events-none absolute right-6 top-3 select-none text-[90px] font-bold text-forest-900/[0.035] sm:right-10 sm:text-[130px] lg:text-[160px]"
        >
          {String(activeIndex + 1).padStart(2, "0")}
        </span>

        {/* Decorative subtle gold corner shimmer */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 size-60 rounded-full bg-gold/10 blur-3xl"
        />

        <div className="relative grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-12">
          {/* Left Column: Icon, Title, Value Teaser, Blurb & CTAs */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Header Badge & Icon */}
              <div className="flex items-center gap-3.5">
                <div className="flex size-14 items-center justify-center rounded-[18px] bg-forest-900 text-gold shadow-md sm:size-16 sm:rounded-[20px]">
                  <Icon size={32} className="stroke-current" />
                </div>
                <div>
                  <span className="font-sans rounded-full border border-forest-900/10 bg-forest-900/5 px-3 py-1 text-xs font-bold tracking-widest text-forest-800">
                    SERVICE {String(activeIndex + 1).padStart(2, "0")} OF 06
                  </span>
                  <p className="mt-1 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold-700">
                    <span className="inline-block size-1.5 rounded-full bg-gold" />
                    <span>{teaser}</span>
                  </p>
                </div>
              </div>

              {/* Title & Blurb */}
              <h3 className="font-display mt-5 text-[26px] font-bold leading-[1.12] text-forest-900 sm:text-[32px] lg:text-[38px]">
                {name}
              </h3>
              <p className="text-ink-soft mt-3.5 max-w-xl text-[15px] leading-relaxed text-pretty sm:text-[16.5px]">
                {blurb}
              </p>
            </div>

            {/* Action Buttons Row */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 lg:mt-9">
              <ButtonLink
                href="/contact"
                variant="gold"
                className="w-full !px-7 !py-4 text-center text-[15px] font-bold shadow-sm sm:w-auto"
              >
                <span>{cta}</span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </ButtonLink>
              <a
                href={site.whatsapp.href}
                target="_blank"
                rel="noopener"
                className="btn-lift inline-flex items-center justify-center gap-2.5 rounded-full border border-forest-900/20 bg-cream px-6 py-3.5 text-[14.5px] font-bold text-forest-900 transition-colors hover:bg-forest-900 hover:text-cream"
              >
                <WhatsAppIcon size={18} className="stroke-current" />
                <span>Quick WhatsApp Inquiry</span>
              </a>
            </div>
          </div>

          {/* Right Column: Inset "What's Included" Box */}
          <div className="rounded-[22px] border border-line-200/80 bg-[#faf8f4] p-5.5 sm:p-7">
            <div className="flex items-center justify-between border-b border-line-200/70 pb-3.5">
              <p className="font-sans text-[11px] font-bold tracking-[0.14em] uppercase text-forest-900/60">
                What&apos;s Included
              </p>
              <span className="rounded-full bg-gold/20 px-2.5 py-0.5 text-[11px] font-bold text-forest-900">
                Guaranteed Quality
              </span>
            </div>

            <ul className="mt-4 space-y-3.5">
              {details.map((detail) => (
                <li
                  key={detail}
                  className="flex items-start gap-3 text-[14px] leading-snug text-ink/85 sm:text-[14.5px]"
                >
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-forest-900 text-gold shadow-xs">
                    <TickIcon size={12} className="stroke-[2.5]" />
                  </span>
                  <span className="font-medium">{detail}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center gap-2.5 border-t border-line-200/70 pt-4 text-xs font-semibold text-ink-muted">
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-forest-900/10 text-forest-900 font-bold">
                ✓
              </span>
              <span>
                Available standalone or bundled with tours &amp; vehicle hire.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Pagination Controls */}
        <div className="mt-8 flex items-center justify-between border-t border-line-200/70 pt-4 text-xs font-bold text-forest-800">
          <button
            type="button"
            onClick={() =>
              setActiveIndex((prev) =>
                prev === 0 ? services.length - 1 : prev - 1
              )
            }
            className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 transition-colors hover:bg-forest-900/5 cursor-pointer"
          >
            <span>&larr;</span>
            <span>Previous</span>
          </button>
          <div className="flex gap-1.5">
            {services.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Jump to service ${i + 1}`}
                onClick={() => setActiveIndex(i)}
                className={`size-2.5 rounded-full transition-all cursor-pointer ${
                  i === activeIndex
                    ? "w-6 bg-forest-900"
                    : "bg-forest-900/20 hover:bg-forest-900/50"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() =>
              setActiveIndex((prev) =>
                prev === services.length - 1 ? 0 : prev + 1
              )
            }
            className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 transition-colors hover:bg-forest-900/5 cursor-pointer"
          >
            <span>Next</span>
            <span>&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
}
