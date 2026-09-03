import { MapPin } from "lucide-react";
import { contactInfo } from "../config/contact";

export function LocationButton() {
  return (
    <a
      href={contactInfo.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-gold shadow-lift transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      aria-label="Open office location in Google Maps"
    >
      <MapPin className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
