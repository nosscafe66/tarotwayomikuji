import Card from "@/components/Card/cartd";
import React from "react";

const Cards = ({ cards }) => {
    console.log(cards)
  return (
    <div className="grid">
      {cards.map((card) => (
        <Card
          key={card.title}
          title={card.title}
          backimage={card.backimage}
          frontimage={card.frontimage}
          description={card.description}
        />
      ))}
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          grid-gap: 1rem;
        }
      `}</style>
    </div>
  );
};

export default Cards;
