export type Vehicle = {
  slug: string;
  /** The vehicle as it is actually known, e.g. "Toyota Land Cruiser Prado". */
  name: string;
  /** Shorter label for the enquiry dropdown and tight spaces. */
  shortName: string;
  /** One line for the home page card. */
  teaser: string;
  /** Tighter teaser for the narrow mobile card. */
  teaserShort: string;
  /** Fuller description for the Car Hire page. */
  blurb: string;
  /** Short labels under the home card. */
  tileTags: readonly string[];
  tileTagShort: string;
  /** Driver options shown on the Car Hire page. */
  hireTags: readonly string[];
  bestFor: readonly string[];
  cta: string;
  /** One card in the set is gold; the Prado is the flagship. */
  accent: boolean;
  photo: string;
  /** Crop focus, for the portrait shots that would otherwise be cut. */
  photoPosition?: string;
};

export const fleet: readonly Vehicle[] = [
  {
    slug: "land-cruiser",
    name: "Toyota Land Cruiser Safari",
    shortName: "Land Cruiser safari",
    teaser: "The classic pop-top safari cruiser, built for game viewing.",
    teaserShort: "The classic pop-top safari cruiser.",
    blurb:
      "The extended-body Land Cruiser built for game viewing: a pop-top roof to stand and photograph from, a snorkel and raised suspension for rough park tracks and the rainy season.",
    tileTags: ["Game viewing", "With driver-guide"],
    tileTagShort: "With driver-guide",
    hireTags: ["With driver-guide"],
    bestFor: [
      "Game drives with the roof open",
      "Multi-day safari circuits",
      "Groups with camera gear and luggage",
    ],
    cta: "Ask about the Land Cruiser",
    accent: true,
    photo: "/fleet-landcruiser.jpg",
  },
  {
    slug: "prado",
    name: "Toyota Land Cruiser Prado",
    shortName: "Land Cruiser Prado",
    teaser: "Built for park roads and rough tracks, with a driver-guide who knows them.",
    teaserShort: "Built for park roads, with a driver-guide.",
    blurb:
      "Rugged and raised for national park roads and rough tracks, hired with a driver-guide who knows the terrain.",
    tileTags: ["Parks & rough roads", "With driver-guide"],
    tileTagShort: "With driver-guide",
    hireTags: ["With driver-guide"],
    bestFor: [
      "National park game drives",
      "Rough or rainy-season roads",
      "Multi-day safaris",
    ],
    cta: "Ask about the Prado",
    accent: false,
    photo: "/fleet-prado.jpg",
  },
  {
    slug: "hiace",
    name: "Toyota HiAce Tourist Van",
    shortName: "HiAce tourist van",
    teaser: "A pop-top safari van with room for the group and the luggage.",
    teaserShort: "Room for the group and the luggage.",
    blurb:
      "A pop-top tourist van with space for the whole group and their bags, driven by someone who handles the road for you.",
    tileTags: ["Groups & safaris", "With driver"],
    tileTagShort: "With driver",
    hireTags: ["With driver"],
    bestFor: [
      "Shared safaris and group tours",
      "Family gatherings and events",
      "Group airport transfers",
    ],
    cta: "Ask about the HiAce",
    accent: false,
    photo: "/fleet-hiace.jpg",
  },
  {
    slug: "coaster",
    name: "Toyota Coaster",
    shortName: "Coaster bus",
    teaser: "The full coach, for big groups, events and long upcountry runs.",
    teaserShort: "A full coach for big groups.",
    blurb:
      "Our largest vehicle. When the group is too big for a van, the Coaster keeps everyone together and still has room for luggage.",
    tileTags: ["Large groups", "With driver"],
    tileTagShort: "With driver",
    hireTags: ["With driver"],
    bestFor: [
      "Large groups and company trips",
      "Weddings and events",
      "Long upcountry journeys",
    ],
    cta: "Ask about the Coaster",
    accent: false,
    photo: "/fleet-coaster.jpg",
    photoPosition: "object-[center_46%]",
  },
  {
    slug: "noah",
    name: "Toyota Noah",
    shortName: "Noah",
    teaser: "Easy comfort for families, city runs and airport transfers.",
    teaserShort: "Comfort for families and city runs.",
    blurb:
      "A comfortable people carrier for families and small groups, equally at home on a city errand or an airport run.",
    tileTags: ["Family & city", "Driver or self-drive"],
    tileTagShort: "Driver or self-drive",
    hireTags: ["With driver", "Self-drive"],
    bestFor: [
      "Family trips",
      "City errands and meetings",
      "Airport transfers",
    ],
    cta: "Ask about the Noah",
    accent: false,
    photo: "/fleet-noah.jpg",
  },
  {
    slug: "forester",
    name: "Subaru Forester",
    shortName: "Forester",
    teaser: "Comfort and ground clearance for weekends away.",
    teaserShort: "Ground clearance for weekends away.",
    blurb:
      "More space and ground clearance than a saloon, and surefooted enough for the mixed tarmac and murram you meet upcountry.",
    tileTags: ["Upcountry weekends", "Driver or self-drive"],
    tileTagShort: "Driver or self-drive",
    hireTags: ["With driver", "Self-drive"],
    bestFor: [
      "Weekends upcountry",
      "Couples and small families",
      "Mixed tarmac and murram",
    ],
    cta: "Ask about the Forester",
    accent: false,
    photo: "/fleet-forester.jpg",
    photoPosition: "object-[center_58%]",
  },
];

export const hireOptions = [
  {
    name: "With a driver",
    body: "Sit back while an experienced driver handles the roads, the traffic and the parking.",
  },
  {
    name: "Self-drive",
    body: "Take the wheel and set your own pace. Ask us about requirements before you book.",
  },
  {
    name: "Airport transfers",
    body: "Pick-up on arrival and drop-off for departure, with your driver waiting.",
  },
  {
    name: "Day to long-term",
    body: "One day in town, a week upcountry or longer. Tell us the dates and we'll quote.",
  },
] as const;
