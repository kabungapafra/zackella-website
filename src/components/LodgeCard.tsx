"use client";

import Image from "next/image";
import { useId, useState } from "react";
import type { Lodge } from "@/data/lodges";

/**
 * A lodge, shown as one cover photo that opens the rest of its pictures when
 * tapped. The whole cover is the control, so a thumb finds it without aiming.
 */
export function LodgeCard({ lodge }: { lodge: Lodge }) {
  const [open, setOpen] = useState(false);
  const galleryId = useId();
  const [cover, ...rest] = lodge.photos;

  return (
    <article className="bg-cream border-line-300 overflow-hidden rounded-[22px] border lg:rounded-[26px]">
      <button
        type="button"
        onClick={() => setOpen((wasOpen) => !wasOpen)}
        aria-expanded={open}
        aria-controls={galleryId}
        className="photo-zoom relative block h-[260px] w-full overflow-hidden text-left lg:h-[420px]"
      >
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          sizes="(min-width: 1024px) 1100px, 100vw"
          className={`object-cover ${cover.position ?? "object-center"}`}
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-b from-transparent from-40% to-[rgb(12_51_32_/_0.93)]"
        />
        <span className="text-cream absolute inset-x-5 bottom-5 lg:inset-x-8 lg:bottom-7">
          <span className="bg-gold text-forest-900 inline-block rounded-full px-2.5 py-1.25 text-[11px] font-bold tracking-[0.1em] uppercase lg:px-3 lg:py-1.5 lg:text-xs">
            {lodge.badge}
          </span>
          <span className="font-display mt-2.5 block text-[27px] leading-tight font-bold lg:mt-3.5 lg:text-[40px]">
            {lodge.name}
          </span>
          <span className="text-gold mt-2 flex items-center gap-2 text-[15px] font-bold lg:mt-3 lg:text-base">
            {open ? "Hide the photos" : `Tap to see ${rest.length} more photos`}
            <span
              aria-hidden="true"
              className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            >
              &darr;
            </span>
          </span>
        </span>
      </button>

      <div
        id={galleryId}
        hidden={!open}
        className="grid gap-2.5 px-3.5 pt-3.5 sm:grid-cols-3 lg:gap-4 lg:px-5 lg:pt-5"
      >
        {rest.map((photo) => (
          <div
            key={photo.src}
            className="photo-zoom bg-sand relative h-[180px] overflow-hidden rounded-[14px] lg:h-[230px] lg:rounded-[18px]"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 360px, 100vw"
              className={`object-cover ${photo.position ?? "object-center"}`}
            />
          </div>
        ))}
      </div>

      <div className="grid items-start gap-x-14 gap-y-3 px-5 py-5.5 lg:grid-cols-[1.4fr_1fr] lg:px-8 lg:py-8">
        <p className="text-ink-soft text-base leading-relaxed text-pretty lg:text-lg">
          {lodge.blurb}
        </p>
        <div className="bg-sand rounded-xl px-4 py-3.5 text-[15px] lg:rounded-[14px] lg:px-4.5 lg:py-4">
          <p className="text-ink-muted text-xs font-bold tracking-[0.12em] uppercase">
            Where
          </p>
          <p className="mt-1 font-bold lg:text-[17px]">{lodge.where}</p>
        </div>
      </div>
    </article>
  );
}
