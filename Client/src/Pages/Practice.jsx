import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../Components/ContactForm";

import { NavLink } from "react-router-dom";
import Card from "../Components/Card";
const Practice = () => {
  return (
    <>
      <div>
        {/* Breadcrumbs */}
        <div className="breadcrumbs text-sm pl-6 bg-white text-black pt-20">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>Practice Areas</li> 
          </ul>
        </div>
      </div>
      <h1 className="bg-white text-center text-3xl text-slate-800 pt-9 underline">
        Practice Areas
      </h1>
      <h1 className="bg-white text-center text-xl text-slate-800 pt-5 ">
        Our Expertice
      </h1>
      <div></div>
      <p className="bg-white py-4 pt-10 text-black px-3 text-sm lg:px-24">
        <span className="text-xl font-bold text-slate-800">House of IP</span>{" "}
        offers a comprehensive suite of legal services across key areas catering
        to the evolving needs of inventors, creators and businesses. Our core
        specialization lies in Intellectual Property protection, litigation and
        licensing across patents, trademarks, copyrights, designs leveraging
        in-house technical experts
      </p>
      <p className="bg-white lg:px-24 px-3 text-sm py-4 text-black">
        Further, we provide allied corporate and commercial advisory
        encompassing dispute resolution, regulatory compliance, entity
        structuring and transactions support. For personal clients, we offer
        specialized assistance in family disputes, inheritance matters and
        immigration needs.
      </p>
      <p className="bg-white lg:px-24 px-3 text-sm py-4 text-black">
        Having handled over 2200+ cases, our seasoned lawyers provide litigation
        assistance across criminal, civil and commercial conflicts. We also
        cover alternative resolution mechanisms including seamless arbitration
        and mediation services. With diverse competencies and client-first
        approach, House of IP strives to deliver legal excellence with
        responsibility.
      </p>
      <Card />
      <div className="flex flex-col lg:flex-row items-center justify-center p-6 bg-slate-900">
        {/* Image Section */}
        <div className="flex justify-center w-full lg:w-1/2 mb-6 lg:mb-0">
          <img
            src="/lawyer.png"
            alt="Let us help you"
            className=" h-48 w-52 lg:h-56 lg:w-60"
          />
        </div>

        {/* Text and Button Section */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left w-full lg:w-1/2 space-y-4">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-100 font-montserrat">
            Let us help you!
          </h2>
          <p className="text-lg text-gray-100">Book an appointment with us!</p>
          <a
            href="http://calendly.com/justispherexlegal/book-an-appointment"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            BOOK APPOINTMENT
          </a>
        </div>
      </div>
      <ContactForm />
    </>
  );
};

export default Practice;
