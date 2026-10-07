import type { ComponentType } from "react";
import {
  BoxIcon,
  CalendarIcon,
  CompassIcon,
  HotelIcon,
  TransferIcon,
} from "@/components/Icon";

type IconComponent = ComponentType<{ size?: number; className?: string }>;

export type Service = {
  slug: string;
  name: string;
  /** One line for the home page strip. */
  teaser: string;
  /** Tighter teaser for the stacked mobile row. */
  teaserShort: string;
  /** Fuller description for the Services page. */
  blurb: string;
  details: readonly string[];
  cta: string;
  Icon: IconComponent;
};

export const services: readonly Service[] = [
  {
    slug: "airport-transfers",
    name: "Airport Pick-ups & Drop-offs",
    teaser: "Met on arrival, delivered on time.",
    teaserShort: "Met on arrival, on time.",
    blurb:
      "Land in Uganda and find your driver waiting. Heading home? We get you to the airport with time to spare.",
    details: [
      "Meet and greet on arrival at Entebbe International Airport",
      "Transfers to Kampala, your hotel or your next stop",
      "Drop-offs timed to your flight",
      "Saloons, SUVs and vans for any group size",
    ],
    cta: "Book a transfer",
    Icon: TransferIcon,
  },
  {
    slug: "hotel-booking",
    name: "Hotel Booking",
    teaser: "Lodges and city stays that suit your route.",
    teaserShort: "Stays that suit your route.",
    blurb:
      "From city hotels to safari lodges, we book stays that match your route, your budget and your taste.",
    details: [
      "City hotels and guesthouses",
      "Safari lodges and camps near the parks",
      "Options for every budget",
      "Booked alongside your tour or car hire",
    ],
    cta: "Ask about stays",
    Icon: HotelIcon,
  },
  {
    slug: "travel-consultancy",
    name: "Travel Consultancy",
    teaser: "Honest advice on routes, seasons and budgets.",
    teaserShort: "Honest advice on routes and budgets.",
    blurb:
      "Not sure where to go, when to go or what it will cost? We give honest, practical advice before you commit.",
    details: [
      "Route and itinerary ideas",
      "The best seasons for each destination",
      "Budget planning that fits your means",
      "Help choosing between private and group travel",
    ],
    cta: "Get advice",
    Icon: CompassIcon,
  },
  {
    slug: "event-planning",
    name: "Event Planning & Management",
    teaser: "Transport and logistics for your event.",
    teaserShort: "Transport and logistics for events.",
    blurb:
      "Whether it's a company retreat, a family gathering or a group trip, we handle the logistics so you can enjoy the day.",
    details: [
      "Transport for guests and teams",
      "Venue and accommodation bookings",
      "On-the-day coordination",
      "Planning from first idea to final detail",
    ],
    cta: "Plan an event",
    Icon: CalendarIcon,
  },
  {
    slug: "product-deliveries",
    name: "Product Deliveries",
    teaser: "Parcels and goods moved with care.",
    teaserShort: "Parcels moved with care.",
    blurb:
      "Parcels and goods collected and delivered with care, using the same dependable vehicles and drivers.",
    details: [
      "Collection and delivery within Kampala",
      "Deliveries beyond the city on request",
      "Careful handling from pick-up to hand-over",
      "One-off or regular runs for businesses",
    ],
    cta: "Arrange a delivery",
    Icon: BoxIcon,
  },
];

/** Options in the contact form's "I'm interested in" select. */
export const enquiryTopics = [
  "Tours and travel",
  "Car hire",
  "Airport pick-up or drop-off",
  "Hotel booking",
  "Travel consultancy",
  "Event planning and management",
  "Product delivery",
  "Something else",
] as const;
