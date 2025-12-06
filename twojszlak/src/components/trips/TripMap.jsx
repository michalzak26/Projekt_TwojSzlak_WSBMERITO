import MapOSM from "../MapOSM.jsx";

export default function TripMap({ points, setPoints, route, pdfRef }) {
  return (
    <div className="bg-white p-3 rounded-2xl shadow" ref={pdfRef}>
      <MapOSM points={points} setPoints={setPoints} route={route} />
    </div>
  );
}
