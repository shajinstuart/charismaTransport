import { useMemo, useState } from "react";
import { Seo } from "../components/Seo";
import { PageHero } from "../components/PageHero";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { VideoCard } from "../components/VideoCard";
import { SectionHeading } from "../components/SectionHeading";
import { galleryItems, videos } from "../data/gallery";

export function Gallery() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(galleryItems.map((item) => item.category)))],
    [],
  );
  const [active, setActive] = useState("All");
  const visible =
    active === "All" ? galleryItems : galleryItems.filter((item) => item.category === active);

  return (
    <main id="main">
      <Seo
        title="Gallery"
        path="/gallery"
        description="Photos and videos of Charisma Transport buses, trips and destinations."
      />
      <PageHero
        eyebrow="Gallery"
        title="Buses, trips and destinations"
        description="Bus, trip and destination images, plus travel videos."
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Videos"
            title="Experience Charisma"
            description="Watch Charisma Transport on the road."
          />
          <div className="mx-auto mt-10 max-w-4xl">
            {videos.map((video) => (
              <VideoCard key={video.src} video={video} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="container-page">
          {categories.length > 2 ? (
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active === category
                    ? "bg-gold text-navy"
                    : "bg-white text-navy shadow-sm hover:bg-linen"
                }`}
                aria-pressed={active === category}
              >
                {category}
              </button>
            ))}
          </div>
          ) : null}
          <h2 className="font-display text-3xl text-navy">Photos</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((item) => (
              <figure key={`${item.category}-${item.src}`} className="overflow-hidden rounded-2xl bg-white shadow-card">
                <ImageWithFallback
                  src={item.src}
                  alt={item.alt}
                  fallbackLabel={item.category}
                  className="h-56 w-full object-cover"
                />
                <figcaption className="px-4 py-3 text-sm text-navy/70">
                  {item.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
