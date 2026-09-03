import { MessageCircle } from "lucide-react";
import { getWhatsAppChatUrl } from "../lib/whatsapp";

export function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppChatUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
