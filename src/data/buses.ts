import type { Bus } from "../types";

export const buses: Bus[] = [
  {
    seatingCapacity: 34,
    seatLayout: "2+2",
    type: "AC / Non-AC",
    features: [
      "34 pushback seater",
      "2+2 luxury seats",
      "AC and Non-AC",
      "Dolby Digital speaker system",
      "Full DJ and laser show lights",
      "Vocal available",
    ],
    image: "/images/buses/charisma-34-seater.jpg",
  },
  {
    seatingCapacity: 38,
    seatLayout: "2+2",
    type: "AC / Non-AC",
    features: [
      "38 pushback seater",
      "2+2 luxury seats",
      "AC and Non-AC",
      "Dolby Digital speaker system",
      "Full DJ and laser show lights",
    ],
    image: "/images/buses/charisma-38-seater.jpg",
  },
  {
    seatingCapacity: 46,
    seatLayout: "2+2",
    type: "Non-AC",
    features: [
      "46 pushback seater",
      "2+2 luxury seats",
      "Non-AC",
      "Dolby Digital speaker system",
      "Full DJ lights",
      "Vocal available",
    ],
    image: "/images/buses/charisma-46-seater.jpg",
  },
  {
    seatingCapacity: 53,
    seatLayout: "3+2",
    type: "AC / Non-AC",
    features: [
      "53 pushback seater",
      "3+2 luxury seats",
      "AC and Non-AC",
      "Dolby Digital speaker system",
      "Full DJ and laser show lights with front LED wall",
      "Vocal available",
    ],
    image: "/images/buses/charisma-53-seater.jpg",
  },
  {
    seatingCapacity: 54,
    seatLayout: "3+2",
    type: "AC / Non-AC",
    features: [
      "54 pushback seater",
      "3+2 luxury seats",
      "AC and Non-AC",
      "Dolby Digital speaker system",
      "Full DJ and laser show lights",
      "Vocal available",
    ],
    image: "/images/buses/charisma-54-seater.jpg",
  },
];

export const seatingCapacitiesText = (() => {
  const seats = buses.map((bus) => bus.seatingCapacity);
  return `${seats.slice(0, -1).join(", ")} and ${seats[seats.length - 1]}`;
})();
