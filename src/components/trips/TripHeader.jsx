import { Link } from "react-router-dom";
import { Map, Home, MapPin, ArrowRight } from "lucide-react";

export default function TripHeader() {
  return (
    <header className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-xl shadow-emerald-900/5 border border-emerald-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
      {/* SEKCJA TYTUŁOWA */}
      <div>
        <h1 className="text-3xl font-extrabold text-emerald-900 flex items-center gap-3">
          <div className="p-2.5 bg-emerald-100 rounded-2xl text-emerald-600 shadow-inner">
            <Map className="w-8 h-8" />
          </div>
          Planer Podróży
        </h1>
        <p className="text-sm text-gray-500 mt-2 ml-1 font-medium">
          Kliknij na mapie, aby wyznaczyć punkty trasy lub zarządzaj zapisanymi
          wyprawami.
        </p>
      </div>

      {/* PRZYCISKI NAWIGACYJNE */}
      <div className="flex flex-wrap items-center gap-3 print:hidden">
        {/* Przycisk: Wróć */}
        <Link
          to="/"
          className="px-5 py-3 rounded-xl text-sm font-bold text-gray-600 bg-white border border-gray-200 hover:bg-gray-50 hover:text-emerald-700 hover:border-emerald-200 transition-all flex items-center gap-2 group"
        >
          <Home className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 transition-colors" />
          Strona główna
        </Link>

        {/* Przycisk: Atrakcje */}
        <Link
          to="/attractions"
          className="px-5 py-3 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/20 hover:-translate-y-0.5 transition-all flex items-center gap-2"
        >
          <MapPin className="w-4 h-4" />
          Szukaj atrakcji
          <ArrowRight className="w-4 h-4 opacity-80" />
        </Link>
      </div>
    </header>
  );
}
