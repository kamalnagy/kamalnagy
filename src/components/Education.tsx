import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

export const Education = () => {
  const education = [
    {
      degree: "Master's Degree in Law",
      institution: "Mansoura University, Faculty of Law",
      period: "Sep 2019 - Oct 2021",
      location: "Egypt"
    },
    {
      degree: "Bachelor's Degree in Law (International Law, Eng. Dept.)",
      institution: "Mansoura University, Faculty of Law", 
      period: "Sep 2015 - May 2019",
      location: "Egypt"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">Education</span>
          </h2>
        </div>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-card/30 backdrop-blur-lg rounded-2xl p-8 hover:bg-card/50 transition-all duration-500 hover:scale-102 hover:shadow-2xl border border-border hover:border-accent"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gradient-start to-gradient-end rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{edu.degree}</h3>
                  <h4 className="text-xl text-primary font-semibold mb-2">{edu.institution}</h4>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
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