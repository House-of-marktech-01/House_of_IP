import React from "react";
import ContactForm from "../Components/ContactForm";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
    <Helmet>
      <title>House of IP - Contact</title>
    </Helmet>
      <div className="w-full relative ">
        <ContactForm />
        <div className="bg-slate-900 py-10">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email Section */}
            <div className="flex flex-col mt-9 items-center bg-slate-900 p-6 rounded-lg shadow-lg hover:shadow-[0px_8px_20px_rgba(66,153,225,0.5)] transition-shadow duration-300">
              <img
                src="email.png" // Replace with actual email icon URL
                alt="Email Icon"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-lg font-bold text-white mb-2">Email</h3>
              <p className="text-white text-center">
              info@houseofip.in
              </p>
            </div>

            {/* Location Section */}
            <div className="flex flex-col mt-9 items-center bg-slate-900 p-6 rounded-lg shadow-lg hover:shadow-[0px_8px_20px_rgba(255,99,71,0.5)] transition-shadow duration-300">
              <img
                src="clock-removebg-preview.png" // Replace with actual location icon URL
                alt="Location Icon"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-lg font-bold text-white mb-2">
                Open hours
              </h3>
              <p className="text-white text-center">
                Monday to Saturday 10 AM - 8PM <br />
              </p>
            </div>

            {/* Call Section */}
            <div className="flex flex-col items-center mt-9 bg-slate-900  p-6 rounded-lg shadow-lg hover:shadow-[0px_8px_20px_rgba(34,197,94,0.5)] transition-shadow duration-300">
              <img
                src="call.png" // Replace with actual call icon URL
                alt="Call Icon"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-lg font-bold text-white mb-2">Call</h3>
              <p className="text-white text-center">
              +91 7843814636
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
