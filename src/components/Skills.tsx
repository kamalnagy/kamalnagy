
import React from 'react';
import { Brain, Search, PenTool, Globe, BarChart3, FileText } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      icon: Search,
      title: "SEO & Tools",
      skills: ["Keyword Research", "On-Page Optimization", "Meta Tags", "SEMrush", "Ahrefs", "Google Analytics"]
    },
    {
      icon: Globe,
      title: "Content Management",
      skills: ["WordPress", "Content Strategy", "Social Media Content Creation", "Social Media Management"]
    },
    {
      icon: BarChart3,
      title: "Analysis & Reporting",
      skills: ["Competitor Analysis", "Performance Reporting", "Research & Analytical Thinking"]
    },
    {
      icon: PenTool,
      title: "Office & Productivity",
      skills: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Time Management & Organization"]
    },
    {
      icon: Brain,
      title: "Soft Skills",
      skills: ["Adaptability & Problem-Solving", "Communication & Collaboration", "Research Skills"]
    },
    {
      icon: FileText,
      title: "Languages",
      skills: ["Arabic - Native", "English - Professional", "Legal Research & Writing"]
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-card/50 backdrop-blur-lg rounded-2xl p-8 hover:bg-card/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl group border border-border hover:border-accent"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-gradient-start to-gradient-end rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <category.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4 text-center">{category.title}</h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="text-muted-foreground text-center">
                    <span className="inline-block bg-muted/30 rounded-full px-3 py-1 text-sm hover:bg-accent/50 transition-colors duration-300 border border-border">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
