import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-6">
      <div className="max-w-screen-xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Column 1 */}
          <div className="pl-5">
            <h4 className="text-lg font-semibold mb-3 text-white">
              House of IP
            </h4>
            <ul className="space-y-2 text-white">
              <li>
                <NavLink to="/about" className="hover:underline">
                  About House of IP
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="hover:underline">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:underline">
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/appointment" className="hover:underline">
                  Book an Appointment
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="pl-5">
            <h4 className="text-lg font-semibold mb-3 text-white">Services</h4>
            <ul className="space-y-2 text-white">
              <li>
                <NavLink to="/trademark" className="hover:underline">
                  Trademark
                </NavLink>
              </li>
              <li>
                <NavLink to="/copyright" className="hover:underline">
                  Copyright
                </NavLink>
              </li>
              <li>
                <NavLink to="/design" className="hover:underline">
                  Design
                </NavLink>
              </li>
              <li>
                <NavLink to="/patent" className="hover:underline">
                  Patent
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="pl-5">
            <div className="flex items-center gap-4">
              {/* LinkedIn Button */}
              {/* Mail Button */}
              <NavLink
                to="mailto:support@houseofip.in"
                target="_blank"
              >
                <div className="social-button">
                  <button className="relative w-12 h-12 rounded-full group">
                    <div className="floater w-full h-full absolute top-0 left-0 bg-gray-500 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                    <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-gray-500 rounded-full">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                  </button>
                </div>
              </NavLink>

              {/* Instagram Button */}
              <NavLink
                to="https://www.instagram.com/houseofintellectualproperty/"
                target="_blank"
              >
                <div className="social-button">
                  <button className="relative w-12 h-12 rounded-full group">
                    <div className="floater w-full h-full absolute top-0 left-0 bg-pink-500 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                    <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-pink-500 rounded-full">
                      <i className="fa-brands fa-instagram"></i>
                    </div>
                  </button>
                </div>
              </NavLink>

              <NavLink to="https://www.linkedin.com/company/house-of-intellectual-property/" target="_blank">
              <div className="social-button">
                <button className="relative w-12 h-12 rounded-full group">
                  <div className="floater w-full h-full absolute top-0 left-0 bg-blue-500 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                  <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-blue-500 rounded-full">
                    <i className="fa-brands fa-linkedin"></i>
                  </div>
                </button>
              </div>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-4 font-roboto text-white text-sm text-center">
          <p>
            Copyright © 2025 NextGen House of IP Support LLP. All rights reserved.
          </p>
          <p className="mt-1">
            Unless otherwise indicated, all materials on these pages are
            copyrighted by House of IP. No part of these pages, either text or
            image, may be used for any purpose.
          </p>
        </div>
        <div>
          <p className="text-center text-white font-roboto text-sm mt-4">
            Designed and developed by{" "} <span className="text-white">House of MarkTech</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
