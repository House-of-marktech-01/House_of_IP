import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MainAbout = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0, rootMargin: "-100px 0px" });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <>
      {/* About Us Section */}
      <div className="flex bg-white flex-row items-start justify-between space-x-6 p-12">
        <div className="w-1/2">
          <p className="text-lg font-semibold text-black">・About Us</p>
          <motion.h1
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={textVariants}
            className="font-bold text-4xl pt-16 text-yellow-400"
          >
            Your trusted partner in legal solutions.
          </motion.h1>
        </div>
        <div className="w-1/2">
          <p className="text-black text-justify pt-24 text-xl">
            At House of IP Legal, we provide comprehensive legal services to
            individuals and businesses alike. Our expertise spans across
            intellectual property, civil, criminal, and matrimonial law,
            ensuring that you receive the best legal assistance tailored to your
            needs.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white p-12">
        <p className="text-lg font-semibold text-black">・Why Choose Us</p>
        <div className="grid grid-cols-2 gap-6 mt-6">
          {[
            "Get Your Legal Advise",
            "Work With Experts",
            "Comprehensive Expertise",
            "Efficiency",
          ].map((title, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={textVariants}
              className="p-6 bg-gray-100 rounded-md text-black"
            >
              <h1 className="text-yellow-400 text-2xl font-bold pb-4">
                {title}
              </h1>
              <p>
                {title === "Get Your Legal Advise" &&
                  "Seeking expert legal advice? Our experienced attorneys at Justispherex Legal are here to help. Whether you have questions about civil, criminal, or matrimonial matters, we provide clear, practical guidance to resolve your legal issues efficiently. Contact us today!"}
                {title === "Work With Experts" &&
                  "A team of seasoned legal experts bring extensive experience and specialized knowledge to handle civil, criminal, and matrimonial cases."}
                {title === "Comprehensive Expertise" &&
                  "At Justispherex Legal, we combine profound expertise with a broad range of legal services. Our intellectual spectrum ensures that you receive in-depth analysis and comprehensive solutions for all your legal needs, from civil and criminal to matrimonial matters. Experience the perfect blend of depth and breadth with us."}
                {title === "Efficiency" &&
                  "At Justispherex Legal, we pride ourselves on delivering efficient legal services. Our streamlined processes and coordinated efforts ensure timely and effective resolution of your legal matters, allowing you to focus on what matters most. Trust us for a seamless legal experience."}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainAbout;
