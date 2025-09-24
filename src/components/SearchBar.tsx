import React, { useState } from "react";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search properties..."
        className="border px-4 py-2 rounded w-full md:w-100"
      />
      <button
        type="submit"
        className="bg-blue-300 text-black font-semibold tracking-wide px-4 rounded cursor-pointer"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
