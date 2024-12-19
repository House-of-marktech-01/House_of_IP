import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation once
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  const handleClick = () => {
    window.open("https://calendly.com/houseofintellectualproperty/30min");
  };

  return (
    <>
      <div className="carousel w-full pt-16">
        {/* Hero Slide */}
        <div id="slide1" className="carousel-item relative w-full">
          <div className="hero bg-slate-900 min-h-[70vh] sm:min-h-[80vh] lg:min-h-[70vh] px-4 sm:px-8">
            <div className="hero-content flex-col lg:flex-row-reverse w-full">
              <motion.div
                ref={ref} // Hook for tracking visibility
                initial={{ opacity: 0, x: 200 }} // Starting position and opacity
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 200 }} // Animation on entering view
                transition={{ duration: 0.5 }} // Duration of the animation
                className="absolute top-0 left-0 w-full h-full"
              >
              </motion.div>

              <div className="lg:max-w-lg relative z-10 text-left lg:text-center text-white w-full lg:w-1/2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold relative">
                  Protect Your Creations. Secure Your Future.
                </h1>
                <p className="py-4 sm:py-6 text-sm sm:text-base text-white">
                  Welcome to House of IP, your trusted partner in intellectual property registration. Whether you're an inventor, artist, or entrepreneur, we help you safeguard your ideas and innovations.
                </p>
              </div>

              {/* Book Appointment button on the right side */}
              <div className="lg:max-w-lg relative z-10 text-center lg:text-left mt-4 lg:mt-0 lg:absolute pb-6 bottom-0">
                <button
                  className="btn text-black bg-yellow-500 hover:bg-yellow-200"
                  onClick={handleClick}
                >
                  Book An Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
