import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";

import {
  getDistMeters,
  getKinds,
  getName,
  getId,
} from "../../lib/lib_attractions/lib_utils.js";

const greenIcon = new L.Icon({ iconUrl: "/icons/marker-icon-green.png" });
const blueIcon = new L.Icon({ iconUrl: "/icons/marker-icon-blue.png" });
const selectedIcon = new L.Icon({ iconUrl: "/icons/marker-icon-red.png" });

function MapClickHandler({ setCenter }) {
  useMapEvents({
    click(e) {
      setCenter([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
}

export default function AttractionsMap({
  center,
  setCenter,
  filtered,
  selectedId,
  setSelectedId,
  mapRef,
}) {
  return (
    <div className="bg-white p-3 rounded-2xl shadow">
      <MapContainer
        center={center}
        zoom={12}
        whenCreated={(map) => (mapRef.current = map)}
        style={{ height: "480px", width: "100%" }}
      >
        <MapClickHandler setCenter={setCenter} />

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org">OSM</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Wybrany punkt */}
        <Marker position={center} icon={greenIcon}>
          <Popup>Wybrany punkt odniesienia</Popup>
        </Marker>

        {/* Atrakcje */}
        {filtered.map((a) => {
          const p = a.properties;
          const id = getId(a);

          return (
            <Marker
              key={id}
              position={[p.lat, p.lon]}
              icon={id === selectedId ? selectedIcon : blueIcon}
            >
              <Popup>
                <b>{getName(a)}</b>
                <br />
                {getKinds(a)}
                <br />
                📏 {getDistMeters(a)} m
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      <div className="mt-3 text-right">
        <a
          href="/todoAttractions"
          className="text-blue-600 underline hover:text-blue-800 text-sm"
        >
          → Przejdź do listy „Do zwiedzenia”
        </a>
      </div>
    </div>
  );
}
