import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useTodoAttractions } from "../hooks/useTodoAttractions.js";
import { useCityGeocode } from "../hooks/useCityGeocode.js";
import { useAttractions } from "../hooks/useAttractions.js";
import { useMapCenterFromURL } from "../hooks/useMapCenterFromURL.js";

import Navbar from "../components/Navbar.jsx";
import AttractionsHeader from "../components/attractions/AttractionsHeader.jsx";
import AttractionsSearch from "../components/attractions/AttractionsSearch.jsx";
import AttractionsMap from "../components/attractions/AttractionsMap.jsx";
import AttractionsFilters from "../components/attractions/AttractionsFilters.jsx";
import AttractionsList from "../components/attractions/AttractionsList.jsx";

export function AttractionsPage() {
  const [searchParams] = useSearchParams();

  const [center, setCenter] = useState([52.2297, 21.0122]);
  useMapCenterFromURL(searchParams, setCenter);

  const [sortBy, setSortBy] = useState("distance");
  const [category, setCategory] = useState("all");
  const [selectedId, setSelectedId] = useState(null);
  const mapRef = useRef(null);

  const { todoList, isInTodo, toggleTodo } = useTodoAttractions();

  const { city, setCity, searchingCity, geocodeCity } =
    useCityGeocode(setCenter);

  const { attractions, loading, filtered } = useAttractions(
    center,
    sortBy,
    category
  );

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <Navbar />
      <AttractionsHeader />

      <AttractionsSearch
        city={city}
        setCity={setCity}
        searchingCity={searchingCity}
        geocodeCity={geocodeCity}
      />

      <section className="grid lg:grid-cols-2 gap-6">
        <AttractionsMap
          center={center}
          setCenter={setCenter}
          filtered={filtered}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          mapRef={mapRef}
        />

        <div className="bg-white p-4 rounded-2xl shadow flex flex-col h-[480px]">
          <AttractionsFilters
            sortBy={sortBy}
            setSortBy={setSortBy}
            category={category}
            setCategory={setCategory}
          />

          <AttractionsList
            filtered={filtered}
            loading={loading}
            isInTodo={isInTodo}
            toggleTodo={toggleTodo}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            mapRef={mapRef}
          />
        </div>
      </section>
    </div>
  );
}
