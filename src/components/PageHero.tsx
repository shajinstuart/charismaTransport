interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-linen bg-cream pb-16 pt-28 sm:pb-20 sm:pt-32">
      <div className="container-page">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="mt-3 font-display text-4xl text-navy sm:text-5xl">{title}</h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy/70">{description}</p>
        ) : null}
      </div>
    </section>
  );
}
