import React from "react";

const TestimonialCard = () => {
  const testimonials = [
    {
      text: "House of IP has been an absolute game-changer for me. Their consultation services are unmatched—professional, thorough, and incredibly insightful. What truly sets them apart is the personal guidance offered by their partners. I had the privilege of working directly with them, and their hands-on approach made all the difference. They didn’t just treat my case like any other; they understood its unique aspects and walked me through every step. I couldn’t recommend them enough!.",
      author: "Shidharth Ganguly(CEO – ByProduct Ventures)",
    },
    {
      text: "From the first consultation, I knew I was in the right hands with JustiSphereXLegal. Their team is not only knowledgeable but also genuinely invested in the success of their clients. The Partners, in particular, were outstanding—they provided personal guidance and helped me navigate complex legal issues with clarity and confidence. Their attention to detail and commitment to delivering the best possible outcome really sets this firm apart. Highly recommended!",
      author: "Avinash Pandey (Director – LyfLyne India HealthTech)",
    },
    {
      text: "The legal services at House of IP are exceptional. They go above and beyond, ensuring every aspect of your case is carefully considered. I was particularly impressed with the personal involvement of the firm’s partners. They offered me direct advice and guidance, making the entire process much smoother and less stressful. Their expertise is evident, but what truly impressed me was their dedication to my individual needs. I can confidently say that their legal service is the best I’ve experienced.",
      author: "Rakesh Kumar (Owner – Ganapati Jewellers)",
    },
    {
      text: "I can’t speak highly enough about House of IP. From the consultation to the resolution of my case, they were with me every step of the way. The firm’s partners personally guided me through some of the most complex legal matters, offering clear, actionable advice. Their legal services are truly top-tier, combining deep knowledge with a personal touch that you rarely find elsewhere. If you’re looking for a firm that delivers outstanding results with personal attention, this is the one.",
      author: "Rohan Singh (Owner – Rohan Industries)",
    },
  ];

  return (
    <div className="bg-white">
      <h1 className="text-2xl text-center pb-7 text-slate-900 lg:font-bold">Lets here what our clients say</h1>
      <div className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-2 lg:px-20 pb-5">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-slate-900 p-6 rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <p className=" text-white text-xs italic mb-4">
              "{testimonial.text}"
            </p>
            <p className="text-right font-bold text-xs text-white">
              - {testimonial.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
