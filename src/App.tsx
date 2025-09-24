import { Routes, Route } from "react-router-dom";
import PropertyListPage from "./pages/PropertyListPage";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";

function App() {
  return (
    <>
      <h1 className="text-2xl md:text-3xl text-center mt-5 font-bold tracking-wide">
        Real Estate Listing Dashboard
      </h1>
      <h5 className="text-sm font-semibold tracking-wider text-center mt-3 mb-5">
        Assigned by Mashvisor
      </h5>
      <Routes>
        <Route path="/" element={<PropertyListPage />} />
        <Route path="/property/:id" element={<PropertyDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
