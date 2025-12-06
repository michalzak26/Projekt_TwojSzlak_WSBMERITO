export default function FeaturesSection() {
  return (
    <section className="bg-white text-bg py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-3 text-center">Funkcje serwisu</h2>
        <p className="text-center text-slate-600 mb-10">
          Planowanie tras, wyszukiwanie atrakcji, tworzenie i organizacja
          harmonogramu podróży.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Wyznaczanie trasy",
              desc: "Planuj etapy podróży i punkty pośrednie.",
              icon: (
                <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
              ),
            },
            {
              title: "Wyszukiwanie miejsc",
              desc: "Atrakcje, noclegi, restauracje i więcej.",
              icon: (
                <path d="M10 2a8 8 0 1 0 5.3 14l5 5 1.4-1.4-5-5A8 8 0 0 0 10 2zm0 2a6 6 0 1 1 0 12A6 6 0 0 1 10 4z" />
              ),
            },
            {
              title: "Harmonogram",
              desc: "Układaj plan dni podróży i terminy.",
              icon: <path d="M7 2h2v2h6V2h2v2h3v18H4V4h3V2zm13 6H4v12h16V8z" />,
            },
          ].map((item) => (
            <article
              key={item.title}
              className="bg-slate-100 p-6 rounded-2xl text-center shadow-md hover:shadow-lg transition"
            >
              <div className="bg-accent w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center shadow-glow">
                <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                  {item.icon}
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-1">{item.title}</h3>
              <p className="text-slate-500">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
