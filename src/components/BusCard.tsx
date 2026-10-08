import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import type { Bus } from "../types";
import { ImageWithFallback } from "./ImageWithFallback";

interface BusCardProps {
  bus: Bus;
}

export function BusCard({ bus }: BusCardProps) {
  return (
    <article className="card flex flex-col overflow-hidden">
      <div className="relative">
        <ImageWithFallback
          src={bus.image}
          alt={`${bus.seatingCapacity} seater Charisma Transport tourist bus`}
          fallbackLabel={`${bus.seatingCapacity} Seater`}
          className="aspect-[4/5] w-full object-cover"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-navy shadow-sm">
          {bus.type}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-display text-3xl text-navy">{bus.seatingCapacity} Seater</p>
        <p className="mt-1 text-sm text-navy/70">
          {bus.seatLayout} luxury pushback seats
        </p>
        <ul className="mt-4 space-y-2 text-sm text-navy/85">
          {bus.features.map((feature) => (
            <li key={feature} className="flex gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-5">
          <Link to="/contact#enquiry" className="btn-navy w-full">
            Enquire
          </Link>
        </div>
      </div>
    </article>
  );
}
