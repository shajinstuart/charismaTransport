import { LocationButton } from "./LocationButton";
import { WhatsAppButton } from "./WhatsAppButton";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3 sm:bottom-6 sm:right-6">
      <LocationButton />
      <WhatsAppButton />
    </div>
  );
}
