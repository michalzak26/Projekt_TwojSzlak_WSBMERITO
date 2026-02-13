import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";

export default function TipCard({ tip }) {
  return (
    <article className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 hover:border-emerald-200 transition-all duration-300 overflow-hidden flex flex-col h-full hover:-translate-y-1">
      {/* MINIATURA */}
      {tip.thumbImage && (
        <div className="h-48 w-full overflow-hidden relative">
          <img
            src={tip.thumbImage}
            alt={tip.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      )}

      {/* TREŚĆ */}
      <div className="p-6 flex flex-col gap-4 flex-1">
        {/* Meta dane (Badge + Czas) */}
        <div className="flex items-center justify-between text-xs font-medium">
          <span className="inline-flex items-center rounded-lg bg-emerald-50 px-2.5 py-1 text-emerald-700 border border-emerald-100">
            {tip.badge}
          </span>

          {tip.readTime && (
            <div className="flex items-center gap-1 text-gray-400">
              <Clock className="w-3.5 h-3.5" />
              <span>{tip.readTime} czytania</span>
            </div>
          )}
        </div>

        {/* Tytuł */}
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors leading-tight">
          {tip.title}
        </h3>

        {/* Fragment tekstu */}
        <p className="text-sm text-gray-500 leading-relaxed flex-1 line-clamp-3">
          {tip.excerpt}
        </p>

        {/* Przycisk */}
        <Link
          to={`/tips/${tip.id}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 mt-2 group/link"
        >
          Czytaj więcej
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
