import Image from "next/image";
import { HeroScrim } from "./HeroScrim";

/**
 * Photographic hero backdrop. The photograph is decorative — the headline
 * already says what the page is about — so it carries an empty alt.
 */
export function HeroPhoto({
  src,
  /** Crop focus, e.g. to keep a subject in frame on narrow screens. */
  position = "object-center",
  priority = false,
}: {
  src: string;
  position?: string;
  priority?: boolean;
}) {
  return (
    <div aria-hidden="true" className="bg-forest-900 absolute inset-0">
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        quality={80}
        className={`object-cover ${position}`}
      />
      <HeroScrim />
    </div>
  );
}
