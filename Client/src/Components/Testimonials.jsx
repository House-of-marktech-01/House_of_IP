import React, { useState } from "react";
import { motion } from "framer-motion";

const TestimonialCard = () => {
  const testimonials = [
    {
      text: "House of IP has been an absolute game-changer for me. Their consultation services are unmatched—professional, thorough, and incredibly insightful. What truly sets them apart is the personal guidance offered by their partners. I had the privilege of working directly with them, and their hands-on approach made all the difference. They didn’t just treat my case like any other; they understood its unique aspects and walked me through every step. I couldn’t recommend them enough!.",
      author: "Shidharth Ganguly(CEO – ByProduct Ventures)",
    },
    {
      text: "From the first consultation, I knew I was in the right hands with House of IP. Their team is not only knowledgeable but also genuinely invested in the success of their clients. The Partners, in particular, were outstanding—they provided personal guidance and helped me navigate complex  issues with clarity and confidence. Their attention to detail and commitment to delivering the best possible outcome really sets this firm apart. Highly recommended!",
      author: "Avinash Pandey (Director – LyfLyne India HealthTech)",
    },
    {
      text: "The  services at House of IP are exceptional. They go above and beyond, ensuring every aspect of your case is carefully considered. I was particularly impressed with the personal involvement of the firm’s partners. They offered me direct advice and guidance, making the entire process much smoother and less stressful. Their expertise is evident, but what truly impressed me was their dedication to my individual needs. I can confidently say that their  service is the best I’ve experienced.",
      author: "Rakesh Kumar (Owner – Ganapati Jewellers)",
    },
    {
      text: "I can’t speak highly enough about House of IP. From the consultation to the resolution of my case, they were with me every step of the way. The firm’s partners personally guided me through some of the most complex  matters, offering clear, actionable advice. Their  services are truly top-tier, combining deep knowledge with a personal touch that you rarely find elsewhere. If you’re looking for a firm that delivers outstanding results with personal attention, this is the one.",
      author: "Rohan Singh (Owner – Rohan Industries)",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  // Handle navigation
  const handleNext = () => {
    if (!isSliding) {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setIsSliding(false);
      }, 300); // Match the transition duration
    }
  };

  const handlePrev = () => {
    if (!isSliding) {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentIndex(
          (prevIndex) =>
            (prevIndex - 1 + testimonials.length) % testimonials.length
        );
        setIsSliding(false);
      }, 300); // Match the transition duration
    }
  };

  return (
    <>
      <div className="hidden lg:flex flex-col items-center bg-slate-100 justify-center px-4 py-10">
        {/* Heading */}
        <h2 className="text-2xl font-semibold font-playfair underline text-blue-900 text-center">
          What our clients have to say
        </h2>

        {/* Swiper Container */}
        <div className="relative flex items-center text-center justify-center w-full max-w-4xl mt-8 overflow-hidden">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-2 text-blue-900 text-5xl font-bold hover:text-blue-700 z-10"
          >
            &#8249;
          </button>

          {/* Sliding Wrapper */}
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-6 py-4 bg-white border rounded-lg shadow-lg text-center sm:text-left"
                style={{
                  marginLeft: index === 0 ? "16px" : 0, // Add space before the first card
                  marginRight: index === testimonials.length - 1 ? "16px" : 0, // Add space after the last card
                }}
              >
                <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="mt-4 flex flex-row justify-between">
                  <p className="font-semibold text-blue-800 font-cabin">
                    - {testimonial.author}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-2 text-blue-900 text-5xl font-bold hover:text-blue-700 z-10"
          >
            &#8250;
          </button>
        </div>
      </div>
      <div className="lg:hidden bg-white">
        <h1 className="text-2xl text-center pb-7 text-slate-900 lg:font-bold">
          Lets here what our clients say
        </h1>

        <div className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-2 lg:px-20 pb-5">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-slate-900 p-6 rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }} // Initial state
              whileInView={{ opacity: 1, y: 0 }} // Animate when in view
              viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% of the element is visible
              transition={{ duration: 0.6, delay: index * 0.2 }} // Add stagger effect
            >
              <p className=" text-white text-xs italic mb-4">
                "{testimonial.text}"
              </p>
              <p className="text-right font-bold text-xs text-white">
                - {testimonial.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
