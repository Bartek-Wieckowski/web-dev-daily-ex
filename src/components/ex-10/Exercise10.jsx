import { useState } from "react";
import Card from "./Card";
import { cardData } from "./data";

function Exercise10() {
  const [selectedCard, setSelectedCard] = useState(null);

  function handleSelected(cardType) {
    setSelectedCard(cardType);
  }
  return (
    <section className="no_scroll grid place-items-center bg-blue-950">
      <div className="flex w-full flex-col justify-center gap-4 px-6 md:flex-row">
        {cardData.map((card) => (
          <Card
            key={card.type}
            cardInfo={card}
            selected={selectedCard === card.type}
            onHandleSelected={handleSelected}
          />
        ))}
      </div>
    </section>
  );
}

export default Exercise10;
