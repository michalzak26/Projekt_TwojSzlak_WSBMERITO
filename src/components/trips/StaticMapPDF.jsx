import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";

// 1. GENERATOR IKON
const createNumberedIcon = (number) => {
  return L.divIcon({
    className: "custom-number-marker",
    html: `
      <div style="
        background-color: #059669; /* Emerald-600 */
        color: white;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: bold;
        border: 2px solid white;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
      ">
        ${number}
      </div>
    `,
    iconSize: [24, 24],
    iconAnchor: [12, 12], // Wyśrodkowanie (połowa rozmiaru)
  });
};

// 2. Automatyczne dopasowanie mapy
function FitBounds({ points }) {
  const map = useMap();

  useEffect(() => {
    if (!points || points.length === 0) return;

    const bounds = L.latLngBounds(points);
    map.fitBounds(bounds, {
      padding: [40, 40],
      maxZoom: 13,
      animate: false,
    });
  }, [points, map]);

  return null;
}

export default function StaticMapPDF({ points, route, height = 380 }) {
  if (!points || points.length === 0) {
    return (
      <div
        className="w-full bg-gray-100 flex items-center justify-center text-gray-400 text-sm border border-gray-200 rounded-xl"
        style={{ height }}
      >
        Brak punktów do wyświetlenia mapy.
      </div>
    );
  }

  // OSRM konwersja geometry.coordinates [lng, lat] → Leaflet [lat, lng]
  let osrmLine = null;

  if (
    route &&
    typeof route === "object" &&
    route.type === "LineString" &&
    Array.isArray(route.coordinates)
  ) {
    osrmLine = route.coordinates.map(([lng, lat]) => [lat, lng]);
  }

  // Fallbackn linia prosta między punktami
  const fallbackLine = points;
  const center = points[0];

  return (
    <div
      className="w-full rounded-xl overflow-hidden border border-gray-200"
      style={{ height }}
    >
      <MapContainer
        center={center}
        zoom={7}
        scrollWheelZoom={false}
        dragging={false}
        doubleClickZoom={false}
        attributionControl={false}
        zoomControl={false}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Dopasowanie widoku */}
        <FitBounds points={points} />

        {/* Trasa OSRM */}
        {osrmLine && (
          <Polyline
            positions={osrmLine}
            color="#059669"
            weight={4}
            opacity={0.8}
          />
        )}

        {/* Linia fallback (Niebieska przerywana) */}
        {!osrmLine && points.length > 1 && (
          <Polyline
            positions={fallbackLine}
            color="#3b82f6"
            weight={3}
            dashArray="6"
            opacity={0.6}
          />
        )}

        {/* Markery z numerami */}
        {points.map((pos, i) => (
          <Marker key={i} position={pos} icon={createNumberedIcon(i + 1)} />
        ))}
      </MapContainer>
    </div>
  );
}
