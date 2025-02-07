import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../Components/ContactForm";
import { NavLink } from "react-router-dom";
import Card from "../Components/Card";
import { Helmet } from "react-helmet";

const Practice = () => {
  return (
    <>
      <Helmet>
        <title>House of IP - Service</title>
      </Helmet>
      <div>
        {/* Breadcrumbs */}
        <div className="breadcrumbs text-sm pl-6 bg-slate-900 text-white pt-20">
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>Services</li>
          </ul>
        </div>
      </div>
      <h1 className="bg-slate-900 text-center text-3xl text-white pt-9 underline">
        Services
      </h1>
      <p className="bg-slate-900 py-4 pt-10 text-white px-5 text-sm lg:px-24">
        <span className="text-xl font-light">House of IP</span> offers a
        comprehensive suite of services across key areas catering to the
        evolving needs of inventors, creators and businesses. Our core
        specialization lies in Intellectual Property protection, litigation and
        licensing across patents, trademarks, copyrights, designs leveraging
        in-house technical experts
      </p>
      <p className="bg-slate-900 text-white lg:px-24 px-5 text-sm py-4 ">
        We simplify the IP registration process, ensuring accuracy and
        compliance with regulatory standards, whether for trademarks, industrial
        designs, literary works, or innovative inventions. Our team is dedicated
        to safeguarding your creations and maximizing their commercial value.
      </p>
      <p className="bg-slate-900 lg:px-24 px-5 text-sm py-4 text-white">
        In addition, we provide advisory services for corporate and commercial
        needs, including regulatory compliance, entity structuring, and
        transactional support. We also assist personal clients with inheritance
        matters and immigration needs.
      </p>
      <p className="bg-slate-900 lg:px-24 px-5 text-sm py-4 text-white">
        With a client-first approach and a focus on innovation, House of IP aims
        to deliver excellence in protecting and enhancing intellectual property
        rights, empowering creators and businesses to thrive in a competitive
        landscape.
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
          <NavLink
            to="https://calendly.com/houseofintellectualproperty/30min"
            target="_blank"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            BOOK APPOINTMENT
          </NavLink>
        </div>
      </div>
      <ContactForm />
    </>
  );
};

export default Practice;
