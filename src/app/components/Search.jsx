"use client";

import { useState } from "react";
import { CiSearch } from "react-icons/ci";


const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="w-[237px] bg-white p-4 border border-gray-200 rounded-lg shadow-md">
      <h1 className="text-black mb-2">Search for a specific item</h1>
    <div className="relative">
      <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 scale-150" />
      <input
        className="w-full pr-3 pl-1 py-1 rounded-md border-2 border-pink-300 text-black placeholder-gray-400 focus:placeholder-transparent focus:outline-none focus:border-purple-500"
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
     />
      </div>
    </div>
  );
};

export default Search;
