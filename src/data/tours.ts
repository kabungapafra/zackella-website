export type Tour = {
  /** Anchor id on the Tours page, also used as the React key. */
  slug: string;
  /** Short name used in the home tiles and the enquiry dropdown. */
  shortName: string;
  /** Full heading used on the Tours page. */
  name: string;
  badge: string;
  /** One line for the home tile. */
  teaser: string;
  /** Tighter teaser for the narrow mobile card. */
  teaserShort: string;
  /** Fuller description for the Tours page. */
  blurb: string;
  highlights: readonly string[];
  length: string;
  goodFor: string;
  /** Wide tiles take two columns in the home grid. */
  wide: boolean;
  photo: {
    src: string;
    alt: string;
    /**
     * Crop focus. Several of these photographs are portrait but the feature
     * slot is 5:4, so centring would cut the subject; set this where the
     * interesting part is not in the middle.
     */
    position?: string;
  };
};

export const tours: readonly Tour[] = [
  {
    slug: "gorillas",
    shortName: "Gorilla trekking, Bwindi",
    name: "Gorilla trekking in Bwindi",
    badge: "Most requested",
    teaser:
      "Face to face with mountain gorillas in the mist of Bwindi Impenetrable Forest.",
    teaserShort: "Face to face with mountain gorillas.",
    blurb:
      "Bwindi Impenetrable Forest, in south-western Uganda, shelters a large share of the world's remaining mountain gorillas. A guided trek through misty, forested hills ends with time beside a gorilla family, an experience people carry for life.",
    highlights: [
      "Guided trek in a small group with park rangers",
      "Time with a gorilla family, usually about an hour",
      "Permits are required and limited, so book early",
      "Pairs well with Lake Bunyonyi or Queen Elizabeth",
    ],
    length: "3 to 4 days",
    goodFor: "Couples, friends, families",
    wide: true,
    photo: {
      src: "/bwindi-gorilla.jpg",
      alt: "A silverback mountain gorilla walking a forest trail in Bwindi Impenetrable Forest",
    },
  },
  {
    slug: "murchison",
    shortName: "Murchison Falls",
    name: "Murchison Falls National Park",
    badge: "Safari",
    teaser: "Game drives, a Nile boat cruise and the thunder of the falls.",
    teaserShort: "Game drives and the thunder of the Nile.",
    blurb:
      "Uganda's largest national park, where the Nile forces its way through a narrow gorge and drops into a roaring pool. Game drives and a river cruise show you the wildlife that lives along the banks.",
    highlights: [
      "Morning and evening game drives",
      "Boat cruise up the Nile toward the base of the falls",
      "Hike to the top of the falls",
      "Giraffes, elephants, hippos and crocodiles",
    ],
    length: "3 days",
    goodFor: "First-time safari travellers",
    wide: false,
    photo: {
      src: "/murchison-falls.jpg",
      alt: "Aerial view of the Nile forcing through the gorge at Murchison Falls, surrounded by dense green bush",
    },
  },
  {
    slug: "queen",
    shortName: "Queen Elizabeth National Park",
    name: "Queen Elizabeth National Park",
    badge: "Safari",
    teaser: "Savannah sunsets, tree-climbing lions and the Kazinga Channel.",
    teaserShort: "Savannah sunsets and the Kazinga Channel.",
    blurb:
      "Crater lakes, open savannah and the Kazinga Channel make this one of Uganda's most varied parks. Come for the boat cruise, stay for the sunsets.",
    highlights: [
      "Boat cruise on the Kazinga Channel",
      "Game drives across the savannah",
      "Tree-climbing lions in the Ishasha sector",
      "Chimpanzee tracking in Kyambura Gorge",
    ],
    length: "3 to 4 days",
    goodFor: "Wildlife lovers, families",
    wide: false,
    photo: {
      src: "/queen-elizabeth.jpg",
      alt: "A giraffe crossing a dirt track on open savannah, seen from a safari vehicle",
    },
  },
  {
    slug: "jinja",
    shortName: "Jinja and the Source of the Nile",
    name: "Jinja and the Source of the Nile",
    badge: "Adventure",
    teaser: "Rafting, boat rides and slow river days, an easy escape from Kampala.",
    teaserShort: "Rafting and river days near Kampala.",
    blurb:
      "East of Kampala, Jinja is where the Nile begins its long journey north. It is Uganda's adventure town, and an easy trip from the capital.",
    highlights: [
      "White-water rafting on the Nile",
      "Boat ride to the Source of the Nile",
      "Quad biking and horseback rides",
      "Relaxed riverside stays",
    ],
    length: "1 to 2 days",
    goodFor: "Groups and short breaks",
    wide: true,
    photo: {
      src: "/source-of-the-nile.jpg",
      alt: "A rocky islet topped by a single tree marking the Source of the Nile at Jinja",
      position: "object-[center_62%]",
    },
  },
  {
    slug: "bunyonyi",
    shortName: "Lake Bunyonyi",
    name: "Lake Bunyonyi",
    badge: "Escape",
    teaser: "Terraced hills, quiet canoes and an island for every mood.",
    teaserShort: "Terraced hills and quiet canoes.",
    blurb:
      "In the far south-west near Kabale, terraced hills rise around a lake of many islands. It is quiet enough to hear the paddles, and the perfect rest after a trek.",
    highlights: [
      "Canoeing between the islands",
      "Village and terrace walks",
      "Birdwatching at the water's edge",
      "Easy to add to a gorilla trek",
    ],
    length: "2 to 3 days",
    goodFor: "Couples and slow travel",
    wide: false,
    photo: {
      src: "/lake-bunyonyi.jpg",
      alt: "Aerial view of Lake Bunyonyi, its terraced hillsides and scattered green islands",
    },
  },
  {
    slug: "sipi",
    shortName: "Sipi Falls and Mt Elgon",
    name: "Sipi Falls and Mt Elgon",
    badge: "Hiking",
    teaser: "Waterfall walks, coffee farms and cool mountain air.",
    teaserShort: "Waterfall walks and coffee country.",
    blurb:
      "On the slopes of Mount Elgon in eastern Uganda, three waterfalls spill through coffee country. Walk, taste, and breathe cooler air.",
    highlights: [
      "Guided walks to the three falls",
      "Coffee farm tour, from bean to cup",
      "Wide views over the plains below",
      "Cool evenings and mountain scenery",
    ],
    length: "2 to 3 days",
    goodFor: "Hikers and coffee lovers",
    wide: false,
    photo: {
      src: "/sipi-falls.jpg",
      alt: "Walkers climbing a steep path beside a tall waterfall falling through green hillside",
      position: "object-[center_32%]",
    },
  },
  {
    slug: "kidepo",
    shortName: "Kidepo Valley",
    name: "Kidepo Valley National Park",
    badge: "Wild north",
    teaser: "Uganda's remote, wide-open savannah for the unhurried traveller.",
    teaserShort: "Remote, wide-open savannah.",
    blurb:
      "In Uganda's remote north-east, Kidepo is wide-open savannah ringed by mountains, far from the usual routes. It is a trip for people who value space and silence.",
    highlights: [
      "Game drives across open plains",
      "Dramatic mountain-ringed scenery",
      "Visits to nearby Karamojong communities",
      "Few other vehicles, lots of sky",
    ],
    length: "4 to 5 days",
    goodFor: "Seasoned safari-goers",
    wide: false,
    photo: {
      src: "/kidepo-valley.jpg",
      alt: "Open savannah, rock outcrops and distant mountains in Kidepo Valley",
    },
  },
];

/** Jump-link labels for the chip row at the top of the Tours page. */
export const tourChips = [
  { slug: "gorillas", label: "Gorillas", short: "Gorillas" },
  { slug: "murchison", label: "Murchison Falls", short: "Murchison" },
  { slug: "queen", label: "Queen Elizabeth", short: "Queen Elizabeth" },
  { slug: "jinja", label: "Jinja", short: "Jinja" },
  { slug: "bunyonyi", label: "Lake Bunyonyi", short: "Bunyonyi" },
  { slug: "sipi", label: "Sipi Falls", short: "Sipi Falls" },
  { slug: "kidepo", label: "Kidepo", short: "Kidepo" },
] as const;
