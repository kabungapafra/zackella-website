/**
 * Structured data describing the business and what it sells.
 *
 * Search engines use this for rich results, and assistants that answer
 * questions about Uganda travel read it to work out who Zackella is, where it
 * is and what it offers. Everything here is built from the same data the pages
 * render, so the two cannot drift apart.
 *
 * Only facts we actually hold go in. Opening days, prices and social profiles
 * are deliberately absent rather than guessed.
 */
import { fleet } from "@/data/fleet";
import { services } from "@/data/services";
import { tours } from "@/data/tours";
import { site, team } from "@/lib/site";

const abs = (path: string) => new URL(path, site.url).toString();

/** The organisation itself, referenced by `@id` from the other blocks. */
export const organizationId = `${site.url}#organization`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": organizationId,
  name: site.name,
  description: site.description,
  slogan: site.tagline,
  url: site.url,
  image: abs("/og-image.jpg"),
  logo: abs("/zackella-logo.png"),
  telephone: site.phone.href.replace("tel:", ""),
  email: site.email.href.replace("mailto:", ""),
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.room}, ${site.address.building}`,
    addressLocality: site.address.area,
    addressCountry: "UG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.coordinates.lat,
    longitude: site.coordinates.lng,
  },
  hasMap: site.mapsLink,
  areaServed: { "@type": "Country", name: "Uganda" },
  founder: team.map((member) => ({
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
  })),
  makesOffer: services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.name,
      description: service.blurb,
    },
  })),
  knowsAbout: [
    "Gorilla trekking in Bwindi Impenetrable Forest",
    "Uganda safari tours",
    "Car hire in Kampala",
    "Airport transfers to Entebbe International Airport",
  ],
};

/** The tours, as a list an assistant can read off. */
export const toursSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `Uganda tours by ${site.name}`,
  itemListElement: tours.map((tour, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "TouristTrip",
      name: tour.name,
      description: tour.blurb,
      url: `${abs("/tours/")}#${tour.slug}`,
      image: abs(tour.photo.src),
      touristType: tour.goodFor,
      provider: { "@id": organizationId },
    },
  })),
};

/** The fleet, each vehicle offered for hire. */
export const fleetSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `Vehicles for hire from ${site.name}`,
  itemListElement: fleet.map((vehicle, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Product",
      name: vehicle.name,
      description: vehicle.blurb,
      url: `${abs("/car-hire/")}#${vehicle.slug}`,
      image: abs(vehicle.photo),
      brand: { "@type": "Brand", name: vehicle.name.split(" ")[0] },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        seller: { "@id": organizationId },
      },
    },
  })),
};

/** The services sold alongside tours and car hire. */
export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `Travel services from ${site.name}`,
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.name,
      description: service.blurb,
      url: `${abs("/services/")}#${service.slug}`,
      provider: { "@id": organizationId },
    },
  })),
};
