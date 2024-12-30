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
      <div className="grid lg:grid-cols-2 grid-cols-1 pt-16 bg-slate-900 relative">
        {/* Content Div */}
        <div className="pt-28 lg:w-[80%] text-white">
          <h1 className="text-5xl font-semibold pl-5 lg:pl-20">
            Your Trusted <br /> IPR Agent
          </h1>
          <p className="pl-5 lg:pl-20 pt-8 font-normal">
            Welcome to House of IP —your trusted partner for expert services in
            intellectual property and matrimonial law. We’re here to provide
            tailored solutions for individuals and businesses alike.
          </p>
          <button
            className="ml-20 bg-green-500 p-4 rounded-full my-10 text-black font-semibold"
            onClick={handleClick}
          >
            Book an Appointment
          </button>
        </div>
        {/* Carousel Div */}
        <div className="hidden lg:block relative h-full">
          <div className="carousel w-full h-full py-0 relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className="w-full h-full object-cover flex-shrink-0"
                  alt={`Carousel Slide ${index + 1}`}
                />
              ))}
            </div>
            {/* Navigation Circles */}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-50">
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
