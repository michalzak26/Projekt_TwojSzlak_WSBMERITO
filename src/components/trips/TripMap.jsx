import MapOSM from "../MapOSM.jsx";

export default function TripMap({ points, setPoints, route, pdfRef }) {
  return (
    <div
      className="w-full h-full rounded-3xl overflow-hidden relative z-0"
      ref={pdfRef}
    >
      <MapOSM points={points} setPoints={setPoints} route={route || null} />
    </div>
  );
}
