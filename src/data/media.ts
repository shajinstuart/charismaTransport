/** Shared photos and video until individual files are added. */

export const photos = [
  "/images/gallery/charisma1.jpeg",
  "/images/gallery/charisma2.jpeg",
] as const;

export const defaultVideo = "/videos/charisma.mp4";

export function photoAt(index: number): string {
  return photos[index % photos.length];
}
