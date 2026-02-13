import { Link } from "react-router-dom";
import { Filter, ArrowUpDown, MapPin, Check, ListTodo } from "lucide-react";

export default function AttractionsFilters({
  sortBy,
  setSortBy,
  category,
  setCategory,
  biasEnabled,
  setBiasEnabled,
}) {
  return (
    <div className="flex flex-col gap-6">
      {/* GÓRNY RZĄD: Filtry i Sortowanie */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* 1. KATEGORIA */}
        <div className="relative flex-1 min-w-[200px]">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-600 pointer-events-none">
            <Filter className="w-4 h-4" />
          </div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full appearance-none pl-10 pr-8 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all cursor-pointer hover:border-emerald-300"
          >
            <option value="all">Wszystkie kategorie</option>
            <option value="tourism">🏰 Turystyka</option>
            <option value="nature">🌳 Natura</option>
            <option value="entertainment">🎢 Rozrywka</option>
            <option value="leisure">⚽ Rekreacja</option>
            <option value="catering">🍔 Gastronomia</option>
            <option value="commercial">🛍️ Zakupy</option>
            <option value="health">🏥 Zdrowie</option>
            <option value="religion">⛪ Religia</option>
            <option value="transport">🚌 Transport</option>
            <option value="service">🔧 Usługi</option>
          </select>
          {/* Strzałka selecta */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
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

        {/* 2. SORTOWANIE */}
        <div className="relative w-full sm:w-auto min-w-[180px]">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-600 pointer-events-none">
            <ArrowUpDown className="w-4 h-4" />
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full appearance-none pl-10 pr-8 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all cursor-pointer hover:border-emerald-300"
          >
            <option value="distance">Najbliżej (Dystans)</option>
            <option value="name">Alfabetycznie (A-Z)</option>
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
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

      <div className="h-px bg-gray-100 w-full" />

      {/* DOLNY RZĄD: Opcje Mapy i Link */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* 3. CHECKBOX */}
        <label className="flex items-center gap-3 cursor-pointer group select-none">
          <div
            className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
              biasEnabled
                ? "bg-emerald-600 border-emerald-600"
                : "bg-white border-gray-300 group-hover:border-emerald-400"
            }`}
          >
            {biasEnabled && (
              <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
            )}
          </div>
          <input
            type="checkbox"
            checked={biasEnabled}
            onChange={(e) => setBiasEnabled(e.target.checked)}
            className="hidden"
          />
          <span
            className={`text-sm font-medium transition-colors ${
              biasEnabled ? "text-emerald-900" : "text-gray-600"
            }`}
          >
            Szukaj blisko pinezki mapy
            <span className="ml-1.5 inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </span>
        </label>

        {/* 4. LINK DO LISTY */}
        <Link
          to="/todoAttractions"
          className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-bold shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 hover:-translate-y-0.5 transition-all"
        >
          <ListTodo className="w-4 h-4" />
          Lista „Do zwiedzenia”
        </Link>
      </div>
    </div>
  );
}
