import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MainAbout = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
    rootMargin: "-100px 0px",
  });
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
      <div className="flex flex-col lg:flex-row bg-white items-start justify-between lg:space-x-6 p-6 lg:p-12"></div>

      {/* Why Choose Us Section */}
      <div className="bg-white p-6 lg:p-12">
        <p className="text-sm lg:text-lg font-semibold text-black">
          ・Why Choose Us
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
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
              <h1 className="text-yellow-400 text-xl lg:text-2xl font-bold pb-4">
                {title}
              </h1>
              <p className="text-sm lg:text-base">
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

      {/* New Section with Image, Text, and Button */}
      <div
        className="relative bg-cover bg-center h-96 rounded-lg overflow-hidden"
        style={{
          backgroundImage:
            "url(https://media.istockphoto.com/id/1330020430/photo/image-lawyer-businessman-sitting-at-the-office-with-a-woman-customer-explaining-the-agreement.jpg?s=612x612&w=0&k=20&c=sQs018kCsBMAdX82LcG3vKAh559b1J9caMDSLpCpFrA=)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-white text-2xl lg:text-4xl font-bold mb-4">
            Consult Our Help Today
          </h1>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold text-sm lg:text-base hover:bg-yellow-500">
            Contact
          </button>
        </div>
      </div>
    </>
  );
};

export default MainAbout;
