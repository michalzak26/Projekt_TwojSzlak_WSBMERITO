import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function TipCard({ tip }) {
  return (
    <article className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden flex flex-col">
      {/* MINIATURA */}
      {tip.thumbImage && (
        <div className="h-40 w-full overflow-hidden">
          <img
            src={tip.thumbImage}
            alt={tip.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform"
          />
        </div>
      )}

      {/* TREŚĆ */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
            {tip.badge}
          </span>
          {tip.readTime && <span>{tip.readTime} czytania</span>}
        </div>

        <h3 className="text-lg font-bold text-green-700 leading-snug">
          {tip.title}
        </h3>

        <p className="text-sm text-gray-600 flex-1">{tip.excerpt}</p>

        <Link
          to={`/tips/${tip.id}`}
          className="text-sm text-blue-600 flex items-center gap-1 hover:underline mt-1"
        >
          Czytaj więcej <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
