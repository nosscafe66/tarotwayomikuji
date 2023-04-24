import React, { useState, useEffect } from "react";
import Cards from "../Cards/cards";
import "../Shuffle/shuffle.module.css";
import classes from "../Shuffle/shuffle.module.css"
import { AuthButton } from '@/components/AuthButton/authbutton';
import { useAuth0 } from '@auth0/auth0-react';
import { useUser } from '@auth0/nextjs-auth0/client';

//https://maku.blog/p/iz8fnu3/ここ見てjsonファイルの読み込み方法を記載する。
//https://zenn.dev/takuho/articles/3390a9ba28b325
const ShufflePage = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const [shuffledCards, setShuffledCards] = useState([
    {
      title: "Knight of Disks",
      backimage: "/img/backimage.jpg",
      frontimage: "/img/knightofdisks.jpg",
      description: "This is Knight of Disks",
    },
    {
      title: "Prince of Swords",
      backimage: "/img/backimage.jpg",
      frontimage: "/img/princeofswords.jpg",
      description: "This is Prince of Swords",
    },
    {
      title: "Seven of Cups",
      backimage: "/img/backimage.jpg",
      frontimage: "/img/sevenofcups.jpg",
      description: "This is Seven of Cups",
    },
    {
      title: "The Aeon",
      backimage: "/img/backimage.jpg",
      frontimage: "/img/theaeon.jpg",
      description: "This is The Aeon",
    },
    {
      title: "The Emperor",
      backimage: "/img/backimage.jpg",
      frontimage: "/img/theemperor.jpg",
      description: "This is The Emperor",
    },
    {
      title: "The Empress",
      backimage: "/img/backimage.jpg",
      frontimage: "/img/theempress.jpg",
      description: "This is The Empress",
    },
    {
      title: "The Herophant",
      backimage: "/img/backimage.jpg",
      frontimage: "/img/theherophant.jpg",
      description: "This is The Herophant",
    },
    {
      title: "The Magus",
      backimage: "/img/backimage.jpg",
      frontimage: "/img/themagus.jpg",
      description: "This is The Magus",
    },
    {
      title: "The of Wands",
      backimage: "/img/backimage.jpg",
      frontimage: "/img/theofwands.jpg",
      description: "This is The of Wands",
    },
    {
      title: "two of Disk",
      backimage: "/img/backimage.jpg",
      frontimage: "/img/twoofdisk.jpg",
      description: "This is The two of Disk",
    },
    {
      title: "Ace of Disks",
      backimage: "/img/backimage.jpg",
      frontimage: "/img/aceofdisks.jpg",
      description: "This is The Ace of Disks",
    },]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const deck = [
      {
        title: "Knight of Disks",
        backimage: "/img/backimage.jpg",
        frontimage: "/img/knightofdisks.jpg",
        description: "This is Knight of Disks",
      },
      {
        title: "Prince of Swords",
        backimage: "/img/backimage.jpg",
        frontimage: "/img/princeofswords.jpg",
        description: "This is Prince of Swords",
      },
      {
        title: "Seven of Cups",
        backimage: "/img/backimage.jpg",
        frontimage: "/img/sevenofcups.jpg",
        description: "This is Seven of Cups",
      },
      {
        title: "The Aeon",
        backimage: "/img/backimage.jpg",
        frontimage: "/img/theaeon.jpg",
        description: "This is The Aeon",
      },
      {
        title: "The Emperor",
        backimage: "/img/backimage.jpg",
        frontimage: "/img/theemperor.jpg",
        description: "This is The Emperor",
      },
      {
        title: "The Empress",
        backimage: "/img/backimage.jpg",
        frontimage: "/img/theempress.jpg",
        description: "This is The Empress",
      },
      {
        title: "The Herophant",
        backimage: "/img/backimage.jpg",
        frontimage: "/img/theherophant.jpg",
        description: "This is The Herophant",
      },
      {
        title: "The Magus",
        backimage: "/img/backimage.jpg",
        frontimage: "/img/themagus.jpg",
        description: "This is The Magus",
      },
      {
        title: "The of Wands",
        backimage: "/img/backimage.jpg",
        frontimage: "/img/theofwands.jpg",
        description: "This is The of Wands",
      },
      {
        title: "two of Disk",
        backimage: "/img/backimage.jpg",
        frontimage: "/img/twoofdisk.jpg",
        description: "This is The two of Disk",
      },
      {
        title: "Ace of Disks",
        backimage: "/img/backimage.jpg",
        frontimage: "/img/aceofdisks.jpg",
        description: "This is The Ace of Disks",
      },
    ];

    setCards(deck);
  }, []);

  useEffect(() => {
    setShuffledCards(shuffleCards(cards));
  }, [cards]);

  const shuffleCards = (cards) => {
    let shuffledCards = [...cards];
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    }
    return shuffledCards;
  };

  const shuffle = () => {
    setShuffledCards(shuffleCards(cards));
  };

  // 以下のコードを追加
  useEffect(() => {
    setShuffledCards(shuffleCards(cards));
  }, []);


  return (
    <div className="home-page">
      <AuthButton isAuthenticated={isAuthenticated} logout={logout} user={user}/>
      <button className={classes.button} onClick={shuffle}>Shuffle Cards</button>
      <button className={classes.button} onClick={shuffle}>Take One Card</button>
      <Cards cards={shuffledCards} />
    </div>
  );
};

export default ShufflePage;
