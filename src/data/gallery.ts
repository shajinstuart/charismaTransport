import type { GalleryItem, VideoItem } from "../types";
import { buses } from "./buses";
import { defaultVideo, photos } from "./media";

export const galleryItems: GalleryItem[] = buses.map((bus) => ({
  src: bus.image,
  alt: `${bus.seatingCapacity} seater Charisma Transport tourist bus`,
  category: "Fleet",
}));

export const videos: VideoItem[] = [
  {
    src: defaultVideo,
    poster: photos[0],
    title: "Charisma Transport",
  },
];
