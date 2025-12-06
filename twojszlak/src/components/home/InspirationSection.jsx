export default function InspirationSection() {
  const items = ["tatry1", "zamki", "chocholowska", "rysy"];

  return (
    <section className="bg-bg text-text py-16">
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
        {items.map((img) => (
          <article
            key={img}
            className="rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-xl transition"
          >
            <img
              src={`/media/${img}.jpg`}
              alt={img}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-card">
              <h3 className="font-bold capitalize">
                {img === "tatry1"
                  ? "Weekend w Tatrach"
                  : img === "zamki"
                  ? "Szlak zamków"
                  : img === "chocholowska"
                  ? "Dolina Chochołowska"
                  : "Rysy"}
              </h3>
              <p className="text-muted text-sm">
                {img === "zamki"
                  ? "Historyczne podróże"
                  : "Atrakcje i lokalne szlaki"}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
