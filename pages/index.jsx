import React from "react";
import cards from "../data/cards";
import Cards from "./cards";

const HomePage = () => {
    const cards = [
        {
          title: "Card 1",
          image: "/img/card1.jpg",
          description: "This is the first card.",
        },
        {
          title: "Card 2",
          image: "/img/card2.jpg",
          description: "This is the second card.",
        },
        {
            title: "Card 2",
            image: "/img/card2.jpg",
            description: "This is the second card.",
          },
          {
            title: "Card 2",
            image: "/img/card2.jpg",
            description: "This is the second card.",
          },
          {
            title: "Card 2",
            image: "/img/card2.jpg",
            description: "This is the second card.",
          },
          {
            title: "Card 2",
            image: "/img/card2.jpg",
            description: "This is the second card.",
          },
          {
            title: "Card 2",
            image: "/img/card2.jpg",
            description: "This is the second card.",
          },
          {
            title: "Card 2",
            image: "/img/card2.jpg",
            description: "This is the second card.",
          },
          {
            title: "Card 2",
            image: "/img/card2.jpg",
            description: "This is the second card.",
          },
          {
            title: "Card 2",
            image: "/img/card2.jpg",
            description: "This is the second card.",
          },
          {
            title: "Card 2",
            image: "/img/card2.jpg",
            description: "This is the second card.",
          },
          {
            title: "Card 2",
            image: "/img/card2.jpg",
            description: "This is the second card.",
          }
      ];
  return <Cards cards={cards} />;
};

export default HomePage;
