import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      company: "Devolum",
      role: "SEO Content Creator",
      period: "Apr 2024 - Present",
      location: "Egypt",
      responsibilities: [
        "Developed high-quality articles, product descriptions, and landing pages incorporating targeted keywords",
        "Implemented on-page SEO best practices, including meta descriptions and image optimization",
        "Conducted keyword research using SEMrush and Ahrefs to identify high-traffic search terms",
        "Collaborated with marketing teams to align content strategy with business objectives"
      ]
    },
    {
      company: "Freelance",
      role: "Legal & Economic Researcher",
      period: "Jul 2019 - Present",
      location: "Egypt",
      responsibilities: [
        "Conduct in-depth legal and economic research on regulatory compliance and financial policies",
        "Analyze economic data and policy developments to provide actionable insights",
        "Stay updated on international and regional legal and economic changes"
      ]
    },
    {
      company: "Areej Alalam Group",
      role: "Tourist Advisor",
      period: "Nov 2022 - Mar 2023",
      location: "Egypt",
      responsibilities: [
        "Advised clients on travel itineraries, transportation, and accommodations",
        "Prepared promotional materials to market tour packages"
      ]
    },
    {
      company: "Karim Elsabahy Law Firm",
      role: "Legal Trainee",
      period: "Jul 2021 - Jan 2022",
      location: "Egypt",
      responsibilities: [
        "Drafted claims and defenses, reviewed contracts, and negotiated settlements",
        "Assisted in case management and court follow-ups"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Professional <span className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">Experience</span>
          </h2>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-card/30 backdrop-blur-lg rounded-2xl p-8 hover:bg-card/50 transition-all duration-500 hover:scale-102 hover:shadow-2xl border border-border hover:border-accent"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{exp.role}</h3>
                  <h4 className="text-xl text-primary font-semibold mb-2">{exp.company}</h4>
                  <div className="flex items-center space-x-4 text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-3">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex} className="flex items-start space-x-3 text-muted-foreground">
                    <div className="w-2 h-2 bg-gradient-to-r from-gradient-start to-gradient-end rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
