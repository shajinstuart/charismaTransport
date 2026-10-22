import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { buses } from "../data/buses";
import { asset } from "../lib/asset";

const INTERVAL_MS = 5000;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = buses.length;

  const go = useCallback((next: number) => setIndex((next + count) % count), [count]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduceMotion) return;
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % count), INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [paused, count]);

  const current = buses[index];

  return (
    <div
      className="relative mx-auto h-full min-h-[220px] w-full max-w-md overflow-hidden rounded-3xl bg-linen shadow-lift lg:h-auto lg:min-h-0 lg:max-w-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Charisma Transport fleet"
    >
      <div className="relative h-full w-full lg:aspect-[4/5] lg:h-auto">
        {buses.map((bus, i) => (
          <img
            key={bus.image}
            src={asset(bus.image)}
            alt={`${bus.seatingCapacity} seater Charisma Transport tourist bus`}
            loading={i === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 lg:object-cover ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== index}
          />
        ))}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 via-navy/40 to-transparent p-4 pt-12 sm:p-5 sm:pt-16">
          <p className="font-display text-2xl text-white sm:text-3xl" aria-live="polite">
            {current.seatingCapacity} Seater
          </p>
          <p className="mt-1 text-xs text-white/85 sm:text-sm">
            {current.seatLayout} luxury pushback · {current.type}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => go(index - 1)}
        className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy shadow transition hover:bg-gold"
        aria-label="Previous bus"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => go(index + 1)}
        className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy shadow transition hover:bg-gold"
        aria-label="Next bus"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>

      <div className="absolute right-5 top-5 flex gap-1.5">
        {buses.map((bus, i) => (
          <button
            key={bus.image}
            type="button"
            onClick={() => go(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-gold" : "w-2 bg-white/80 hover:bg-white"
            }`}
            aria-label={`Show ${bus.seatingCapacity} seater`}
            aria-current={i === index}
          />
        ))}
      </div>
    </div>
  );
}
