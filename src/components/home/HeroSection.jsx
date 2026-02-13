import { Link } from "react-router-dom";
import { Map } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-[500px] flex items-center justify-start overflow-hidden">
      {/* 1. WIDEO W TLE */}
      <video
        src="/media/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 2. CIEMNY OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* 3. TREŚĆ GŁÓWNA */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl bg-black/30 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
            Podróżuj inteligentnie
            <br />
            <span className="text-emerald-400">Planuj z lekkością</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed font-light">
            Twój Szlak pomaga zamienić chaos w idealną trasę. Wybierz cel,
            sprawdź pogodę i odkryj najciekawsze miejsca w okolicy. Twoja
            kolejna wielka przygoda jest bliżej, niż myślisz.
          </p>

          <div className="flex justify-center w-full">
            {/* Przycisk */}
            <Link
              to="/trips"
              className="group flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-900/20"
            >
              <Map className="w-5 h-5" />
              Zaplanuj podróż
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
