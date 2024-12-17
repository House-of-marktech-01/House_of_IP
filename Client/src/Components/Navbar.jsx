import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiPlus, FiMinus } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Fuse from "fuse.js";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(Cookies.get("jwtToken"));
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const searchIndex = [
    {
      id: 1,
      title: "About",
      description:
        "About House of IP,How We Began,Our Evolution,Our Expertise: Where Innovation Meets Humanity,Intellectual Property Rights (IPR),Matrimonial Cases,Vision,Mission,Our Evolution",
      url: "/about",
    },
    {
      id: 2,
      title: "Copyright,",
      description:
        "Comprehensive Copyright Solutions,Our Expertise Includes:,Expert Representation in Copyright Disputes,Copyright FAQ's,Your Copyright Registration Process",
      url: "/copyright",
    },
    {
      id: 3,
      title: "Design",
      description: "Design,Design FAQ's,Registering a Design in India",
      url: "/design",
    },
    {
      id: 4,
      title: "Patent",
      description: "Patent,Patent FAQ's,Securing a Patent in India",
      url: "/patent",
    },
    {
      id: 5,
      title: "Trademark",
      description: "Trademark,Trademark FAQ's,Trademark Filing and Protection",
      url: "/trademark",
    },
    {
      id: 6,
      title: "Contact",
      description: "Contact",
      url: "/contact",
    },
    {
      id: 7,
      title: "Book an appointment",
      description: "appointment",
      url: "/appointment",
    },
    {
      id:8,
      title:"Practice Areas",
      description:"practice,copyright,trademark,design,patent"
    }
  ];

  const fuse = new Fuse(searchIndex, {
    keys: ["title", "description"],
    threshold: 0.3, // Adjust for strictness of matches
  });

  useEffect(() => {
    // Add keydown event listener
    const handleKeydown = (e) => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault(); // Prevent the browser's default action
        document.getElementById("modal3").showModal();
      } else if (e.key === "Escape") {
        document.getElementById("modal3").close();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  useEffect(() => {
    const token = Cookies.get("jwtToken");
    setToken(token);
    setIsLogin(!token); // If no token, set to login
  }, []); // Only run on component mount

  const handleSearch = (e) => {
    const input = e.target.value;
    setSearchQuery(input); // Update search query
    if (input.trim() === "") {
      setResults([]); // Clear results if the search query is empty
    } else {
      const searchResults = fuse.search(input).map((result) => result.item);
      setResults(searchResults); // Update results based on Fuse search
    }
  };

  const handleNavigate = (url) => {
    setSearchQuery("");
    setResults([]);
    navigate(url); // Navigate to the result's URL
    document.getElementById("modal3").close(); // Close the modal
  };

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
    <>
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
                to="/about"
                className="text-white hover:text-blue-600 font-medium"
              >
                About
              </NavLink>
              <NavLink
                to="/practice"
                className="text-white hover:text-blue-600 font-medium"
              >
                Practice Areas
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
              <div>
                <button
                  onClick={() => document.getElementById("modal3").showModal()}
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>

                <dialog id="modal3" className="modal">
                  <div className="modal-box bg-slate-900">
                    <div className="modal-action flex flex-col">
                      <form
                        onSubmit={(e) => e.preventDefault()} // Prevent page reload on submit
                        className="m-auto"
                      >
                        <label className="input input-bordered flex items-center">
                          <input
                            type="text"
                            className="grow"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={handleSearch} // Bind input to state
                          />
                          <kbd className="kbd kbd-sm">⌘</kbd>
                          <kbd className="kbd kbd-sm">K</kbd>
                        </label>
                        <button
                          type="button"
                          className="btn"
                          onClick={() =>
                            document.getElementById("modal3").close()
                          }
                        >
                          Esc
                        </button>
                      </form>

                      {/* Display search results */}
                      <div className="results">
                        {results.length > 0 ? (
                          <ul>
                            {results.map((result) => (
                              <li
                                className="text-center pt-3 pb-3"
                                key={result.id}
                              >
                                <button
                                  onClick={() => handleNavigate(result.url)}
                                >
                                  {result.title}
                                </button>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <div>
                            <p className="text-center">No results found</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </dialog>
              </div>
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
                        className="block text-sm font-medium text-gray-300 pt-5 pb-3"
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
                        className="block text-sm font-medium text-gray-300 pb-3"
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
                to="/about"
                className="block px-4 py-2 text-gray-500 hover:bg-slate-800"
              >
                About
              </NavLink>
              <NavLink
                to="/practice"
                className="block px-4 py-2 text-gray-500 hover:bg-slate-800"
              >
                Practice Areas
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
              <div className="flex flex-row">
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
                <button
                  onClick={() => document.getElementById("modal4").showModal()}
                  className="pl-5 bg-slate-800 px-5 ml-3 rounded-lg"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <dialog id="modal4" className="modal">
                  <div className="modal-box bg-slate-900">
                    <div className="modal-action flex flex-col gap-4">
                      {/* Search Input */}
                      <label className="input input-bordered flex items-center">
                        <input
                          type="text"
                          className="grow bg-slate-800 text-white px-4 py-2 rounded-lg"
                          placeholder="Search"
                          value={searchQuery}
                          onChange={(e) => handleSearch(e)} // Bind input to search logic
                        />
                        <kbd className="kbd kbd-sm">⌘</kbd>
                        <kbd className="kbd kbd-sm">K</kbd>
                      </label>

                      {/* Search Results */}
                      <div className="bg-slate-800 rounded-lg text-white p-4 max-h-60 overflow-y-auto">
                        {results.length > 0 ? (
                          results.map((result) => (
                            <div
                              key={result.id}
                              className="p-2 hover:bg-slate-700 cursor-pointer rounded-lg"
                              onClick={() => handleNavigate(result.url)}
                            >
                              <strong>{result.title}</strong>
                              <p className="text-sm">{result.description}</p>
                            </div>
                          ))
                        ) : (
                          <p className="text-gray-400 text-center">
                            No results found.
                          </p>
                        )}
                      </div>

                      {/* Buttons */}
                      <div className="flex justify-end gap-2">
                        <button
                          className="btn btn-error"
                          onClick={() =>
                            document.getElementById("modal4").close()
                          }
                        >
                          Esc
                        </button>
                      </div>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
