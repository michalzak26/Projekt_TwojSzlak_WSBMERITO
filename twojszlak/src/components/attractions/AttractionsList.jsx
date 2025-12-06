import { MapPin, ImageIcon } from "lucide-react";
import {
  getName,
  getKinds,
  getDistMeters,
  getRating,
  getId,
  getThumb,
} from "../../lib/lib_attractions/lib_utils.js";

export default function AttractionsList({
  filtered,
  loading,
  isInTodo,
  toggleTodo,
  selectedId,
  setSelectedId,
  mapRef,
}) {
  if (loading)
    return <p className="text-sm text-gray-500">Ładowanie atrakcji…</p>;

  if (!filtered.length)
    return (
      <p className="text-sm text-gray-500">
        Brak atrakcji. Kliknij punkt na mapie lub wyszukaj miasto.
      </p>
    );

  return (
    <div className="flex-1 overflow-auto space-y-3">
      {filtered.map((a) => {
        const id = getId(a);
        const p = a.properties;
        const thumb = getThumb(a);
        const rating = getRating(a);

        return (
          <div
            key={id}
            className="flex gap-3 p-2 rounded-lg border hover:bg-gray-50"
          >
            {/* MINIATURA */}
            <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden">
              {thumb ? (
                <img
                  src={thumb}
                  alt={getName(a)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <ImageIcon className="w-8 h-8 text-gray-400 m-6" />
              )}
            </div>

            {/* OPIS */}
            <div className="flex-1">
              {/* ADD/REMOVE */}
              <div className="mt-1 mb-1 text-right">
                <button
                  onClick={() => toggleTodo(a)}
                  className={`px-3 py-1 text-xs rounded-lg ${
                    isInTodo(a)
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {isInTodo(a) ? "❌ Usuń" : "➕ Dodaj"}
                </button>
              </div>

              {/* NAZWA */}
              <h3
                onClick={() => {
                  setSelectedId(id);
                  if (mapRef.current) {
                    mapRef.current.setView([p.lat, p.lon], 14, {
                      animate: true,
                    });
                  }
                }}
                className={`font-semibold text-sm flex items-center gap-1 cursor-pointer hover:underline ${
                  id === selectedId ? "text-red-600" : "text-green-700"
                }`}
              >
                <MapPin
                  className={`w-3 h-3 ${
                    id === selectedId ? "text-red-600" : "text-green-600"
                  }`}
                />
                {getName(a)}
              </h3>

              <p className="text-xs text-gray-600 truncate">{getKinds(a)}</p>

              <div className="flex items-center gap-3 mt-1 text-xs text-gray-700">
                <p>Odległość: {getDistMeters(a)} m</p>
                {rating && <p>⭐ {rating}</p>}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
