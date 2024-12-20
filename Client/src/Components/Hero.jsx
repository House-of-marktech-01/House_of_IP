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
              ></motion.div>

              <div className="lg:max-w-lg relative z-10 text-left lg:text-center text-white w-full lg:w-1/2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold relative">
                  Protect Your Creations. Secure Your Future.
                </h1>
                <p className="py-4 sm:py-6 text-sm sm:text-base text-white">
                  Welcome to House of IP, your trusted partner in intellectual
                  property registration. Whether you're an inventor, artist, or
                  entrepreneur, we help you safeguard your ideas and
                  innovations.
                </p>
              </div>

              {/* Book Appointment button on the right side */}
              <div className="lg:max-w-lg relative z-10 text-center lg:text-left mt-4 lg:mt-0 lg:absolute pb-6 bottom-0">
                <div class="flex items-center justify-center">
                  <div class="relative group">
                    <button
                      class="relative inline-block p-px font-semibold leading-6  text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                      onClick={handleClick}
                    >
                      <span class="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                      <span class="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                        <div class="relative z-10 flex items-center space-x-2">
                          <span class="transition-all duration-500 group-hover:translate-x-1">
                            Book an Appointment
                          </span>
                          <svg
                            class="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                            data-slot="icon"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              clip-rule="evenodd"
                              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                              fill-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
