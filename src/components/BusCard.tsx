import { Link } from "react-router-dom";
import type { Bus } from "../types";
import { ImageWithFallback } from "./ImageWithFallback";

interface BusCardProps {
  bus: Bus;
}

export function BusCard({ bus }: BusCardProps) {
  return (
    <article className="card overflow-hidden">
      <ImageWithFallback
        src={bus.image}
        alt={`${bus.seatingCapacity} seater tourist bus`}
        fallbackLabel={`${bus.seatingCapacity} Seater`}
        className="h-48 w-full object-cover"
      />
      <div className="p-5">
        <p className="font-display text-3xl text-navy">{bus.seatingCapacity} Seater</p>
        <p className="mt-1 text-sm text-navy/70">{bus.type} tourist bus</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {bus.features.map((feature) => (
            <li
              key={feature}
              className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-navy"
            >
              {feature}
            </li>
          ))}
        </ul>
        <Link
          to="/contact#enquiry"
          className="btn-navy mt-5 w-full"
        >
          Enquire
        </Link>
      </div>
    </article>
  );
}
