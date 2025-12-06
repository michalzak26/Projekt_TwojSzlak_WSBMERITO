import { Filter, ArrowUpDown } from "lucide-react";

export default function AttractionsFilters({
  sortBy,
  setSortBy,
  category,
  setCategory,
}) {
  return (
    <div className="flex items-center justify-between mb-3 gap-2 text-sm">
      <div className="flex items-center gap-2">
        <Filter className="w-4 h-4" />
        <span>Kategoria:</span>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="all">Wszystkie</option>
          <option value="cultural">Kultura / muzea</option>
          <option value="historic">Zabytki / architektura</option>
          <option value="natural">Natura / parki</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <ArrowUpDown className="w-4 h-4" />
        <span>Sortuj:</span>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="distance">Odległość</option>
          <option value="rating">Ocena</option>
          <option value="name">Nazwa</option>
        </select>
      </div>
    </div>
  );
}
