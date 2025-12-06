const API = "https://api.openweathermap.org/data/2.5/weather";
const KEY = import.meta.env.VITE_OPENWEATHER_KEY;

export async function fetchWeather(lat, lng) {
  if (!KEY) {
    console.warn("Brak VITE_OPENWEATHER_KEY w .env!");
    return null;
  }

  const url = `${API}?lat=${lat}&lon=${lng}&units=metric&lang=pl&appid=${KEY}`;

  const res = await fetch(url);
  if (!res.ok) return null;

  return await res.json();
}
