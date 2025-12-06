import { useEffect } from "react";

export function useMapCenterFromURL(searchParams, setCenter) {
  useEffect(() => {
    const lat = parseFloat(searchParams.get("lat"));
    const lng = parseFloat(searchParams.get("lng"));

    if (!isNaN(lat) && !isNaN(lng)) {
      setCenter([lat, lng]);
    }
  }, [searchParams, setCenter]);
}
