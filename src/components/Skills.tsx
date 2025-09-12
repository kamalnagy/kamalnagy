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
  return;
};