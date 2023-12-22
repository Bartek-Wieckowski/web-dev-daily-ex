import Card from "./Card";
import { cardData } from "./data";

function Exercise11() {
  return (
    <section className="no_scroll grid place-items-center bg-gradient-to-b from-blue-400 to-green-300">
      <div className="w-full max-w-[500px] rounded-3xl bg-stone-200 shadow">
        {cardData.map((person) => (
          <Card key={person.userName} data={person} />
        ))}
      </div>
    </section>
  );
}

export default Exercise11;
