import React, { useState, useEffect } from 'react';

const AccountsSlider = () => {
  const accounts = [
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

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % accounts.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [accounts.length]);

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="text-center px-4">
        <h3 className="text-xl md:text-3xl font-bold text-foreground mb-2 md:mb-4">
          Accounts
        </h3>
        <p className="text-muted-foreground text-sm md:text-lg">
          Accounts I've Worked on Diverse Content Creation Across Blogs & social media
        </p>
      </div>
      
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-white shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105">
          <img
            src={accounts[currentIndex].logo}
            alt={accounts[currentIndex].name}
            className="w-full h-full object-contain p-4"
          />
        </div>
      </div>
      
      <div className="flex justify-center">
        <p className="text-lg font-semibold text-foreground">
          {accounts[currentIndex].name}
        </p>
      </div>
      
      <div className="flex justify-center gap-2">
        {accounts.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AccountsSlider;