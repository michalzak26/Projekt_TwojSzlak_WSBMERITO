import { Link } from "react-router-dom";

export default function TodoAttractionsEmpty() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-green-700">
        📌 Lista „Do zwiedzenia”
      </h1>

      <p className="text-gray-600">Brak zapisanych atrakcji.</p>

      <Link to="/attractions" className="text-blue-600 underline text-sm">
        ← Wróć do atrakcji
      </Link>
    </div>
  );
}
