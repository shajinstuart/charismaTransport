import type { VideoItem } from "../types";
import { asset } from "../lib/asset";

interface VideoCardProps {
  video: VideoItem;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <figure className="overflow-hidden rounded-2xl bg-white shadow-card">
      <video
        className="aspect-video w-full bg-navy object-contain"
        controls
        playsInline
        preload="metadata"
        poster={asset(video.poster)}
        src={asset(video.src)}
      >
        Your browser cannot play this video.
      </video>
      <figcaption className="px-4 py-3 text-sm font-medium text-navy">{video.title}</figcaption>
    </figure>
  );
}
