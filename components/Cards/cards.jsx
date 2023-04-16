import React from "react";
import Card from "../components/Card";

const Cards = ({ cards }) => {
    const numCards = cards.length;
  
    return (
      <div className="grid">
        {cards.map((card, index) => (
          <Card
            key={card.title}
            title={card.title}
            image={card.image}
            description={card.description}
            style={{ gridColumn: `span ${index % 2 === 0 ? 2 : 1}` }}
          />
        ))}
        <style jsx>{`
          .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            grid-gap: 1rem;
          }
  
          @media (min-width: 600px) {
            .grid {
              grid-template-columns: repeat(${numCards}, minmax(200px, 1fr));
            }
          }
        `}</style>
      </div>
    );
  };

export default Cards;
