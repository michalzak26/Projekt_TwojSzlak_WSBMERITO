import { Link } from "react-router-dom";

export default function PackingHeader({ onExport, onClear }) {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-xl font-bold text-green-700">
        🎒 Lista Pakowania (Notatnik)
      </h1>

      <div className="flex items-center gap-3">
        <button
          onClick={onExport}
          className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700"
        >
          📄 PDF
        </button>

        <button
          onClick={onClear}
          className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700"
        >
          🗑️ Wyczyść
        </button>

        <Link
          to="/"
          className="px-4 py-2 bg-gray-200 rounded-lg text-sm hover:bg-gray-300"
        >
          ← Powrót
        </Link>
      </div>
    </header>
  );
}
