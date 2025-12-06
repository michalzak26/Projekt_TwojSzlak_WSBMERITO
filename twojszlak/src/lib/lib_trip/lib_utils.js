export function getDurationForMode(distanceKm, drivingMin, mode) {
  if (!distanceKm) return 0;

  if (mode === "driving") return drivingMin;

  const speed = mode === "cycling" ? 15 : 5;
  return Math.round((distanceKm / speed) * 60);
}

export function formatMinutes(total) {
  if (!total || isNaN(total)) return "–";
  const h = Math.floor(total / 60);
  const m = total % 60;
  return h > 0 ? `${h} h ${m} min` : `${m} min`;
}
