import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-green-700 flex items-center gap-2"
        >
          🗺️ TwójSzlak
        </Link>

        {/* Hamburger (mobile) */}
        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          ☰
        </button>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-6 font-semibold text-sm uppercase tracking-wide">
          <Link to="/" className="text-gray-600 hover:text-green-700">
            Start
          </Link>
          <Link to="/trips" className="text-gray-600 hover:text-green-700">
            TripsPage
          </Link>
          <Link
            to="/attractions"
            className="text-gray-600 hover:text-green-700"
          >
            Attractions
          </Link>
          <Link
            to="/todoattractions"
            className="text-gray-600 hover:text-green-700"
          >
            ToDo Atrakcje
          </Link>
          <Link
            to="/todopacking"
            className="text-gray-600 hover:text-green-700"
          >
            Packing
          </Link>
          <a href="/tips" className="text-gray-600 hover:text-green-700">
            TipsPage
          </a>
          <a href="/contact" className="text-gray-600 hover:text-green-700">
            Kontakt
          </a>
        </nav>
      </div>

      {/* Menu mobile */}
      {open && (
        <nav className="md:hidden bg-white border-t shadow-inner animate-fadeIn">
          <div className="flex flex-col text-sm font-semibold uppercase tracking-wide p-4 space-y-3">
            <Link
              to="/"
              className="text-gray-700"
              onClick={() => setOpen(false)}
            >
              Start
            </Link>
            <Link
              to="/trips"
              className="text-gray-700"
              onClick={() => setOpen(false)}
            >
              TripsPage
            </Link>
            <Link
              to="/attractions"
              className="text-gray-700"
              onClick={() => setOpen(false)}
            >
              Attractions
            </Link>
            <Link
              to="/todoattractions"
              className="text-gray-700"
              onClick={() => setOpen(false)}
            >
              ToDo Atrakcje
            </Link>
            <Link
              to="/todopacking"
              className="text-gray-700"
              onClick={() => setOpen(false)}
            >
              Packing
            </Link>
            <a
              href="#thumbnails"
              className="text-gray-700"
              onClick={() => setOpen(false)}
            >
              Miniatury
            </a>
            <a
              href="#kontakt"
              className="text-gray-700"
              onClick={() => setOpen(false)}
            >
              Kontakt
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
