import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiPlus, FiMinus } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(Cookies.get("jwtToken"));

  useEffect(() => {
    const token = Cookies.get("jwtToken");
    setToken(token);
    setIsLogin(!token); // If no token, set to login
  }, []); // Only run on component mount

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data based on login or signup
    const formData = isLogin
      ? { email, password }
      : { username, email, password };

    // Define the endpoint based on the form type (sign-in or sign-up)
    const endpoint = isLogin
      ? "http://localhost:5000/api/users/signin"
      : "http://localhost:5000/api/users/signup";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        Cookies.set("jwtToken", data.token);
        setToken(data.token); // Update the token state
        setIsLogin(false);
        alert("Successfully submitted");
        // Perform actions on success like redirecting or storing token
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const modalRef = useRef(null);


  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };
  const handleLogout = () => {
    Cookies.remove("jwtToken");
    setToken(null); // Remove token from state
    setIsLogin(true); // Switch to login state
  };

  return (
    <nav
      className={`${"bg-slate-900"} shadow-md fixed w-full z-50 transition-all duration-300 ease-in-out`}
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
                  className="block px-4 py-2 hover:bg-slate-800 text-gray-700 hover:text-gray-300"
                >
                  Copyright
                </NavLink>
                <NavLink
                  to="/design"
                  className="block px-4 py-2 hover:bg-slate-800 text-gray-700 hover:text-gray-300"
                >
                  Design
                </NavLink>
                <NavLink
                  to="/patent"
                  className="block px-4 py-2 hover:bg-slate-800 text-gray-700 hover:text-gray-300"
                >
                  Patent
                </NavLink>
                <NavLink
                  to="/trademark"
                  className="block px-4 py-2 hover:bg-slate-800 text-gray-700 hover:text-gray-300"
                >
                  Trademark
                </NavLink>
                <NavLink
                  to="/"
                  className="block px-4 py-2 hover:bg-slate-800 text-gray-700 hover:text-gray-300"
                >
                  IP Litigation
                </NavLink>
                <NavLink
                  to="/"
                  className="block px-4 py-2 hover:bg-slate-800 text-gray-700 hover:text-gray-300"
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
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {token ? (
              <button className="btn bg-slate-800" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <button
                className="btn bg-slate-800"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                {isLogin ? "Login" : "Sign Up"}
              </button>
            )}
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box bg-slate-900">
                <h3 className="font-bold text-lg">
                  {isLogin ? "Sign In" : "Sign Up"}
                </h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {!isLogin && (
                    <div>
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-300 pt-5"
                      >
                        Username
                      </label>
                      <input
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                        className="input input-bordered w-full"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>
                  )}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 pt-5"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="input input-bordered w-full"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-300"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      className="input input-bordered w-full"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <button type="submit" className="btn btn-primary">
                      {isLogin ? "Sign In" : "Sign Up"}
                    </button>
                  </div>
                </form>
                <p className="text-center text-sm text-gray-300 py-4">
                  {isLogin ? (
                    <>
                      Or
                      <button
                        onClick={() => setIsLogin(false)}
                        className="text-blue-400 hover:text-blue-600 underline ml-1"
                      >
                        sign up
                      </button>
                      if you don&apos;t have an account.
                    </>
                  ) : (
                    <>
                      Already have an account?
                      <button
                        onClick={() => setIsLogin(true)}
                        className="text-blue-400 hover:text-blue-600 underline ml-1"
                      >
                        Login
                      </button>
                    </>
                  )}
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* This button will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
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
              className="block px-4 py-2 text-gray-500 hover:bg-slate-800"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="block px-4 py-2 text-gray-500 hover:bg-slate-800"
            >
              About
            </NavLink>
            {/* Services with Expand/Collapse */}
            <div
              className="block px-4 py-2 text-gray-700 hover:bg-slate-800"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <div className="flex justify-between items-center cursor-pointer">
                <span className="text-gray-500">Services</span>
                {isServicesOpen ? <FiMinus /> : <FiPlus />}
              </div>
              {isServicesOpen && (
                <div className="mt-2 pl-4">
                  <NavLink
                    to="/copyright"
                    className="block px-4 py-2 text-gray-500 hover:bg-slate-800"
                  >
                    Copyright
                  </NavLink>
                  <NavLink
                    to="/design"
                    className="block px-4 py-2 text-gray-500 hover:bg-slate-800"
                  >
                    Design
                  </NavLink>
                  <NavLink
                    to="/patent"
                    className="block px-4 py-2 text-gray-500 hover:bg-slate-800"
                  >
                    Patent
                  </NavLink>
                  <NavLink
                    to="/trademark"
                    className="block px-4 py-2 text-gray-500 hover:bg-slate-800"
                  >
                    Trademark
                  </NavLink>
                  <NavLink
                    to="/"
                    className="block px-4 py-2 text-gray-500 hover:bg-slate-800"
                  >
                    IP Litigation
                  </NavLink>
                  <NavLink
                    to="/"
                    className="block px-4 py-2 text-gray-500 hover:bg-slate-800"
                  >
                    Matrimonial disputes
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink
              to="/contact"
              className="block px-4 py-2 text-gray-500 hover:bg-slate-800"
            >
              Contact
            </NavLink>
            <NavLink
              to="/appointment"
              className="block px-4 py-2 text-gray-500 hover:bg-slate-800"
            >
              Book an appointment
            </NavLink>
            <div>
              {/* Open Modal Button */}
              {token ? (
              <button className="btn bg-slate-800" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <button
                className="btn bg-slate-800"
                onClick={() =>
                  document.getElementById("login_signup_modal").showModal()
                }
              >
                {isLogin ? "Login" : "Sign Up"}
              </button>
            )}

              {/* Modal */}
              <dialog id="login_signup_modal" className="modal">
              <div className="modal-box bg-slate-900">
                <h3 className="font-bold text-lg">
                  {isLogin ? "Sign In" : "Sign Up"}
                </h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {!isLogin && (
                    <div>
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-300 pt-5"
                      >
                        Username
                      </label>
                      <input
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                        className="input input-bordered w-full"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>
                  )}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 pt-5"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="input input-bordered w-full"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-300"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      className="input input-bordered w-full"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <button type="submit" className="btn btn-primary">
                      {isLogin ? "Sign In" : "Sign Up"}
                    </button>
                  </div>
                </form>
                <p className="text-center text-sm text-gray-300 py-4">
                  {isLogin ? (
                    <>
                      Or
                      <button
                        onClick={() => setIsLogin(false)}
                        className="text-blue-400 hover:text-blue-600 underline ml-1"
                      >
                        sign up
                      </button>
                      if you don&apos;t have an account.
                    </>
                  ) : (
                    <>
                      Already have an account?
                      <button
                        onClick={() => setIsLogin(true)}
                        className="text-blue-400 hover:text-blue-600 underline ml-1"
                      >
                        Login
                      </button>
                    </>
                  )}
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* This button will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
