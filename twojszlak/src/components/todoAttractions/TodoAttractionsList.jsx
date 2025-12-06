import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import { Trash2, MapPin } from "lucide-react";

const redIcon = new L.Icon({
  iconUrl: "/icons/marker-icon-red.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function TodoAttractionsList({ todoList, remove }) {
  return (
    <div className="space-y-6">
      {todoList.map((a) => {
        const p = a.properties;
        const id = p.place_id;

        return (
          <div
            key={id}
            className="border rounded-xl p-4 shadow hover:bg-gray-50 transition"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-lg flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-600" />
                {p.name}
              </h2>

              <button
                onClick={() => remove(id)}
                className="flex items-center gap-1 px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
              >
                <Trash2 className="w-4 h-4" />
                Usuń
              </button>
            </div>

            <p className="text-sm text-gray-600 mb-2">
              {p.categories?.join(", ") || "brak kategorii"}
            </p>

            <div
              id={`map-preview-${id}`}
              className="rounded-lg overflow-hidden border shadow"
              style={{ width: "100%", height: "220px" }}
            >
              <MapContainer
                center={[p.lat, p.lon]}
                zoom={16}
                minZoom={16}
                maxZoom={16}
                zoomControl={false}
                scrollWheelZoom={false}
                dragging={false}
                doubleClickZoom={false}
                touchZoom={false}
                style={{ height: "220px", width: "100%" }}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[p.lat, p.lon]} icon={redIcon} />
              </MapContainer>
            </div>

            {p.distance && (
              <p className="text-xs text-gray-700 mt-2">
                📏 Odległość: {Math.round(p.distance)} m
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
