import { MapPin, ImageIcon, Plus, Check, Star, Navigation } from "lucide-react";
import {
  getName,
  getRating,
  getId,
  getThumb,
} from "../../lib/lib_attractions/lib_utils.js";
import { translateCategories } from "../../lib/lib_attractions/translateCategories";

export default function AttractionsList({
  filtered,
  loading,
  isInTodo,
  toggleTodo,
  selectedId,
  setSelectedId,
  mapRef,
  biasEnabled,
}) {
  // 1. STAN ŁADOWANIA
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-gray-400 py-10">
        <div className="w-8 h-8 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin mb-3" />
        <p className="text-sm font-medium">Szukam ciekawych miejsc...</p>
      </div>
    );
  }

  // 2. BRAK WYNIKÓW
  if (!filtered || filtered.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-gray-400 py-10 text-center">
        <MapPin className="w-10 h-10 mb-2 opacity-20" />
        <p className="text-sm font-medium">Brak atrakcji w tej okolicy.</p>
        <p className="text-xs">Spróbuj zmienić kategorię lub przesuń mapę.</p>
      </div>
    );
  }

  // 3. LISTA ATRAKCJI
  return (
    <div className="flex-1 overflow-y-auto h-full max-h-full pr-3 space-y-3 custom-scrollbar scroll-smooth">
      {filtered.map((a) => {
        const id = getId(a);
        const p = a.properties;
        const thumb = getThumb(a);
        const rating = getRating(a);
        const added = isInTodo(a);
        const isSelected = id === selectedId;

        return (
          <div
            key={id}
            // Zapewnia, że wybrana atrakcja zawsze będzie widoczna w pasku
            ref={
              isSelected
                ? (el) =>
                    el?.scrollIntoView({ behavior: "smooth", block: "nearest" })
                : null
            }
            onClick={() => {
              setSelectedId(id);
              if (mapRef.current) {
                mapRef.current.setView([p.lat, p.lon], 15, {
                  animate: true,
                });
              }
            }}
            className={`group flex gap-4 p-3 rounded-2xl border transition-all duration-200 cursor-pointer ${
              isSelected
                ? "bg-emerald-50/50 border-emerald-500 shadow-md ring-1 ring-emerald-500"
                : "bg-white border-gray-100 hover:border-emerald-300 hover:shadow-lg"
            }`}
          >
            <div className="flex-1 flex flex-col justify-between min-w-0">
              <div>
                <h3
                  className={`font-bold text-sm leading-tight mb-1 truncate ${
                    isSelected
                      ? "text-emerald-800"
                      : "text-gray-900 group-hover:text-emerald-700"
                  }`}
                >
                  {getName(a)}
                </h3>
                <p className="text-xs text-gray-500 truncate">
                  {translateCategories(p.categories)}
                </p>
              </div>

              <div className="flex items-center gap-3 mt-2">
                {rating > 0 && (
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-500 bg-amber-50 px-1.5 py-0.5 rounded-md">
                    <Star className="w-3 h-3 fill-current" /> {rating}
                  </div>
                )}
                {biasEnabled && p.distance != null && (
                  <div className="flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">
                    <Navigation className="w-3 h-3" /> {Math.round(p.distance)}{" "}
                    m
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleTodo(a);
                }}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                  added
                    ? "bg-red-50 text-red-600 border border-red-100"
                    : "bg-emerald-50 text-emerald-600 border border-emerald-100 hover:bg-emerald-600 hover:text-white"
                }`}
              >
                {added ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <Plus className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
