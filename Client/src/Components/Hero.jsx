import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation once
    threshold: 0.2,    // Trigger when 20% of the image is visible
  });

  return (
    <div className="hero bg-slate-900 min-h-[60vh] sm:min-h-screen px-4 sm:px-8">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <motion.div
          ref={ref} // Hook for tracking visibility
          initial={{ opacity: 0, x: 200 }} // Starting position and opacity
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 200 }} // Animation on entering view
          transition={{ duration: 0.5 }} // Duration of the animation
        >
          <img
            src="https://justispherexlegal.com/wp-content/uploads/2024/09/Image_-_Law_Firm_Website_.jpeg.jpg"
            className="max-w-full sm:max-w-xl rounded-lg shadow-2xl"
          />
        </motion.div>

        <div className="mt-6 lg:mt-0 lg:max-w-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Your Trusted Partner in Legal Solutions
          </h1>
          <p className="py-4 sm:py-6 text-sm sm:text-base text-gray-300">
            Welcome to House of IP Legal—your trusted partner for expert legal
            services in intellectual property and matrimonial law. We’re here to
            provide tailored solutions for individuals and businesses alike.
          </p>
          <button className="btn text-black bg-yellow-500 hover:bg-yellow-200">
            Book An Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
