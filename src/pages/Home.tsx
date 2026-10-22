import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { Seo } from "../components/Seo";
import { SectionHeading } from "../components/SectionHeading";
import { ServiceCard } from "../components/ServiceCard";
import { BusCard } from "../components/BusCard";
import { DestinationCard } from "../components/DestinationCard";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { contactInfo } from "../config/contact";
import { services } from "../data/services";
import { buses, seatingCapacitiesText } from "../data/buses";
import { destinations } from "../data/destinations";
import { galleryItems, videos } from "../data/gallery";
import { whyChoose } from "../data/whyChoose";
import { getWhatsAppChatUrl } from "../lib/whatsapp";
import { VideoCard } from "../components/VideoCard";
import { HeroSlider } from "../components/HeroSlider";

export function Home() {
  return (
    <main id="main">
      <Seo path="/" />
      <Hero />
      <Intro />
      <VideoPreview />
      <ServicesPreview />
      <FleetPreview />
      <DestinationsPreview />
      <GalleryPreview />
      <WhyChoose />
      <ContactCta />
    </main>
  );
}

function Hero() {
  return (
    <section className="bg-cream lg:pb-20 lg:pt-28">
      <div className="container-page flex min-h-[100svh] flex-col gap-3 pb-4 pt-[4.25rem] lg:grid lg:min-h-0 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-14 lg:py-0">
        <div className="shrink-0">
          <p className="eyebrow">Tourist bus rental · Kanyakumari</p>
          <h1 className="mt-2 whitespace-nowrap font-display text-[clamp(1.7rem,7.4vw,4.5rem)] leading-none text-navy lg:mt-4">
            {contactInfo.companyName}
          </h1>
          <p className="mt-2 font-display text-xl text-gold-600 sm:mt-4 sm:text-2xl lg:text-3xl">
            {contactInfo.tagline}
          </p>
          <p className="mt-2 max-w-xl text-sm text-navy/70 sm:mt-5 sm:text-base lg:text-lg">
            Student Trips • Devotional Trips • Marriage Trips • Tourist & Group Travel
          </p>
          <p className="mt-2 max-w-xl text-xs text-navy/60 sm:mt-3 sm:text-sm">
            {seatingCapacitiesText} seater pushback tourist buses · AC and Non-AC
          </p>
          <div className="mt-4 flex flex-wrap gap-3 sm:mt-8">
            <Link to="/contact#enquiry" className="btn-primary">
              Plan Your Trip
            </Link>
            <a
              href={getWhatsAppChatUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
        <div className="min-h-0 flex-1 lg:flex-none">
          <HeroSlider />
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
        <SectionHeading
          eyebrow="About"
          title="Comfortable group travel from Kanyakumari District"
          description={`Charisma Transport is a travel company providing student package trips, devotional trips and marriage trips with ${seatingCapacitiesText} pushback seater AC/Non-AC tourist buses for rent. Owned by ${contactInfo.owner}. Travel throughout India.`}
        />
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Seating options", value: String(buses.length) },
            { label: "Bus type", value: "Tourist" },
            { label: "Service area", value: "India" },
            { label: "Contact", value: "WhatsApp" },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl bg-white p-5 shadow-card">
              <p className="font-display text-3xl text-navy">{item.value}</p>
              <p className="mt-1 text-sm text-navy/65">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoPreview() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-page">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Videos"
            title="Experience Charisma"
            description="Watch Charisma Transport on the road."
          />
          <Link to="/gallery" className="text-sm font-semibold text-teal hover:text-teal-dark">
            Open gallery
          </Link>
        </div>
        <div className="mx-auto max-w-4xl">
          {videos.map((video) => (
            <VideoCard key={video.src} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-page">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Services"
            title="Trips we support"
            description="Student, devotional, marriage and tourist group travel with tourist buses for rent."
          />
          <Link to="/services" className="text-sm font-semibold text-teal hover:text-teal-dark">
            View all services
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FleetPreview() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="container-page">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Our Fleet"
            title="Pushback seater tourist buses"
            description="Luxury 2+1, 2+2 and 3+2 seating, Dolby Digital sound and DJ lights. AC and Non-AC options."
          />
          <Link to="/fleet" className="text-sm font-semibold text-teal hover:text-teal-dark">
            View full fleet
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {buses.slice(0, 3).map((bus) => (
            <BusCard key={bus.seatingCapacity} bus={bus} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DestinationsPreview() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-page">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Destinations"
            title="Frequent travel destinations"
            description="Charisma Transport travels throughout India. These are among the frequently travelled destinations."
          />
          <Link to="/destinations" className="text-sm font-semibold text-teal hover:text-teal-dark">
            View destinations
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.slice(0, 3).map((destination) => (
            <DestinationCard key={destination.name} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryPreview() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="container-page">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Gallery"
            title="Buses, trips and destinations"
            description="A look at the fleet, trips and destinations."
          />
          <Link to="/gallery" className="text-sm font-semibold text-teal hover:text-teal-dark">
            Open gallery
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {galleryItems.slice(0, 4).map((item) => (
            <ImageWithFallback
              key={item.src}
              src={item.src}
              alt={item.alt}
              fallbackLabel={item.category}
              className="aspect-[4/5] w-full rounded-2xl object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why Charisma"
          title="Why choose Charisma Transport"
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((point) => (
            <li
              key={point}
              className="flex gap-3 rounded-2xl border border-linen bg-cream px-4 py-4 text-sm text-navy/90"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ContactCta() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="container-page rounded-3xl border border-linen bg-white px-6 py-12 text-center shadow-card sm:px-12">
        <p className="eyebrow">Plan your trip</p>
        <h2 className="mt-3 font-display text-3xl text-navy sm:text-4xl">
          Ready to travel with Charisma Transport?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-navy/70">
          Send a WhatsApp enquiry with your dates, destination and passenger count.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/contact#enquiry" className="btn-primary">
            Plan Your Trip
          </Link>
          <a
            href={getWhatsAppChatUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
