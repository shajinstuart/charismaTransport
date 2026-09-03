import type { GalleryItem, VideoItem } from "../types";
import { defaultVideo, photos } from "./media";

export const galleryItems: GalleryItem[] = [
  {
    src: photos[0],
    alt: "Charisma Transport tourist bus",
    category: "Gallery",
  },
  {
    src: photos[1],
    alt: "Charisma Transport tourist bus",
    category: "Gallery",
  },
];

export const videos: VideoItem[] = [
  {
    src: defaultVideo,
    poster: photos[0],
    title: "Charisma Transport",
  },
];
