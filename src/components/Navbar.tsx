import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { getDefaultEnquiryMessage, getWhatsAppChatUrl } from "../lib/whatsapp";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/fleet", label: "Our Fleet" },
  { to: "/destinations", label: "Destinations" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition ${
        scrolled || open
          ? "border-linen bg-cream/95 shadow-sm backdrop-blur"
          : "border-transparent bg-cream/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between sm:h-[4.5rem]">
        <Logo />
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition hover:text-gold-600 ${
                  isActive ? "text-gold-600" : "text-navy/80"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <a
          href={getWhatsAppChatUrl(getDefaultEnquiryMessage())}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary hidden lg:inline-flex"
        >
          WhatsApp Us
        </a>
        <button
          type="button"
          className="rounded-md p-2 text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open ? (
        <div id="mobile-menu" className="border-t border-linen bg-cream lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4" aria-label="Mobile">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-base font-medium ${
                    isActive ? "bg-linen text-gold-600" : "text-navy"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={getWhatsAppChatUrl(getDefaultEnquiryMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-3"
            >
              WhatsApp Us
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
