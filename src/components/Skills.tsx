import React from 'react'; 
import { 
  Search, 
  BarChart3, 
  Globe, 
  Calendar, 
  Code2, 
  Users, 
  Languages,
  Layout,
  Target,
  Lightbulb,
  Clock,
  MessageSquare,
  Brain,
  Zap,
  PenTool,
  Clapperboard,
  MousePointerClick
} from 'lucide-react';

export const Skills = () => {
  const skillCategories = [{
    icon: Search,
    title: "SEO & Content Optimization",
    skills: [
      "Keyword Research",
      "On-Page SEO",
      "Content Auditing",
      "Meta Tags Optimization",
      "Internal Linking Strategies"
    ]
  }, {
    icon: Calendar,
    title: "Content Strategy & Structure",
    skills: [
      "Website Content Structuring",
      "Search Intent Mapping",
      "Messaging Frameworks",
      "Editorial Calendars",
      "Conversion Rate Optimization (CRO)"
    ]
  }, {
    icon: PenTool,
    title: "Copywriting",
    skills: [
      "Ad Copy & Campaign Copy",
      "Landing Page Copy",
      "Product Descriptions",
      "Social Media Content",
      "Brand Communications"
    ]
  }, {
    icon: MousePointerClick,
    title: "UX Content",
    skills: [
      "Microcopy & Interface Language",
      "Landing Page Content",
      "Product Flow Content",
      "User Guidance & CTAs",
      "Content for Conversion"
    ]
  }, {
    icon: Clapperboard,
    title: "Scriptwriting",
    skills: [
      "Motion-Graphics Scripts",
      "Video Ad Scripts",
      "Storyboarding",
      "Campaign Narratives",
      "Explainer Video Scripts"
    ]
  }, {
    icon: Target,
    title: "Brand & Campaign Messaging",
    skills: [
      "Brand Tone of Voice Development",
      "Campaign Messaging",
      "Company Profiles & Brand Documents",
      "Brand Storytelling",
      "Positioning Statements"
    ]
  }, {
    icon: BarChart3,
    title: "Analytics & Reporting",
    skills: [
      "Google Analytics",
      "Google Search Console",
      "SEMrush",
      "Ahrefs"
    ]
  }, {
    icon: Globe,
    title: "CMS & Content Adaptation",
    skills: [
      "WordPress",
      "Shopify (basic)",
      "Webflow (basic)",
      "Web Content Formatting & Publishing",
      "Content Adaptation Across Digital Formats"
    ]
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
            A clear breakdown of the capabilities I bring to every content project
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isSoftSkills = category.title === "Soft Skills";
            
            return (
              <div 
                key={index} 
                className="group relative bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-6">
                  <div className="flex items-center mb-5">
                    <div className="p-2 rounded-lg bg-primary/10 mr-3">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                  </div>
                  
                  {isSoftSkills ? (
                    <div className="grid gap-3">
                      {category.skills.map((skill: any, skillIndex) => {
                        const SkillIcon = skill.icon;
                        return (
                          <div key={skillIndex} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                            <SkillIcon className="w-4 h-4 text-primary/70 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{skill.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {category.skills?.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm leading-relaxed">{typeof skill === 'string' ? skill : skill.text}</span>
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
