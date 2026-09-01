import React from 'react';
import { Mail, Linkedin, ExternalLink, MessageCircle, FileDown } from 'lucide-react';
import cvAsset from '@/assets/CV_Kamal_Nagy_2026.pdf.asset.json';

export const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-20 px-4 md:px-6 bg-muted/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Let's <span className="bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
             Have a role, project, or brand that could use right content? Let’s connect
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto px-2">
          <div className="bg-card/50 backdrop-blur-lg rounded-2xl md:rounded-3xl p-4 md:p-12 hover:bg-card/70 transition-all duration-500 border border-border">
            <div className="grid md:grid-cols-2 gap-6 md:gap-12">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6 md:mb-8">Get In Touch</h3>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-gradient-start to-gradient-middle rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 md:w-6 md:h-6 text-background" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-muted-foreground text-xs md:text-sm">Email</p>
                      <a href="mailto:Kamalnagy97@gmail.com" className="text-foreground hover:text-primary transition-colors text-sm md:text-base break-all">
                        Kamalnagy97@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-gradient-start to-gradient-middle rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-background" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-muted-foreground text-xs md:text-sm">WhatsApp</p>
                      <a
                        href="https://wa.me/201554044072"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors flex items-center space-x-1 text-sm md:text-base"
                      >
                        <span>+201554044072</span>
                        <ExternalLink className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-gradient-start to-gradient-middle rounded-full flex items-center justify-center flex-shrink-0">
                      <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-background" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-muted-foreground text-xs md:text-sm">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/kamalnagy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Kamal Nagy's LinkedIn profile (opens in new tab)"
                        className="text-foreground hover:text-primary transition-colors flex items-center space-x-1 text-sm md:text-base"
                      >
                        <span className="break-all">kamal-nagy</span>
                        <ExternalLink className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-gradient-start to-gradient-middle rounded-full flex items-center justify-center flex-shrink-0">
                      <FileDown className="w-5 h-5 md:w-6 md:h-6 text-background" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-muted-foreground text-xs md:text-sm">Download CV</p>
                      <a
                        href={cvAsset.url}
                        download="CV_Kamal_Nagy_2026.pdf"
                        className="text-foreground hover:text-primary transition-colors flex items-center space-x-1 text-sm md:text-base"
                      >
                        <span>Get my CV</span>
                        <ExternalLink className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted/20 rounded-xl md:rounded-2xl p-4 md:p-8 border border-border">
                <h4 className="text-lg md:text-xl font-semibold text-foreground mb-4 md:mb-6">What I Offer</h4>
                <ul className="space-y-3 md:space-y-4 text-muted-foreground">
                  <li className="flex items-start space-x-2 md:space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-gradient-start to-gradient-middle rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                    <span className="text-sm md:text-base">SEO & Web Content Writing</span>
                  </li>
                  <li className="flex items-start space-x-2 md:space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-gradient-start to-gradient-middle rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                    <span className="text-sm md:text-base">Content Strategy & Website Structure</span>
                  </li>
                  <li className="flex items-start space-x-2 md:space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-gradient-start to-gradient-middle rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                    <span className="text-sm md:text-base">E-commerce & Conversion Copy</span>
                  </li>
                  <li className="flex items-start space-x-2 md:space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-gradient-start to-gradient-middle rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                    <span className="text-sm md:text-base">Scriptwriting & Brand Messaging</span>
                  </li>
                  <li className="flex items-start space-x-2 md:space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-gradient-start to-gradient-middle rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                    <span className="text-sm md:text-base">Research-Driven Bilingual Content</span>
                  </li>
                  <li className="flex items-start space-x-2 md:space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-gradient-start to-gradient-middle rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                    <span className="text-sm md:text-base">Social Media & Campaign Copywriting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8 md:mt-12 px-4">
          <p className="text-muted-foreground text-sm md:text-base">
            © 2024 Kamal Nagy. Crafted with passion for great content.
          </p>
        </div>
      </div>
    </section>
  );
};
