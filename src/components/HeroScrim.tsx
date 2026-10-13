/**
 * The two overlays every hero backdrop uses.
 *
 * The horizontal one keeps cream text legible: on phones the copy runs the
 * full width, so it stays near-even and heavy enough to clear 4.5:1 even where
 * bright sky falls behind text; on desktop the copy only occupies the left
 * half, so it ramps away and lets the picture show. Pass `spread="even"` where
 * the copy is centred and there is no empty half to ramp into. The vertical one
 * settles the bottom edge into the solid forest ground that cards sit on.
 */
export function HeroScrim({ spread = "edge" }: { spread?: "edge" | "even" }) {
  return (
    <>
      {spread === "edge" ? (
        <span className="from-forest-900/90 via-forest-900/88 to-forest-900/86 lg:from-forest-900/95 lg:via-50% lg:via-forest-900/85 lg:to-forest-900/15 absolute inset-0 bg-linear-to-r" />
      ) : (
        <span
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(35, 28, 22, 0.55), rgba(35, 28, 22, 0.35) 50%, rgba(35, 28, 22, 0.55))",
          }}
        />
      )}
      <span
        className={`from-forest-900 absolute inset-x-0 bottom-0 bg-linear-to-t to-transparent ${
          spread === "even" ? "h-1/5" : "h-1/3"
        }`}
      />
    </>
  );
}
