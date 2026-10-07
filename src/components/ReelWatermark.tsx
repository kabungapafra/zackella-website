import { VideoBackdrop } from "./VideoBackdrop";

/**
 * The closing call-to-action backdrop used across the site: the tour reel held
 * right back over the forest ground, so it reads as movement behind the words.
 */
export function ReelWatermark() {
  return (
    <VideoBackdrop
      sources={[{ src: "/hero-reel.mp4", type: "video/mp4" }]}
      variant="watermark"
    />
  );
}
