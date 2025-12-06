import { useEffect, useState } from "react";
import { fetchWeather } from "../lib/lib_trip/lib_weather.js";

export function useWeather(points) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (points.length === 0) {
      setWeather(null);
      return;
    }

    async function load() {
      const results = [];

      for (const p of points) {
        const [lat, lng] = p;
        try {
          const w = await fetchWeather(lat, lng);
          results.push(w || null);
        } catch {
          results.push(null);
        }
      }

      setWeather(results);
    }

    load();
  }, [points]);

  return weather;
}
