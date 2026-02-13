import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import TipsList from "../tips/TipsList";
import { TIPS_DATA } from "../tips/tipsData";

export default function AdviceSection() {
  // Pobieramy dokładnie 3 pierwsze porady dla strony głównej
  const featuredTips = TIPS_DATA.slice(0, 3);

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-emerald-900 rounded-[3rem] p-8 md:p-16 overflow-hidden shadow-2xl">
          {/* Nagłówek sekcji */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 relative z-10">
            <div className="text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Szukasz informacji?
              </h2>
              <p className="text-emerald-100/80 text-lg">
                Sprawdź praktyczne wskazówki na najbliższy wyjazd.
              </p>
            </div>

            <Link
              to="/tips"
              className="group flex items-center gap-2 text-white font-bold hover:text-emerald-400 transition-all bg-white/10 px-6 py-3 rounded-full border border-white/20"
            >
              Zobacz wszystkie
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Renderowanie listy z przekazanym nowym layoutem kolumn */}
          <div className="relative z-10">
            <TipsList tips={featuredTips} isHomePage={true} />
          </div>

          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-emerald-800/30 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
