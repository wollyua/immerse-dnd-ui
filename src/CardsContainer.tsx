import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";

function CardsContainer() {
  const [cards, setCards] = useState<CharacterCard[]>([]);

  useEffect(() => {
    fetchCards().then((cards) => setCards(cards));
  }, []);

  return (
    <div>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}

export default CardsContainer;
