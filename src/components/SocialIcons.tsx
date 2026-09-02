import { Facebook, Instagram, Youtube } from "lucide-react";
import { socialLinks } from "../config/contact";

interface SocialIconsProps {
  className?: string;
  iconClassName?: string;
}

export function SocialIcons({
  className = "flex items-center gap-3",
  iconClassName = "h-5 w-5",
}: SocialIconsProps) {
  const iconWrap =
    "inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy transition hover:border-gold hover:text-gold-600";

  return (
    <div className={className}>
      <a
        href={socialLinks.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Charisma Transport on Instagram"
        className={iconWrap}
      >
        <Instagram className={iconClassName} aria-hidden="true" />
      </a>
      <a
        href={socialLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Charisma Transport on Facebook"
        className={iconWrap}
      >
        <Facebook className={iconClassName} aria-hidden="true" />
      </a>
      <span
        className={`${iconWrap} cursor-default opacity-70`}
        aria-label="YouTube coming soon"
        title="YouTube coming soon"
      >
        <Youtube className={iconClassName} aria-hidden="true" />
      </span>
    </div>
  );
}
