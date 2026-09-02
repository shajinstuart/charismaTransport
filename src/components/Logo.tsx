import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Charisma Transport home">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold font-display text-xl font-semibold text-navy">
        C
      </span>
      <span className="leading-tight">
        <span className="block font-display text-xl leading-none text-navy">Charisma</span>
        <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-gold-600">
          Transport
        </span>
      </span>
    </Link>
  );
}
