import TipCard from "./TipCard.jsx";

export default function TipsList({ tips }) {
  return (
    <section className="grid md:grid-cols-2 gap-6">
      {tips.map((tip) => (
        <TipCard key={tip.id} tip={tip} />
      ))}
    </section>
  );
}
