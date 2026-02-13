const KEY = import.meta.env.VITE_GEOAPIFY_KEY;

export async function fetchAttractions(
  lat,
  lng,
  radius = 5000,
  biasEnabled = true
) {
  if (!KEY) {
    console.warn("Brak klucza API: VITE_GEOAPIFY_KEY!");
    return [];
  }

  // POPRAWNE KATEGORIE GEOAPIFY
  const categories = [
    "tourism", // zabytki, punkty turystyczne
    "entertainment", // rozrywka
    "leisure", // parki, rekreacja
    "natural", // natura
    "catering", // restauracje, bary
    "accommodation", // noclegi
    "commercial", // sklepy, galerie
  ].join(",");

  const url =
    `https://api.geoapify.com/v2/places?` +
    `categories=${categories}&` +
    `filter=circle:${lng},${lat},${radius}&` +
    (biasEnabled ? `bias=proximity:${lng},${lat}&` : "") +
    `limit=50&` +
    `apiKey=${KEY}`;

  console.log("REQ:", url);

  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error("Geoapify error:", res.status, await res.text());
      return [];
    }

    const data = await res.json();
    console.log("GEOAPIFY RESPONSE:", data);
    return data.features || [];
  } catch (err) {
    console.error("Błąd połączenia Geoapify:", err);
    return [];
  }
}
