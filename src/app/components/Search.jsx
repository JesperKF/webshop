"use client";

import { useState } from "react";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="w-[237px] bg-white p-4 border border-gray-200 rounded-lg shadow-md">
      <h1 className="text-black mb-2">Search for a specific item</h1>
      <input
        className="rounded-md border-2 border-pink-300 text-black focus:outline-none focus:border-purple-500"
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
