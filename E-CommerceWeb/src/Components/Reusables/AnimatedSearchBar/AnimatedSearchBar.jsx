import React, { useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const AnimatedSearchBar = ({ showSearch, setShowSearch }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  // Dummy product data (replace with API)
  const products = [
    "Shoes",
    "Shirts",
    "Jewellery",
    "Bags",
    "Accessories",
    "Smart Watch",
    "Headphones",
  ];

  useEffect(() => {
    if (query.trim() === "") {
      setSuggestions([]);
    } else {
      setSuggestions(
        products.filter((item) =>
          item.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  }, [query]);

  return (
    <>
      {showSearch && (
        <div className="fixed inset-0 bg-white bg-opacity-95 z-50 flex flex-col p-6 animate-fadeIn">
          {/* Top Row */}
          <div className="flex items-center border-b border-gray-300 pb-3">
            <IoSearchOutline className="text-2xl text-gray-600 mr-2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for products, brands..."
              autoFocus
              className="w-full text-xl outline-none bg-transparent"
            />
            <button
              onClick={() => {
                setShowSearch(false);
                setQuery("");
              }}
              className="ml-4 text-gray-600 hover:text-black text-xl"
            >
              ✕
            </button>
          </div>

          {/* Suggestions */}
          <div className="mt-4 overflow-y-auto">
            {suggestions.length > 0 ? (
              <ul className="space-y-2">
                {suggestions.map((item, idx) => (
                  <li
                    key={idx}
                    className="p-2 cursor-pointer hover:bg-gray-100 rounded"
                    onClick={() => {
                      setQuery(item);
                      setShowSearch(false);
                      navigate(`/search?query=${item}`);
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : query ? (
              <p className="text-gray-500">No results found</p>
            ) : (
              <p className="text-gray-400">Start typing to search...</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AnimatedSearchBar;
