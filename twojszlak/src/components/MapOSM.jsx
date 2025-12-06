import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";

const redIcon = new L.Icon({
  iconUrl: "/icons/marker-icon-blue.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

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
  const center = points[0] || [52.2297, 21.0122];

  const line =
    route && route.type === "LineString"
      ? route.coordinates.map(([lng, lat]) => [lat, lng])
      : null;

  return (
    <MapContainer
      center={center}
      zoom={points.length ? 10 : 6}
      style={{ height: "420px", width: "100%", borderRadius: "1rem" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MapClickHandler setPoints={setPoints} />

      {points.map((pos, i) => (
        <Marker key={i} position={pos} icon={redIcon} />
      ))}

      {line && <Polyline positions={line} color="red" weight={4} />}

      {!line && points.length > 1 && (
        <Polyline positions={points} color="blue" weight={3} dashArray="6" />
      )}
    </MapContainer>
  );
}
