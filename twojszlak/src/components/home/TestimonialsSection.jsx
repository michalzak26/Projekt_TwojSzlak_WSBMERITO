export default function TestimonialsSection() {
  return (
    <section className="bg-white text-bg py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Opinie użytkowników
        </h2>

        <div className="space-y-6">
          <div className="bg-slate-100 p-6 rounded-2xl shadow-md">
            <p className="text-lg mb-2">
              📖 "Dzięki Twój Szlak zorganizowałam najlepszą podróż życia!
              Polecam."
            </p>
            <p className="text-slate-600 mt-1">– Anna K</p>
          </div>

          <div className="bg-slate-100 p-6 rounded-2xl shadow-md">
            <p className="text-lg mb-2">
              📖 "Twój Szlak świetnie pomaga w planowaniu wyjazdów. Polecam
              każdemu."
            </p>
            <p className="text-slate-600 mt-1">– Marek P</p>
          </div>
        </div>
        <h2 className="text-2xl font-bold mt-8 text-center">
          Też chcesz dodać opinię? <br /> Prześlij ją nam na adres
          kontakt@twojszlak.pl
        </h2>
      </div>
    </section>
  );
}
