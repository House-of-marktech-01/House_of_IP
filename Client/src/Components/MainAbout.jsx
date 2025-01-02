import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MainAbout = () => {
  const whyChooseUsData = [
    {
      title: "Expert IPR Guidance",
      details:
        "Navigating the complexities of Intellectual Property Rights (IPR) can be challenging, but House of IP makes it seamless. Our team of certified experts and registered agents specializes in guiding individuals and businesses through every step of the IPR registration process. From trademark applications to copyright protections and patent filings, we provide precise, reliable advice tailored to your specific needs. Trust us to safeguard your intellectual assets with professionalism and efficiency.",
    },
    {
      title: "Work With Certified Professionals",
      details:
        "At House of IP, our dedication to excellence is reflected in our team of highly skilled professionals. Each member is extensively trained and certified in IPR processes, ensuring you receive unparalleled expertise. Whether you are a startup, an established business, or an individual creator, we offer a meticulous approach to protect your intellectual property. With a focus on accuracy and compliance, we are committed to delivering results that exceed expectations.",
    },
    {
      title: "Comprehensive IPR Solutions",
      details:
        "Intellectual property protection requires a multidimensional approach, and House of IP excels at providing holistic solutions. From identifying the right type of registration to handling the paperwork and follow-ups, we cover all aspects of IPR services. Our comprehensive approach ensures that your creations, innovations, and brand identities are secure, empowering you to focus on growth while we manage the details.",
    },
    {
      title: "Efficiency and Reliability",
      details:
        "Time is of the essence when it comes to intellectual property registration, and House of IP is committed to delivering swift and effective services. Utilizing advanced tools and streamlined workflows, we minimize delays and ensure a hassle-free process. Our reliable team stays with you at every step, providing timely updates and addressing any concerns promptly. Experience a stress-free journey to IPR protection with our efficient and dependable services.",
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
