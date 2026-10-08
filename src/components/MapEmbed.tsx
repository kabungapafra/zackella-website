"use client";

import { useEffect, useRef, useState } from "react";
import { PinIcon } from "./Icon";
import { site } from "@/lib/site";

/**
 * The office map, fetched once the visitor scrolls to it.
 *
 * Google's embed pulls about 450KB over seventeen requests, more than the rest
 * of this page put together. It sits at the foot of a long page, so loading it
 * with everything else makes the whole page slower for a visitor who came to
 * find the phone number. `loading="lazy"` is not enough on its own: the browser
 * starts an iframe well before it reaches the screen.
 *
 * Nothing is tapped. The address shows immediately and the map replaces it on
 * its own, so the panel is never an empty grey box waiting on Google.
 */
export function MapEmbed() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const panel = frameRef.current;
    if (!panel) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setNear(true);
        observer.disconnect();
      },
      { rootMargin: "300px" },
    );
    observer.observe(panel);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={frameRef} className="absolute inset-0">
      {/* Stays underneath until the map has actually painted. */}
      <div className="bg-cream-100 text-ink absolute inset-0 flex flex-col items-center justify-center gap-2.5 px-6 text-center">
        <PinIcon size={30} className="stroke-forest-800" />
        <span className="font-display text-[17px] font-bold lg:text-[19px]">
          {site.address.short}
        </span>
      </div>

      {near && (
        <iframe
          title={`Map showing ${site.name} at ${site.address.oneLine}`}
          src={site.mapsEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setLoaded(true)}
          className={`absolute inset-0 h-full w-full border-0 transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}
