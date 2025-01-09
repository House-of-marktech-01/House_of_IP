import React, { useState, useMemo } from "react";
import Fuse from "fuse.js";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import "./SearchBox.scss"; // Add your CSS here
import { useNavigate } from "react-router-dom";

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
    title: "Services",
    description: "Services by House of IP",
    url: "/service",
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
  const navigate = useNavigate(); // Initialize navigate hook
  

  // Memoizing the Fuse instance
  const fuse = useMemo(
    () =>
      new Fuse(searchIndex, {
        keys: ["title", "description"],
        threshold: 0.3,
      }),
    []
  );

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

  const handleResultClick = (url) => {
    navigate(url);
    setSearchText("");
    setResults([]);
  };

  return (
    <div className={`search-container  mt-4 ${isOpen ? "search-open" : ""}`}>
      {/* Search Button */}

      {/* Search Box */}
      <div className="search ml-7 mt-3 lg:ml-0 lg:mt-0">
        <input
          type="text"
          placeholder=" "
          className=""
          value={searchText}
          onChange={handleInputChange}
        />
        <div>
          <svg>
            <use xlinkHref="#path" />
          </svg>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
          <symbol
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 160 28"
            id="path"
          >
            <path
              d="M32.9418651,-20.6880772 C37.9418651,-20.6880772 40.9418651,-16.6880772 40.9418651,-12.6880772 C40.9418651,-8.68807717 37.9418651,-4.68807717 32.9418651,-4.68807717 C27.9418651,-4.68807717 24.9418651,-8.68807717 24.9418651,-12.6880772 C24.9418651,-16.6880772 27.9418651,-20.6880772 32.9418651,-20.6880772 L32.9418651,-29.870624 C32.9418651,-30.3676803 33.3448089,-30.770624 33.8418651,-30.770624 C34.08056,-30.770624 34.3094785,-30.6758029 34.4782612,-30.5070201 L141.371843,76.386562"
              transform="translate(83.156854, 22.171573) rotate(-225.000000) translate(-83.156854, -22.171573)"
            ></path>
          </symbol>
        </svg>
      </div>
      {/* Results Dropdown */}
      {results.length > 0 && (
        <div className="results-dropdown">
          {results.map((result) => (
            <div
              key={result.id}
              className="result-item"
              onClick={() => handleResultClick(result.url)}
            >
              <h4>{result.title}</h4>
              <p>{result.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
