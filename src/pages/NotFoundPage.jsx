import React from "react";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-10 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Zawartość tej sekcji jest nieosiągalna!<br></br>Sprawdź adres URL
          strony!
        </h1>

        <Link
          to="/"
          className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
        >
          ← Powrót do strony powitalnej
        </Link>

        <p className="text-xs text-gray-400 mt-6">Twój Szlak • 2026</p>
      </div>
    </div>
  );
}
