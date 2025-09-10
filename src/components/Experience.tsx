import React from 'react';
import { Calendar, MapPin, Building2 } from 'lucide-react';
import devolumLogo from '@/assets/company-logos/devolum.png';
import freelanceLogo from '@/assets/company-logos/freelance.png';
import areejLogo from '@/assets/company-logos/areej.png';
import lawFirmLogo from '@/assets/company-logos/law-firm.png';

export const Experience = () => {
  const experiences = [
    {
      company: "Devolum",
      logo: devolumLogo,
      role: "SEO Content Creator",
      employmentType: "Full-time",
      period: "Apr 2024 - Present",
      duration: calculateDuration("Apr 2024"),
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
      role: "Legal & Economic Researcher",
      employmentType: "Self-employed",
      period: "Jul 2019 - Present",
      duration: calculateDuration("Jul 2019"),
      location: "Egypt",
      responsibilities: [
        "Conduct in-depth legal and economic research on regulatory compliance and financial policies",
        "Analyze economic data and policy developments to provide actionable insights",
        "Stay updated on international and regional legal and economic changes"
      ],
      skills: ["Legal Research", "Economic Analysis", "Policy Analysis", "Regulatory Compliance", "Financial Research"]
    },
    {
      company: "Areej Alalam Group",
      logo: areejLogo,
      role: "Tourist Advisor",
      employmentType: "Full-time",
      period: "Nov 2022 - Mar 2023",
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
      logo: lawFirmLogo,
      role: "Legal Trainee",
      employmentType: "Internship",
      period: "Jul 2021 - Jan 2022",
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

  return (
    <section className="py-20 px-6 bg-muted/10">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Professional <span className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">Experience</span>
          </h2>
        </div>
        
        <div className="bg-card/30 backdrop-blur-lg rounded-2xl border border-border">
          {experiences.map((exp, index) => (
            <div key={index} className={`${index !== experiences.length - 1 ? 'border-b border-border/50' : ''}`}>
              <div className="p-8">
                <div className="flex gap-4">
                  {/* Company Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-lg overflow-hidden bg-background border border-border/30 flex items-center justify-center">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
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
                      <p className="text-sm text-muted-foreground/80 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </p>
                    </div>
                    
                    {/* Description */}
                    <div className="mb-4">
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="text-sm text-muted-foreground leading-relaxed">
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};