import React from "react";
import { NavLink } from "react-router-dom";
import {InlineWidget} from "react-calendly"
import ContactForm from "../Components/ContactForm"

const Appointment = () => {
  return (
    <>
      <div className="w-full" style={{ position: "relative" }}>
        <div className="relative w-full h-[200px] sm:h-[315px] overflow-hidden">
          <img
            src="https://lawfirmignite.com/wp-content/uploads/2024/08/law-firm-appointment-setting.png"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          {/* Overlay Text */}
          <div className="font-montserrat absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl sm:text-2xl font-light text-center">
            Book an Appointment
          </div>
        </div>
        <div className="breadcrumbs text-xs sm:text-sm pl-4 sm:pl-6 bg-white text-black pt-3 sm:pt-5">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>Book an Appointment</li>
          </ul>
        </div>
      </div>
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Book an Appointment
          </h1>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Schedule a time that works best for you using the calendar below.
          </p>
        </div>

        {/* Calendly Widget Section */}
        <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-4xl">
          <InlineWidget
            url="https://calendly.com/houseofintellectualproperty/30min"
            styles={{ height: "600px" }}
          />
        </div>

        {/* Contact Information Section */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Need help? Contact us at
            <a
              href="mailto:support@example.com"
              className="text-blue-500 hover:underline ml-1"
            >
              Ownersemailid@gmail.com
            </a>
          </p>
        </div>
      </div>
      <ContactForm/>
    </>
  );
};

export default Appointment;
