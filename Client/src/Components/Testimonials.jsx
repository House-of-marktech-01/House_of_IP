import React, { useEffect, useState } from "react";
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

  useEffect(()=>{
    const timer = setInterval(()=>{
      handleNext();
    },6000);
    return ()=> clearInterval(timer);
  },[currentIndex]);
  return (
    <div className="bg-slate-900">
  {/* Carousel for Larger Screens */}
  <div className="hidden lg:flex mx-auto relative items-center text-center justify-center w-full max-w-6xl py-10 lg:mt-0 overflow-hidden">
    {/* Left Arrow */}
    <button
      onClick={handlePrev}
      className="absolute left-4 text-white text-5xl font-bold hover:text-gray-300 z-10"
      aria-label="Previous"
    >
      &#8249; {/* Left Arrow Symbol */}
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
          className="w-full flex-shrink-0 px-8 py-6 bg-slate-800 border rounded-lg shadow-lg"
        >
          <p className="text-white text-base sm:text-lg leading-relaxed">
            {testimonial.text}
          </p>
          <div className="mt-4">
            <p className="font-semibold text-white font-cabin">
              - {testimonial.author}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Right Arrow */}
    <button
      onClick={handleNext}
      className="absolute right-4 text-white text-5xl font-bold hover:text-gray-300 z-10"
      aria-label="Next"
    >
      &#8250; {/* Right Arrow Symbol */}
    </button>
  </div>

  {/* Grid for Mobile Devices */}
  <div className="lg:hidden grid grid-cols-1 gap-4 p-4">
    {testimonials.map((testimonial, index) => (
      <div
        key={index}
        className="bg-slate-800 p-6 rounded-md shadow-lg"
      >
        <p className="text-white text-sm sm:text-base italic leading-relaxed mb-4">
          "{testimonial.text}"
        </p>
        <p className="font-semibold text-white font-cabin text-right">
          - {testimonial.author}
        </p>
      </div>
    ))}
  </div>
</div>

  );
};

export default TestimonialCard;
