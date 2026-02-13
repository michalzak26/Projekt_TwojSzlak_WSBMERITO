import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useMemo, useRef } from "react";
import {
  Printer,
  ArrowLeft,
  Map,
  FileText,
  Car,
  Bike,
  Footprints,
} from "lucide-react";

import StaticMapPDF from "../components/trips/StaticMapPDF.jsx";
import TripInfo from "../components/trips/TripInfo.jsx";
import TripWeather from "../components/trips/TripWeather.jsx";

import { useRouting } from "../hooks/useRouting.js";
import { useWeather } from "../hooks/useWeather.js";

import {
  getDurationForMode,
  formatMinutes,
} from "../lib/lib_trip/lib_utils.js";

export function PdfTripView() {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);
  const pageRef = useRef(null);

  // 1. Pobranie trasy
  useEffect(() => {
    const trips = JSON.parse(localStorage.getItem("trips") || "[]");
    setTrip(trips.find((t) => t.id === id) || null);
  }, [id]);

  // 2. Hooki
  const points = trip?.points || [];
  const mode = trip?.mode || "driving";

  const { route, distanceKm, durationDrivingMin } = useRouting(points);
  const weather = useWeather(points);

  const totalDurationForMode = useMemo(
    () => getDurationForMode(distanceKm, durationDrivingMin, mode),
    [distanceKm, durationDrivingMin, mode]
  );

  const modeLabel =
    mode === "driving" ? "Samochód" : mode === "cycling" ? "Rower" : "Pieszo";

  const getModeIcon = () => {
    if (mode === "cycling") return <Bike className="w-4 h-4" />;
    if (mode === "foot") return <Footprints className="w-4 h-4" />;
    return <Car className="w-4 h-4" />;
  };

  const printPDF = () => window.print();

  // 3. Renderowanie warunkowe
  if (!trip) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-500">
        Nie znaleziono trasy.
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans text-gray-800 pb-20 print:pb-0 print:bg-white relative">
      {/* TŁO (Widoczne tylko na ekranie, ukryte w druku) */}
      <div className="fixed inset-0 bg-gradient-to-b from-emerald-50/50 via-white to-gray-50 -z-10 pointer-events-none print:hidden" />

      <div
        className="max-w-4xl mx-auto p-6 space-y-8 print:space-y-6"
        ref={pageRef}
      >
        {/* NAWIGACJA (Ukryta w druku) */}
        <div className="flex justify-between items-center print:hidden">
          <Link
            to="/trips"
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 hover:text-emerald-700 hover:border-emerald-200 transition-all font-medium shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Powrót
          </Link>

          <button
            onClick={printPDF}
            className="flex items-center gap-2 px-5 py-2 bg-emerald-600 text-white rounded-xl shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 hover:-translate-y-0.5 transition-all font-bold"
          >
            <Printer className="w-4 h-4" />
            Drukuj / Zapisz PDF
          </button>
        </div>

        {/* STRONA 1: INFORMACJE */}

        {/* 1. NAGŁÓWEK (Tytuł + Notatki) */}
        <section className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl shadow-emerald-900/5 border border-emerald-100 print:shadow-none print:border-none print:p-0">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider border border-emerald-200">
                  {getModeIcon()} {modeLabel}
                </span>
                <span className="text-gray-400 text-xs font-medium">
                  {new Date(trip.createdAt).toLocaleDateString()}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-emerald-900 leading-tight">
                {trip.title}
              </h1>
            </div>
          </div>

          {trip.note && (
            <div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100/50">
              <h3 className="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-1 flex items-center gap-1">
                <FileText className="w-3 h-3" /> Notatka
              </h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {trip.note}
              </p>
            </div>
          )}
        </section>

        {/* 4. MAPA */}
        <section className="bg-white p-2 rounded-3xl shadow-xl shadow-emerald-900/5 border border-emerald-100 print:shadow-none print:border print:border-gray-300 print:break-before-page">
          <div className="flex items-center gap-2 px-4 py-2 mb-1">
            <Map className="w-5 h-5 text-emerald-600" />
            <h3 className="font-bold text-emerald-900">Mapa poglądowa</h3>
          </div>
          <StaticMapPDF
            points={points}
            route={route ? route.geometry : null}
            height={500}
          />
        </section>

        {/* 2. PODSUMOWANIE TRASY */}
        <div className="print:break-inside-avoid">
          <TripInfo
            route={route}
            modeLabel={modeLabel}
            distanceKm={distanceKm}
            totalDurationForMode={totalDurationForMode}
            formatMinutes={formatMinutes}
            getDurationForMode={getDurationForMode}
            mode={mode}
          />
        </div>

        {/* 3. POGODA */}
        <div className="print:break-inside-avoid">
          <TripWeather weather={weather} />
        </div>

        {/* STRONA 2: MAPA */}

        {/* STOPKA WYDRUKU */}
        <div className="hidden print:block text-center text-xs text-gray-400 pt-8 mt-auto">
          Wygenerowano za pomocą aplikacji <b>TwójSzlak.pl</b>
        </div>
      </div>
    </div>
  );
}
