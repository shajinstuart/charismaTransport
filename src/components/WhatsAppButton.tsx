import { MessageCircle } from "lucide-react";
import { getDefaultEnquiryMessage, getWhatsAppChatUrl } from "../lib/whatsapp";

export function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppChatUrl(getDefaultEnquiryMessage())}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:bottom-6 sm:right-6"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
