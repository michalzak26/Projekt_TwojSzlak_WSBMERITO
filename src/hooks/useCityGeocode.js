import { useState } from "react";

export function useCityGeocode(setCenter) {
  const [city, setCity] = useState("");
  const [searchingCity, setSearchingCity] = useState(false);

  async function geocodeCity() {
    if (!city.trim()) return;

    setSearchingCity(true);

    const url = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
      city
    )}&format=json&apiKey=${import.meta.env.VITE_GEOAPIFY_KEY}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data?.results?.length) {
        const { lat, lon } = data.results[0];
        setCenter([lat, lon]);
      } else {
        alert("Nie znaleziono miasta.");
      }
    } catch (err) {
      console.error("Błąd geocoder:", err);
    } finally {
      setSearchingCity(false);
    }
  }

  return { city, setCity, searchingCity, geocodeCity };
}
