"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Looping video behind a band of content, with a photograph underneath.
 *
 * The photograph renders first so the band never waits on video, and the clip
 * fades in once it is actually playing. Video is skipped entirely — leaving the
 * photograph — when the visitor asks for reduced motion, has Data Saver on, or
 * is on a 2G-class connection.
 *
 * Nothing is fetched until the band is nearly in view. `preload="none"` alone
 * does not hold the download back, because calling `play()` starts it; the clip
 * is mounted only once the visitor has scrolled to it.
 *
 * The footage has near-white highlights (luminance ~0.86), so a flat scrim dark
 * enough for body text would hide the video almost entirely. Instead it is
 * weighted so it only covers what the text needs:
 *
 * - desktop ramps left to right, heavy under the copy, clearing on the right.
 * - phones ramp top to bottom, heavy under the heading and body line, clearing
 *   over the buttons, which are solid pills and read against anything.
 */
export function VideoBackdrop({
  sources,
  photo,
  photoPosition = "object-center",
  variant = "feature",
}: {
  /** One entry per encoding, best first; the browser picks the first it can play. */
  sources: readonly { src: string; type: string }[];
  /** Still shown before and instead of video. Omit for a watermark. */
  photo?: string;
  photoPosition?: string;
  /**
   * `feature` fills the band with the footage. `watermark` holds it right back
   * over the forest ground, so it reads as movement behind the words rather
   * than as a picture.
   */
  variant?: "feature" | "watermark";
}) {
  const bandRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [near, setNear] = useState(false);
  const [visible, setVisible] = useState(false);

  // Decide once, after mount, whether this visitor should get video at all.
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;

    const costly =
      connection?.saveData === true ||
      /(^|-)2g$/.test(connection?.effectiveType ?? "");

    const decide = () => setEnabled(!motion.matches && !costly);
    decide();
    motion.addEventListener("change", decide);
    return () => motion.removeEventListener("change", decide);
  }, []);

  // Hold the download until the band is close, so a visitor who never scrolls
  // this far never pays for the clip.
  useEffect(() => {
    const band = bandRef.current;
    if (!band) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setNear(true);
        observer.disconnect();
      },
      { rootMargin: "200px" },
    );
    observer.observe(band);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!enabled || !near) return;
    // Autoplay can still be refused (low power mode); the photograph stays.
    void videoRef.current?.play().catch(() => {});
  }, [enabled, near]);

  const watermark = variant === "watermark";

  return (
    <div ref={bandRef} aria-hidden="true" className="bg-forest-900 absolute inset-0">
      {photo && (
        <Image
          src={photo}
          alt=""
          fill
          sizes="100vw"
          className={`object-cover ${photoPosition}`}
        />
      )}

      {enabled && near && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          tabIndex={-1}
          onPlaying={() => setVisible(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            visible ? (watermark ? "opacity-25" : "opacity-100") : "opacity-0"
          }`}
        >
          {sources.map((s) => (
            <source key={s.src} src={s.src} type={s.type} />
          ))}
        </video>
      )}

      <span
        className={
          watermark
            ? // Already faint; this holds cream body copy at 4.5:1 over the
              // brightest frames in the reel.
              "absolute inset-0 bg-[rgb(12_51_32/0.38)]"
            : "absolute inset-0 bg-[linear-gradient(180deg,rgb(12_51_32/0.88)_0%,rgb(12_51_32/0.88)_44%,rgb(12_51_32/0.26)_72%,rgb(12_51_32/0.26)_100%)] lg:bg-[linear-gradient(90deg,rgb(12_51_32/0.88)_0%,rgb(12_51_32/0.88)_30%,rgb(12_51_32/0.30)_75%,rgb(12_51_32/0.30)_100%)]"
        }
      />
    </div>
  );
}
