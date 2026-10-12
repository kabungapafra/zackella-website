import Image from "next/image";
import { HeroScrim } from "./HeroScrim";

/**
 * The home hero's backdrop: four photographs crossfading on a loop, each
 * drifting a little larger as it goes.
 *
 * The timing lives in `.hero-slide` in globals.css, so this costs no
 * JavaScript and nothing has to hydrate before the hero moves. Only the first
 * photograph is preloaded — it is the LCP element; the rest are ordinary lazy
 * images that have eight seconds before they are needed.
 *
 * The photographs are decorative: the headline already says what the page is
 * about, so each carries an empty alt.
 */
export function HeroSlideshow({
  slides,
  scrim = "edge",
}: {
  slides: readonly { src: string; position?: string }[];
  scrim?: "edge" | "even";
}) {
  return (
    <div aria-hidden="true" className="bg-forest-900 absolute inset-0">
      {slides.map(({ src, position }, index) => (
        <div key={src} className="hero-slide">
          <Image
            src={src}
            alt=""
            fill
            preload={index === 0}
            sizes="100vw"
            className={`object-cover ${position ?? "object-center"}`}
          />
        </div>
      ))}
      <HeroScrim spread={scrim} />
    </div>
  );
}
