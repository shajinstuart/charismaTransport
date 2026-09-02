import { Link } from "react-router-dom";
import type { Destination } from "../types";
import { ImageWithFallback } from "./ImageWithFallback";

interface DestinationCardProps {
  destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <article className="card overflow-hidden">
      <ImageWithFallback
        src={destination.image}
        alt={destination.name}
        fallbackLabel={destination.name}
        className="h-52 w-full object-cover"
      />
      <div className="p-5">
        <h3 className="font-display text-2xl text-navy">{destination.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-navy/70">{destination.description}</p>
        <Link to="/contact#enquiry" className="mt-4 inline-block text-sm font-semibold text-teal hover:text-teal-dark">
          Enquire for this destination
        </Link>
      </div>
    </article>
  );
}
