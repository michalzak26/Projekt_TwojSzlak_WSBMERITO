export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-[400px] bg-cover bg-center flex items-center justify-start"
      // style={{ backgroundImage: "url('/media/herosectionimage.jpg')" }}
    >
      <video
        src="/media/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="bg-black/60 backdrop-blur-sm p-8 rounded-2xl ml-8 max-w-2xl">
        <p className="text-4xl leading-tight font-display mb-6">
          Twój Szlak to aplikacja, która pomaga planować podróże i odkrywać nowe
          miejsca.
        </p>
        <button
          onClick={() => (window.location.href = "/trips")}
          className="bg-accent text-bg font-semibold px-6 py-3 rounded-full hover:bg-cyan-400 transition-transform hover:-translate-y-1"
        >
          Zaplanuj podróż
        </button>
      </div>
    </section>
  );
}
