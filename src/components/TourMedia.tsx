import Image from "next/image";
import type { Tour } from "@/data/tours";

/** A destination's photograph, cropped to whichever slot it is filling. */
export function TourMedia({
  tour,
  variant,
  className = "",
}: {
  tour: Tour;
  variant: "tile" | "feature" | "row";
  className?: string;
}) {
  const { photo } = tour;
  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      fill
      sizes={
        variant === "tile"
          ? "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 280px"
          : variant === "row"
            ? "(min-width: 1024px) 340px, 100vw"
            : "(min-width: 1024px) 1100px, 100vw"
      }
      className={`object-cover ${photo.position ?? "object-center"} ${className}`}
    />
  );
}
