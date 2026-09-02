import { Mail, MapPin, Phone } from "lucide-react";
import { Seo } from "../components/Seo";
import { PageHero } from "../components/PageHero";
import { EnquiryForm } from "../components/EnquiryForm";
import { SocialIcons } from "../components/SocialIcons";
import { contactInfo } from "../config/contact";
import { asset } from "../lib/asset";
import { getDefaultEnquiryMessage, getWhatsAppChatUrl } from "../lib/whatsapp";

export function Contact() {
  return (
    <main id="main">
      <Seo
        title="Contact"
        path="/contact"
        description="Contact Charisma Transport in Nagercoil, Kanyakumari District. WhatsApp, phone, email and office directions."
      />
      <PageHero
        eyebrow="Contact"
        title="Plan your trip"
        description="Enquire on WhatsApp or visit the office in Nagercoil."
      />
      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <h2 className="font-display text-3xl text-navy">Visit Our Office</h2>
            <p className="mt-4 flex gap-3 text-navy/80">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <span>
                {contactInfo.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </p>
            <ul className="mt-6 space-y-3 text-navy/80">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold" aria-hidden="true" />
                <a href={`tel:+91${contactInfo.phone}`} className="hover:text-teal">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold" aria-hidden="true" />
                <a
                  href={getWhatsAppChatUrl(getDefaultEnquiryMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal"
                >
                  WhatsApp {contactInfo.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold" aria-hidden="true" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-teal">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
            <a
              href={contactInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-navy mt-6"
            >
              Get Directions
            </a>
            <div className="mt-8">
              <p className="text-sm font-medium text-navy">Social</p>
              <div className="mt-3">
                <SocialIcons />
              </div>
            </div>
            <div className="mt-10 max-w-xs rounded-2xl border border-linen bg-white p-5 shadow-card">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-600">
                Scan to visit
              </p>
              <img
                src={asset("/qr/website.png")}
                alt="QR code for the Charisma Transport website"
                className="mt-3 w-full rounded-xl"
              />
              <p className="mt-3 break-all text-xs text-navy/60">{contactInfo.websiteUrl}</p>
              <a
                href={asset("/qr/website.png")}
                download="charisma-transport-qr.png"
                className="btn-navy mt-4 w-full"
              >
                Download QR code
              </a>
            </div>
          </div>
          <div id="enquiry" className="scroll-mt-24">
            <h2 className="mb-4 font-display text-3xl text-navy">Enquiry</h2>
            <EnquiryForm />
          </div>
        </div>
      </section>
    </main>
  );
}
