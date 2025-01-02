import React, { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://media.istockphoto.com/id/1181406993/photo/lawyer-working-in-office-law-and-justice-concept.jpg?s=612x612&w=0&k=20&c=DAb5Ive3Otp2PBtQyZl01acM-XKDvJRW0QqYXezm6UE=",
    "https://laterallink.com/wp-content/uploads/2019/11/shutterstock_391762705.jpg",
    "https://www.yarmolaw.com/wp-content/uploads/2017/03/lawyer-at-work-881x588.jpg",
  ];

  const handleClick = () => {
    window.open("https://calendly.com/houseofintellectualproperty/30min");
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 font-roboto  bg-slate-900 relative">
        {/* Content Div */}
        <div className="pt-44 lg:w-[80%] text-white">
          <h1 className="text-5xl font-semibold font-serif pl-5 lg:pl-20">
            Your Trusted <br /> IPR Agent
          </h1>
          <p className="pl-5 lg:pl-20 pt-8 font-normal">
            Welcome to <strong>House of IP</strong> —your trusted partner for expert services in
            intellectual property. We’re here to provide tailored solutions for
            individuals and businesses alike.
          </p>
          <p className="pl-5 lg:pl-20 pt-4 font-normal">
            Protect your innovations, secure your brand identity, and safeguard
            your creative works with our seamless and reliable IPR registration
            services.
          </p>
          <button
            className="ml-20 bg-green-500 p-4 rounded-full my-10 text-black font-semibold flex items-center gap-2 transition-all duration-300 group"
            onClick={handleClick}
          >
            Book an Appointment
            <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </button>
        </div>
        {/* Carousel Div */}
        <div className="hidden lg:block relative min-h-screen">
          <div className="carousel w-full h-full py-0 relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative w-full h-full flex-shrink-0"
                >
                  <img
                    src={image}
                    className="w-full h-full object-cover"
                    alt={`Carousel Slide ${index + 1}`}
                  />
                  {/* Dark Overlay */}
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
                </div>
              ))}
            </div>
            {/* Navigation Circles */}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full ${
                    currentSlide === index ? "bg-black" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
