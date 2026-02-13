import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Trash2, MapPin, Navigation, Tag } from "lucide-react";
import { translateCategories } from "../../lib/lib_attractions/translateCategories";

// Generator Czerwonego Markera
const createRedMarker = () => {
  return L.divIcon({
    className: "custom-red-marker",
    html: `
      <div style="
        background-color: #dc2626; /* Red-600 */
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
      "></div>
    `,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });
};

export default function TodoAttractionsList({ todoList, remove }) {
  return (
    <div className="space-y-8">
      {todoList.map((a, index) => {
        const p = a.properties;
        const id = p.place_id;

        return (
          <article
            key={id}
            className="group bg-white/80 backdrop-blur-md border border-emerald-100 rounded-3xl p-6 shadow-xl shadow-emerald-900/5 hover:shadow-2xl hover:border-emerald-200 transition-all duration-300 relative overflow-hidden print:break-inside-avoid print:shadow-none print:border-gray-200"
          >
            {/* Dekoracyjny numer w tle */}
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <span className="text-8xl font-black text-emerald-900">
                {index + 1}
              </span>
            </div>

            {/* NAGŁÓWEK KARTY */}
            <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <div>
                <h2 className="text-xl font-bold text-emerald-900 flex items-start gap-2 leading-tight">
                  <MapPin className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                  {p.name}
                </h2>

                {/* Kategorie */}
                <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                  <Tag className="w-4 h-4 text-emerald-400" />
                  <span>{translateCategories(p.categories)}</span>
                </div>

                {/* Dystans (jeśli dostępny) */}
                {p.distance && (
                  <div className="flex items-center gap-1.5 mt-1 text-xs font-bold text-emerald-600 bg-emerald-50 inline-flex px-2 py-1 rounded-md border border-emerald-100">
                    <Navigation className="w-3 h-3" />
                    {Math.round(p.distance)} m od punktu wyszukiwania
                  </div>
                )}
              </div>

              {/* Przycisk */}
              <button
                onClick={() => remove(id)}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-red-100 text-red-600 font-bold rounded-xl hover:bg-red-50 hover:border-red-200 hover:shadow-md transition-all active:scale-95 print:hidden shrink-0"
                title="Usuń z listy"
              >
                <Trash2 className="w-4 h-4" />
                <span className="hidden md:inline">Usuń</span>
              </button>
            </div>

            {/* MAPA PODGLĄDOWA */}
            <div className="relative z-10 rounded-2xl overflow-hidden border border-gray-200 shadow-inner h-[220px] w-full bg-gray-50">
              <MapContainer
                center={[p.lat, p.lon]}
                zoom={15}
                zoomControl={false}
                scrollWheelZoom={false}
                dragging={false}
                doubleClickZoom={false}
                touchZoom={false}
                attributionControl={false}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[p.lat, p.lon]} icon={createRedMarker()} />
              </MapContainer>

              {/* Overlay blokujący interakcję (żeby nie przesuwać mapy przy scrollowaniu strony) */}
              <div className="absolute inset-0 z-[1000] cursor-default" />
            </div>
          </article>
        );
      })}
    </div>
  );
}
