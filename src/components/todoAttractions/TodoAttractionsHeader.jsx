import { Link } from "react-router-dom";
import { ListTodo, Map, Printer, ArrowLeft } from "lucide-react";

export default function TodoAttractionsHeader({ count }) {
  const exportPDF = () => {
    window.print();
  };

  return (
    <header className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-xl shadow-emerald-900/5 border border-emerald-100 flex flex-col md:flex-row md:items-center justify-between gap-6 print:shadow-none print:border-none print:p-0 print:mb-6 print:bg-transparent">
      {/* SEKCJA TYTUŁOWA */}
      <div>
        <h1 className="text-3xl font-extrabold text-emerald-900 flex items-center gap-3 print:text-black">
          {/* Ikona (ukryta w druku) */}
          <div className="p-2.5 bg-emerald-100 rounded-2xl text-emerald-600 shadow-inner print:hidden">
            <ListTodo className="w-8 h-8" />
          </div>
          Lista „Do zwiedzenia”
          {/* Licznik (jeśli przekazany) */}
          {count !== undefined && count !== null && (
            <span className="text-sm font-bold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full border border-emerald-200 shadow-sm align-middle print:hidden">
              {count}
            </span>
          )}
        </h1>
        <p className="text-sm text-gray-500 mt-2 ml-1 font-medium print:hidden">
          Twoje wybrane miejsca. Możesz je wydrukować lub zapisać jako PDF i
          zabrać w podróż.
        </p>
      </div>

      {/* PRZYCISKI AKCJI (Ukryte w druku) */}
      <div className="flex flex-wrap items-center justify-end gap-3 print:hidden">
        {/* Przycisk */}
        <Link
          to="/attractions"
          className="px-5 py-3 rounded-xl text-sm font-bold text-gray-600 bg-white border border-gray-200 hover:bg-gray-50 hover:text-emerald-700 hover:border-emerald-200 transition-all flex items-center gap-2 group"
        >
          <ArrowLeft className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 transition-colors" />
          <Map className="w-4 h-4" />
          Wróć do mapy
        </Link>

        {/* Przycisk */}
        <button
          onClick={exportPDF}
          className="px-5 py-3 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/20 hover:-translate-y-0.5 transition-all flex items-center gap-2"
        >
          <Printer className="w-4 h-4" />
          Drukuj/PDF
        </button>
      </div>
    </header>
  );
}
