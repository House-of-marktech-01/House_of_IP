import React from "react";
import { NavLink } from "react-router-dom";
import ContactForm from "../Components/ContactForm";
import Chatbot from "../Components/Chatbot";

const Contact = () => {
  return (
    <div className="w-full relative">
      {/* Image Container */}
      <div className="relative w-full h-[315px] overflow-hidden">
        <img
          src="https://www.jsalaw.com/wp-content/uploads/2022/07/Contact-Us-1200x315.jpg"
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        {/* Overlay Text */}
        <div className="font-montserrat absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-light text-center">
          Contact Us
        </div>
      </div>
      {/* Breadcrumbs */}
      <div className="breadcrumbs text-sm pl-6 bg-white text-black pt-5">
        <ul className="flex space-x-2">
          <li>
            <NavLink to="/" className="hover:underline">
              Home
            </NavLink>
          </li>
          <li>Contact</li>
        </ul>
      </div>
      <ContactForm/>
    </div>
  );
};

export default Contact;
