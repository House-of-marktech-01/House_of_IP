import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiPlus, FiMinus } from "react-icons/fi";
import {NavLink} from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        scrolled
          ? "bg-slate-900 bg-opacity-50 backdrop-blur-md"
          : "bg-slate-900"
      } shadow-md fixed w-full z-50 transition-all duration-300 ease-in-out`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button (Left Aligned) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/" className="text-2xl font-bold text-white">
              House of IP
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink
              to="/"
              className="text-white hover:text-blue-600 font-medium"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-white hover:text-blue-600 font-medium"
            >
              About
            </NavLink>
            <div className="relative group">
              <button className="text-white hover:text-blue-600 font-medium">
                Services
              </button>
              {/* Dropdown */}
              <div className="absolute left-0 bg-white shadow-lg rounded-lg w-48 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                <NavLink
                  to="/copyright"
                  className="block px-4 py-2 hover:bg-blue-50 text-gray-700"
                >
                  Copyright
                </NavLink>
                <NavLink
                  to="/design"
                  className="block px-4 py-2 hover:bg-blue-50 text-gray-700"
                >
                  Design
                </NavLink>
                <NavLink
                  to="/patent"
                  className="block px-4 py-2 hover:bg-blue-50 text-gray-700"
                >
                  Patent
                </NavLink>
                <NavLink
                  to="/trademark"
                  className="block px-4 py-2 hover:bg-blue-50 text-gray-700"
                >
                  Trademark
                </NavLink>
                <NavLink
                  to="/"
                  className="block px-4 py-2 hover:bg-blue-50 text-gray-700"
                >
                  IP Litigation
                </NavLink>
                <NavLink
                  to="/"
                  className="block px-4 py-2 hover:bg-blue-50 text-gray-700"
                >
                  Matrimonial Disputes
                </NavLink>
              </div>
            </div>
            <NavLink
              to="/contact"
              className="text-white hover:text-blue-600 font-medium"
            >
              Contact
            </NavLink>
            <NavLink
              to="/appointment"
              className="text-white hover:text-blue-600 font-medium"
            >
              Book an Appointment
            </NavLink>
            <NavLink
              to="/login"
              className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-700"
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-slate-900 shadow-md transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out w-3/4 md:hidden`}
      >
        <div className="p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-700 focus:outline-none"
          >
            <FiX size={24} />
          </button>
          <div className="mt-4">
            <NavLink
              to="/"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
            >
              About
            </NavLink>
            {/* Services with Expand/Collapse */}
            <div
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <div className="flex justify-between items-center cursor-pointer">
                <span>Services</span>
                {isServicesOpen ? <FiMinus /> : <FiPlus />}
              </div>
              {isServicesOpen && (
                <div className="mt-2 pl-4">
                  <NavLink
                    to="/copyright"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    Copyright
                  </NavLink>
                  <NavLink
                    to="/design"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    Design
                  </NavLink>
                  <NavLink
                    to="/patent"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    Patent
                  </NavLink>
                  <NavLink
                    to="/trademark"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    Trademark
                  </NavLink>
                  <NavLink
                    to="/"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    IP Litigation
                  </NavLink>
                  <NavLink
                    to="/"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    Matrimonial disputes
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink
              to="/contact"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
            >
              Contact
            </NavLink>
            <NavLink
              to="/appointment"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
            >
              Book an appointment
            </NavLink>
            <NavLink
              to="/login"
              className="block px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-700 mx-4 my-2 text-center"
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
