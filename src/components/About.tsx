
import React from 'react';
import { Search, LayoutTemplate, MessageSquareQuote, BarChart3, Sparkles, PenTool, Clapperboard, MousePointerClick } from 'lucide-react';

export const About = () => {
  const stats = [
    { value: '3+', label: 'Years in SEO & Content Creation ' },
    { value: '7+', label: 'Years Legal & Economic Research' },
    { value: '40+', label: 'Brands & Businesses Served' },
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
      icon: PenTool,
      title: 'Copywriting',
      description:
        'Persuasive, clear copy for ads, landing pages, product descriptions, social content and brand communications that drive action.',
    },
    {
      icon: MousePointerClick,
      title: 'UX Content',
      description:
        'User-centered microcopy, landing page content, product flows and interface language built for clarity, guidance and conversion.',
    },
    {
      icon: Clapperboard,
      title: 'Scriptwriting',
      description:
        'Motion-graphics scripts, video storyboards, ad scripts and campaign narratives that capture attention and deliver a message.',
    },
    {
      icon: MessageSquareQuote,
      title: 'Brand & Campaign Messaging',
      description:
        'Tone-of-voice development, campaign messaging, company profiles and brand documents that define how a brand speaks.',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description:
        'Google Analytics, Search Console, SEMrush and Ahrefs to measure performance and steer content decisions with data.',
    },
    {
      icon: Sparkles,
      title: 'Research-Driven Accuracy',
      description:
        'A legal and economic research background that brings structure, credibility and depth to every piece of content.',
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
            I believe the right words do more than inform .. they move people
            I work at the intersection of SEO, storytelling, and research, creating Arabic and English content that is built to be found, understood, and acted on. With 2+ years in SEO and web content, backed by 7+ years of legal and economic research, I bring structure, strategy, and depth to everything from websites and e-commerce content to campaigns, scripts, and brand messaging.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-14">
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {pillars.map((item, index) => (
            <div
              key={item.title}
              className="group flex items-center gap-4 bg-card/50 backdrop-blur-lg rounded-xl px-5 py-4 border border-border transition-all duration-300 hover:bg-card/70 hover:-translate-y-1 hover:shadow-2xl hover:border-accent"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-gradient-start to-gradient-middle flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <item.icon className="w-5 h-5 text-background" />
              </div>
              <h3 className="text-sm font-semibold text-foreground leading-tight">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
