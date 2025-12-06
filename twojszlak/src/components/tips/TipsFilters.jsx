import { CATEGORIES } from "./TipCategories.js";
import { Filter } from "lucide-react";

export default function TipsFilters({ category, setCategory }) {
  return (
    <div className="flex flex-wrap items-center gap-3 bg-white p-4 rounded-xl shadow text-sm">
      <div className="flex items-center gap-2 font-semibold">
        <Filter className="w-4 h-4 text-gray-600" />
        Filtr:
      </div>

      <button
        className={`px-3 py-1 rounded-lg border ${
          category === "all"
            ? "bg-green-600 text-white border-green-600"
            : "bg-white text-gray-700 hover:bg-gray-100"
        }`}
        onClick={() => setCategory("all")}
      >
        Wszystkie
      </button>

      {CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          onClick={() => setCategory(cat.id)}
          className={`px-3 py-1 rounded-lg border ${
            category === cat.id
              ? "bg-green-600 text-white border-green-600"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
