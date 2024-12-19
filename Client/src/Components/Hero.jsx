import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation once
    threshold: 0.2, // Trigger when 20% of the image is visible
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
                <img
                  src="https://t3.ftcdn.net/jpg/01/07/15/58/360_F_107155820_NCUA4CtCkIDXXHnKAlWVzUvRjfMe0k5D.jpg"
                  className="object-cover w-full h-full rounded-lg shadow-2xl"
                  alt=" Consultation"
                />
              </motion.div>

              <div className="lg:max-w-lg relative z-10 text-center text-slate-900">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold relative ">
                  Your Trusted Partner in  Solutions
                </h1>
                <p className="py-4 sm:py-6 text-sm sm:text-base text-slate-900">
                  Welcome to House of IP —your trusted partner for expert
                   services in intellectual property and matrimonial law.
                  We’re here to provide tailored solutions for individuals and
                  businesses alike.
                </p>
                <button
                  className="btn text-black bg-yellow-500 hover:bg-yellow-200"
                  onClick={handleClick}
                >
                  Book An Appointment
                </button>
              </div>
            </div>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 2 - Video Player */}
        <div id="slide2" className="carousel-item relative w-full">
          <div className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[70vh]">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              controls
            >
              <source
                src="https://www.w3schools.com/html/movie.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
