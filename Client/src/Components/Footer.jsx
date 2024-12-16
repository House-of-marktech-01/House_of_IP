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
                <NavLink to="/payment" className="hover:underline">
                  Online Payment
                </NavLink>
              </li>
              <li>
                <NavLink to="/practice" className="hover:underline">
                  Practice Areas
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
            <h4 className="text-lg font-semibold mb-3 text-white">
              Platforms
            </h4>
            <ul className="space-y-2 text-white">
              <li>
                <NavLink to="#" className="hover:underline">
                  Business Search
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="hover:underline">
                  Trademark Search
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="pl-5">
            <h4 className="text-lg font-semibold mb-3 text-white">Usage</h4>
            <ul className="space-y-2 text-white">
              <li>
                <NavLink to="#" className="hover:underline">
                  Terms & Conditions
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="hover:underline">
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="hover:underline">
                  Refund Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="hover:underline">
                  Confidentiality Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="hover:underline">
                  Disclaimer Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="hover:underline">
                  House of IP Review
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-4 text-white text-sm text-center">
          <p>
            Copyright © 2024 House of IP Private Limited. All rights reserved.
          </p>
          <p className="mt-1">
            Unless otherwise indicated, all materials on these pages are
            copyrighted by IndiaFilings Private Limited. No part of these pages,
            either text or image, may be used for any purpose.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mt-4 text-white">
            <NavLink
              to="#"
              aria-label="Facebook"
              className="hover:text-blue-600"
            >
              <i className="fab fa-facebook-f"></i>
            </NavLink>
            <NavLink
              to="#"
              aria-label="WhatsApp"
              className="hover:text-green-500"
            >
              <i className="fab fa-whatsapp"></i>
            </NavLink>
            <NavLink
              to="#"
              aria-label="Twitter"
              className="hover:text-blue-400"
            >
              <i className="fab fa-twitter"></i>
            </NavLink>
            <NavLink
              to="#"
              aria-label="YouTube"
              className="hover:text-red-600"
            >
              <i className="fab fa-youtube"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
