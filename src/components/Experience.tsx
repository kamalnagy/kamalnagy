import React from 'react';
import { Calendar, MapPin, Building2 } from 'lucide-react';
import azzrkLogo from '@/assets/company-logos/azzrk-latest.png';
import devolumLogo from '@/assets/company-logos/devolum-latest.png';
import freelanceLogo from '@/assets/company-logos/freelance-latest.png';
import areejLogo from '@/assets/company-logos/areej-new.png';
import lawLogo from '@/assets/company-logos/law-firm-new.png';

export const Experience = () => {
  const mainExperiences = [
    {
      company: "Azzrk",
      logo: azzrkLogo,
      role: "SEO Content Writer & Content Creator",
      employmentType: "Full-time",
      period: "09/2025 - Present",
      duration: calculateDuration("Sep 2025"),
      location: "Egypt",
      responsibilities: [
        "Planned and delivered structured website and campaign content aligned with SEO, brand messaging, and conversion goals",
        "Built website content structures and wrote SEO-optimized web copy across key site pages and landing pages",
        "Created and optimized diverse content assets, including blog articles, landing pages, social media scripts, motion graphics scripts, and promotional video storyboards",
        "Developed end-to-end content strategies aligned with marketing objectives to boost engagement, brand awareness, and conversion rates",
        "Produced campaign ideas, website content structures, PDF and web page copy, and content analysis reports to support cross-channel marketing initiatives",
        "Collaborated closely with designers, videographers, and marketing teams to deliver high-impact multimedia content, ensuring consistent tone of voice and brand direction",
        "Researched market trends, audience insights, and competitors to deliver innovative, audience-driven content solutions"
      ],
      skills: ["SEO Content Writing", "Website Content Structure", "Content Creation", "Content Strategy", "Brand Messaging", "Landing Pages", "Social Media Scripts", "Motion Graphics Scripts", "Video Storyboards", "Campaign Development"]
    },
    {
      company: "Devolum",
      logo: devolumLogo,
      role: "SEO Content Creator",
      employmentType: "Full-time",
      period: "04/2024 - 09/2025",
      duration: "1 yr 6 mos",
      location: "Egypt",
      responsibilities: [
        "Developed high-quality articles, product descriptions, and landing pages incorporating targeted keywords",
        "Implemented on-page SEO best practices, including meta descriptions and image optimization",
        "Conducted keyword research using SEMrush and Ahrefs to identify high-traffic search terms",
        "Collaborated with marketing teams to align content strategy with business objectives"
      ],
      skills: ["SEO", "Content Writing", "Keyword Research", "SEMrush", "Ahrefs", "On-page Optimization", "Content Strategy"]
    },
    {
      company: "Freelance",
      logo: freelanceLogo,
      role: "Freelancer Academic Legal Researcher",
      employmentType: "Freelance",
      period: "07/2019 - Present",
      duration: calculateDuration("Jul 2019"),
      location: "",
      responsibilities: [
        "Conduct in-depth legal and economic research on regulatory compliance, financial policies, and emerging legislation",
        "Analyze complex economic data and policy developments to provide actionable insights and strategic recommendations",
        "Collaborate with clients, law firms, and academic institutions to deliver accurate, well-structured reports under tight deadlines",
        "Stay updated on international, regional, and local legal and economic changes to anticipate trends and regulatory shifts",
        "Utilize advanced research tools, legal databases, and statistical analysis software to ensure data accuracy and credibility"
      ],
      skills: ["Legal Research", "Economic Analysis", "Policy Analysis", "Regulatory Compliance", "Financial Research", "Report Writing", "Statistical Analysis"]
    }
  ];

  const additionalExperiences = [
    {
      company: "Areej Alalam Group",
      logo: areejLogo,
      role: "Tourist Advisor",
      employmentType: "Full-time",
      period: "11/2022 - 03/2023",
      duration: "5 mos",
      location: "Egypt",
      responsibilities: [
        "Advised clients on travel itineraries, transportation, and accommodations",
        "Prepared promotional materials to market tour packages"
      ],
      skills: ["Customer Service", "Tourism", "Marketing", "Travel Planning", "Client Advisory"]
    },
    {
      company: "Karim Elsabahy Law Firm",
      logo: lawLogo,
      role: "Legal Trainee",
      employmentType: "Internship",
      period: "07/2021 - 01/2022",
      duration: "7 mos",
      location: "Egypt",
      responsibilities: [
        "Drafted claims and defenses, reviewed contracts, and negotiated settlements",
        "Assisted in case management and court follow-ups"
      ],
      skills: ["Legal Drafting", "Contract Review", "Negotiation", "Case Management", "Court Procedures"]
    }
  ];

  function calculateDuration(startDate: string): string {
    const start = new Date(startDate);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - start.getTime());
    const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30));
    
    if (diffMonths < 12) {
      return `${diffMonths} mos`;
    } else {
      const years = Math.floor(diffMonths / 12);
      const months = diffMonths % 12;
      if (months === 0) {
        return `${years} yr${years > 1 ? 's' : ''}`;
      }
      return `${years} yr${years > 1 ? 's' : ''} ${months} mo${months > 1 ? 's' : ''}`;
    }
  }

  const renderExperienceItem = (exp: any, index: number, isLastItem: boolean) => (
    <div key={index} className={`${!isLastItem ? 'border-b border-border/50' : ''}`}>
      <div className="p-8">
        <div className="flex gap-4">
          {/* Logo Area */}
          <div className="flex-shrink-0">
            {exp.logo ? (
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-gradient-to-br from-primary/5 via-background to-primary/10 p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.18)] transition-all duration-300 hover:scale-105 border border-primary/20">
                <img loading="lazy" decoding="async" src={exp.logo} 
                  alt={`${exp.company} logo`}
                  className="w-full h-full object-contain"
                  style={{ 
                    filter: 'drop-shadow(0 4px 12px hsla(var(--primary) / 0.3)) drop-shadow(0 0 20px hsla(var(--primary) / 0.2))',
                    mixBlendMode: 'normal'
                  }}
                />
              </div>
            ) : (
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-gradient-to-br from-primary/5 via-background to-primary/10 shadow-lg border border-primary/20">
              </div>
            )}
          </div>
          
          {/* Job Details */}
          <div className="flex-1">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-foreground mb-1">
                {exp.role}
              </h3>
              <p className="text-sm text-muted-foreground mb-1">
                {exp.company} · {exp.employmentType}
              </p>
              <p className="text-sm text-muted-foreground/80 mb-1">
                {exp.period} · {exp.duration}
              </p>
              {exp.location && (
                <p className="text-sm text-muted-foreground/80 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {exp.location}
                </p>
              )}
            </div>
            
            {/* Description */}
            <div className="mb-4">
              <ul className="space-y-2">
                {exp.responsibilities.map((resp: string, respIndex: number) => (
                  <li key={respIndex} className="text-sm text-muted-foreground leading-relaxed">
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill: string, skillIndex: number) => (
                <span 
                  key={skillIndex}
                  className="inline-flex items-center gap-1 text-xs text-muted-foreground"
                >
                  {skillIndex === 0 && (
                    <span className="text-primary">◆</span>
                  )}
                  <span className="hover:text-foreground transition-colors cursor-default">
                    {skill}
                  </span>
                  {skillIndex < exp.skills.length - 1 && (
                    <span className="text-muted-foreground/30">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 px-6 bg-muted/10">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Professional <span className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">Experience</span>
          </h2>
        </div>
        
        {/* Main Experience */}
        <div className="bg-card/30 backdrop-blur-lg rounded-2xl border border-border mb-8">
          {mainExperiences.map((exp, index) => 
            renderExperienceItem(exp, index, index === mainExperiences.length - 1)
          )}
        </div>

        {/* Additional Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Additional <span className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">Experience</span>
          </h3>
          <div className="bg-card/30 backdrop-blur-lg rounded-2xl border border-border">
            {additionalExperiences.map((exp, index) => 
              renderExperienceItem(exp, index, index === additionalExperiences.length - 1)
            )}
          </div>
        </div>
      </div>
    </section>
  );
};