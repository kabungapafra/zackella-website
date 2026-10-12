export type LodgePhoto = {
  src: string;
  alt: string;
  /** Object position when the crop would otherwise lose the subject. */
  position?: string;
};

export type Lodge = {
  slug: string;
  name: string;
  badge: string;
  where: string;
  blurb: string;
  /** First photo is the cover; the rest open when the card is tapped. */
  photos: readonly LodgePhoto[];
};

export const lodges: readonly Lodge[] = [
  {
    slug: "lemala-wild-waters",
    name: "Lemala Wild Waters Lodge",
    badge: "Jinja · Source of the Nile",
    where: "A private island in the Nile, near Jinja",
    blurb:
      "Ten thatched cottages on their own island, ringed by white water. Every room opens onto the rapids, with a deck, a copper bath and the sound of the river all night. We fold it into a Jinja or source-of-the-Nile trip, with the transfers and the booking handled.",
    photos: [
      {
        src: "/lemala-wild-waters.jpg",
        alt: "Lemala Wild Waters Lodge from the air, thatched cottages on an island surrounded by the rapids of the Nile",
      },
      {
        src: "/lemala-wild-waters-pool.jpg",
        alt: "The lodge's pool deck set right above the white water",
      },
      {
        src: "/lemala-wild-waters-bath.jpg",
        alt: "A freestanding copper bath on a private deck looking over the river",
      },
      {
        src: "/lemala-wild-waters-dining.jpg",
        alt: "The open-sided dining room under thatch, looking out at the Nile",
      },
    ],
  },
];
