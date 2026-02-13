import { Search, MapPin, Loader2 } from "lucide-react";

export default function AttractionsSearch({
  city,
  setCity,
  searchingCity,
  geocodeCity,
}) {
  // Obsługa klawisza
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      geocodeCity();
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-md p-4 md:p-6 rounded-3xl shadow-xl shadow-emerald-900/5 border border-emerald-100 flex flex-col md:flex-row gap-4 items-stretch md:items-center transition-all">
      {/* POLE TEKSTOWE */}
      <div className="relative flex-1 group">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-600 transition-colors">
          <MapPin className="w-5 h-5" />
        </div>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-medium"
          placeholder="Wpisz miasto (np. Zakopane, Gdańsk)..."
        />
      </div>

      {/* PRZYCISK SZUKAJ */}
      <button
        onClick={geocodeCity}
        disabled={searchingCity || !city.trim()}
        className="px-8 py-3.5 bg-emerald-600 text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-emerald-700 active:scale-95 shadow-lg shadow-emerald-600/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none transition-all"
      >
        {searchingCity ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <Search className="w-5 h-5" />
        )}
        <span>{searchingCity ? "Szukam..." : "Szukaj"}</span>
      </button>
    </div>
  );
}
