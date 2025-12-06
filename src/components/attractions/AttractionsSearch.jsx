import { Search } from "lucide-react";

export default function AttractionsSearch({
  city,
  setCity,
  searchingCity,
  geocodeCity,
}) {
  return (
    <div className="flex gap-2 items-center bg-white p-4 rounded-xl shadow">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="flex-1 border rounded-lg p-2"
        placeholder="Wpisz miasto, np. Kraków"
      />

      <button
        onClick={geocodeCity}
        disabled={searchingCity}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700 disabled:opacity-50"
      >
        <Search className="w-4 h-4" />
        Szukaj
      </button>
    </div>
  );
}
