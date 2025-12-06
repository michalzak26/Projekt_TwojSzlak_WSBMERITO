// =============================================
// lib_routing.js – OSRM driving / cycling / foot
// =============================================

export async function fetchRoute(points, mode = "driving") {
  if (!points || points.length < 2) return null;

  // profile:
  // routed-car → samochód
  // routed-bike → rower
  // routed-foot → pieszo
  const profile =
    mode === "foot" ? "foot" : mode === "cycling" ? "bike" : "car";

  const coords = points.map((p) => `${p[1]},${p[0]}`).join(";");

  // 🔥 poprawny URL
  const url = `https://routing.openstreetmap.de/routed-${profile}/route/v1/${profile}/${coords}?overview=full&geometries=geojson&steps=true`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!data.routes || !data.routes.length) return null;
    const route = data.routes[0];

    const distanceKm = +(route.distance / 1000).toFixed(1);
    const durationMin = Math.round(route.duration / 60);

    // odcinki między punktami
    const segments = route.legs.map((leg, i) => ({
      index: i + 1,
      distanceKm: +((leg.distance || 0) / 1000).toFixed(1),
      baseDurationMin: Math.round((leg.duration || 0) / 60), // FIX ✔
    }));

    return {
      geometry: route.geometry, // {type:"LineString", coordinates:[...]}
      distanceKm,
      durationMin,
      segments,
    };
  } catch (e) {
    console.error("OSRM routing error:", e);
    return null;
  }
}
