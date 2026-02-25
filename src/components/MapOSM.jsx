import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  useMapEvents,
} from "react-leaflet";
import { createNumberedIcon } from "../lib/lib_trip/createNumberedIcon.js";

function MapClickHandler({ setPoints }) {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setPoints((prev) => [...prev, [lat, lng]]);
    },
  });
  return null;
}

export default function MapOSM({ points, setPoints, route }) {
  const center = points[0] || [52.2297, 21.0122]; // Warszawa fallback

  // pobieranie linii trasy
  let line = null;

  if (
    route &&
    typeof route === "object" &&
    route.type === "LineString" &&
    Array.isArray(route.coordinates)
  ) {
    line = route.coordinates.map(([lng, lat]) => [lat, lng]);
  }

  return (
    <MapContainer
      center={center}
      zoom={points.length ? 10 : 6}
      style={{ height: "550px", width: "100%", borderRadius: "1rem" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MapClickHandler setPoints={setPoints} />

      {/* Punkty */}
      {points.map((pos, i) => (
        <Marker key={i} position={pos} icon={createNumberedIcon(i + 1)} />
      ))}

      {/* Wyznaczona trasa OSRM */}
      {line && <Polyline positions={line} color="red" weight={4} />}

      {/* Linia łącząca punkty, gdy nie ma wyznaczonej trasy */}
      {!line && points.length > 1 && (
        <Polyline positions={points} color="blue" weight={3} dashArray="6" />
      )}
    </MapContainer>
  );
}
