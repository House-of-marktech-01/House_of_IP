import React from "react";
import { NavLink } from "react-router-dom";
import TestimonialCard from "../Components/Testimonials";

const About = () => {
  return (
    <>
      <div className="w-full" style={{ position: "relative" }}>
        <div className="relative w-full h-[200px] sm:h-[315px] overflow-hidden">
          <img
            src="https://www.jsalaw.com/wp-content/uploads/2022/07/Contact-Us-1200x315.jpg"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          {/* Overlay Text */}
          <div className="font-montserrat absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl sm:text-2xl font-light text-center">
            About us
          </div>
        </div>
        <div className="breadcrumbs text-xs sm:text-sm pl-4 sm:pl-6 bg-white text-black pt-3 sm:pt-5">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>About</li>
          </ul>
        </div>
      </div>
      <div className="bg-white pb-6 sm:pb-8">
        <div className="px-6 sm:px-16">
          <div className="flex items-center pt-10 sm:pt-16">
            <div className="w-8 sm:w-12 h-0.5 bg-[#8c6f46]"></div>
          </div>
          <h2 className="text-yellow-400 text-2xl sm:text-3xl text-left font-open-sans font-light pt-4 sm:pt-6">
            Who we are
          </h2>
          <div>
            <div className="text-black text-base sm:text-lg text-justify">
              <p className="pt-3 sm:pt-4">
                <strong>House of IP</strong> is a leading national law
                firm in India with over 600 professionals operating out of 7
                offices located in: Ahmedabad, Bengaluru, Chennai, Gurugram,
                Hyderabad, Mumbai, and New Delhi.
              </p>
              <p className="pt-3 sm:pt-4">
                Our practice is organised along service lines and sector
                specialisation that provides legal services to top Indian
                corporates, Fortune 500 companies, multinational banks and
                financial institutions, governmental and statutory authorities,
                and multilateral and bilateral institutions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col md:flex-row items-center w-full bg-slate-900">
          {/* Image Section */}
          <div className="w-full md:w-1/2 animate__animated animate__slideInLeft pt-8 ">
            <div className="w-full">
              <img
                decoding="async"
                width="1200"
                height="680"
                src="https://www.jsalaw.com/wp-content/uploads/2020/07/why-we-are-unique.jpg"
                alt="Why we are unique"
                className="w-full h-auto px-6 sm:px-16"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-left px-6 sm:px-16 py-6">
            <h2 className="text-yellow-400 text-xl sm:text-3xl font-light">
              Why we are unique
            </h2>
            <p className="text-sm sm:text-lg mt-3 sm:mt-4">
              With a keen focus on learning and specialised practices, we keep
              in touch with the changing environment in which our clients
              operate. We take pride in combining the expertise and diversity of
              experience of a large firm with the personalized attention and
              responsiveness of a boutique firm. Our lawyers work seamlessly
              across practice areas and offices to assist our clients.
            </p>
          </div>
        </div>
        {/* Repeated Section */}
        <div className="flex flex-col md:flex-row-reverse items-center w-full bg-slate-900">
          <div className="w-full md:w-1/2 animate__animated animate__slideInLeft pb-8">
            <div className="w-full">
              <img
                decoding="async"
                width="1200"
                height="680"
                src="https://www.jsalaw.com/wp-content/uploads/2020/07/why-we-are-unique.jpg"
                alt="Why we are unique"
                className="w-full h-auto px-6 sm:px-16"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 text-left px-6 sm:px-16 py-6">
            <h2 className="text-yellow-400 text-xl sm:text-3xl font-light">
              Why we are unique
            </h2>
            <p className="text-sm sm:text-lg mt-3 sm:mt-4">
              With a keen focus on learning and specialised practices, we keep
              in touch with the changing environment in which our clients
              operate. We take pride in combining the expertise and diversity of
              experience of a large firm with the personalized attention and
              responsiveness of a boutique firm. Our lawyers work seamlessly
              across practice areas and offices to assist our clients.
            </p>
          </div>
        </div>
      </div>
      <TestimonialCard />
    </>
  );
};

export default About;
