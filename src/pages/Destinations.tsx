import { Seo } from "../components/Seo";
import { PageHero } from "../components/PageHero";
import { DestinationCard } from "../components/DestinationCard";
import { destinations } from "../data/destinations";

export function Destinations() {
  return (
    <main id="main">
      <Seo
        title="Destinations"
        path="/destinations"
        description="Charisma Transport travels throughout India. Frequent destinations include Ooty, Kodaikanal, Chennai, Pondicherry and Mysore."
      />
      <PageHero
        eyebrow="Destinations"
        title="Travel throughout India"
        description="These are frequently travelled destinations. Charisma Transport is not limited to this list."
      />
      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard key={destination.name} destination={destination} />
          ))}
        </div>
      </section>
    </main>
  );
}
