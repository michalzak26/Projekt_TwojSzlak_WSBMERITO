export async function fetchRoute(points, profile = "driving") {
  if (!points || points.length < 2) return null;

  const coords = points.map(([lat, lng]) => `${lng},${lat}`).join(";");

  const url = `https://router.project-osrm.org/route/v1/${profile}/${coords}?overview=full&geometries=geojson&steps=false`;

  const res = await fetch(url);
  if (!res.ok) return null;

  const data = await res.json();
  if (!data.routes || !data.routes[0]) return null;

  const route = data.routes[0];

  return {
    geometry: route.geometry.coordinates.map(([lng, lat]) => [lat, lng]),
    distanceKm: (route.distance / 1000).toFixed(1),
    durationMin: Math.round(route.duration / 60),
  };
}
