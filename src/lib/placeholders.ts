import placeholders from "../../public/opt/placeholders.json";

/**
 * The inline stand-in `scripts/optimize-images.mjs` built for a photograph: a
 * twenty-pixel-wide copy of it, which `next/image` stretches and blurs behind
 * the real file while that is still arriving.
 *
 * Without one a photograph shows the solid forest ground it sits on until it
 * has fully loaded, which on a hero is a slab of green across the whole band.
 * These are read on the server, so only the string for a photograph actually
 * rendered reaches the page — the rest of the map never ships.
 */
const bySrc = placeholders as Record<string, string>;

/** `undefined` for anything the script did not process, e.g. the SVG art. */
export function blurFor(src: string): string | undefined {
  return bySrc[src];
}
