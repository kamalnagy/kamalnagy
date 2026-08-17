import React from 'react';
import arrafni from '@/assets/brands/3arrafni.png.asset.json';
import almugasab from '@/assets/brands/almugasab.png.asset.json';
import alzahra from '@/assets/brands/alzahra-baz.png.asset.json';
import aroma from '@/assets/brands/aroma-classic.png.asset.json';
import baco from '@/assets/brands/baco.png.asset.json';
import basenote from '@/assets/brands/basenote.png.asset.json';
import callva from '@/assets/brands/callva.png.asset.json';
import deem from '@/assets/brands/deem.png.asset.json';
import devolum from '@/assets/brands/devolum.png.asset.json';
import ghanaem from '@/assets/brands/ghanaem.png.asset.json';
import hsi from '@/assets/brands/hsi.png.asset.json';
import ihkam from '@/assets/brands/ihkam.png.asset.json';
import infugram from '@/assets/brands/infugram.png.asset.json';
import internationalStudents from '@/assets/brands/international-students.png.asset.json';
import johnson from '@/assets/brands/johnson.png.asset.json';
import medstar from '@/assets/brands/medstar.png.asset.json';
import menusbee from '@/assets/brands/menusbee.png.asset.json';
import phlog from '@/assets/brands/phlog.png.asset.json';
import rawaf from '@/assets/brands/rawaf.png.asset.json';
import revenueX from '@/assets/brands/revenue-x.png.asset.json';

const brands = [
  { name: '3arrafni', src: arrafni.url },
  { name: 'Almugasab', src: almugasab.url },
  { name: 'Alzahra Baz Jewelry', src: alzahra.url },
  { name: 'Aroma Classic', src: aroma.url },
  { name: 'Baco Store', src: baco.url },
  { name: 'Basenote', src: basenote.url },
  { name: 'CallVa', src: callva.url },
  { name: 'Deem Agency', src: deem.url },
  { name: 'Devolum', src: devolum.url },
  { name: 'Ghanaem', src: ghanaem.url },
  { name: 'HSI Center for Healthcare Training & Consultation', src: hsi.url },
  { name: 'Ihkam Tech Solutions', src: ihkam.url },
  { name: 'Infugram', src: infugram.url },
  { name: 'International Students', src: internationalStudents.url },
  { name: 'Johnson Store', src: johnson.url },
  { name: 'Med Star Medical Center', src: medstar.url },
  { name: 'Menusbee', src: menusbee.url },
  { name: 'Phlog', src: phlog.url },
  { name: 'Rawaf Perfumes', src: rawaf.url },
  { name: 'Revenue X', src: revenueX.url },
];

export const BrandsMarquee = () => {
  const loop = [...brands, ...brands];

  return (
    <section className="py-10 md:py-14 border-y border-border/50 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-6 mb-6 md:mb-8 text-center">
        <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-muted-foreground">
          Brands I&apos;ve Written For
        </p>
      </div>

      <div className="relative">
        {/* edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-l from-background to-transparent" />

        <div className="flex w-max animate-brand-marquee hover:[animation-play-state:paused]">
          {loop.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex-shrink-0 flex items-center justify-center px-6 md:px-10"
            >
              <img
                src={brand.src}
                alt={`${brand.name} logo`}
                loading="lazy"
                className="h-12 md:h-16 w-auto max-w-[140px] object-contain brightness-0 dark:invert opacity-50 transition-all duration-300 hover:opacity-100 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
