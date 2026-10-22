import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to="/" className="group flex min-w-0 items-center gap-2.5 sm:gap-3" aria-label="Charisma Transport home">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold font-display text-xl font-semibold text-navy sm:h-11 sm:w-11 sm:text-2xl">
        C
      </span>
      <span className="whitespace-nowrap font-display text-[1.45rem] leading-none text-navy sm:text-2xl lg:text-[1.85rem]">
        Charisma Transport
      </span>
    </Link>
  );
}
