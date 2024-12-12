import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About Section */}
          <div>
            <a
              href="https://www.houseofmarktech.com"
              aria-label="HOUSE OF IP"
              className="block mb-4"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUhQJ-44yDYIuo8Hj-L1ezQSKAkkK4CqlecQ&s"
                alt="Law Firm Sites Logo"
                className="w-48"
              />
            </a>
            <p className="text-sm">
              At <strong>HOUSE OF IP</strong>, we are dedicated to helping you
              get more cases through stunning website design and SEO.
            </p>
            <a
              href="https://www.google.com/search?hl=en-PH&amp;gl=ph&amp;q=Law+Firm+Sites,+765+E+340+S+Ste+105,+American+Fork,+UT+84003,+United+States&amp;ludocid=3188276109709459778&amp;lsig=AB86z5WRd94i7QEEfFjtGr5z7_5P#lrd=0x874d8158e589528f:0x2c3f083ac518c142,1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block"
            >
              <img
                src="https://lawfirmsites.com/wp-content/themes/lfs2022/images/icon-googlereview.png"
                alt="Google Review Icon"
                className="w-24"
              />
            </a>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/about" className="hover:text-gray-400">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/service" className="hover:text-gray-400">
                  Service
                </NavLink>
              </li>
              <li>
                <NavLink to="/practice" className="hover:text-gray-400">
                  Practice Areas
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-gray-400">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="text-sm">
              <p className="font-medium">Sales Support – Toll Free</p>
              <a
                href="tel:8009328242"
                className="block hover:text-gray-400"
              >
                (800) 932-8242
              </a>
              <p className="font-medium mt-4">Local</p>
              <a href="tel:8017707089" className="block hover:text-gray-400">
                801-770-7089
              </a>
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="/"
            className="text-white hover:text-gray-400"
            aria-label="Facebook"
          >
            <span className="fab fa-facebook-f"></span>
          </a>
          <a
            href="/"
            className="text-white hover:text-gray-400"
            aria-label="Twitter"
          >
            <span className="fab fa-twitter"></span>
          </a>
          <a
            href="/"
            className="text-white hover:text-gray-400"
            aria-label="LinkedIn"
          >
            <span className="fab fa-linkedin-in"></span>
          </a>
          <a
            href="/"
            className="text-white hover:text-gray-400"
            aria-label="Pinterest"
          >
            <span className="fab fa-pinterest-p"></span>
          </a>
          <a
            href="/"
            className="text-white hover:text-gray-400"
            aria-label="Instagram"
          >
            <span className="fab fa-instagram"></span>
          </a>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>
            © 2001-2024 House of Ip, Inc. All rights reserved. |{" "}
            <a
              href="https://lawfirmsites.com/privacy-policy"
              className="hover:text-gray-200"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
