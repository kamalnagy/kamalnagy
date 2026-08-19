import React from 'react';

export const Clients = () => {
  const clients = [
    {
      name: "3arrafni.com",
      logo: "/lovable-uploads/6dab2819-91cb-4e5c-aa0c-3c0b6a4d6f24.png"
    },
    {
      name: "Menusbee",
      logo: "/lovable-uploads/efe16f18-e306-4748-bfde-333f019c03b0.png"
    },
    {
      name: "Android World",
      logo: "/lovable-uploads/c8892c9f-d780-4825-a3b1-b1e017d5bd62.png"
    },
    {
      name: "SafaTR",
      logo: "/lovable-uploads/62555173-b976-41ad-bed8-39ee3a82b0c5.png"
    },
    {
      name: "BaseNotesA",
      logo: "/lovable-uploads/ac78e0b4-1f75-4ea6-a2e0-076903014978.png"
    },
    {
      name: "HSI Egypt",
      logo: "/lovable-uploads/63be9809-8cd5-4624-b8f1-c57fc574a477.png"
    },
    {
      name: "Saabeel",
      logo: "/lovable-uploads/c39156a9-5748-4c37-8a35-b71e3ee96426.png"
    },
    {
      name: "Devolum",
      logo: "/lovable-uploads/1666408e-a405-44b6-ba0a-b11c493ecb73.png"
    },
    {
      name: "International Student",
      logo: "/lovable-uploads/a60fb0f5-68a1-4284-ad40-afcae8273fd0.png"
    }
  ];

  return (
    <section className="py-6 md:py-8 px-4 md:px-6 bg-muted/10">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 md:mb-3 animate-fade-in">
            <span className="bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end bg-clip-text text-transparent animate-gradient">Accounts</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto animate-fade-in animation-delay-1000 px-4">
            Trusted partnerships with leading brands and organizations across various industries
          </p>
          <div className="w-10 md:w-12 h-1 bg-gradient-to-r from-gradient-start to-gradient-end mx-auto mt-2 md:mt-3 rounded-full animate-scale-in animation-delay-2000"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 items-center justify-items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative bg-card/30 backdrop-blur-sm rounded-lg md:rounded-xl p-2 md:p-3 hover:bg-card/50 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-border hover:border-accent w-full aspect-square flex items-center justify-center overflow-hidden"
              style={{
                animationDelay: `${index * 50}ms`
              }}
            >
              {/* Subtle animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg md:rounded-xl"></div>
              
              {/* Logo container */}
              <div className="relative z-10 w-full h-full flex items-center justify-center p-1">
                <img loading="lazy" decoding="async" src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                />
              </div>
              
              {/* Hover overlay with client name */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent p-1.5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-b-lg md:rounded-b-xl">
                <p className="text-foreground text-xs font-medium text-center truncate">
                  {client.name}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Decorative elements */}
        <div className="flex justify-center mt-4 md:mt-6 space-x-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-1 h-1 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end animate-pulse`}
              style={{ animationDelay: `${i * 200}ms` }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};
