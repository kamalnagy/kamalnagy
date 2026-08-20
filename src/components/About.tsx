
import React from 'react';
import { Search, LayoutTemplate, MessageSquareQuote, BarChart3, Sparkles, Languages } from 'lucide-react';

export const About = () => {
  const stats = [
    { value: '2.4+', label: 'Years in SEO & Web Content' },
    { value: '5+', label: 'Years Legal & Economic Research' },
    { value: '40+', label: 'Brands & Businesses Served' },
    { value: '2', label: 'Languages (AR / EN)' },
  ];

  const pillars = [
    {
      icon: Search,
      title: 'SEO & Content Optimization',
      description:
        'Keyword research, on-page SEO, content auditing, meta tags and internal linking strategies that grow organic visibility.',
    },
    {
      icon: LayoutTemplate,
      title: 'Content Strategy & Structure',
      description:
        'Website content structuring, search-intent mapping, messaging frameworks, editorial calendars and CRO-driven copy.',
    },
    {
      icon: MessageSquareQuote,
      title: 'Brand & Campaign Messaging',
      description:
        'Tone-of-voice development, campaign messaging, ad & video scriptwriting, company profiles and brand documents.',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description:
        'Google Analytics, Search Console, SEMrush and Ahrefs to measure performance and steer content decisions with data.',
    },
    {
      icon: Sparkles,
      title: 'UX Content & Scriptwriting',
      description:
        'Landing pages, product copy, motion-graphics scripts and video storyboards built for clarity and conversion.',
    },
    {
      icon: Languages,
      title: 'Bilingual Research Background',
      description:
        'Arabic & English content backed by legal and economic research discipline — accurate, structured and credible.',
    },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            SEO & Web Content Specialist, scriptwriter and brand-messaging writer with over 2 years of experience
            delivering structured, performance-driven content across websites and digital campaigns. I build website
            content structures, write SEO-optimized web copy, and develop clear brand messaging across landing pages,
            ad scripts, company profiles and social media content plans — collaborating with marketing and creative
            teams to support organic growth, campaign performance and conversion goals.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-14">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-card/50 backdrop-blur-lg p-6 text-center transition-all duration-300 hover:border-accent hover:shadow-xl"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gold-frame via-gold-frame-light to-gold-frame bg-clip-text text-transparent">
                {stat.value}
              </div>
              <p className="text-xs md:text-sm text-muted-foreground mt-2 leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pillars.map((item, index) => (
            <div
              key={item.title}
              className="group relative bg-card/50 backdrop-blur-lg rounded-2xl p-7 border border-border transition-all duration-300 hover:bg-card/70 hover:-translate-y-1 hover:shadow-2xl hover:border-accent"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gradient-start to-gradient-middle flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                <item.icon className="w-6 h-6 text-background" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
