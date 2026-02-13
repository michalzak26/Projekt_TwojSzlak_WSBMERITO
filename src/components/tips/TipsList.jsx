import { SearchX } from "lucide-react";
import TipCard from "./TipCard.jsx";

export default function TipsList({ tips }) {
  // 1. Obsługa braku wyników (Empty State)
  if (!tips || tips.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center animate-fadeIn">
        <div className="p-4 bg-gray-100 rounded-full mb-4 text-gray-400">
          <SearchX className="w-10 h-10" />
        </div>
        <h3 className="text-lg font-bold text-gray-700 mb-1">
          Brak porad w tej kategorii
        </h3>
        <p className="text-sm text-gray-500">
          Spróbuj wybrać inny filtr lub wróć do widoku "Wszystkie".
        </p>
      </div>
    );
  }

  // 2. Siatka kart
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {tips.map((tip) => (
        <TipCard key={tip.id} tip={tip} />
      ))}
    </section>
  );
}
