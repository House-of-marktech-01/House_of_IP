import React from "react";

const TestimonialCard = () => {
  const testimonials = [
    {
      text: "This is an amazing product! It has changed my life completely.",
      author: "John Doe",
    },
    {
      text: "Highly recommend this to everyone! Fantastic experience overall.",
      author: "Jane Smith",
    },
    {
      text: "Great service and exceptional quality! Will definitely use again.",
      author: "Chris Lee",
    },
  ];

  return (
    <div className="overflow-hidden h-72 w-full bg-gray-100 flex items-center relative group">
      {/* Wrapper for smooth scrolling */}
      <div className="flex animate-scroll whitespace-nowrap group-hover:paused">
        {testimonials.map((testimonial, index) => (
          <div
            key={`duplicate-${index}`}
            className="flex-shrink-0 w-1/3 mx-4 bg-slate-900 shadow-lg p-6 rounded-md h-auto overflow-hidden"
          >
            <p className="text-base text-white italic break-words">
              "{testimonial.text}"
            </p>
            <p className="text-right text-sm font-bold text-white mt-4">
              - {testimonial.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
