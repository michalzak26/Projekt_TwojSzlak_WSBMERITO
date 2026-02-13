import { Link } from "react-router-dom";
import { MapPin, Search } from "lucide-react";

export default function TodoAttractionsEmpty() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="bg-white/60 backdrop-blur-sm border-2 border-dashed border-emerald-200 rounded-3xl p-10 md:p-16 max-w-lg w-full text-center flex flex-col items-center animate-fadeIn">
        {/* IKONA TŁA */}
        <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mb-6 shadow-inner">
          <MapPin className="w-10 h-10 text-emerald-300" />
        </div>

        {/* NAGŁÓWEK */}
        <h2 className="text-2xl font-bold text-emerald-900 mb-3">
          Twoja lista jest pusta
        </h2>

        {/* OPIS */}
        <p className="text-gray-500 mb-8 max-w-xs mx-auto leading-relaxed">
          Nie dodałeś jeszcze żadnych miejsc do odwiedzenia. Wróć do mapy,
          znajdź ciekawe punkty i kliknij "Dodaj".
        </p>

        {/* PRZYCISK Call to Action */}
        <Link
          to="/attractions"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 hover:-translate-y-0.5 transition-all"
        >
          <Search className="w-5 h-5" />
          Przeglądaj atrakcje
        </Link>
      </div>
    </div>
  );
}
