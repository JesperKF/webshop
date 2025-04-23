"use client";

import { useState } from "react";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value); // Call onSearch with the query
  };

  return (
    <div className="w-[237px] bg-white p-4 border border-gray-200 rounded-lg shadow-md">
      <h1 className="text-black mb-2">Search</h1>
      <input
        className="rounded-md bg-gradient-to-br from-purple-700/80 to-red-500/80 text-white"
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
