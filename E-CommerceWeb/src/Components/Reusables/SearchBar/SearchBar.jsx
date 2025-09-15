import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="w-5/6 px-4">
      <div className="flex w-full bg-white shadow-md rounded-full overflow-hidden border border-gray-200 ">
        {/* Search Icon */}
        <div className="flex items-center justify-center px-4 text-gray-500">
          <IoSearchOutline className="text-md" />
        </div>

        {/* Input */}
        <input
          type="text"
          placeholder="Search for products, brands and more"
          className="w-full text-gray-700 outline-none"
        />

        {/* Search Button */}
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-1 rounded-r-full transition">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
