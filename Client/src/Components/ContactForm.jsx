import React, { useState } from "react";
import { motion } from "framer-motion";

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
      const response = await fetch("http://localhost:5000/api/users/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage("Your message has been sent successfully!");
        alert(responseMessage)
      } else {
        setResponseMessage(data.message || "Something went wrong, please try again.");
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
      className="py-20 md:py-28 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://media.istockphoto.com/id/1330020430/photo/image-lawyer-businessman-sitting-at-the-office-with-a-woman-customer-explaining-the-agreement.jpg?s=612x612&w=0&k=20&c=sQs018kCsBMAdX82LcG3vKAh559b1J9caMDSLpCpFrA=)",
      }}
    >
      <div className="py-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row">
            {/* Left Column */}
            <div className="lg:w-1/2 px-4 mb-12 lg:mb-0">
              <h3 className="text-4xl font-light text-yellow-400 mb-4">
                Free Consultation
              </h3>
              <p className="text-md text-white mb-6">
                At HOUSE OF IP, we understand the complexities of the law and
                their potential impact on your life and business. Whether you
                face a legal challenge or seek guidance for your endeavors, our
                experienced team is here to assist you in navigating the legal
                process with clarity and expertise.
              </p>
              <ul>
                <li className="flex items-center mb-3">
                  <i className="fas fa-phone text-blue-600 text-xl mr-3"></i>
                  <span className="text-lg text-white">+91-99141-31579</span>
                </li>
                <li className="flex items-center mb-3">
                  <i className="fas fa-envelope text-red-600 text-xl mr-3"></i>
                  <span className="text-lg text-white">info@houseofip.in</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-clock text-purple-700 text-xl mr-3"></i>
                  <span className="text-lg text-white">
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
              <form
                onSubmit={handleSubmit} // Handle form submission
                className="space-y-6 backdrop-blur-md p-5 rounded-lg shadow-lg"
              >
                <div className="space-y-4">
                  <input
                    type="text"
                    name="your-name"
                    placeholder="Full Name*"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 border text-black bg-transparent bg-white placeholder:text-gray-900 border-gray-300 rounded-md focus:outline-none focus:ring-[#294160] focus:ring-2 text-lg"
                  />
                  <input
                    type="email"
                    name="your-email"
                    placeholder="Email*"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border text-black bg-transparent bg-white placeholder:text-gray-900 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#294160] text-lg"
                  />
                  <input
                    type="text"
                    name="your-subject"
                    placeholder="Subject*"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 border text-black bg-transparent bg-white placeholder:text-gray-900 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#294160] text-lg"
                  />
                </div>

                <textarea
                  name="your-message"
                  placeholder="Message*"
                  required
                  rows="6"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 border text-black bg-white bg-transparent placeholder:text-gray-900 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#294160] text-lg"
                ></textarea>

                <button
                  type="submit"
                  className="w-1/4 py-3 bg-gray-600 text-white text-lg rounded-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-[#071b35]"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit Now"}
                </button>
              </form>

              {responseMessage && (
                <p className="mt-4 text-lg text-white">{responseMessage}</p>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
