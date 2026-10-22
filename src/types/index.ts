export type TripType =
  | "Student Trip"
  | "Devotional Trip"
  | "Marriage Trip"
  | "Tourist Trip"
  | "Other";

export interface Bus {
  seatingCapacity: number;
  seatLayout: "2+1" | "2+2" | "3+2";
  type: "AC / Non-AC" | "Non-AC";
  features: string[];
  image: string;
}

export interface Destination {
  name: string;
  image: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  summary: string;
  details: string[];
}

export interface GalleryItem {
  src: string;
  alt: string;
  category: string;
}

export interface VideoItem {
  src: string;
  poster: string;
  title: string;
}

export interface EnquiryFormData {
  name: string;
  phone: string;
  startingLocation: string;
  destination: string;
  travelDate: string;
  returnDate: string;
  passengers: string;
  busPreference: string;
  tripType: TripType | "";
  message: string;
}

export interface SocialLinks {
  instagram: string;
  facebook: string;
  youtube: string | null;
}
