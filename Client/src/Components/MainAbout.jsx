import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MainAbout = () => {
  const whyChooseUsData = [
    {
      title: "Get Your Advice",
      details:
        "Seeking expert advice? Our experienced attorneys at House of IP are dedicated to helping you navigate complex legal matters with confidence. Whether you are dealing with civil disputes, criminal allegations, or matrimonial issues, we offer tailored advice and actionable steps to resolve your case. We understand the stress and uncertainty that comes with legal challenges, which is why our team is committed to providing practical, clear, and results-driven guidance. With House of IP, you are never alone in your legal journey—reach out today and take the first step toward peace of mind.",
    },
    {
      title: "Work With Experts",
      details:
        "At House of IP, our team of seasoned legal experts brings decades of combined experience to the table. Each member of our team is specialized in their field, ensuring that you receive unparalleled expertise in civil law, criminal defense, and matrimonial matters. We believe that every case is unique, and our tailored approach ensures that your specific concerns are addressed with precision and care. From in-depth case analysis to rigorous representation in court, our experts work collaboratively to achieve the best possible outcomes for our clients. Trust us to provide you with the expertise and dedication you deserve.",
    },
    {
      title: "Comprehensive Expertise",
      details:
        "Legal matters are rarely one-dimensional, and that’s where House of IP truly stands out. We offer a comprehensive range of legal services that extend beyond traditional boundaries. Whether you are facing challenges in civil law, criminal cases, or matrimonial disputes, our team combines in-depth legal knowledge with strategic planning to address even the most intricate aspects of your case. By leveraging our multidisciplinary expertise, we deliver holistic solutions that not only resolve immediate issues but also secure your long-term interests. At House of IP, we redefine legal services by blending profound specialization with a broad, strategic perspective.",
    },
    {
      title: "Efficiency",
      details:
        "Time is often a critical factor in legal matters, and at House of IP, we understand the importance of swift and effective resolutions. Our commitment to efficiency is reflected in every aspect of our practice, from meticulous case preparation to prompt client communication. We utilize cutting-edge tools and streamlined processes to ensure that no time is wasted and that every action we take moves your case forward. Our coordinated approach minimizes delays and optimizes outcomes, allowing you to focus on your life while we handle the complexities of your legal issues. Experience the difference that efficiency can make with House of IP.",
    },
  ];

  return (
    <div>
      <h1 className="pb-10 text-2xl bg-white text-black text-center pt-10">
        Why Choose Us
      </h1>
      <div className="relative flex flex-row">
        {/* Image Section - Hidden on small screens */}
        <div className="hidden lg:block w-full bg-white pt-10">
          <motion.img
            src="https://st2.depositphotos.com/1007283/6930/i/450/depositphotos_69306965-stock-photo-rubber-stamp-printed-with-trademark.jpg"
            alt="leftimage"
            className="w-[55%] ml-20 h-96"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          />
        </div>

        {/* Card Section - Always visible */}
        <motion.div
          className="lg:absolute px-5 lg:top-20 lg:right-0 top-0 left-8 lg:left-2/4 bg-slate-900 bg-opacity-80 backdrop-blur-md p-4 lg:w-[40%] rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1 className="text-white text-base lg:text-3xl font-semibold">
            {whyChooseUsData[0].title}
          </h1>
          <p className="text-xs lg:text-base text-white">
            {whyChooseUsData[0].details}
          </p>
        </motion.div>
      </div>
      <div className="relative flex flex-row">
        {/* Card Section - Always visible */}
        <motion.div
          className="lg:absolute px-5 lg:top-20  top-0 left-8 lg:left-2/4 bg-slate-900 bg-opacity-80 backdrop-blur-md p-4 lg:w-[40%] rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1 className="text-white text-base lg:text-3xl font-semibold">
            {whyChooseUsData[0].title}
          </h1>
          <p className="text-xs lg:text-base text-white">
            {whyChooseUsData[0].details}
          </p>
        </motion.div>

        {/* Image Section - Hidden on small screens */}
        <div className="hidden lg:block w-full bg-white pt-10">
          <motion.img
            src="https://st2.depositphotos.com/1007283/6930/i/450/depositphotos_69306965-stock-photo-rubber-stamp-printed-with-trademark.jpg"
            alt="rightimage"
            className="w-[55%] ml-20 h-96"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
};

export default MainAbout;
