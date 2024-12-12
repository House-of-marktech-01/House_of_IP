import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`px-4 py-4 flex justify-between items-center bg-slate-900 z-10 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-lg" : ""
      }`}
    >
      <NavLink className="text-3xl font-bold leading-none" to="/">
        <img
          className="w-32"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUhQJ-44yDYIuo8Hj-L1ezQSKAkkK4CqlecQ&s"
          alt=""
        />
      </NavLink>

      {/* Desktop Navigation Links */}
      <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-6 justify-center z-20">
        <li>
          <NavLink
            className="text-sm text-gray-400 hover:text-gray-500 font-bold"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-sm text-gray-400 hover:text-gray-500 font-bold"
            to="/about"
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-sm text-gray-400 hover:text-gray-500 font-bold"
            to="/practice"
          >
            Practice Areas
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-sm text-gray-400 hover:text-gray-500 font-bold"
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-sm text-gray-400 hover:text-gray-500 font-bold"
            to="/appointment"
          >
            Book an Appointment
          </NavLink>
        </li>
      </ul>

      {/* Social Media Links (Desktop) */}
      <div className="hidden lg:flex space-x-4 ml-4">
        <a
          href="https://twitter.com"
          className="text-gray-400 hover:text-gray-500"
        >
          <i
            className="fa-brands fa-facebook fa-xl"
            style={{ color: "#1c71d8" }}
          ></i>
        </a>
        <a
          href="https://instagram.com"
          className="text-gray-400 hover:text-gray-500"
        >
          <i
            className="fa-brands fa-instagram fa-xl"
            style={{ color: "yellow" }}
          ></i>
        </a>
        <a
          href="mailto:someone@example.com"
          className="text-gray-400 hover:text-gray-500"
        >
          <i
            className="fa-regular fa-envelope fa-xl"
            style={{ color: "#ee2a7b", width: "20px" }}
          ></i>
        </a>
      </div>

      {/* Hamburger Menu */}
      <button
        className="lg:hidden flex items-center justify-center p-2 text-gray-300"
        onClick={toggleMenu}
      >
        <svg
          className={`w-6 h-6 ${isMenuOpen ? "hidden" : "block"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
        <svg
          className={`w-6 h-6 ${isMenuOpen ? "block" : "hidden"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>

      {/* Mobile Navigation Links */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } fixed top-0 left-0 w-full h-full bg-slate-900 bg-opacity-75 z-10`}
        onClick={toggleMenu}
      >
        <div className="flex justify-center items-center h-full">
          <ul className="space-y-6 text-center">
            <li>
              <NavLink
                className="text-sm text-white hover:text-gray-400"
                to="/"
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-sm text-blue-600 font-bold hover:text-gray-400"
                to="/about"
                onClick={toggleMenu}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-sm text-white hover:text-gray-400"
                to="/practice"
                onClick={toggleMenu}
              >
                Practice Areas
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-sm text-white hover:text-gray-400"
                to="/contact"
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-sm text-white hover:text-gray-400"
                to="/appointment"
                onClick={toggleMenu}
              >
                Book an Appointment
              </NavLink>
            </li>

            {/* Social Media Links (Mobile) */}
            <div className="flex justify-center space-x-4 mt-8">
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-gray-500"
              >
                <i
                  className="fa-brands fa-facebook fa-xl"
                  style={{ color: "#1c71d8" }}
                ></i>
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-gray-500"
              >
                <i
                  className="fa-brands fa-instagram fa-xl"
                  style={{ color: "yellow" }}
                ></i>
              </a>
              <a
                href="mailto:someone@example.com"
                className="text-gray-400 hover:text-gray-500"
              >
                <i
                  className="fa-regular fa-envelope fa-xl"
                  style={{ color: "#ee2a7b", width: "20px" }}
                ></i>
              </a>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
