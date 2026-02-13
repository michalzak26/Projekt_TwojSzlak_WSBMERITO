const KEY = import.meta.env.VITE_OPENTRIPMAP_KEY;

export async function fetchAttractions(lat, lng, radius = 5000, limit = 50) {
  if (!KEY) {
    console.warn("Brak VITE_OPENTRIPMAP_KEY w .env");
    return [];
  }

  const url = `https://api.opentripmap.com/0.1/en/places/radius?radius=${radius}&lon=${lng}&lat=${lat}&limit=${limit}&apikey=${KEY}`;

  const res = await fetch(url);
  if (!res.ok) {
    console.error("Błąd fetchAttractions:", res.status);
    return [];
  }

  const data = await res.json();
  return data.features || data;
}

export async function fetchAttractionDetails(xid) {
  if (!KEY) return null;

  const url = `https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=${KEY}`;

  const res = await fetch(url);
  if (!res.ok) {
    console.error("Błąd fetchAttractionDetails:", res.status);
    return null;
  }

  return await res.json();
}
