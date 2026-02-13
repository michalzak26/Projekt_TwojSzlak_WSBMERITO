import { useState, useMemo } from "react";

import Navbar from "../components/Navbar.jsx";
import TripHeader from "../components/trips/TripHeader.jsx";
import TripForm from "../components/trips/TripForm.jsx";
import TripMap from "../components/trips/TripMap.jsx";
import TripInfo from "../components/trips/TripInfo.jsx";
import TripWeather from "../components/trips/TripWeather.jsx";
import TripSavedList from "../components/trips/TripSavedList.jsx";
import Footer from "../components/Footer.jsx";

import { useTrips } from "../hooks/useTrips.js";
import { useRouting } from "../hooks/useRouting.js";
import { useWeather } from "../hooks/useWeather.js";

import {
  getDurationForMode,
  formatMinutes,
} from "../lib/lib_trip/lib_utils.js";

export function TripsPage() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [points, setPoints] = useState([]);
  const [mode, setMode] = useState("driving");

  const { trips, saveTrip, deleteTrip, error } = useTrips();
  const { route, distanceKm, durationDrivingMin } = useRouting(points);
  const weather = useWeather(points);

  const totalDurationForMode = useMemo(
    () => getDurationForMode(distanceKm, durationDrivingMin, mode),
    [distanceKm, durationDrivingMin, mode]
  );

  const canSave = title.trim().length > 0 && points.length >= 2;

  const onSave = () => {
    if (!canSave) return;
    saveTrip({
      id: crypto.randomUUID(),
      title,
      note,
      createdAt: new Date().toISOString(),
      points,
      mode,
    });
    setTitle("");
    setNote("");
    setPoints([]);
  };

  const clearLast = () => setPoints((prev) => prev.slice(0, -1));
  const clearAll = () => setPoints([]);

  const loadTripToMap = (t) => {
    setTitle(t.title);
    setNote(t.note);
    setPoints(t.points);
    if (t.mode) setMode(t.mode);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const modeLabel =
    mode === "driving" ? "Samochód" : mode === "cycling" ? "Rower" : "Pieszo";

  return (
    <div className="min-h-screen flex flex-col font-sans relative selection:bg-emerald-200 selection:text-emerald-900">
      {/* TŁO */}
      <div className="fixed inset-0 bg-gradient-to-b from-emerald-50/50 via-white to-gray-50 -z-10 pointer-events-none" />

      <Navbar />

      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        <TripHeader />

        {/* SEKCJA 1: FORMULARZ i MAPA */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl shadow-emerald-900/5 border border-emerald-100 flex flex-col h-full">
            <div className="p-6 flex-grow">
              <TripForm
                title={title}
                setTitle={setTitle}
                note={note}
                setNote={setNote}
                mode={mode}
                setMode={setMode}
                points={points}
                canSave={canSave}
                onSave={onSave}
                clearLast={clearLast}
                clearAll={clearAll}
                error={error}
              />
            </div>
          </div>

          {/* PRAWA: Mapa */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl shadow-emerald-900/5 border border-emerald-100 flex flex-col h-full min-h-[500px] overflow-hidden">
            <div className="h-full w-full">
              <TripMap
                points={points}
                setPoints={setPoints}
                route={route ? route.geometry : null}
              />
            </div>
          </div>
        </section>

        {/* SEKCJA 2: INFO, POGODA, ZAPISANE */}
        <section className="space-y-6">
          <TripInfo
            route={route}
            modeLabel={modeLabel}
            distanceKm={distanceKm}
            totalDurationForMode={totalDurationForMode}
            formatMinutes={formatMinutes}
            getDurationForMode={getDurationForMode}
            mode={mode}
          />

          <TripWeather weather={weather} />

          <TripSavedList
            trips={trips}
            loadTripToMap={loadTripToMap}
            deleteTrip={deleteTrip}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
