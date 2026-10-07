export type HeroVariant = "tours" | "carHire" | "services" | "about" | "contact";

const plane = (
  <g transform="translate(1254,96) rotate(-12)" fill="#f7f2e6">
    <path d="M-32 0 L26 -4 Q40 0 26 4Z" />
    <path d="M-4 -1 L-20 -28 L-11 -28 L14 -1Z" />
    <path d="M-4 1 L-20 28 L-11 28 L14 1Z" />
    <path d="M-28 -1 L-36 -11 L-31 -11 L-21 -1Z" />
    <path d="M-28 1 L-36 11 L-31 11 L-21 1Z" />
  </g>
);

/**
 * The shorter banner used on every page except Home. Each variant adds one
 * detail that belongs to that page: hills for tours, a road for car hire, a
 * flight path for services, a lone acacia for about.
 */
export function PageHeroScene({ variant }: { variant: HeroVariant }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 400"
      preserveAspectRatio="xMidYMax slice"
      className="absolute inset-0 h-full w-full"
    >
      <rect width="1440" height="400" fill="#0c3320" />
      <circle cx="1180" cy="270" r="120" fill="#f0b323" opacity=".12" />
      <circle cx="1180" cy="270" r="68" fill="#f0b323" />

      {variant === "tours" && (
        <path
          d="M0 330 L180 230 L260 280 L420 190 L560 290 L700 240 L860 310 L1000 270 L1440 300 V400 H0Z"
          fill="#1a6137"
          opacity=".5"
        />
      )}

      <path d="M0 320 C220 270 420 310 640 330 C880 350 1100 290 1440 320 V400 H0Z" fill="#17562f" />

      {variant === "about" && (
        <>
          <path d="M1090 290 C1088 320 1092 340 1090 360 L1098 360 C1096 340 1100 320 1098 290Z" fill="#0c3320" />
          <ellipse cx="1094" cy="284" rx="90" ry="15" fill="#0c3320" />
        </>
      )}

      {variant === "carHire" ? (
        <>
          <path
            d="M0 372 C300 352 700 392 1000 372 C1200 360 1340 366 1440 362 V400 H0Z"
            fill="#124a2a"
          />
          <path
            d="M0 388 H1440"
            stroke="#f0b323"
            strokeWidth="3"
            strokeDasharray="30 24"
            opacity=".7"
          />
        </>
      ) : (
        <path
          d="M0 360 C300 330 700 380 1000 356 C1200 340 1340 350 1440 344 V400 H0Z"
          fill="#124a2a"
        />
      )}

      {variant === "services" && (
        <>
          <path
            d="M880 180 C980 130 1100 110 1240 100"
            fill="none"
            stroke="#f0b323"
            strokeWidth="3"
            strokeDasharray="2 11"
            strokeLinecap="round"
          />
          {plane}
        </>
      )}
    </svg>
  );
}
