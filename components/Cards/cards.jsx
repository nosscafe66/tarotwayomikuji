import React, { useState, useEffect, useCallback } from 'react';
import Card from "@/components/Card/cartd";
import classes from "../Cards/cards.module.css"
import CardContent from '../TarotContent/tarotcontent';

const CardDeck = ({ cards }) => {
  const [shuffledCards, setShuffledCards] = useState(cards);
  const [shufflednum, setShuffledNum] = useState(-10);
  const [shufflerotate, setShufflerotate] = useState(0);

  const shuffleCards = useCallback((e) => {
    const newCards = [...shuffledCards];
    for (let i = newCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newCards[i], newCards[j]] = [newCards[j], newCards[i]];
    }
    setShuffledCards(newCards);
    if (shufflednum < 1000) {
      console.log(`数値：${shufflednum}`)
      setShuffledNum(prevcount => prevcount + 200)
      setShufflerotate(prevrotate => prevrotate + 130)
    }
    else if (shufflednum > 11) {
      console.log(`数値：${shufflednum}`)
      setShuffledNum(-1)
      setShufflerotate(Math.random() * -1)
    }
  }, [shufflednum]);

  const cardWidth = 200;
  const cardHeight = 300;
  const cardSpacing = 1;

  const generateRotation1 = (index) => {
    const randomRotation = Math.floor(Math.random() * shufflerotate) - 1;
    const isUpsideDown = Math.random() < -0.5;
    return `rotate(${isUpsideDown ? 180 - randomRotation : randomRotation}deg)`;
  }
  const generateRotation2 = (index) => {
    const angle = (index / (shuffledCards.length - 1)) * Math.PI;
    const x = 400 * Math.cos(angle);
    const y = 200 * Math.sin(angle) + 200;
    const rotate = Math.floor(Math.random() * shufflerotate) - 1;
    const isUpsideDown = Math.random() < -0.5;
    return `translate(${x}px, ${y}px) rotate(${isUpsideDown ? 180 - rotate : rotate}deg)`;
  }

  const gettakeonecard = (index) => {

    // if (index == 1) {
    //   const randomRotation = Math.floor(Math.random() * shufflerotate) - 1;
    //   const isUpsideDown = Math.random() < -0.5;
    //   return `rotate(${isUpsideDown ? 180 - randomRotation : randomRotation}deg)`;
    // }
    if (index * Math.random()) {
      console.log(`ランダム数値：${index * Math.random()}`)
      const angle = (index / (shuffledCards.length - 1)) * Math.PI;
      const x = 400 * Math.cos(angle);
      const y = 200 * Math.sin(angle) + 100;//元々200
      const rotate = Math.floor(Math.random() * shufflerotate) - 1;
      const isUpsideDown = Math.random() < -0.5;
      return `translate(${x}px, ${y}px) rotate(${isUpsideDown ? 180 - rotate : rotate}deg)`;
    }
  };

  if (shufflednum > 800) {
    return (
      <div>

        <button className={classes.button} onClick={shuffleCards}>CardsShuffle</button>
        <div className={classes.rightpanel}>

        </div>
        <div className="card-deck">
          {shuffledCards.map((card, index) => (

            <div
              className="card"
              key={index}
              style={{
                zIndex: shuffledCards.length - index,
                transform: generateRotation2(index),
              }}
            >
              <div className="card-content">

                <Card
                  key={card.title}
                  backimage={card.backimage}
                  frontimage={card.frontimage}
                  // title={card.title}
                  // description={card.description}
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
              // background-color: white;
              // box-shadow: 0 0.625rem 0.25rem rgba(200, 200, 200, 110.2);
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
        </div>
      </div>
    );
  } else if (shufflednum == -1) {
    console.log(`数値：${shufflednum}`)
    console.log(shufflednum)
    return (
      <div>

        <button className={classes.button} onClick={shuffleCards}>CardsShuffle</button>
        <div className={classes.rightpanel}>

        </div>
        <div className="card-deck">
          {shuffledCards.map((card, index) => (
            <div
              className="card"
              key={index}
              style={{
                zIndex: shuffledCards.length - index,
                transform: gettakeonecard(index),
              }}
            >
              <div className="card-content">
                <Card
                  key={card.title}
                  backimage={card.backimage}
                  frontimage={card.frontimage}
                  // title={card.title}
                  // description={card.description}
                  style={{
                    transform: `rotate(${Math.floor(Math.random() * 300) - 15}deg)`
                  }}
                />
              </div>
              <div className="content">
                <CardContent title={card.title} description={card.description} />
              </div>
            </div>
          ))}
          <style jsx>{`
            .card-deck {
              margin:auto;
              position: relative;
              width: ${cardWidth}px;
              height: ${cardHeight}px;
              // overflow: hidden;
              
            }
    
            .card {
              position: absolute;
              top: ${index => index * cardSpacing}px;
              left: ${index => index * cardSpacing}px;
              // background-color: white;
              // box-shadow: 0 0.625rem 0.25rem rgba(0, 0, 0, 110.2);
              // border-radius: 0.25rem;
              overflow: hidden;
              width: ${cardWidth}px;
              height: ${cardHeight}px;
              transition: transform 1.5s ease-out;
              border-radius: 60px;
            }
    
            .card:hover {
              overflow:visible;
              transform: scale(1.75) translateY(-50px) rotateX(-50deg);
            }

            .content:hover{
              transform: scale(1.70) translateY(-50px) rotateX(-50deg);
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
        </div>
      </div>
    );
  }
  else {
    return (
      <div>

        <button className={classes.button} onClick={shuffleCards}>CardsShuffle</button>
        <div className={classes.rightpanel}>

        </div>
        <div className="card-deck">
          {shuffledCards.map((card, index) => (
            <div
              className="card"
              key={index}
              style={{
                zIndex: shuffledCards.length - index,
                transform: `translate(${Math.floor(Math.random() * shufflednum) + 10}px, ${Math.floor(
                  Math.random() * shufflednum
                ) + 150}px) ${generateRotation1()}`,
              }}
            >
              <div className="card-content">

                <Card
                  key={card.title}
                  backimage={card.backimage}
                  frontimage={card.frontimage}
                  // title={card.title}
                  // description={card.description}
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
              // background-color: white;
              // box-shadow: 0 0.625rem 0.25rem rgba(0, 0, 0, 110.2);
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
        </div>
      </div>
    );
  }

};

export default CardDeck;
