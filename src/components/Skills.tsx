
import React from 'react';
import { Code2, Users, Languages } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Technical Skills",
      subsections: [
        {
          name: "SEO & Content Optimization",
          skills: ["Keyword Research", "On-Page Optimization", "Content Auditing", "Meta Tags", "Internal Linking Strategies"]
        },
        {
          name: "Analytics & Reporting",
          skills: ["Google Analytics", "Google Search Console", "SEMrush", "Ahrefs"]
        },
        {
          name: "Content Management Systems",
          skills: ["WordPress", "Shopify (basic)", "Webflow (basic)"]
        },
        {
          name: "Content Strategy & Planning",
          skills: ["Editorial Calendars", "A/B Testing", "Conversion Rate Optimization (CRO)", "Performance KPIs Tracking & Reporting"]
        },
        {
          name: "Web & Design Basics",
          skills: ["Basic HTML/CSS for formatting", "Cross-platform content repurposing (articles → videos → social posts)"]
        }
      ]
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: ["Adaptability & Problem-Solving", "Time Management & Organization", "Research & Analytical Thinking", "Communication & Collaboration Skills", "Creativity in Content Ideation"]
    },
    {
      icon: Languages,
      title: "Languages",
      skills: ["Arabic: Native", "English: Professional"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            My <span className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">Skills</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`bg-card/50 backdrop-blur-lg rounded-2xl p-8 hover:bg-card/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl group border border-border hover:border-accent ${
                category.title === "Technical Skills" ? "lg:col-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-gradient-start to-gradient-end rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <category.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">{category.title}</h3>
              
              {category.subsections ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.subsections.map((subsection, subIndex) => (
                    <div key={subIndex} className="space-y-2">
                      <h4 className="text-sm font-semibold text-accent mb-2">{subsection.name}:</h4>
                      <ul className="space-y-1">
                        {subsection.skills.map((skill, skillIndex) => (
                          <li key={skillIndex} className="text-muted-foreground text-sm flex items-start">
                            <span className="text-accent mr-2">•</span>
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="space-y-2">
                  {category.skills?.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-muted-foreground flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
