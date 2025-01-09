import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      fullName,
      email,
      phonenumber,
      subject,
      message,
    };

    try {
      await emailjs.send(
        "service_m2rqgdj", // Replace with your EmailJS service ID
        "template_nta0aib", // Replace with your EmailJS template ID
        templateParams,
        "Z17suYTec6wmDIA0q" // Replace with your EmailJS public key
      );

      toast.success("Your message has been sent successfully!");
      setFullName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send the message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="consult"
      className="pt-20 md:pt-28 bg-cover bg-center font-roboto bg-no-repeat parallax-container"
    >
      <h1 className="text-3xl font-serif text-white text-center font-semibold">
        Contact Us
      </h1>
      <div className="py-10">
        <div className="container mx-auto lg:px-4 md:px-8">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 px-4 mb-12 lg:mb-0">
              <h3 className="text-2xl lg:text-4xl font-light text-white mb-4">
                Free Consultation
              </h3>
              <p className="text-sm text-white mb-6">
                At House of Intellectual Property, we are committed to
                empowering individuals and businesses with expert guidance and
                intellectual property solutions.
              </p>
              <ul>
                <li className="flex items-center">
                  <i className="fas fa-clock text-purple-700 text-xl mr-3"></i>
                  <span className="text-sm text-white">
                    Mon - Sat 10.00 Am - 8.00 Pm
                  </span>
                </li>
              </ul>
              <div className="mt-2">
                <div className="mr-3 max-w-[300px] rounded-xl hover:scale-110 duration-700 p-5">
                  <h4 className="py-2 text-white font-bold">
                    <i className="fa-solid fa-location-dot"></i> South Delhi
                  </h4>
                  <p className="text-base leading-7 text-white font-thin space-y-4">
                    293, Lane-2, Westend Marg, Near Saket Metro Station <br />
                    Gate No. 2, Saket, New Delhi, Delhi
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              className="lg:w-1/2 lg:px-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-transparent p-5 rounded-lg"
              >
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name*"
                    required
                    value={fullName}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[0-9]/g, "");
                      setFullName(value);
                    }}
                    className="w-full px-4 py-3 border text-sm text-black bg-transparent bg-white placeholder:text-gray-900 border-gray-300 rounded-md focus:outline-none focus:ring-[#294160] focus:ring-2"
                  />
                  <input
                    type="email"
                    placeholder="Email*"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border text-black bg-transparent bg-white placeholder:text-gray-900 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#294160] text-sm"
                  />
                  <input
                    type="number"
                    placeholder="Phone number"
                    required
                    value={phonenumber}
                    onChange={(e) => setPhonenumber(e.target.value)}
                    className="w-full px-4 py-3 border text-black bg-transparent bg-white placeholder:text-gray-900 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#294160] text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Subject*"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 border text-black bg-transparent bg-white placeholder:text-gray-900 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#294160] text-sm"
                  />
                </div>
                <textarea
                  placeholder="Message*"
                  required
                  rows="6"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 border text-black bg-white bg-transparent placeholder:text-gray-900 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#294160] text-sm"
                ></textarea>

                <button
                  type="submit"
                  className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-slate-800 rounded-md group"
                  disabled={loading}
                >
                  <span className="relative flex items-center justify-center w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                    {loading ? (
                      <>
                        <span className="loading loading-spinner loading-md mr-2"></span>
                        Submitting...
                      </>
                    ) : (
                      "Submit Now"
                    )}
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
