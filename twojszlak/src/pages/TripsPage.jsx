import { useState, useMemo, useRef } from "react";

import Navbar from "../components/Navbar.jsx";
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
import { generateTripPDF } from "../lib/lib_trip/lib_pdf.js";

export function TripsPage() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [points, setPoints] = useState([]);
  const [mode, setMode] = useState("driving");

  const { trips, saveTrip } = useTrips();
  const { route, distanceKm, durationDrivingMin } = useRouting(points);
  const weather = useWeather(points);

  const pdfRef = useRef(null);

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
  };

  const modeLabel =
    mode === "driving" ? "Samochód" : mode === "cycling" ? "Rower" : "Pieszo";

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-6 space-y-6">
        {/* FORMULARZ + MAPA */}
        <section className="grid lg:grid-cols-2 gap-6">
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
          />

          <TripMap
            points={points}
            setPoints={setPoints}
            route={route ? route.geometry : null}
            pdfRef={pdfRef}
          />
        </section>

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
            generateTripPDF={generateTripPDF}
            pdfRef={pdfRef}
          />
        </section>

        <Footer />
      </div>
    </>
  );
}
