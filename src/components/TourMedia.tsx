import Image from "next/image";
import type { Tour } from "@/data/tours";

/** A destination's photograph, cropped to whichever slot it is filling. */
export function TourMedia({
  tour,
  variant,
  className = "",
}: {
  tour: Tour;
  variant: "tile" | "feature";
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
          ? "(min-width: 1024px) 50vw, 280px"
          : "(min-width: 1024px) 50vw, 100vw"
      }
      className={`object-cover ${photo.position ?? "object-center"} ${className}`}
    />
  );
}
