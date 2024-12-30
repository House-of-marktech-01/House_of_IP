import React, { useState, useMemo } from "react";
import Fuse from "fuse.js";
import "./SearchBox.scss"; // Add your CSS here

const searchIndex = [
  { id: 1, title: "About", description: "About House of IP...", url: "/about" },
  { id: 2, title: "Copyright", description: "Comprehensive Copyright...", url: "/copyright" },
  { id: 3, title: "Design", description: "Design FAQ's...", url: "/design" },
  { id: 4, title: "Patent", description: "Patent FAQ's...", url: "/patent" },
  { id: 5, title: "Trademark", description: "Trademark Filing...", url: "/trademark" },
  { id: 6, title: "Contact", description: "Contact", url: "/contact" },
  { id: 7, title: "Book an Appointment", description: "Appointment...", url: "/appointment" },
  { id: 8, title: "Practice Areas", description: "Practice Areas...", url: "/practice" },
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

  const handleNavigate = (url) => {
    // Implement navigation logic here (e.g., using React Router)
    console.log(`Navigating to ${url}`);
    window.location.href = url; // Replace with React Router's navigate method if applicable
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
              className={`placeholder hidden lg:block ${searchText ? "move-up" : ""}`}
              htmlFor="search-field"
            >
              {searchText ? "searching..." : "Type something..."}
            </label>
            <input
              type="text"
              id="search-field"
              value={searchText}
              onChange={handleInputChange}
              className="lg:w-[100%] focus:outline-none w-[90%] relative bottom-32 lg:bottom-0 lg:right-0 right-10"
            />
            <button
              className="submit hidden lg:block bg-"
              type="submit"
              disabled={!searchText.trim()}
            >
              Search
            </button>
            <button
              className="bg-transparent lg:hidden bottom-48 p-4 rounded-md py-6 left-36 relative"
              type="submit"
              disabled={!searchText.trim()}>
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
                  onClick={() => handleNavigate(result.url)}
                >
                  <button className="text-xl hover:bg-slate-900 lg:p-4 rounded-xl">{result.title}</button>
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
