/**
 * The two overlays every hero backdrop uses.
 *
 * The horizontal one keeps cream text legible: on phones the copy runs the
 * full width, so it stays near-even; on desktop the copy only occupies the left
 * half, so it ramps away and lets the picture show. It is held as light as the
 * copy will take, so the photographs read rather than sit under a wash. Pass
 * `spread="even"` where the copy is centred and there is no empty half to ramp
 * into. The vertical one settles the bottom edge into the solid forest ground
 * that cards sit on.
 */
export function HeroScrim({ spread = "edge" }: { spread?: "edge" | "even" }) {
  return (
    <>
      {spread === "edge" ? (
        <span className="from-forest-900/55 via-forest-900/46 to-forest-900/40 lg:from-forest-900/65 lg:via-50% lg:via-forest-900/35 lg:to-forest-900/0 absolute inset-0 bg-linear-to-r" />
      ) : (
        <span
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(35, 28, 22, 0.32), rgba(35, 28, 22, 0.16) 50%, rgba(35, 28, 22, 0.32))",
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
