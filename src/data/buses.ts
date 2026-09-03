import type { Bus } from "../types";
import { photoAt } from "./media";

export const buses: Bus[] = [
  {
    seatingCapacity: 16,
    type: "AC / Non-AC",
    features: ["Push Back Seats"],
    image: photoAt(0),
  },
  {
    seatingCapacity: 21,
    type: "AC / Non-AC",
    features: ["Push Back Seats"],
    image: photoAt(1),
  },
  {
    seatingCapacity: 34,
    type: "AC / Non-AC",
    features: ["Push Back Seats"],
    image: photoAt(0),
  },
  {
    seatingCapacity: 37,
    type: "AC / Non-AC",
    features: ["Push Back Seats"],
    image: photoAt(1),
  },
  {
    seatingCapacity: 38,
    type: "AC / Non-AC",
    features: ["Push Back Seats"],
    image: photoAt(0),
  },
  {
    seatingCapacity: 46,
    type: "AC / Non-AC",
    features: ["Push Back Seats"],
    image: photoAt(1),
  },
  {
    seatingCapacity: 51,
    type: "AC / Non-AC",
    features: ["Push Back Seats"],
    image: photoAt(0),
  },
];
