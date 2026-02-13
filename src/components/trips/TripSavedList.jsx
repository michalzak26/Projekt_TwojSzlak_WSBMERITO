import { Link } from "react-router-dom";
import {
  FileText,
  Trash2,
  Map,
  Car,
  Bike,
  Footprints,
  ChevronRight,
} from "lucide-react";

export default function TripSavedList({ trips, loadTripToMap, deleteTrip }) {
  // Pomocnicza funkcja do ikony transportu
  const getModeIcon = (mode) => {
    switch (mode) {
      case "cycling":
        return <Bike className="w-3.5 h-3.5" />;
      case "foot":
        return <Footprints className="w-3.5 h-3.5" />;
      default:
        return <Car className="w-3.5 h-3.5" />;
    }
  };

  // Pomocnicza funkcja do etykiety
  const getModeLabel = (mode) => {
    switch (mode) {
      case "cycling":
        return "Rower";
      case "foot":
        return "Pieszo";
      default:
        return "Samochód";
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-xl shadow-emerald-900/5 border border-emerald-100 flex flex-col h-full max-h-[600px]">
      {/* NAGŁÓWEK */}
      <div className="flex items-center justify-between mb-4 flex-shrink-0">
        <h3 className="text-xl font-bold text-emerald-900 flex items-center gap-2">
          <Map className="w-5 h-5 text-emerald-600" />
          Zapisane trasy
        </h3>
        <span className="text-xs font-bold px-2.5 py-1 bg-emerald-100 text-emerald-700 rounded-full border border-emerald-200">
          {trips.length} / 10
        </span>
      </div>

      {/* LISTA TRAS */}
      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
        {trips.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-48 text-gray-400 border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50/50">
            <Map className="w-8 h-8 mb-2 opacity-50" />
            <p className="text-sm font-medium">Brak zapisanych tras</p>
            <p className="text-xs opacity-70">
              Wypełnij formularz i kliknij "Zapisz"
            </p>
          </div>
        ) : (
          <ul className="space-y-3">
            {trips.map((t) => (
              <li
                key={t.id}
                className="group flex items-start justify-between gap-3 p-4 rounded-2xl border border-gray-100 bg-white hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* GŁÓWNA TREŚĆ */}
                <button
                  onClick={() => loadTripToMap(t)}
                  className="flex-1 text-left focus:outline-none group/btn min-w-0"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-gray-800 group-hover/btn:text-emerald-700 transition-colors truncate">
                      {t.title}
                    </h4>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span
                      className={`inline-flex items-center gap-1 text-[10px] uppercase font-bold px-2 py-0.5 rounded-md border ${
                        t.mode === "driving"
                          ? "bg-blue-50 text-blue-700 border-blue-100"
                          : t.mode === "cycling"
                          ? "bg-amber-50 text-amber-700 border-amber-100"
                          : "bg-green-50 text-green-700 border-green-100"
                      }`}
                    >
                      {getModeIcon(t.mode)}
                      {getModeLabel(t.mode)}
                    </span>
                  </div>

                  {t.note && (
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                      {t.note}
                    </p>
                  )}

                  <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold mt-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Załaduj na mapę <ChevronRight className="w-3 h-3" />
                  </div>
                </button>

                {/* PRZYCISKI AKCJI (Prawa strona) */}
                <div className="flex flex-col gap-2 pl-3 border-l border-gray-100 ml-1 shrink-0">
                  <Link
                    to={`/trips/${t.id}/pdf`}
                    aria-label="Podgląd trasy w PDF"
                    className="flex items-center justify-center gap-2 p-2 text-sm text-blue-600 hover:bg-blue-50 hover:underline rounded-lg transition"
                    title="Pobierz PDF"
                  >
                    <FileText className="w-4 h-4" />
                    {/* Tekst ukryty na mobile, widoczny na większych */}
                    <span className="hidden sm:inline">PDF</span>
                  </Link>

                  <button
                    onClick={() => deleteTrip(t.id)}
                    aria-label="Usuń trasę"
                    className="flex items-center justify-center gap-2 p-2 text-sm text-red-600 hover:bg-red-50 hover:underline rounded-lg transition"
                    title="Usuń trasę"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span className="hidden sm:inline">Usuń</span>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
