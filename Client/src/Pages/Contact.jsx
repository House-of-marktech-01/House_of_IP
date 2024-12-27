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
        <div className="bg-gray-200 py-10">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email Section */}
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-[0px_8px_20px_rgba(66,153,225,0.5)] transition-shadow duration-300">
              <img
                src="email.png" // Replace with actual email icon URL
                alt="Email Icon"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600 text-center">
                houseofintellectualproperty@gmail.com
              </p>
            </div>

            {/* Location Section */}
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-[0px_8px_20px_rgba(255,99,71,0.5)] transition-shadow duration-300">
              <img
                src="https://thumbs.dreamstime.com/b/alarm-clock-logo-icon-isolated-watch-object-time-office-symbol-alarm-clock-logo-icon-isolated-watch-object-time-office-symbol-147962569.jpg" // Replace with actual location icon URL
                alt="Location Icon"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Open hours
              </h3>
              <p className="text-gray-600 text-center">
                Monday to Saturday 8 am - 6pm <br />
                Sunday 11am - 4pm
              </p>
            </div>

            {/* Call Section */}
            <div className="flex flex-col items-center bg-white  p-6 rounded-lg shadow-lg hover:shadow-[0px_8px_20px_rgba(34,197,94,0.5)] transition-shadow duration-300">
              <img
                src="call.png" // Replace with actual call icon URL
                alt="Call Icon"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800 mb-2">Call</h3>
              <p className="text-gray-600 text-center">
                +91 790 572 6029
                <br />
                +91 880 098 5175
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
