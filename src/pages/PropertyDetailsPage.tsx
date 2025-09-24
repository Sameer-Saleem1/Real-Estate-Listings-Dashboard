// src/pages/PropertyDetailsPage.tsx
import { useParams, Link } from "react-router-dom";
import { useProperties } from "../hooks/useProperties";
// import MapView from "../Maps/MapView";

interface Property {
  id: string;
  image: string;
  title: string;
  price: number;
  bedrooms: number;
  location: string;
}
export default function PropertyDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { properties, loading } = useProperties();

  if (loading) {
    return <p className="text-center mt-8 text-gray-500">Loading...</p>;
  }

  const property: Property | undefined = properties.find(
    (p) => p.id.toString() === id
  );

  if (!property) {
    return (
      <div className="flex flex-col items-center justify-center mt-10">
        <p className="text-lg text-gray-600 mb-4">Property not found.</p>
        <Link
          to="/"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Back to Listings
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Link
        to="/"
        className="inline-block text-blue-300 tracking-wide mb-6 font-semibold hover:underline"
      >
        &#8592; Back to Listings
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-auto object-cover rounded-lg shadow"
        />

        <div className="p-5 rounded-lg  border-black border-2 space-y-2 md:space-y-4">
          <h1 className="text-xl font-semibold md:text-2xl md:font-bold">
            {property.title}
          </h1>
          <p className="text-lg md:text-xl font-semibold text-green-700">
            ${property.price.toLocaleString()}
          </p>

          <div className="flex flex-wrap gap-4 text-gray-300">
            <span>{property.bedrooms} Bedrooms</span>
          </div>
          <p className="text-gray-400">Location: {property.location}</p>
        </div>
      </div>

      {/* <h3>Map to the Location</h3>
      <MapView lat={property.lat} lng={property.lng} title={property.title} /> */}
    </div>
  );
}
