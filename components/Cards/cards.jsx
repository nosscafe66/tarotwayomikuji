import React, { useState, useEffect, useCallback } from 'react';
import Card from "@/components/Card/cartd";
import classes from "../Cards/cards.module.css"

const CardDeck = ({ cards }) => {
  const [shuffledCards, setShuffledCards] = useState(cards);
  const [shufflednum, setShuffledNum] = useState(1);
  const [shufflerotate,setShufflerotate] = useState(0);

  const shuffleCards = useCallback((e) => {
    const newCards = [...shuffledCards];
    for (let i = newCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newCards[i], newCards[j]] = [newCards[j], newCards[i]];
    }
    setShuffledCards(newCards);
    if (shufflednum < 1000) {
      setShuffledNum(prevcount => prevcount + 200)
      setShufflerotate(prevrotate => prevrotate + 30)
    }
    else if (shufflednum > 11) {
      setShuffledNum(Math.random()* - 1)
      setShufflerotate(0)
    }
  }, [shufflednum]);

  const cardWidth = 400;
  const cardHeight = 500;
  const cardSpacing = 1;

  const generateRotation = () => {
    const randomRotation = Math.floor(Math.random() * shufflerotate) - 15;
    return `rotate(${randomRotation}deg)`
  }

  return (
    <div>
      <div className="card-deck">
        {shuffledCards.map((card, index) => (
          <div
            className="card"
            key={index}
            style={{
              zIndex: shuffledCards.length - index,
              transform: `translate(${Math.floor(Math.random() * shufflednum) + 10}px, ${Math.floor(
                Math.random() * shufflednum
              ) + 150}px) ${generateRotation()}`,
            }}
          >
            <div className="card-content">
              <Card
                key={card.title}
                title={card.title}
                backimage={card.backimage}
                frontimage={card.frontimage}
                description={card.description}
                style={{
                  transform: `rotate(${Math.floor(Math.random() * 30) - 15}deg)`
                }}
              />
            </div>
          </div>
        ))}
        <style jsx>{`
        .card-deck {
          margin:auto;
          position: relative;
          width: ${cardWidth}px;
          height: ${cardHeight}px;
        }

        .card {
          position: absolute;
          top: ${index => index * cardSpacing}px;
          left: ${index => index * cardSpacing}px;
          background-color: white;
          box-shadow: 0 0.625rem 1.25rem rgba(0, 0, 0, 110.2);
          // border-radius: 0.25rem;
          overflow: hidden;
          width: ${cardWidth}px;
          height: ${cardHeight}px;
          transition: transform 1.5s ease-out;
          border-radius: 60px;
        }

        .card:hover {
          transform: scale(1.05) translateY(-5px) rotateX(-5deg);
        }

        .card:not(:last-child) {
          z-index: 1;
        }

        .card img {
          width: 100%;
          height: 80%;
          object-fit: cover;
        }

        .card-content {
          padding: 0rem 0rem;
        }

        .card-content h3 {
          font-size: 1rem;
          margin-bottom: 0.25rem;
        }

        .card-content p {
          font-size: 0.75rem;
          line-height: 1.25;
        }
      `}</style>
      </div><br /><br />
      <button onClick={shuffleCards}>CardsShuffle</button>
    </div>
  );
};

export default CardDeck;
