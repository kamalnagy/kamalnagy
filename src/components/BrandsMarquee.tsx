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
import rihal from '@/assets/brands/rihal.png.asset.json';
import roadtech from '@/assets/brands/roadtech.png.asset.json';
import roaya from '@/assets/brands/roaya.png.asset.json';
import saabeel from '@/assets/brands/saabeel.png.asset.json';
import sada from '@/assets/brands/sada.png.asset.json';
import safa from '@/assets/brands/safa.png.asset.json';
import sanad from '@/assets/brands/sanad.png.asset.json';
import sharry from '@/assets/brands/sharry.png.asset.json';
import shefaa from '@/assets/brands/shefaa.png.asset.json';
import strevya from '@/assets/brands/strevya.png.asset.json';
import sumoue from '@/assets/brands/sumoue.png.asset.json';
import surratak from '@/assets/brands/surratak.png.asset.json';
import talaa from '@/assets/brands/talaa.png.asset.json';
import boldera from '@/assets/brands/boldera.png.asset.json';
import transition from '@/assets/brands/transition.png.asset.json';

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
  { name: 'Rihal', src: rihal.url },
  { name: 'RoadTech', src: roadtech.url },
  { name: 'Roaya', src: roaya.url },
  { name: 'Saabeel', src: saabeel.url },
  { name: 'SADA Agency', src: sada.url },
  { name: 'SAFA Student Services', src: safa.url },
  { name: 'Sanad', src: sanad.url },
  { name: 'Sharry', src: sharry.url },
  { name: 'Shefaa Misr', src: shefaa.url },
  { name: 'Strevya', src: strevya.url },
  { name: 'Sumoue Marketing Agency', src: sumoue.url },
  { name: 'Surratak', src: surratak.url },
  { name: 'Talaa Travel', src: talaa.url },
  { name: 'The Bold Era', src: boldera.url },
  { name: 'Transition', src: transition.url },
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
              className="group flex-shrink-0 flex items-center justify-center px-3 md:px-4"
            >
              <div className="flex h-20 w-36 md:h-24 md:w-44 items-center justify-center rounded-2xl border border-border/40 bg-card/60 px-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:bg-card group-hover:shadow-[0_18px_40px_-18px_hsl(var(--primary)/0.45)]">
                <img
                  src={brand.src}
                  alt={`${brand.name} logo`}
                  title={brand.name}
                  loading="lazy"
                  className="max-h-12 md:max-h-14 w-auto max-w-[120px] object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
