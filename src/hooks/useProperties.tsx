/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect, useId } from "react";

interface Property {
  id: string;
  image: string;
  title: string;
  price: number;
  bedrooms: number;
  location: string;
}

const API_URL =
  "https://s3.us-central-1.wasabisys.com/mashvisor-cdn/task-fe-listings.json";

export const useProperties = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) {
          throw new Error("Network response not ok");
        }
        const data: Property[] = await res.json();
        setProperties(data);
        setLoading(false);
      } catch (err) {
        setError((err as Error).message);
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  return { properties, loading, error };
};
export default useProperties;
