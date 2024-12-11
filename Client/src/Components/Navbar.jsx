import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-slate-900 h-28">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/service">Service</Link>
            </li>
            <li>
              <Link to="/practice">Practice Areas</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/appointment">Book an Appointment</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost">
          HOUSE OF IP
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
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
        {" "}
        {/* Added space between icons */}
        <i
          className="fa-brands fa-instagram"
          style={{ color: "#e01b24", fontSize: "1.5rem" }}
        ></i>
        <i
          className="fa-brands fa-linkedin"
          style={{ color: "#1a5fb4", fontSize: "1.5rem" }}
        ></i>
        <i
          className="fa-regular fa-envelope"
          style={{ color: "#8ff0a4", fontSize: "1.5rem" }}
        ></i>
      </div>
    </div>
  );
};

export default Navbar;
