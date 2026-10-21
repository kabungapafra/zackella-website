import Image from "next/image";
import { blurFor } from "@/lib/placeholders";
import { HeroScrim } from "./HeroScrim";

/**
 * Photographic hero backdrop. The photograph is decorative — the headline
 * already says what the page is about — so it carries an empty alt.
 */
export function HeroPhoto({
  src,
  /** Crop focus, e.g. to keep a subject in frame on narrow screens. */
  position = "object-center",
  preload = false,
  scrim = "edge",
}: {
  src: string;
  position?: string;
  /** Set on the one hero that is the page's LCP element. */
  preload?: boolean;
  /** `even` for centred copy, which has no empty half to ramp into. */
  scrim?: "edge" | "even";
}) {
  // `empty` for anything the optimiser has not been run over yet, since
  // `blur` without a stand-in to show is a build error.
  const blur = blurFor(src);
  return (
    <div aria-hidden="true" className="bg-forest-900 absolute inset-0">
      <Image
        src={src}
        alt=""
        fill
        preload={preload}
        fetchPriority={preload ? "high" : undefined}
        sizes="100vw"
        placeholder={blur ? "blur" : "empty"}
        blurDataURL={blur}
        className={`object-cover ${position}`}
      />
      <HeroScrim spread={scrim} />
    </div>
  );
}
