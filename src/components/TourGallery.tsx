"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Tour } from "@/data/tours";
import { blurFor } from "@/lib/placeholders";

/** Long enough to take a picture in, short enough to notice the card moves. */
const SLIDE_MS = 4500;
/** Below this a swipe is just an unsteady tap. */
const SWIPE_PX = 40;

/**
 * The card photo for a destination we have several pictures of.
 *
 * It slides on its own so the card says there is more to see without anyone
 * having to find a control first. Tapping the photograph opens the whole set
 * full screen; the dots step through it in place. Either way the first
 * deliberate tap stops the slide, because at that point the visitor is
 * steering rather than watching.
 *
 * The full-screen view is a native `<dialog>`, which brings the focus trap,
 * Escape and the backdrop with it rather than us rebuilding all three.
 */
export function TourGallery({ tour }: { tour: Tour }) {
  const photos = [tour.photo, ...(tour.morePhotos ?? [])];
  const [index, setIndex] = useState(0);
  const [sliding, setSliding] = useState(true);
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const swipeFrom = useRef<number | null>(null);
  const photo = photos[index];
  const blur = blurFor(photo.src);

  useEffect(() => {
    if (!sliding || open) return;
    // Honour the system setting: a card that moves by itself is exactly the
    // kind of motion people turn off.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(
      () => setIndex((current) => (current + 1) % photos.length),
      SLIDE_MS,
    );
    return () => clearInterval(timer);
  }, [sliding, open, photos.length]);

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    if (open && !el.open) el.showModal();
    if (!open && el.open) el.close();
    // `showModal` makes the page inert but still lets it scroll behind.
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const show = (next: number) => {
    setSliding(false);
    setIndex(next);
  };
  /**
   * Counts from whatever is showing when it runs, not from the render that
   * built the handler, so two quick taps move two photographs on.
   */
  const step = (delta: number) => {
    setSliding(false);
    setIndex((current) => (current + delta + photos.length) % photos.length);
  };

  return (
    <>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 280px"
        placeholder={blur ? "blur" : "empty"}
        blurDataURL={blur}
        className={`object-cover ${photo.position ?? "object-center"} transition-transform duration-500 group-hover:scale-105`}
      />

      {/* Covers the photograph so a thumb finds it without aiming. The badges
          beneath it are plain text, so nothing is lost by sitting on top. */}
      <button
        type="button"
        onClick={() => {
          setSliding(false);
          setOpen(true);
        }}
        aria-label={`See all ${photos.length} photos of ${tour.name}`}
        className="absolute inset-0 z-10 cursor-zoom-in"
      />

      <span className="absolute top-3 right-3 z-20 flex items-center gap-1 rounded-full bg-forest-900/80 px-2.5 py-0.5 text-[13px] font-bold text-white backdrop-blur-sm">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
        {index + 1}/{photos.length}
      </span>

      {/* The strip itself lets taps through to the photograph beneath; only
          the dots take them back. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-center justify-between bg-linear-to-t from-forest-900/70 to-transparent pt-5 pr-1 pl-3">
        {/* Says outright that the photograph is a control. On a phone there is
            no cursor to change shape and no hover to discover it with. */}
        <span
          aria-hidden="true"
          className="text-cream flex items-center gap-1.5 pb-2.5 text-[13px] font-bold whitespace-nowrap drop-shadow-[0_1px_3px_rgb(12_51_32/0.9)]"
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg>
          Tap to see all {photos.length}
        </span>

        <div className="flex items-center">
          {photos.map((candidate, i) => (
            <button
              key={candidate.src}
              type="button"
              onClick={() => show(i)}
              aria-label={`Photo ${i + 1} of ${photos.length}`}
              aria-current={i === index}
              className="group/dot pointer-events-auto flex cursor-pointer items-center p-2"
            >
              <span
                aria-hidden="true"
                className={`block h-2 rounded-full transition-all ${
                  i === index
                    ? "bg-gold w-5"
                    : "w-2 bg-white/70 group-hover/dot:bg-white"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <dialog
        ref={dialog}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          // Anything that is not the photo or a control is the backdrop.
          if (event.target === dialog.current) setOpen(false);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") step(1);
          if (event.key === "ArrowLeft") step(-1);
        }}
        onTouchStart={(event) => {
          swipeFrom.current = event.touches[0].clientX;
        }}
        onTouchEnd={(event) => {
          const from = swipeFrom.current;
          swipeFrom.current = null;
          if (from === null) return;
          const travelled = event.changedTouches[0].clientX - from;
          if (Math.abs(travelled) > SWIPE_PX) step(travelled < 0 ? 1 : -1);
        }}
        aria-label={`Photos of ${tour.name}`}
        className="bg-forest-900/95 text-cream backdrop:bg-forest-900/80 m-0 h-dvh max-h-none w-dvw max-w-none p-0 backdrop:backdrop-blur-sm"
      >
        <div className="pointer-events-none flex h-full flex-col items-center justify-center gap-4 p-4 sm:p-8">
          <div className="pointer-events-auto relative h-[66vh] w-full max-w-[1200px] sm:h-[72vh]">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="100vw"
              placeholder={blur ? "blur" : "empty"}
              blurDataURL={blur}
              className="object-contain"
            />
          </div>

          <div className="pointer-events-auto flex items-center gap-4">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous photo"
              className="hover:bg-cream hover:text-forest-900 flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/35 text-xl transition-colors"
            >
              <span aria-hidden="true">&larr;</span>
            </button>

            <div className="flex items-center">
              {photos.map((candidate, i) => (
                <button
                  key={candidate.src}
                  type="button"
                  onClick={() => show(i)}
                  aria-label={`Photo ${i + 1} of ${photos.length}`}
                  aria-current={i === index}
                  className="group/big flex cursor-pointer items-center p-2"
                >
                  <span
                    aria-hidden="true"
                    className={`block h-2 rounded-full transition-all ${
                      i === index
                        ? "bg-gold w-6"
                        : "w-2 bg-white/50 group-hover/big:bg-white"
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next photo"
              className="hover:bg-cream hover:text-forest-900 flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/35 text-xl transition-colors"
            >
              <span aria-hidden="true">&rarr;</span>
            </button>
          </div>

          <p className="text-on-dark-soft pointer-events-none text-[15px] font-bold">
            {tour.name} — {index + 1} of {photos.length}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="hover:bg-cream hover:text-forest-900 absolute top-4 right-4 flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/35 text-2xl transition-colors sm:top-6 sm:right-6"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </dialog>
    </>
  );
}
