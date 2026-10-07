import type { ReactNode } from "react";

/**
 * Snap-scrolling row on phones, plain grid from `lg` up.
 *
 * The mobile artboards let the tour and fleet rails bleed past the page gutter,
 * so this sits outside a Container and carries its own padding; from `lg` it
 * re-adopts the shell's width and centring so the grid lines up with the
 * headings above it.
 */
export function Carousel({
  children,
  gridClassName,
  className = "",
}: {
  children: ReactNode;
  /** Grid columns applied from `lg` up. */
  gridClassName: string;
  className?: string;
}) {
  return (
    <div
      className={`scroller gap-3.5 px-5 pb-2 sm:px-7 lg:mx-auto lg:grid lg:max-w-[1600px] lg:gap-5 lg:overflow-visible lg:pb-0 ${gridClassName} ${className}`}
    >
      {children}
    </div>
  );
}
