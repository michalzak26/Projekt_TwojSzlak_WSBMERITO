import { CATEGORIES } from "./TipCategories.js";
import { Filter, Layers } from "lucide-react";

export default function TipsFilters({ category, setCategory }) {
  return (
    <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-xl shadow-emerald-900/5 border border-emerald-100 flex flex-col gap-4">
      {/* NAGŁÓWEK FILTRÓW */}
      <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm uppercase tracking-wide ml-1">
        <Filter className="w-4 h-4" />
        Filtruj tematy
      </div>

      {/* LISTA PRZYCISKÓW */}
      <div className="flex flex-wrap gap-2">
        {/* Przycisk: WSZYSTKIE */}
        <button
          onClick={() => setCategory("all")}
          className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 border flex items-center gap-2 ${
            category === "all"
              ? "bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-600/20 transform scale-105"
              : "bg-white text-gray-600 border-gray-200 hover:border-emerald-300 hover:text-emerald-700 hover:bg-emerald-50"
          }`}
        >
          <Layers className="w-4 h-4" />
          Wszystkie
        </button>

        {/* Przyciski: KATEGORIE */}
        {CATEGORIES.map((cat) => {
          const isActive = category === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 border ${
                isActive
                  ? "bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-600/20 transform scale-105"
                  : "bg-white text-gray-600 border-gray-200 hover:border-emerald-300 hover:text-emerald-700 hover:bg-emerald-50"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
