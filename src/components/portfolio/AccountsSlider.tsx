import React, { useState, useEffect } from 'react';

const AccountsSlider = () => {
  const accounts = [
    {
      name: "Brand Design",
      logo: "/lovable-uploads/90d22a4e-228e-439e-a158-d73972a37529.png"
    },
    {
      name: "Data Solutions",
      logo: "/lovable-uploads/69e91fca-9e4f-4e60-94c0-b2e9ca71240c.png"
    },
    {
      name: "SAFA Student Services",
      logo: "/lovable-uploads/9c0d5493-1a62-465e-9b99-1fd5deb50acb.png"
    },
    {
      name: "Basenote",
      logo: "/lovable-uploads/1f6cb002-8043-49f7-9991-7039fba1310a.png"
    },
    {
      name: "HSI Healthcare Training",
      logo: "/lovable-uploads/f021c59e-8728-4435-be76-938b8b8b4296.png"
    },
    {
      name: "Synergy Solutions",
      logo: "/lovable-uploads/1506ebdc-d429-42d0-aa89-57a3f8f051f1.png"
    },
    {
      name: "Devolum",
      logo: "/lovable-uploads/6165073a-101a-4378-9df3-53022877f254.png"
    },
    {
      name: "Educational Services",
      logo: "/lovable-uploads/2bb81cf0-79f0-4210-abac-08f05a7c3472.png"
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