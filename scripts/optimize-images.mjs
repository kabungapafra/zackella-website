/**
 * Pre-generates the responsive WebP variants that `image-loader.ts` serves.
 *
 * A static export has no image optimisation server, so the work happens here
 * instead: every photograph in `public/` is re-encoded at each delivery width
 * into `public/opt/`, and `public/opt/manifest.json` records the file for each
 * width so the loader can pick one without touching the filesystem.
 *
 * Each name carries a hash of its own bytes, which is what lets `_headers`
 * mark the whole directory immutable: replacing a photograph produces new
 * names, so no cache anywhere can hand back the old picture.
 *
 * Sources in `public/` are never modified — they stay the originals.
 *
 *   node scripts/optimize-images.mjs
 */
import { mkdir, readdir, writeFile, rm, stat } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";
import sharp from "sharp";

/** Must match `images.deviceSizes` + `images.imageSizes` in next.config.ts. */
const WIDTHS = [200, 320, 400, 640, 828, 1080, 1440, 1920];

/**
 * Quality still eases off as the variant grows, because a wide variant is shown
 * on a dense screen where each stored pixel covers less of what the eye
 * resolves. It eases off far less than it used to: the first pass traded too
 * much of the photographs away for bytes the site did not need, and these are
 * pictures of places people are deciding whether to pay to visit.
 */
const quality = (width) => (width <= 640 ? 84 : width <= 1080 ? 80 : 76);

const PUBLIC = "public";
const OUT = path.join(PUBLIC, "opt");

const sources = (await readdir(PUBLIC, { withFileTypes: true }))
  .filter((e) => e.isFile() && /\.(jpe?g|png)$/i.test(e.name))
  .map((e) => e.name)
  .sort();

// Rebuilt from scratch, or renamed variants from earlier runs would pile up.
await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });

const manifest = {};
let before = 0;
let after = 0;

for (const file of sources) {
  const src = path.join(PUBLIC, file);
  const base = file.replace(/\.[^.]+$/, "");
  const image = sharp(src);
  const { width: nativeWidth } = await image.metadata();

  // Never upscale: keep the widths below the source, then cap with the source
  // width itself so the largest variant is still a real resize target.
  const widths = [
    ...WIDTHS.filter((w) => w < nativeWidth),
    Math.min(nativeWidth, WIDTHS.at(-1)),
  ].filter((w, i, all) => all.indexOf(w) === i);

  const variants = [];
  for (const width of widths) {
    const buffer = await image
      .clone()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: quality(width) })
      .toBuffer();
    const hash = createHash("sha256").update(buffer).digest("hex").slice(0, 8);
    const name = `${base}-${width}.${hash}.webp`;
    await writeFile(path.join(OUT, name), buffer);
    variants.push([width, name]);
    after += buffer.length;
  }

  before += (await stat(src)).size;
  manifest[`/${file}`] = variants;
  console.log(`${file.padEnd(26)} ${nativeWidth}px -> ${widths.join(", ")}`);
}

await writeFile(path.join(OUT, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n");

const kb = (n) => `${(n / 1024).toFixed(0)}KB`;
console.log(`\n${sources.length} sources ${kb(before)} -> ${kb(after)} across all widths`);
