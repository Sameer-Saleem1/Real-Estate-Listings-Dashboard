import { useState, useMemo } from "react";
import useProperties from "../hooks/useProperties";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import { Link } from "react-router-dom";

const PropertyListPage = () => {
  const { properties, loading, error } = useProperties();
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<{
    bedrooms?: number;
    sort?: "asc" | "desc";
  }>({});

  const filteredProperties = useMemo(() => {
    let result = [...properties];

    if (filters.bedrooms) {
      result = result.filter((p) => p.bedrooms >= (filters.bedrooms ?? 0));
    }

    if (search.trim()) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (filters.sort) {
      result.sort((a, b) =>
        filters.sort === "asc" ? a.price - b.price : b.price - a.price
      );
    }

    return result;
  }, [properties, filters, search]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        <SearchBar onSearch={setSearch} />
        <Filter onFilter={setFilters} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProperties.length > 0 ? (
          filteredProperties.map(
            ({ id, image, title, price, bedrooms, location }) => (
              <Link key={id} to={`/property/${id}`}>
                <Card
                  img={image}
                  title={title}
                  price={price}
                  bedrooms={bedrooms}
                  location={location}
                />
              </Link>
            )
          )
        ) : (
          <p className="col-span-full text-center text-gray-500 py-10">
            No properties found. Try adjusting your filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default PropertyListPage;
