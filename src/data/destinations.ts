import type { Destination } from "../types";
import { photoAt } from "./media";

export const destinations: Destination[] = [
  {
    name: "Ooty",
    image: photoAt(0),
    description:
      "A frequently travelled destination for student, family and group trips.",
  },
  {
    name: "Kodaikanal",
    image: photoAt(1),
    description:
      "A frequently travelled destination for student, family and group trips.",
  },
  {
    name: "Chennai",
    image: photoAt(0),
    description:
      "A frequently travelled destination for student, family and group trips.",
  },
  {
    name: "Pondicherry",
    image: photoAt(1),
    description:
      "A frequently travelled destination for student, family and group trips.",
  },
  {
    name: "Mysore",
    image: photoAt(0),
    description:
      "A frequently travelled destination for student, family and group trips.",
  },
];
