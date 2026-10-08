/**
 * Single source of truth for business details that appear across the site.
 * Values wrapped in [SQUARE BRACKETS] are placeholders from the design that
 * still need the real information before launch.
 */
export const site = {
  name: "Zackella Tours and Travel",
  tagline: "Service beyond boundaries",
  description:
    "Tailor-made tours, dependable car hire and travel services from Kampala, Uganda.",
  url: "https://zackellatours.com",
  phone: {
    display: "0772 610 016",
    href: "tel:+256772610016",
  },
  whatsapp: {
    display: "0775 772 636",
    number: "256775772636",
    href: "https://wa.me/256775772636",
  },
  email: {
    display: "info@zackellatours.com",
    href: "mailto:info@zackellatours.com",
  },
  address: {
    room: "Room B02",
    building: "Agenda 2000 Shopping Mall",
    area: "Mbalwa, Kira",
    country: "Uganda",
    get oneLine() {
      return `${this.room}, ${this.building}, ${this.area}, ${this.country}`;
    },
    /** Without the room, for the cramped top bar. */
    get short() {
      return `${this.building}, ${this.area}`;
    },
  },
  coordinates: { lat: 0.3663964, lng: 32.6484008 },
  openingHours: "8.00am to 5.00pm",
  developer: {
    name: "Digiflect Tech",
    href: "https://digiflecttech.dev",
  },
  /**
   * Searched by name rather than by coordinate, so both the embed and this
   * link land on the mall's own Google Places entry — which is what gives
   * visitors a pin they can tap for directions.
   */
  get mapsQuery() {
    return `${this.address.building}, ${this.address.area}, ${this.address.country}`;
  },
  get mapsLink() {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.mapsQuery)}`;
  },
  /** Starts navigation, rather than just showing the place like the embed does. */
  get directionsLink() {
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(this.mapsQuery)}`;
  },
  /** Satellite at close range, matching the view the office shared. */
  get mapsEmbed() {
    return `https://maps.google.com/maps?q=${encodeURIComponent(this.mapsQuery)}&t=k&z=19&output=embed`;
  },
  story:
    "Zackella is run by Isaac Paul Odeke and Adellah Owembabazi, out of an office in Mbalwa, Kira. The person who answers your message is the same one who knows which vehicle is free and which driver knows the road \u2014 which is what service beyond boundaries means to us.",
  selfDriveTerms:
    "[ADD YOUR REQUIREMENTS: driving licence, ID, deposit, insurance, fuel policy]",
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Tours", href: "/tours" },
  { label: "Car Hire", href: "/car-hire" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

/**
 * `short` is used in the mobile footer, where the column is half the screen
 * wide and the full names wrap badly.
 */
export const footerServices = [
  { full: "Airport Pick-ups & Drop-offs", short: "Airport transfers" },
  { full: "Hotel Booking", short: "Hotel booking" },
  { full: "Travel Consultancy", short: "Consultancy" },
  { full: "Event Planning & Management", short: "Events" },
  { full: "Product Deliveries", short: "Deliveries" },
] as const;

/**
 * `photo` is optional - a member without one shows a dashed placeholder, so
 * the section stays usable while portraits are still coming in.
 */
export const team: readonly {
  name: string;
  role: string;
  photo: string;
}[] = [
  { name: "Isaac Paul Odeke", role: "Director", photo: "/team-1.jpg" },
  { name: "Adellah Owembabazi", role: "Managing Director", photo: "/team-2.jpg" },
];
