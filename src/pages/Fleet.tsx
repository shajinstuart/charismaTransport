import { Seo } from "../components/Seo";
import { PageHero } from "../components/PageHero";
import { BusCard } from "../components/BusCard";
import { buses } from "../data/buses";

export function Fleet() {
  return (
    <main id="main">
      <Seo
        title="Our Fleet"
        path="/fleet"
        description="Charisma Transport fleet: 16, 21, 34, 37, 38, 46 and 51 seater push-back AC/Non-AC tourist buses for rent."
      />
      <PageHero
        eyebrow="Our Fleet"
        title="Tourist buses for rent"
        description="Push-back seater tourist buses with AC and Non-AC options. Confirmed seating capacities only."
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
