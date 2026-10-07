# Zackella Tours and Travel

Marketing site for Zackella Tours and Travel, a tours, travel and car hire
company in Kampala, Uganda. Built from the Zackella design canvas.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** — design tokens live in `src/app/globals.css` under `@theme`
- **next/font** — Young Serif (display) and Hanken Grotesk (body), self-hosted at build

Every page is statically prerendered. There is no backend: the enquiry panel and
the contact form compose a WhatsApp or `mailto:` link from what the visitor
types, so nothing is stored or posted anywhere.

## Commands

```bash
npm run dev        # dev server on http://localhost:3000
npm run build      # production build
npm start          # serve the production build
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
```

## Layout

```
src/
  app/              one folder per route, plus sitemap.ts, robots.ts, icon.svg
  components/       layout chrome, UI primitives, the two client-side forms
    illustrations/  the hand-drawn SVG scenes and vehicle art
  data/             tours, fleet and services content
  lib/              site.ts (business details) and whatsapp.ts (deep links)
```

## Before launch

`src/lib/site.ts` holds every business detail in one place. The values in
`[SQUARE BRACKETS]` are placeholders carried over from the design and still need
the real information:

- `address.street` — the building and street for Room B02
- `openingHours`
- `mapsLink` — a Google Maps URL for the office
- `story` — the "Our story" paragraph on the About page
- `selfDriveTerms` — licence, ID, deposit, insurance and fuel policy
- `team` — names and roles; team photos go in `public/` and replace the
  `[PHOTO]` placeholders in `src/app/about/page.tsx`

Also set `site.url` to the real domain so `sitemap.xml`, `robots.txt` and the
Open Graph tags point at the right host.
