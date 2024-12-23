import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import BaseUrl from "../../BaseUrl";

const ContactForm = () => {
  // State to store form values
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // Set loading state

    // Create the request body
    const requestBody = {
      fullName,
      email,
      subject,
      message,
    };

    try {
      const response = await fetch(
        `${BaseUrl}api/users/send-mail`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setResponseMessage("Your message has been sent successfully!");
        toast.success("Your message has been sent successfully!")
      } else {
        setResponseMessage(
          data.message || "Something went wrong, please try again."
        );
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setResponseMessage("Failed to send the message. Please try again later.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div
      id="consult"
      className="py-20 md:py-28 bg-cover bg-center bg-no-repeat bg-gray-200"
    >
      <h1 className="text-3xl text-black text-center font-semibold">
        Contact Us
      </h1>
      <div className="py-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row">
            {/* Left Column */}
            <div className="lg:w-1/2 px-4 mb-12 lg:mb-0">
              <h3 className="text-4xl font-light text-black mb-4">
                Free Consultation
              </h3>
              <p className="text-sm text-black mb-6">
                At House of Intellectual Property, we are committed to
                empowering individuals and businesses with expert guidance and
                intellectual property solutions. Whether you're looking to
                protect your innovations, resolve disputes, or need strategic
                advice, our experienced team is here to assist you every step of
                the way.
              </p>
              <ul>
                <li className="flex items-center mb-3">
                  <i className="fas fa-phone text-blue-600 text-xl mr-3"></i>
                  <span className="text-sm text-black">+91-99141-31579</span>
                </li>
                <li className="flex items-center mb-3">
                  <i className="fas fa-envelope text-red-600 text-xl mr-3"></i>
                  <span className="text-sm text-black">
                    houseofintellectualproperty@gmail.com
                  </span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-clock text-purple-700 text-xl mr-3"></i>
                  <span className="text-sm text-black">
                    Mon - Sat 11.00-19.00
                  </span>
                </li>
              </ul>
              <div className="mt-2">
                <div className="mr-3 max-w-[300px] rounded-xl hover:scale-110 duration-700 p-5">
                  <h4 className="py-2 text-slate-900 font-bold">
                    <i className="fa-solid fa-location-dot"></i> Uttar Pradesh
                  </h4>
                  <p className="text-base leading-7 text-slate-900 font-thin space-y-4">
                    Rajrooppur, Prayagraj, Uttar Pradesh - 211011
                  </p>
                </div>
                <div className="mr-3 max-w-[300px] rounded-xl hover:scale-110 duration-700 p-5">
                  <h4 className="py-2 text-slate-900 font-bold">
                    <i className="fa-solid fa-location-dot"></i> South Delhi
                  </h4>
                  <p className="text-base leading-7 text-slate-900 font-thin space-y-4">
                    Malviya Nagar, South Delhi - 110017
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column (Contact Form) */}
            <motion.div
              className="lg:w-1/2 px-4"
              initial={{ opacity: 0, y: 50 }} // Initial state: hidden and moved down
              whileInView={{ opacity: 1, y: 0 }} // Animates to visible and center position
              viewport={{ once: true }} // Animation triggers once when in the viewport
              transition={{ duration: 1 }} // Transition duration for animation
            >
              <form
                onSubmit={handleSubmit} // Handle form submission
                className="space-y-6 bg-white p-5 rounded-lg shadow-lg"
              >
                <div className="space-y-4">
                  <input
                    type="text"
                    name="your-name"
                    placeholder="Full Name*"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 border text-sm text-black bg-transparent bg-white placeholder:text-gray-900 border-gray-300 rounded-md focus:outline-none focus:ring-[#294160] focus:ring-2 "
                  />
                  <input
                    type="email"
                    name="your-email"
                    placeholder="Email*"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border text-black bg-transparent bg-white placeholder:text-gray-900 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#294160] text-sm"
                  />
                  <input
                    type="text"
                    name="your-subject"
                    placeholder="Subject*"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 border text-black bg-transparent bg-white placeholder:text-gray-900 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#294160] text-sm"
                  />
                </div>

                <textarea
                  name="your-message"
                  placeholder="Message*"
                  required
                  rows="6"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 border text-black bg-white bg-transparent placeholder:text-gray-900 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#294160] text-sm"
                ></textarea>

                <button
                  type="submit"
                  className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-slate-700 rounded-md group"
                  disabled={loading}
                >
                  <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-slate-900 rounded group-hover:-mr-4 group-hover:-mt-4">
                    <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                  </span>
                  <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-slate-900 rounded group-hover:-ml-4 group-hover:-mb-4">
                    <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-slate-800 rounded-md group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                    {loading ? "Submitting..." : "Submit Now"}
                  </span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
