import { useState } from "react";
import { Play } from "lucide-react";
import type { VideoItem } from "../types";
import { ImageWithFallback } from "./ImageWithFallback";
import { asset } from "../lib/asset";

interface VideoCardProps {
  video: VideoItem;
}

export function VideoCard({ video }: VideoCardProps) {
  const [active, setActive] = useState(false);
  const [failed, setFailed] = useState(false);

  if (active && !failed) {
    return (
      <div className="overflow-hidden rounded-2xl bg-white shadow-card">
        <video
          className="aspect-[9/16] w-full bg-cream-dark object-cover sm:aspect-video"
          controls
          autoPlay
          preload="metadata"
          poster={asset(video.poster)}
          onError={() => setFailed(true)}
        >
          <source src={asset(video.src)} type="video/mp4" />
        </video>
        <p className="px-4 py-3 text-sm text-navy/80">{video.title}</p>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      className="group card block w-full overflow-hidden text-left"
      aria-label={`Play ${video.title}`}
    >
      <div className="relative aspect-[9/16] sm:aspect-video">
        <ImageWithFallback
          src={video.poster}
          alt=""
          fallbackLabel={video.title}
          className="h-full w-full object-cover"
        />
        <span className="absolute inset-0 bg-cream/20 transition group-hover:bg-cream/5" />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-navy shadow-lg transition group-hover:scale-105">
            <Play className="h-6 w-6 fill-current" aria-hidden="true" />
          </span>
        </span>
      </div>
      <p className="px-4 py-3 text-sm font-medium text-navy">{video.title}</p>
    </button>
  );
}
