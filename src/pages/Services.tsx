import { Seo } from "../components/Seo";
import { PageHero } from "../components/PageHero";
import { ServiceCard } from "../components/ServiceCard";
import { services } from "../data/services";

export function Services() {
  return (
    <main id="main">
      <Seo
        title="Services"
        path="/services"
        description="Student package trips, devotional trips, marriage trips and tourist group travel with Charisma Transport tourist buses."
      />
      <PageHero
        eyebrow="Services"
        title="Travel services"
        description="Student, devotional, marriage and tourist group trips with AC and Non-AC tourist buses for rent."
      />
      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
    </main>
  );
}
