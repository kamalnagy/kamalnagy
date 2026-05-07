import React from 'react';
import { 
  Search, 
  BarChart3, 
  Globe, 
  Calendar, 
  Code2, 
  Users, 
  Languages,
  TrendingUp,
  Layout,
  Target,
  Lightbulb,
  Clock,
  MessageSquare,
  Brain,
  Zap
} from 'lucide-react';

export const Skills = () => {
  const skillCategories = [{
    icon: Code2,
    title: "Technical Skills",
    subsections: [{
      name: "SEO & Content Optimization",
      icon: Search,
      skills: ["Keyword Research", "On-Page SEO", "Content Auditing", "Meta Tags Optimization", "Internal Linking Strategies"]
    }, {
      name: "Content Strategy & Structure",
      icon: Calendar,
      skills: ["Website Content Structuring", "Search Intent Mapping", "Messaging Frameworks", "Editorial Calendars", "Conversion Rate Optimization (CRO)"]
    }, {
      name: "Brand & Campaign Messaging",
      icon: Target,
      skills: ["Brand Tone of Voice Development", "Campaign Messaging", "Ad & Video Scriptwriting", "Company Profiles & Brand Documents"]
    }, {
      name: "Analytics & Reporting",
      icon: BarChart3,
      skills: ["Google Analytics", "Google Search Console", "SEMrush", "Ahrefs"]
    }, {
      name: "Content Management Systems",
      icon: Globe,
      skills: ["WordPress", "Shopify (basic)", "Webflow (basic)"]
    }, {
      name: "Content Formatting & Adaptation",
      icon: Layout,
      skills: ["Web Content Formatting & Publishing", "Content Adaptation Across Digital Formats"]
    }]
  }, {
    icon: Users,
    title: "Soft Skills",
    skills: [
      { text: "Adaptability & Problem-Solving", icon: Zap },
      { text: "Time Management & Organization", icon: Clock },
      { text: "Research & Analytical Thinking", icon: Brain },
      { text: "Communication & Collaboration Skills", icon: MessageSquare },
      { text: "Creativity in Content Ideation", icon: Lightbulb }
    ]
  }, {
    icon: Languages,
    title: "Languages",
    skills: ["Arabic: Native", "English: Professional"]
  }];
  
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            My Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index} 
                className={`group relative bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl ${
                  category.title === "Technical Skills" ? "lg:col-span-2 md:col-span-2" : ""
                }`}
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-2 rounded-lg bg-primary/10 mr-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">{category.title}</h3>
                  </div>
                  
                  {category.subsections ? (
                    <div className="grid md:grid-cols-2 gap-6">
                      {category.subsections.map((subsection, subIndex) => {
                        const SubIcon = subsection.icon;
                        return (
                          <div key={subIndex} className="space-y-3">
                            <div className="flex items-center gap-2 mb-3">
                              <SubIcon className="w-4 h-4 text-primary/70" />
                              <h4 className="font-semibold text-sm text-foreground/90">{subsection.name}</h4>
                            </div>
                            <div className="space-y-2">
                              {subsection.skills.map((skill, skillIndex) => (
                                <div key={skillIndex} className="flex items-start">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 mr-2 flex-shrink-0" />
                                  <span className="text-muted-foreground text-sm leading-relaxed">{skill}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : category.title === "Soft Skills" && Array.isArray(category.skills) && typeof category.skills[0] === 'object' ? (
                    <div className="grid gap-4">
                      {category.skills.map((skill: any, skillIndex) => {
                        const SkillIcon = skill.icon;
                        return (
                          <div key={skillIndex} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                            <SkillIcon className="w-5 h-5 text-primary/70 flex-shrink-0" />
                            <span className="text-muted-foreground">{skill.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {category.skills?.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary/50" />
                          <span className="text-muted-foreground">{typeof skill === 'string' ? skill : skill.text}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};