import { contactInfo } from "../config/contact";
import type { EnquiryFormData } from "../types";

export function getWhatsAppChatUrl(message?: string): string {
  const base = `https://wa.me/${contactInfo.whatsappDigits}`;
  if (!message?.trim()) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function buildEnquiryMessage(data: EnquiryFormData): string {
  return [
    "Hello Charisma Transport,",
    "",
    "I would like to enquire about a trip.",
    "",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `From: ${data.startingLocation}`,
    `Destination: ${data.destination}`,
    `Travel Date: ${data.travelDate}`,
    `Return Date: ${data.returnDate || "—"}`,
    `Passengers: ${data.passengers}`,
    `Bus Preference: ${data.busPreference || "No preference"}`,
    `Trip Type: ${data.tripType}`,
    data.message ? `Message: ${data.message}` : "",
    "",
    "Please share availability and pricing.",
  ]
    .filter((line, index, arr) => !(line === "" && arr[index - 1] === ""))
    .join("\n");
}
