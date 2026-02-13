import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const location = useLocation();

  const linkClasses =
    "text-gray-600 hover:text-green-700 transition-colors duration-200";

  return (
    <header className="w-full bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-green-700 flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          🗺️ Twój Szlak
        </Link>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden text-3xl text-gray-700 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Otwórz menu"
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-8 font-semibold text-sm uppercase tracking-wide">
          <Link to="/" className={linkClasses}>
            Strona powitalna
          </Link>
          <Link to="/trips" className={linkClasses}>
            Zaplanuj Trasę
          </Link>
          <Link to="/attractions" className={linkClasses}>
            Odkryj Atrakcje
          </Link>

          {/* Grupa "ToDo" */}
          <Link to="/todopacking" className={linkClasses}>
            Zacznij Pakowanie
          </Link>
          <Link to="/tips" className={linkClasses}>
            Porady
          </Link>
          <Link to="/contact" className={linkClasses}>
            Kontakt
          </Link>
        </nav>
      </div>

      {/* Menu mobile */}
      {open && (
        <nav className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0">
          <div className="flex flex-col text-sm font-semibold uppercase tracking-wide p-6 space-y-4">
            <Link to="/" className={linkClasses} onClick={() => setOpen(false)}>
              Strona powitalna
            </Link>
            <Link
              to="/trips"
              className={linkClasses}
              onClick={() => setOpen(false)}
            >
              Zaplanuj Trasę
            </Link>
            <Link
              to="/attractions"
              className={linkClasses}
              onClick={() => setOpen(false)}
            >
              Odkryj Atrakcje
            </Link>
            <Link
              to="/todopacking"
              className={linkClasses}
              onClick={() => setOpen(false)}
            >
              Zacznij Pakowanie
            </Link>
            <Link
              to="/tips"
              className={linkClasses}
              onClick={() => setOpen(false)}
            >
              Porady
            </Link>
            <Link
              to="/contact"
              className={linkClasses}
              onClick={() => setOpen(false)}
            >
              Kontakt
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
