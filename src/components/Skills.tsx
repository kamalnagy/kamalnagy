import React from 'react';
import { Code2, Users, Languages } from 'lucide-react';
export const Skills = () => {
  const skillCategories = [{
    icon: Code2,
    title: "Technical Skills",
    subsections: [{
      name: "SEO & Content Optimization",
      skills: ["Keyword Research", "On-Page Optimization", "Content Auditing", "Meta Tags", "Internal Linking Strategies"]
    }, {
      name: "Analytics & Reporting",
      skills: ["Google Analytics", "Google Search Console", "SEMrush", "Ahrefs"]
    }, {
      name: "Content Management Systems",
      skills: ["WordPress", "Shopify (basic)", "Webflow (basic)"]
    }, {
      name: "Content Strategy & Planning",
      skills: ["Editorial Calendars", "A/B Testing", "Conversion Rate Optimization (CRO)", "Performance KPIs Tracking & Reporting"]
    }, {
      name: "Web & Design Basics",
      skills: ["Basic HTML/CSS for formatting", "Cross-platform content repurposing (articles → videos → social posts)"]
    }]
  }, {
    icon: Users,
    title: "Soft Skills",
    skills: ["Adaptability & Problem-Solving", "Time Management & Organization", "Research & Analytical Thinking", "Communication & Collaboration Skills", "Creativity in Content Ideation"]
  }, {
    icon: Languages,
    title: "Languages",
    skills: ["Arabic: Native", "English: Professional"]
  }];
  
  return (
    <section id="skills" className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">My Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="bg-card rounded-lg p-6 shadow-lg border border-border">
                <div className="flex items-center mb-4">
                  <Icon className="w-6 h-6 mr-3 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                {category.subsections ? (
                  <div className="space-y-4">
                    {category.subsections.map((subsection, subIndex) => (
                      <div key={subIndex}>
                        <h4 className="font-medium text-sm text-primary mb-2">{subsection.name}</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {subsection.skills.map((skill, skillIndex) => (
                            <li key={skillIndex} className="text-muted-foreground text-sm">{skill}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="list-disc list-inside space-y-2">
                    {category.skills?.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-muted-foreground">{skill}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};