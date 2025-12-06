import { Link } from "react-router-dom";

export default function AttractionsHeader() {
  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-green-700">
          🧭 Atrakcje w pobliżu trasy
        </h1>
        <p className="text-sm text-gray-600">
          Kliknij punkt na mapie lub wpisz miasto, aby zobaczyć atrakcje.
        </p>
      </div>

      <Link
        to="/"
        className="px-4 py-2 rounded-lg bg-green-600 text-white text-sm hover:bg-green-700"
      >
        ← Wróć do planera trasy
      </Link>
    </header>
  );
}
