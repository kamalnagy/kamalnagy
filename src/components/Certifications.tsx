import React from 'react';
import { BadgeCheck, CalendarDays, Hash } from 'lucide-react';
import { certificates } from '@/components/portfolio/certificatesData';

export const Certifications = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional credentials in content marketing and digital strategy
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 max-w-3xl mx-auto">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-card/30 backdrop-blur-lg rounded-2xl p-6 md:p-8 hover:bg-card/50 transition-all duration-500 hover:shadow-2xl border border-border hover:border-accent"
            >
              {/* Gold metallic framed certificate image */}
              <div
                className="relative mx-auto w-full max-w-xl rounded-lg p-[3px] shadow-[0_0_30px_-8px_rgba(212,175,55,0.45)]"
                style={{
                  background:
                    'linear-gradient(135deg, #f7e08b 0%, #d4af37 25%, #a8801a 50%, #f7e08b 75%, #d4af37 100%)',
                }}
              >
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate from ${cert.issuer}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-md block"
                />
              </div>

              {/* Caption + short description under the image */}
              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-2 mb-2">
                  <BadgeCheck className="w-5 h-5 text-accent" />
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">{cert.title}</h3>
                </div>
                <p className="text-primary font-semibold mb-3">{cert.issuer}</p>
                <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-4">
                  {cert.description}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="w-4 h-4 text-accent" />
                    Valid: {cert.validity}
                  </span>
                  {cert.credentialCode && (
                    <span className="inline-flex items-center gap-1.5">
                      <Hash className="w-4 h-4 text-accent" />
                      ID: {cert.credentialCode}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
