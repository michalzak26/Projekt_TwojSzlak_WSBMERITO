import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useTodoAttractions } from "../hooks/useTodoAttractions.js";
import { useCityGeocode } from "../hooks/useCityGeocode.js";
import { useAttractions } from "../hooks/useAttractions.js";
import { useMapCenterFromURL } from "../hooks/useMapCenterFromURL.js";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import AttractionsHeader from "../components/attractions/AttractionsHeader.jsx";
import AttractionsSearch from "../components/attractions/AttractionsSearch.jsx";
import AttractionsMap from "../components/attractions/AttractionsMap.jsx";
import AttractionsFilters from "../components/attractions/AttractionsFilters.jsx";
import AttractionsList from "../components/attractions/AttractionsList.jsx";

export function AttractionsPage() {
  const [searchParams] = useSearchParams();

  // Domyślny punkt Warszawa
  const [center, setCenter] = useState([52.2297, 21.0122]);
  useMapCenterFromURL(searchParams, setCenter);

  const [sortBy, setSortBy] = useState("distance");
  const [category, setCategory] = useState("all");
  const [selectedId, setSelectedId] = useState(null);
  const mapRef = useRef(null);

  const [biasEnabled, setBiasEnabled] = useState(true);

  // HOOK lista „Do zwiedzenia”
  const { todoList, isInTodo, toggleTodo } = useTodoAttractions();

  // HOOK wyszukiwanie miasta
  const { city, setCity, searchingCity, geocodeCity } =
    useCityGeocode(setCenter);

  // HOOK pobieranie + filtrowanie atrakcji
  const { attractions, loading, filtered } = useAttractions(
    center,
    sortBy,
    category,
    5000, // PROMIEŃ = 5 km
    biasEnabled
  );

  return (
    <div className="min-h-screen flex flex-col font-sans relative selection:bg-emerald-200 selection:text-emerald-900">
      {/* TŁO DEKORACYJNE */}
      <div className="fixed inset-0 bg-gradient-to-b from-emerald-50/50 via-white to-gray-50 -z-10 pointer-events-none" />

      <Navbar />

      {/* GŁÓWNA ZAWARTOŚĆ */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* NAGŁÓWEK I WYSZUKIWARKA */}
        <section className="space-y-6">
          <AttractionsHeader />

          <AttractionsSearch
            city={city}
            setCity={setCity}
            searchingCity={searchingCity}
            geocodeCity={geocodeCity}
          />
        </section>
        {/* MAPA */}
        {/* Dodano ramkę i cień dla spójności */}
        <section className="rounded-3xl overflow-hidden shadow-xl shadow-emerald-900/10 border border-emerald-100 bg-white">
          <AttractionsMap
            center={center}
            setCenter={setCenter}
            filtered={filtered}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            mapRef={mapRef}
            biasEnabled={biasEnabled}
          />
        </section>
        <section className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-xl shadow-emerald-900/5 border border-emerald-100 flex flex-col h-[600px]">
          {/* FILTRY */}
          <div className="mb-6">
            <AttractionsFilters
              sortBy={sortBy}
              setSortBy={setSortBy}
              category={category}
              setCategory={setCategory}
              biasEnabled={biasEnabled}
              setBiasEnabled={setBiasEnabled}
            />
          </div>

          {/* LISTA (Scrollowalna wewnątrz kontenera) */}
          <div className="flex-1 overflow-y-auto h-full max-h-full pr-3 space-y-3 custom-scrollbar scroll-smooth">
            <AttractionsList
              filtered={filtered}
              loading={loading}
              isInTodo={isInTodo}
              toggleTodo={toggleTodo}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              mapRef={mapRef}
              biasEnabled={biasEnabled}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
