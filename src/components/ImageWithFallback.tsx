import { useState } from "react";
import { asset } from "../lib/asset";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  priority?: boolean;
}

export function ImageWithFallback({
  src,
  alt,
  className = "",
  fallbackLabel,
  priority = false,
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-cream-dark via-linen to-cream ${className}`}
        role={alt ? "img" : undefined}
        aria-label={alt || undefined}
        aria-hidden={!alt}
      >
        {fallbackLabel !== "" ? (
          <div className="px-4 text-center">
            <p className="font-display text-3xl text-gold sm:text-4xl">
              {fallbackLabel ?? "Charisma"}
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-navy/50">
              Photo coming soon
            </p>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <img
      src={asset(src)}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      onError={() => setFailed(true)}
    />
  );
}
