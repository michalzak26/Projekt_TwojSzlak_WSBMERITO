export const getName = (a) => a.properties?.name || "Bez nazwy";
export const getKinds = (a) =>
  a.properties?.categories?.join(", ") || "brak kategorii";
export const getDistMeters = (a) => Math.round(a.properties?.distance || 0);
export const getRating = (a) => a.properties?.rating || null;
export const getId = (a) => a.properties?.place_id;
export const getThumb = (a) => a.properties?.datasource?.raw?.image || null;
