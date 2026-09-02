import { Link } from "react-router-dom";
import { GraduationCap, Landmark, Heart, Compass } from "lucide-react";
import type { Service } from "../types";

const icons = {
  student: GraduationCap,
  devotional: Landmark,
  marriage: Heart,
  tourist: Compass,
};

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = icons[service.slug as keyof typeof icons] ?? Compass;

  return (
    <article className="card p-6">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-linen text-gold-600">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="mt-4 font-display text-2xl text-navy">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-navy/70">{service.summary}</p>
      <ul className="mt-4 space-y-1.5 text-sm text-navy/80">
        {service.details.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
      <Link to="/contact#enquiry" className="mt-5 inline-block text-sm font-semibold text-teal hover:text-teal-dark">
        Plan this trip
      </Link>
    </article>
  );
}
