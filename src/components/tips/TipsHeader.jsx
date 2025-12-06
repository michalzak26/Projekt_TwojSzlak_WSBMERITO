import { Lightbulb } from "lucide-react";

export default function TipsHeader() {
  return (
    <header className="text-center space-y-2 mb-4">
      <h1 className="text-3xl font-bold text-green-700 flex items-center justify-center gap-2">
        <Lightbulb className="w-7 h-7 text-yellow-400" />
        Porady podróżnicze
      </h1>
      <p className="text-gray-600 text-sm max-w-xl mx-auto">
        Praktyczne wskazówki, które ułatwią Ci planowanie i realizację podróży.
      </p>
    </header>
  );
}
