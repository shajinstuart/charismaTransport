import { Seo } from "../components/Seo";
import { PageHero } from "../components/PageHero";
import { contactInfo } from "../config/contact";
import { services } from "../data/services";

export function About() {
  return (
    <main id="main">
      <Seo
        title="About"
        path="/about"
        description="Charisma Transport is a tourist bus rental company in Kanyakumari District, Tamil Nadu, owned by Sam Ebison. Travel throughout India."
      />
      <PageHero
        eyebrow="About"
        title="Charisma Transport"
        description="A travel company providing tourist bus rental for student, devotional, marriage and group trips."
      />
      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-navy">Company</h2>
            <p className="mt-4 leading-relaxed text-navy/75">
              Charisma Transport provides student package trips, devotional trips and marriage
              trips with 16, 21, 34, 37, 38, 46 and 51 push-back seater AC/Non-AC tourist buses
              for rent. The company is based in {contactInfo.location} and provides travel
              throughout India.
            </p>
            <p className="mt-4 leading-relaxed text-navy/75">
              Owner: {contactInfo.owner}
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-card sm:p-8">
            <h2 className="font-display text-2xl text-navy">Office</h2>
            <p className="mt-3 text-navy/75">
              {contactInfo.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <a
              href={contactInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-navy mt-6"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container-page">
          <h2 className="font-display text-3xl text-navy">Services</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <li key={service.slug} className="rounded-2xl border border-linen bg-white p-5">
                <h3 className="font-semibold text-navy">{service.title}</h3>
                <p className="mt-1 text-sm text-navy/70">{service.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="py-16">
        <div className="container-page max-w-3xl">
          <h2 className="font-display text-3xl text-navy">Commitment</h2>
          <p className="mt-4 leading-relaxed text-navy/75">
            Charisma Transport focuses on clear trip planning, suitable seating options and
            direct WhatsApp enquiry so groups can arrange student, family, marriage and tourist
            travel with ease.
          </p>
        </div>
      </section>
    </main>
  );
}
