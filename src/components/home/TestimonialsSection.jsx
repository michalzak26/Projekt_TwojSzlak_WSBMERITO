import { Quote, Star, Mail } from "lucide-react";

export default function TestimonialsSection() {
  const reviews = [
    {
      id: 1,
      name: "Anna K.",
      role: "Podróżniczka weekendowa",
      text: "Dzięki Twój Szlak zorganizowałam najlepszą podróż życia! Wszystko w jednym miejscu, intuicyjne planowanie i świetne podpowiedzi atrakcji. Polecam każdemu, kto kocha naturę.",
    },
    {
      id: 2,
      name: "Marek P.",
      role: "Fanatyk górskich wycieczek",
      text: "Twój Szlak świetnie pomaga w planowaniu wyjazdów. Nareszcie nie muszę szukać wszystkiego w dziesięciu różnych kartach przeglądarki. Aplikacja działa szybko i wygląda pięknie.",
    },
  ];

  return (
    <section className="w-full py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-emerald-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* NAGŁÓWEK */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Co mówią o nas użytkownicy?
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Dołącz do społeczności podróżników, którzy odkrywają Polskę z Twoim
            Szlakiem.
          </p>
        </div>

        {/* KARTY OPINII */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-emerald-50 relative hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Treść */}
              <p className="text-gray-600 text-lg leading-relaxed mb-6 relative z-10">
                "{review.text}"
              </p>

              {/* Autor */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{review.name}</p>
                  <p className="text-xs text-emerald-600 uppercase font-semibold tracking-wide">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* KONTAKT */}
        <div className="bg-emerald-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-50" />

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Twoja opinia ma znaczenie!
            </h3>
            <p className="text-emerald-100 mb-8 max-w-xl mx-auto text-lg">
              Korzystasz z aplikacji i masz pomysł na ulepszenie? A może chcesz
              się podzielić wrażeniami? Napisz do nas.
            </p>

            <a
              href="mailto:kontakt@twojszlak.pl"
              className="inline-flex items-center gap-2 bg-white text-emerald-900 font-bold py-3 px-8 rounded-full hover:bg-emerald-50 transition-colors duration-300 shadow-lg"
            >
              <Mail className="w-5 h-5" />
              kontakt@twojszlak.pl
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
