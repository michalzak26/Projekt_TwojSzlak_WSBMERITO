import { Plus, Package, Tag } from "lucide-react";

export default function PackingAddItem({
  item,
  setItem,
  category,
  setCategory,
  categories,
  onAdd,
}) {
  // Obsługa dodawania
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onAdd();
    }
  };

  return (
    <section className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-xl shadow-emerald-900/5 border border-emerald-100 flex flex-col h-full">
      {/* NAGŁÓWEK */}
      <div className="flex items-center gap-2 mb-5">
        <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
          <Plus className="w-5 h-5" />
        </div>
        <h3 className="font-bold text-emerald-900 text-lg">Dodaj przedmiot</h3>
      </div>

      {/* FORMULARZ */}
      <div className="space-y-4 flex-grow">
        {/* Pole: Nazwa */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1 ml-1">
            Nazwa rzeczy
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              <Package className="w-4 h-4" />
            </div>
            <input
              value={item}
              onChange={(e) => setItem(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="np. Ładowarka, Krem UV..."
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm font-medium"
            />
          </div>
        </div>

        {/* Pole: Kategoria */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1 ml-1">
            Kategoria
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              <Tag className="w-4 h-4" />
            </div>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full pl-10 pr-8 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all appearance-none cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.label} {cat.icon}
                </option>
              ))}
            </select>
            {/* Customowa strzałka */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Przycisk Dodaj */}
        <button
          onClick={onAdd}
          disabled={!item.trim()}
          className="w-full py-3 bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 hover:-translate-y-0.5 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none transition-all flex items-center justify-center gap-2 mt-2"
        >
          <Plus className="w-5 h-5" />
          Dodaj do listy
        </button>
      </div>
    </section>
  );
}
