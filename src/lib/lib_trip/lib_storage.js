const KEY = "trips";

export function loadTrips() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveTrips(trips) {
  localStorage.setItem(KEY, JSON.stringify(trips));
}

export function addTrip(trip) {
  const current = loadTrips();
  const updated = [trip, ...current].slice(0, 20);
  saveTrips(updated);
  return updated;
}
