import React from 'react';
import { FileText, ExternalLink, Sparkles } from 'lucide-react';
import { pdfsData } from './pdfsData';

export const PdfsSection = () => {
  return (
    <div className="relative space-y-8 md:space-y-12">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="text-center px-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-xs md:text-sm font-medium text-primary uppercase tracking-wider">
            Documents & Brand PDFs
          </span>
        </div>
        <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
          PDFs I{' '}
          <span className="bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end bg-clip-text text-transparent">
            Created
          </span>
        </h3>
        <p className="text-muted-foreground text-sm md:text-lg max-w-3xl mx-auto">
          Branded documents where I delivered the full creative inspiration and content — from concept and copy to structure and tone.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4">
        {pdfsData.map((pdf) => (
          <article
            key={pdf.id}
            className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_20px_50px_-15px_hsl(var(--primary)/0.4)] hover:-translate-y-1"
          >
            {/* Gradient glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end rounded-2xl opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-500 pointer-events-none" />

            {/* Logo as hyperlink to PDF */}
            <a
              href={pdf.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${pdf.title} PDF`}
              className={`relative block aspect-[16/10] overflow-hidden ${pdf.logoBgClass ?? 'bg-muted'}`}
            >
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <img
                  src={pdf.logo}
                  alt={`${pdf.company} logo — click to open PDF`}
                  loading="lazy"
                  className="max-h-full max-w-[60%] object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
                />
              </div>
              {/* Hover overlay with view-pdf hint */}
              <div className="absolute inset-0 flex items-end justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/40 via-transparent to-transparent">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-black text-xs font-semibold shadow-lg">
                  <FileText className="w-3.5 h-3.5" />
                  View PDF
                </span>
              </div>
            </a>

            <div className="relative p-5 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  {pdf.company}
                </span>
              </div>
              <h4 className="text-base md:text-lg font-bold text-foreground leading-tight">
                {pdf.title}
              </h4>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {pdf.description}
              </p>
              <p className="text-[11px] md:text-xs text-muted-foreground/80 italic border-t border-border/50 pt-3">
                {pdf.role}
              </p>
              <a
                href={pdf.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                Open document
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </article>
        ))}

        {/* Placeholder card — ready for more PDFs */}
        <div className="relative rounded-2xl border-2 border-dashed border-border/60 bg-card/30 flex flex-col items-center justify-center text-center p-8 min-h-[320px] hover:border-primary/40 transition-colors">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <FileText className="w-7 h-7 text-primary" />
          </div>
          <p className="text-sm font-semibold text-foreground mb-1">More PDFs coming soon</p>
          <p className="text-xs text-muted-foreground max-w-[220px]">
            Reserved space for upcoming branded documents and creative content pieces.
          </p>
        </div>
      </div>
    </div>
  );
};
