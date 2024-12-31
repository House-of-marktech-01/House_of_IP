import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MainAbout = () => {
  const whyChooseUsData = [
    {
      title: "Get Your Advice",
      details:
        "Seeking expert advice? Our experienced attorneys at House of IP are dedicated to helping you navigate complex matters with confidence. Whether you are dealing with civil disputes, criminal allegations, or matrimonial issues, we offer tailored advice and actionable steps to resolve your case. We understand the stress and uncertainty that comes with challenges, which is why our team is committed to providing practical, clear, and results-driven guidance. With House of IP, you are never alone in your journey—reach out today and take the first step toward peace of mind.",
    },
    {
      title: "Work With Experts",
      details:
        "At House of IP, our team of seasoned experts brings decades of combined experience to the table. Each member of our team is specialized in their field, ensuring that you receive unparalleled expertise in civil law, criminal defense, and matrimonial matters. We believe that every case is unique, and our tailored approach ensures that your specific concerns are addressed with precision and care. From in-depth case analysis to rigorous representation in court, our experts work collaboratively to achieve the best possible outcomes for our clients. Trust us to provide you with the expertise and dedication you deserve.",
    },
    {
      title: "Comprehensive Expertise",
      details:
        "matters are rarely one-dimensional, and that’s where House of IP truly stands out. We offer a comprehensive range of services that extend beyond traditional boundaries. Whether you are facing challenges in civil law, criminal cases, or matrimonial disputes, our team combines in-depth knowledge with strategic planning to address even the most intricate aspects of your case. By leveraging our multidisciplinary expertise, we deliver holistic solutions that not only resolve immediate issues but also secure your long-term interests.",
    },
    {
      title: "Efficiency",
      details:
        "Time is often a critical factor in matters, and at House of IP, we understand the importance of swift and effective resolutions. Our commitment to efficiency is reflected in every aspect of our practice, from meticulous case preparation to prompt client communication. We utilize cutting-edge tools and streamlined processes to ensure that no time is wasted and that every action we take moves your case forward. Our coordinated approach minimizes delays and optimizes outcomes, allowing you to focus on your life while we handle the complexities of your  issues. Experience the difference that efficiency can make with House of IP.",
    },
  ];

  return (
    <div className="bg-slate-900">
      <h1 className="pb-10 font-serif text-white text-center text-4xl pt-10">
        Why Choose Us
      </h1>

      {/* First Section */}
      <div className="relative flex flex-row">
        {/* Image Section */}
        <div className="hidden lg:block w-full bg-slate-900 pt-10">
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

        {/* Card Section */}
        <motion.div
          className="lg:absolute px-5 lg:top-20 lg:right-0 top-0 left-8 lg:left-2/4 bg-slate-900 bg-opacity-80 backdrop-blur-md p-4 lg:w-[40%] rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1 className="text-white font-sans text-base lg:text-3xl font-semibold">
            {whyChooseUsData[0].title}
          </h1>
          <p className="text-xs lg:text-base text-white">
            {whyChooseUsData[0].details}
          </p>
        </motion.div>
      </div>

      {/* Second Section */}
      <div className="relative flex flex-row-reverse bg-slate-900 lg:pt-20">
        {/* Content Section */}
        <motion.div
          className="lg:absolute lg:top-28 lg:left-20 z-10 lg:rounded-xl bg-slate-900 lg:bg-opacity-80 backdrop-blur-md p-6 lg:w-[45%]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1 className="text-white text-base font-sans lg:text-3xl font-semibold">
            {whyChooseUsData[1].title}
          </h1>
          <p className="text-xs lg:text-base text-white">
            {whyChooseUsData[1].details}
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="hidden lg:block w-[70%] left-7"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            src="https://media.istockphoto.com/id/956243400/photo/close-up-lawyer-businessman-working-or-reading-lawbook-in-office-workplace-for-consultant.jpg?s=612x612&w=0&k=20&c=4kefBJNk1H0Y3hDUU_MmAEkqcJavLPlB6IhVB5C7UVk="
            alt=""
            className="w-[70%] h-96 lg:relative left-40"
          />
        </motion.div>
      </div>
      {/* third section */}
      <div className="relative flex flex-row">
        {/* Image Section */}
        <div className="hidden lg:block w-full bg-slate-900 pt-10">
          <motion.img
            src="https://media.istockphoto.com/id/1068876946/photo/business-lawyer-team-working-together-of-lawyer-in-the-meeting.jpg?s=612x612&w=0&k=20&c=Jo9c5iPYi_62JLKqGeDXSDVONTu6rmRI9HVh7fSMD6Q="
            alt="leftimage"
            className="w-[55%] ml-20 h-96"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          />
        </div>

        {/* Card Section */}
        <motion.div
          className="lg:absolute px-5 lg:top-20 lg:right-0 top-0 left-8 lg:left-2/4 bg-slate-900 bg-opacity-80 backdrop-blur-md p-4 lg:w-[40%] rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1 className="text-white font-sans text-base lg:text-3xl font-semibold">
            {whyChooseUsData[2].title}
          </h1>
          <p className="text-xs lg:text-base text-white">
            {whyChooseUsData[2].details}
          </p>
        </motion.div>
      </div>

      {/* forth section */}

      <div className="relative flex flex-row-reverse bg-slate-900 lg:pt-20">
        {/* Content Section */}
        <motion.div
          className="lg:absolute lg:top-28 lg:left-20 z-10 lg:rounded-xl bg-slate-900 shadow-lg lg:bg-opacity-80 backdrop-blur-md p-6 lg:w-[45%]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1 className="text-white font-sans text-base lg:text-3xl font-semibold">
            {whyChooseUsData[3].title}
          </h1>
          <p className="text-xs lg:text-base text-white">
            {whyChooseUsData[3].details}
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="hidden lg:block w-[70%] left-7"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            src="https://media.istockphoto.com/id/104821087/photo/lawyer-holding-document-and-speaking-to-jury-in-courtroom.jpg?s=612x612&w=0&k=20&c=Ekxjvff0AQtL_e78WtO0e43FOVcM9SZ0hYKY3WjwgLY="
            alt=""
            className="w-[70%] h-96 lg:relative left-40"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default MainAbout;
