import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiPlus, FiMinus } from "react-icons/fi";

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
          ? "bg-white bg-opacity-50 backdrop-blur-md"
          : "bg-white"
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
            <a href="/" className="text-2xl font-bold text-slate-900">
              House of IP
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="/"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              About
            </a>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium">
                Services
              </button>
              {/* Dropdown */}
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-48 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                <a
                  href="/service1"
                  className="block px-4 py-2 hover:bg-blue-50 text-gray-700"
                >
                  Service 1
                </a>
                <a
                  href="/service2"
                  className="block px-4 py-2 hover:bg-blue-50 text-gray-700"
                >
                  Service 2
                </a>
                <a
                  href="/service3"
                  className="block px-4 py-2 hover:bg-blue-50 text-gray-700"
                >
                  Service 3
                </a>
              </div>
            </div>
            <a
              href="/contact"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Contact
            </a>
            <a
              href="/appointment"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Book an Appointment
            </a>
            <a
              href="/login"
              className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-700"
            >
              Login
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-md transform ${
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
            <a
              href="/"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
            >
              Home
            </a>
            <a
              href="/about"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
            >
              About
            </a>
            {/* Services with Expand/Collapse */}
            <div className="block px-4 py-2 text-gray-700 hover:bg-blue-50">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <span>Services</span>
                {isServicesOpen ? <FiMinus /> : <FiPlus />}
              </div>
              {isServicesOpen && (
                <div className="mt-2 pl-4">
                  <a
                    href="/service1"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    Service 1
                  </a>
                  <a
                    href="/service2"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    Service 2
                  </a>
                  <a
                    href="/service3"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    Service 3
                  </a>
                </div>
              )}
            </div>
            <a
              href="/contact"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
            >
              Contact
            </a>
            <a
              href="/contact"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
            >
              Book an appointment
            </a>
            <a
              href="/login"
              className="block px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-700 mx-4 my-2 text-center"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
