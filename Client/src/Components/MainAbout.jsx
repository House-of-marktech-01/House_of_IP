import React, { useState } from "react";

const MainAbout = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const whyChooseUsData = [
    {
      title: "Get Your  Advise",
      details:
        "Seeking expert  advice? Our experienced attorneys at House of IP are here to help. Whether you have questions about civil, criminal, or matrimonial matters, we provide clear, practical guidance to resolve your  issues efficiently. Contact us today!",
    },
    {
      title: "Work With Experts",
      details:
        "A team of seasoned  experts bring extensive experience and specialized knowledge to handle civil, criminal, and matrimonial cases.",
    },
    {
      title: "Comprehensive Expertise",
      details:
        "At House of IP, we combine profound expertise with a broad range of  services. Our intellectual spectrum ensures that you receive in-depth analysis and comprehensive solutions for all your  needs, from civil and criminal to matrimonial matters. Experience the perfect blend of depth and breadth with us.",
    },
    {
      title: "Efficiency",
      details:
        "At House of IP, we pride ourselves on delivering efficient  services. Our streamlined processes and coordinated efforts ensure timely and effective resolution of your  matters, allowing you to focus on what matters most. Trust us for a seamless  experience.",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-slate-100 p-6 lg:p-12">
      <p className="text-lg lg:text-lg font-semibold text-black">
        ・Why Choose Us
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {whyChooseUsData.map((item, index) => (
          <div
            key={index}
            className="relative p-6 bg-slate-900 rounded-md text-black shadow-md"
          >
            <h1 className="text-slate-100 text-xl lg:text-xl font-base pb-2">
              {item.title}
            </h1>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleToggle(index);
              }}
              className="text-blue-500 text-sm lg:text-base hover:underline cursor-pointer"
            >
              Details
            </a>
            {activeIndex === index && (
              <div
                className="absolute top-full left-0 mt-2 w-full bg-slate-900 text-white shadow-lg p-4 rounded-md border text-sm lg:text-base z-10"
                style={{
                  animation: "fadeIn 0.3s ease-in-out",
                }}
              >
                {item.details}
              </div>
            )}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default MainAbout;
