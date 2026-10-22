import { Seo } from "../components/Seo";
import { PageHero } from "../components/PageHero";
import { BusCard } from "../components/BusCard";
import { buses, seatingCapacitiesText } from "../data/buses";

export function Fleet() {
  return (
    <main id="main">
      <Seo
        title="Our Fleet"
        path="/fleet"
        description={`Charisma Transport fleet: ${seatingCapacitiesText} seater pushback AC/Non-AC tourist buses with luxury seats, Dolby Digital sound and DJ lights.`}
      />
      <PageHero
        eyebrow="Our Fleet"
        title="Tourist buses for rent"
        description={`${seatingCapacitiesText} seater pushback tourist buses with 2+1, 2+2 and 3+2 luxury seating, Dolby Digital sound and DJ lights.`}
      />
      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {buses.map((bus) => (
            <BusCard key={bus.seatingCapacity} bus={bus} />
          ))}
        </div>
      </section>
    </main>
  );
}
