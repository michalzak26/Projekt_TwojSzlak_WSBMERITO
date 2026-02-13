import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-center">
        <div className="space-y-4">
          <h3 className="text-white text-lg font-bold flex items-center justify-center gap-2">
            🗺️ Twój Szlak
          </h3>
          <p className="text-gray-400 leading-relaxed max-w-md mx-auto">
            Odkrywaj najpiękniejsze zakątki natury, planuj niezapomniane
            wycieczki i czerp inspiracje do podróżowania.
          </p>
        </div>

        {/* Kolumna 2: Kontakt / Info */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold uppercase tracking-wider">
            🔧 Support
          </h4>
          <ul className="space-y-2 text-gray-400">
            <li>Zgłoś błąd: support@twojszlak.pl</li>
            <li>Pon - Pt: 9:00 - 17:00</li>
          </ul>
        </div>
      </div>

      {/* Pasek dolny */}
      <div className="border-t border-gray-800 py-6 text-center text-xs text-gray-500">
        <p>© {currentYear} TwojSzlak.pl. Wszystkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
}
