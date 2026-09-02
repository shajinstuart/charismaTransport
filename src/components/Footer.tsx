import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { contactInfo } from "../config/contact";
import { Logo } from "./Logo";
import { SocialIcons } from "./SocialIcons";

const footerLinks = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/fleet", label: "Our Fleet" },
  { to: "/destinations", label: "Destinations" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-linen bg-cream-dark text-navy">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy/70">
            Tourist bus rental for student, devotional, marriage and group travel
            from {contactInfo.location}. Travel throughout India.
          </p>
          <div className="mt-5">
            <SocialIcons />
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-600">Explore</h2>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-navy/75 hover:text-gold-600">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-600">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-navy/75">
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
              <a href={`tel:+91${contactInfo.phone}`} className="hover:text-gold-600">
                {contactInfo.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
              <a
                href={`https://wa.me/${contactInfo.whatsappDigits}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-600"
              >
                WhatsApp {contactInfo.whatsapp}
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-gold-600">
                {contactInfo.email}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-600">Office</h2>
          <p className="mt-4 flex gap-2 text-sm leading-relaxed text-navy/75">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
            <span>
              {contactInfo.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </span>
          </p>
          <a
            href={contactInfo.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex text-sm font-semibold text-gold-600 hover:text-gold"
          >
            Get Directions
          </a>
        </div>
      </div>
      <div className="border-t border-linen py-5 text-center text-xs text-navy/50">
        © {new Date().getFullYear()} {contactInfo.companyName}. Tourist bus rental, Kanyakumari District.
      </div>
    </footer>
  );
}
