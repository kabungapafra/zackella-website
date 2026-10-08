"use client";

import manifest from "./public/opt/manifest.json";

/**
 * Serves the pre-built WebP variants from `public/opt/`, which
 * `scripts/optimize-images.mjs` writes at the widths listed in
 * `images.deviceSizes` and `images.imageSizes`.
 *
 * A static export ships no optimisation server, so this stands in for one:
 * `next/image` still builds a real `srcset`, but every URL in it points at a
 * file that already exists on disk. Anything the script did not process — the
 * SVG illustrations, the app icons — is passed straight through.
 */
/** `{ "/photo.jpg": [[width, "photo-<width>.<hash>.webp"], ...] }`, ascending. */
const variantsBySrc = manifest as unknown as Record<string, [number, string][]>;

export default function imageLoader({
  src,
  width,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  const variants = variantsBySrc[src];
  if (!variants) return src;

  // Smallest variant that still covers the requested width; the largest one
  // when the request runs past what the source could give.
  const chosen = variants.find(([w]) => w >= width) ?? variants[variants.length - 1];
  return `/opt/${chosen[1]}`;
}
