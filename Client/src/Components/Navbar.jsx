import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll event to toggle the navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar bg-slate-900 h-28 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-opacity-70 backdrop-blur-lg shadow-lg"
          : "bg-opacity-100 backdrop-blur-none"
      }`}
    >
      <div className="navbar-start">
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="btn btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Hamburger Menu Overlay */}
          <div
            className={`fixed top-0 right-0 w-1/2 h-full bg-slate-800 text-white transform transition-transform duration-300 z-40 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              &times;
            </button>
            <ul className="flex flex-col items-center justify-center h-3/4 space-y-6 text-lg">
              <li>
                <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/practice" onClick={() => setIsMenuOpen(false)}>
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/appointment" onClick={() => setIsMenuOpen(false)}>
                  Appointment
                </Link>
              </li>
            </ul>

            {/* Social Media Links */}
            <div className="absolute bottom-8 w-full flex justify-around text-xl">
              <a href="/i" className="text-gray-300 hover:text-white">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="/" className="text-gray-300 hover:text-white">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="/" className="text-gray-300 hover:text-white">
                <i className="fa-regular fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        <NavLink to="/" aria-label="HOUSE OF IP">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUhQJ-44yDYIuo8Hj-L1ezQSKAkkK4CqlecQ&s"
            width="290"
            height="37"
            alt="House of ip Logo"
            className="mb-2 p-12"
          />
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/practice">Practice Areas</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/appointment">Book an Appointment</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex space-x-4 mr-5">
        <a href="/">
          <i
            className="fa-brands fa-instagram"
            style={{ color: "#e01b24", fontSize: "1.5rem" }}
          ></i>
        </a>
        <a href="/">
          <i
            className="fa-brands fa-linkedin"
            style={{ color: "#1a5fb4", fontSize: "1.5rem" }}
          ></i>
        </a>
        <a href="/">
          <i
            className="fa-regular fa-envelope"
            style={{ color: "#8ff0a4", fontSize: "1.5rem" }}
          ></i>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
