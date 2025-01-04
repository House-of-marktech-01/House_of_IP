import React, { useState, useMemo } from "react";
import Fuse from "fuse.js";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import "./SearchBox.scss"; // Add your CSS here

const searchIndex = [
  { id: 1, title: "About", description: "About House of IP...", url: "/about" },
  {
    id: 2,
    title: "Copyright",
    description: "Comprehensive Copyright...",
    url: "/copyright",
  },
  { id: 3, title: "Design", description: "Design FAQ's...", url: "/design" },
  { id: 4, title: "Patent", description: "Patent FAQ's...", url: "/patent" },
  {
    id: 5,
    title: "Trademark",
    description: "Trademark Filing...",
    url: "/trademark",
  },
  { id: 6, title: "Contact", description: "Contact", url: "/contact" },
  {
    id: 7,
    title: "Book an Appointment",
    description: "Appointment...",
    url: "/appointment",
  },
  {
    id: 8,
    title: "Practice Areas",
    description: "Practice Areas...",
    url: "/practice",
  },

  // Added trademark-related pages
  {
    id: 9,
    title: "Trademark Opposition",
    description: "Trademark Opposition process...",
    url: "/trademarkopposition",
  },
  {
    id: 10,
    title: "Trademark Hearing",
    description: "Trademark Hearing details...",
    url: "/trademarkhearing",
  },
  {
    id: 11,
    title: "Trademark Objection",
    description: "Trademark Objection procedure...",
    url: "/trademarkobjection",
  },
  {
    id: 12,
    title: "Trademark Rectification",
    description: "Trademark Rectification process...",
    url: "/trademarkrectification",
  },
  {
    id: 13,
    title: "Trademark Renewal",
    description: "Trademark Renewal details...",
    url: "/trademarkrenewal",
  },
  {
    id: 14,
    title: "Trademark Assignment",
    description: "Trademark Assignment process...",
    url: "/trademarkassignment",
  },
  {
    id: 15,
    title: "Expedited Trademark",
    description: "Expedited Trademark Filing...",
    url: "/expeditedtm",
  },
  {
    id: 16,
    title: "International Trademark",
    description: "International Trademark filing and guidelines...",
    url: "/intertm",
  },

  // Added copyright-related pages
  {
    id: 17,
    title: "Copyright Objection",
    description: "Copyright Objection process...",
    url: "/copyrightobjection",
  },
  {
    id: 18,
    title: "Copyright Assignment",
    description: "Copyright Assignment procedure...",
    url: "/copyrightassignment",
  },

  // Added design-related pages
  {
    id: 19,
    title: "Design Objection",
    description: "Design Objection process...",
    url: "/designobjection",
  },
  {
    id: 20,
    title: "Design Assignment",
    description: "Design Assignment procedure...",
    url: "/designassignment",
  },

  // Added patent-related pages
  {
    id: 21,
    title: "Patent Examination",
    description: "Patent Examination process...",
    url: "/patentexam",
  },
  {
    id: 22,
    title: "Patent Renewal",
    description: "Patent Renewal details...",
    url: "/patentrenewal",
  },
];

const SearchBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);

  // Memoizing the Fuse instance so it is not recreated on every render
  const fuse = useMemo(
    () =>
      new Fuse(searchIndex, {
        keys: ["title", "description"],
        threshold: 0.3, // Adjust for strictness of matches
      }),
    []
  );

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => {
    setIsOpen(false);
    setSearchText("");
    setResults([]);
  };

  const handleInputChange = (e) => {
    const text = e.target.value;
    setSearchText(text);

    if (text.trim() === "") {
      setResults([]);
    } else {
      const searchResults = fuse.search(text);
      setResults(searchResults.map((result) => result.item));
    }
  };

  return (
    <div className={`search-container ${isOpen ? "search-open" : ""}`}>
      {/* Search Button */}
      <a
        href="#"
        className="search-btn rounded-md"
        onClick={(e) => {
          e.preventDefault();
          handleOpen();
        }}
      >
        Search<i className="fa fa-search"></i>
      </a>

      {/* Search Box */}
      <div className={`search-box ${isOpen ? "search-open" : ""}`}>
        <button className="close" onClick={handleClose}>
          x
        </button>
        <div className="inner row">
          <div className="small-12 columns">
            <label
              className={`placeholder hidden lg:block ${
                searchText ? "move-up" : ""
              }`}
              htmlFor="search-field"
            >
              {searchText ? "searching..." : "Type something..."}
            </label>
            <input
              type="text"
              id="search-field"
              value={searchText}
              onChange={handleInputChange}
              className="lg:w-[100%] focus:outline-none w-[90%] relative bottom-24 lg:bottom-0 lg:right-0 right-10"
            />
            <button
              className="submit hidden lg:block bg-"
              type="submit"
              disabled={!searchText.trim()}
            >
              Search
            </button>
            <button
              className="bg-transparent lg:hidden bottom-40  p-4 rounded-md py-6 left-36 relative"
              type="submit"
              disabled={!searchText.trim()}
            >
              Search
            </button>
          </div>
        </div>

        {/* Display Search Results */}
        <div className="results lg:w-96 relative lg:top-36 top-36 lg:left-96">
          {results.length > 0 ? (
            <ul>
              {results.map((result) => (
                <li
                  className="text-center pt-3 pb-3"
                  key={result.id}
                >
                  {/* Replace with NavLink for proper routing */}
                  <NavLink
                    to={result.url}
                    className="text-xl hover:bg-slate-900 lg:p-4 rounded-xl"
                  >
                    {result.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : searchText.trim() ? (
            <div>
              <p className="text-center">No results found</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
