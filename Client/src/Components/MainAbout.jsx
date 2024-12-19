import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MainAbout = () => {
  const whyChooseUsData = [
    {
      title: "Get Your Advise",
      details:
        "Seeking expert advice? Our experienced attorneys at House of IP are here to help. Whether you have questions about civil, criminal, or matrimonial matters, we provide clear, practical guidance to resolve your issues efficiently. Contact us today!",
    },
    {
      title: "Work With Experts",
      details:
        "A team of seasoned experts brings extensive experience and specialized knowledge to handle civil, criminal, and matrimonial cases.",
    },
    {
      title: "Comprehensive Expertise",
      details:
        "At House of IP, we combine profound expertise with a broad range of services. Our intellectual spectrum ensures that you receive in-depth analysis and comprehensive solutions for all your needs, from civil and criminal to matrimonial matters. Experience the perfect blend of depth and breadth with us.",
    },
    {
      title: "Efficiency",
      details:
        "At House of IP, we pride ourselves on delivering efficient services. Our streamlined processes and coordinated efforts ensure timely and effective resolution of your matters, allowing you to focus on what matters most. Trust us for a seamless experience.",
    },
  ];

  return (
    <div className="bg-slate-100 p-6 lg:p-12">
      <p className="text-lg lg:text-lg font-semibold text-black">・Why Choose Us</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
        {whyChooseUsData.map((item, index) => {
          const { ref, inView } = useInView({
            triggerOnce: false, // Set to false so the animation repeats when it enters and exits
            threshold: 0.2, // The element needs to be 20% in view to trigger the animation
          });

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: inView ? 1 : 0,
                y: inView ? 0 : 50,
                transition: { duration: 0.8 },
              }}
              exit={{
                opacity: 0,
                y: 50,
                transition: { duration: 0.8 },
              }}
              className="relative p-6 bg-slate-900 rounded-md text-black shadow-md"
            >
              <h1 className="text-slate-100 text-xl lg:text-xl font-base pb-2">
                {item.title}
              </h1>
              <p className="text-white text-sm lg:text-base">{item.details}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MainAbout;
