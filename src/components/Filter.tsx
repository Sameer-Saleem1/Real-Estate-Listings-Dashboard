import React, { useState } from "react";

type FilterProps = {
  onFilter: (filters: { bedrooms?: number; sort?: "asc" | "desc" }) => void;
};

const Filter: React.FC<FilterProps> = ({ onFilter }) => {
  const [bedrooms, setBedrooms] = useState("");
  const [sort, setSort] = useState<"asc" | "desc" | "">("");

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter({
      bedrooms: bedrooms ? Number(bedrooms) : undefined,
      sort: sort || undefined,
    });
  };

  return (
    <form onSubmit={handleApply} className="flex gap-4 p-4 flex-wrap">
      <input
        type="number"
        placeholder="Min Bedrooms"
        value={bedrooms}
        onChange={(e) => setBedrooms(e.target.value)}
        className="border px-3 py-2 rounded  "
      />
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value as "asc" | "desc" | "")}
        className="border  px-3 py-2 rounded outline-none cursor-pointer"
      >
        <option className="text-black  cursor-pointer" value="">
          Sort by Price
        </option>
        <option className="text-black cursor-pointer" value="asc">
          Low → High
        </option>
        <option className="text-black cursor-pointer" value="desc">
          High → Low
        </option>
      </select>
      <button
        type="submit"
        className="bg-blue-300 text-black font-semibold tracking-wide px-4 py-2 rounded cursor-pointer"
      >
        Apply
      </button>
    </form>
  );
};

export default Filter;
