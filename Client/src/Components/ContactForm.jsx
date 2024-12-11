import React from "react";
import { motion } from "framer-motion";
import ScrollToTopButton from "./ScrollTop";

const ContactForm = () => {
  return (
    <div id="consult" className="py-20 md:py-28 bg-[#fcf7f0]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row">
          {/* Left Column */}
          <div className="lg:w-1/2 px-4 mb-12 lg:mb-0">
            <h3 className="text-4xl font-light text-yellow-400 mb-4">
              Free Consultation
            </h3>
            <p className="text-lg text-black mb-6">
              At HOUSE OF IP, we understand the complexities of the law and
              their potential impact on your life and business. Whether you face
              a legal challenge or seek guidance for your endeavors, our
              experienced team is here to assist you in navigating the legal
              process with clarity and expertise.
            </p>
            <ul>
              <li className="flex items-center mb-3">
                <i className="fas fa-phone text-blue-600 text-xl mr-3"></i>
                <span className="text-lg text-black">+91-99141-31579</span>
              </li>
              <li className="flex items-center mb-3">
                <i className="fas fa-envelope text-red-600 text-xl mr-3"></i>
                <span className="text-lg text-black">info@jusip.in</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-clock text-purple-700 text-xl mr-3"></i>
                <span className="text-lg text-black">
                  Mon - Sat 11.00-19.00
                </span>
              </li>
            </ul>
          </div>

          {/* Right Column (Contact Form) */}
          <motion.div
            className="lg:w-1/2 px-4"
            initial={{ opacity: 0, x: 50 }} // Initial state: hidden and moved right
            whileInView={{ opacity: 1, x: 0 }} // Animates to visible and center position
            viewport={{ once: true }} // Animation triggers once when in the viewport
            transition={{ duration: 1 }} // Transition duration for animation
          >
            <form className="space-y-6">
              <div className="space-y-4">
                <input
                  type="text"
                  name="your-name"
                  placeholder="Full Name*"
                  required
                  className="w-full px-4 py-3 border text-black bg-white placeholder:text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-[#294160] focus:ring-2 text-lg"
                />
                <input
                  type="email"
                  name="your-email"
                  placeholder="Email*"
                  required
                  className="w-full px-4 py-3 border text-black bg-white placeholder:text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#294160] text-lg"
                />
                <input
                  type="text"
                  name="your-subject"
                  placeholder="Subject*"
                  required
                  className="w-full px-4 py-3 border text-black bg-white placeholder:text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#294160] text-lg"
                />
              </div>

              <textarea
                name="your-message"
                placeholder="Message*"
                required
                rows="6"
                className="w-full px-4 py-3 border text-black bg-white placeholder:text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#294160] text-lg"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 bg-slate-900 text-white text-lg rounded-md hover:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-[#071b35]"
              >
                Submit Now
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
