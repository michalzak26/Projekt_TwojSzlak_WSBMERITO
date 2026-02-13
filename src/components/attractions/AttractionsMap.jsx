import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import {
  getDistMeters,
  getName,
  getId,
} from "../../lib/lib_attractions/lib_utils.js";

// Definicje ikon
const greenIcon = new L.Icon({
  iconUrl: "/icons/marker-icon-green.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});
const blueIcon = new L.Icon({
  iconUrl: "/icons/marker-icon-blue.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});
const selectedIcon = new L.Icon({
  iconUrl: "/icons/marker-icon-red.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Obsługa kliknięcia w mapę (ustawia środek)
function MapClickHandler({ setCenter }) {
  useMapEvents({
    click(e) {
      setCenter([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
}

// Animacja przelotu do nowego centrum
function FlyToCenter({ center, mapRef }) {
  const map = useMap();

  useEffect(() => {
    if (center) {
      map.flyTo(center, 18, { duration: 1.5 });
    }
  }, [center, map]);

  return null;
}

// Dynamiczna zmiana zoomu przy zmianie trybu Bias
function UpdateZoom({ biasEnabled }) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    const zoom = biasEnabled ? 18 : 12;
    map.setZoom(zoom, { animate: true });
  }, [biasEnabled, map]);

  return null;
}

export default function AttractionsMap({
  center,
  setCenter,
  filtered,
  selectedId,
  mapRef,
  biasEnabled,
}) {
  return (
    <div className="w-full h-[500px] relative z-0">
      <MapContainer
        center={center}
        zoom={13}
        ref={mapRef}
        style={{ height: "100%", width: "100%" }}
      >
        <MapClickHandler setCenter={setCenter} />

        <FlyToCenter center={center} mapRef={mapRef} />

        <UpdateZoom biasEnabled={biasEnabled} />

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org">OSM</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* 1. Punkt Centralny (Zielony) */}
        <Marker position={center} icon={greenIcon}>
          <Popup className="font-sans">
            <div className="text-center">
              <strong className="text-emerald-700">Twój punkt startowy</strong>
              <p className="m-0 text-xs text-gray-500">
                Szukamy atrakcji wokół tego miejsca
              </p>
            </div>
          </Popup>
        </Marker>

        {/* 2. Atrakcje (Niebieskie / Czerwone) */}
        {filtered.map((a) => {
          const p = a.properties;
          const id = getId(a);
          const isSelected = id === selectedId;

          return (
            <Marker
              key={id}
              position={[p.lat, p.lon]}
              icon={isSelected ? selectedIcon : blueIcon}
              zIndexOffset={isSelected ? 1000 : 0}
            >
              <Popup className="font-sans">
                <div className="min-w-[150px]">
                  <b className="text-sm block mb-1">{getName(a)}</b>

                  {biasEnabled && p.distance != null && (
                    <div className="text-xs text-emerald-600 font-bold bg-emerald-50 inline-block px-1.5 py-0.5 rounded border border-emerald-100">
                      📏 {Math.round(p.distance)} m od centrum
                    </div>
                  )}
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
