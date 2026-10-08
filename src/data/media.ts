import { buses } from "./buses";

export const photos = buses.map((bus) => bus.image);

export const defaultVideo = "/videos/charisma.mp4";

export function photoAt(index: number): string {
  return photos[index % photos.length];
}
