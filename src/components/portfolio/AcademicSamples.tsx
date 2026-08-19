import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export const AcademicSamples = () => {
  const images = [
    {
      src: '/lovable-uploads/fb1f2f84-6352-4b88-ad9b-521196df85f0.png',
      alt: 'Academic research introduction page – legal study sample',
    },
    {
      src: '/lovable-uploads/67d7474d-f946-479a-9032-f975fcdf50bd.png',
      alt: 'Essence of crime – legal research sample page',
    },
    {
      src: '/lovable-uploads/30dbea4f-c2c0-40d7-8666-6ac112122c50.png',
      alt: 'Key aspects of Saudi economy development – economic research sample',
    },
    {
      src: '/lovable-uploads/4ce00042-340a-4baa-b7f1-da9b422c9f65.png',
      alt: 'GDP growth rate by sector chart – economic analysis sample',
    },
    {
      src: '/lovable-uploads/cc9a7c11-aa09-4824-b310-1985770f3706.png',
      alt: 'Serbia EU economy report page – academic sample',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Samples of My Academic Work',
    itemListElement: images.map((img, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        name: `Academic research sample ${index + 1}`,
        image: img.src,
      },
    })),
  } as const;

  return (
    <section
      aria-labelledby="academic-samples"
      className="relative rounded-2xl border border-border bg-card/50 p-6 md:p-10 shadow-sm"
    >
      <header className="mb-6 md:mb-8 text-center md:text-left">
        <h3 id="academic-samples" className="text-2xl md:text-3xl font-bold text-foreground">
          Samples of My Academic Work
        </h3>
        <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-3xl md:pr-6">
          High-quality academic research across legal and economic fields, with in-depth investigation,
          critical analysis, and accurate synthesis from credible, official sources. Proficiency in
          recognized citation styles such as APA ensures precise documentation of all sources.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
        {/* Textual proof points */}
        <article className="order-2 lg:order-1 space-y-4">
          <div className="rounded-xl bg-muted/30 p-4 md:p-6 border border-border/60">
            <h4 className="text-base md:text-lg font-semibold text-foreground mb-3">
              What this demonstrates
            </h4>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm md:text-base">
              <li>Rigorous methodology and critical analysis of complex subjects</li>
              <li>Accurate extraction and synthesis from authoritative, official sources</li>
              <li>Clear structure, precise language, and consistent academic tone</li>
              <li>Proper citation and formatting using APA and other recognized styles</li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-2" aria-label="Academic strengths">
            <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs md:text-sm">
              Precision
            </span>
            <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs md:text-sm">
              Credibility
            </span>
            <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs md:text-sm">
              Academic Excellence
            </span>
          </div>
        </article>

        {/* Image slider */}
        <div className="order-1 lg:order-2">
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {images.map((img, idx) => (
                <CarouselItem key={idx} className="basis-full">
                  <figure className="relative overflow-hidden rounded-lg border border-border bg-background">
                    <img loading="lazy" decoding="async" src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-[260px] md:h-[360px] lg:h-[420px] object-contain transition-transform duration-300 hover:scale-[1.02]"
                    />
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious aria-label="Previous academic sample" />
            <CarouselNext aria-label="Next academic sample" />
          </Carousel>
        </div>
      </div>

      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
};

export default AcademicSamples;
