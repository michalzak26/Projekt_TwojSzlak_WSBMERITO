import { Lightbulb, Sparkles } from "lucide-react";

export default function TipsHeader() {
  return (
    <header className="relative bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-xl shadow-emerald-900/5 border border-emerald-100 overflow-hidden text-center">
      {/* TREŚĆ */}
      <div className="relative z-10 max-w-2xl mx-auto space-y-6">
        {/* Tytuł */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-900 tracking-tight leading-tight">
          Porady <span className="text-emerald-600">Podróżnicze</span>
        </h1>

        {/* Opis */}
        <p className="text-lg text-gray-500 leading-relaxed">
          Praktyczne wskazówki, listy pakowania i triki, które sprawią, że Twoja
          kolejna wyprawa będzie bezpieczniejsza i przyjemniejsza.
        </p>
      </div>
    </header>
  );
}
