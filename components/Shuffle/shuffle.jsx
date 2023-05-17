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
      description: "全体性、無限性、統合、そして宇宙の神秘を表しており、あなたが現在経験している出来事が、あなたの内側と外側の宇宙的な要素とどのように繋がっているかを示唆しています。また、「宇宙」は、人生の周期性や循環性を象徴しており、あなたの過去と未来が繋がっていることを示唆しています。このカードは、深い洞察や理解、そして新しい視点を得ることを促し、自己の内側と宇宙的な存在との繋がりを探求するための旅を始めることを奨励しています。",
    },
    {
      title: "Prince of Swords",
      backimage: "/img/backimage.jpg",
      frontimage: "/img/princeofswords.jpg",
      description: "全体性、無限性、統合、そして宇宙の神秘を表しており、あなたが現在経験している出来事が、あなたの内側と外側の宇宙的な要素とどのように繋がっているかを示唆しています。また、「宇宙」は、人生の周期性や循環性を象徴しており、あなたの過去と未来が繋がっていることを示唆しています。このカードは、深い洞察や理解、そして新しい視点を得ることを促し、自己の内側と宇宙的な存在との繋がりを探求するための旅を始めることを奨励しています。",
    },
    {
      title: "Seven of Cups",
      backimage: "/img/backimage.jpg",
      frontimage: "/img/sevenofcups.jpg",
      description: "全体性、無限性、統合、そして宇宙の神秘を表しており、あなたが現在経験している出来事が、あなたの内側と外側の宇宙的な要素とどのように繋がっているかを示唆しています。また、「宇宙」は、人生の周期性や循環性を象徴しており、あなたの過去と未来が繋がっていることを示唆しています。このカードは、深い洞察や理解、そして新しい視点を得ることを促し、自己の内側と宇宙的な存在との繋がりを探求するための旅を始めることを奨励しています。",
    },
    {
      title: "The Aeon",
      backimage: "/img/backimage.jpg",
      frontimage: "/img/theaeon.jpg",
      description: "全体性、無限性、統合、そして宇宙の神秘を表しており、あなたが現在経験している出来事が、あなたの内側と外側の宇宙的な要素とどのように繋がっているかを示唆しています。また、「宇宙」は、人生の周期性や循環性を象徴しており、あなたの過去と未来が繋がっていることを示唆しています。このカードは、深い洞察や理解、そして新しい視点を得ることを促し、自己の内側と宇宙的な存在との繋がりを探求するための旅を始めることを奨励しています。",
    },
    {
      title: "The Emperor",
      backimage: "/img/backimage.jpg",
      frontimage: "/img/theemperor.jpg",
      description: "全体性、無限性、統合、そして宇宙の神秘を表しており、あなたが現在経験している出来事が、あなたの内側と外側の宇宙的な要素とどのように繋がっているかを示唆しています。また、「宇宙」は、人生の周期性や循環性を象徴しており、あなたの過去と未来が繋がっていることを示唆しています。このカードは、深い洞察や理解、そして新しい視点を得ることを促し、自己の内側と宇宙的な存在との繋がりを探求するための旅を始めることを奨励しています。This is The Emperor",
    },
    {
      title: "The Empress",
      backimage: "/img/backimage.jpg",
      frontimage: "/img/theempress.jpg",
      description: "全体性、無限性、統合、そして宇宙の神秘を表しており、あなたが現在経験している出来事が、あなたの内側と外側の宇宙的な要素とどのように繋がっているかを示唆しています。また、「宇宙」は、人生の周期性や循環性を象徴しており、あなたの過去と未来が繋がっていることを示唆しています。このカードは、深い洞察や理解、そして新しい視点を得ることを促し、自己の内側と宇宙的な存在との繋がりを探求するための旅を始めることを奨励しています。",
    },
    {
      title: "The Herophant",
      backimage: "/img/backimage.jpg",
      frontimage: "/img/theherophant.jpg",
      description: "全体性、無限性、統合、そして宇宙の神秘を表しており、あなたが現在経験している出来事が、あなたの内側と外側の宇宙的な要素とどのように繋がっているかを示唆しています。また、「宇宙」は、人生の周期性や循環性を象徴しており、あなたの過去と未来が繋がっていることを示唆しています。このカードは、深い洞察や理解、そして新しい視点を得ることを促し、自己の内側と宇宙的な存在との繋がりを探求するための旅を始めることを奨励しています。",
    },
    {
      title: "The Magus",
      backimage: "/img/backimage.jpg",
      frontimage: "/img/themagus.jpg",
      description: "全体性、無限性、統合、そして宇宙の神秘を表しており、あなたが現在経験している出来事が、あなたの内側と外側の宇宙的な要素とどのように繋がっているかを示唆しています。また、「宇宙」は、人生の周期性や循環性を象徴しており、あなたの過去と未来が繋がっていることを示唆しています。このカードは、深い洞察や理解、そして新しい視点を得ることを促し、自己の内側と宇宙的な存在との繋がりを探求するための旅を始めることを奨励しています。",
    },
    {
      title: "The of Wands",
      backimage: "/img/backimage.jpg",
      frontimage: "/img/theofwands.jpg",
      description: "全体性、無限性、統合、そして宇宙の神秘を表しており、あなたが現在経験している出来事が、あなたの内側と外側の宇宙的な要素とどのように繋がっているかを示唆しています。また、「宇宙」は、人生の周期性や循環性を象徴しており、あなたの過去と未来が繋がっていることを示唆しています。このカードは、深い洞察や理解、そして新しい視点を得ることを促し、自己の内側と宇宙的な存在との繋がりを探求するための旅を始めることを奨励しています。",
    },
    {
      title: "two of Disk",
      backimage: "/img/backimage.jpg",
      frontimage: "/img/twoofdisk.jpg",
      description: "全体性、無限性、統合、そして宇宙の神秘を表しており、あなたが現在経験している出来事が、あなたの内側と外側の宇宙的な要素とどのように繋がっているかを示唆しています。また、「宇宙」は、人生の周期性や循環性を象徴しており、あなたの過去と未来が繋がっていることを示唆しています。このカードは、深い洞察や理解、そして新しい視点を得ることを促し、自己の内側と宇宙的な存在との繋がりを探求するための旅を始めることを奨励しています。This is The two of Disk",
    },
    {
      title: "Ace of Disks",
      backimage: "/img/backimage.jpg",
      frontimage: "/img/aceofdisks.jpg",
      description: "全体性、無限性、統合、そして宇宙の神秘を表しており、あなたが現在経験している出来事が、あなたの内側と外側の宇宙的な要素とどのように繋がっているかを示唆しています。また、「宇宙」は、人生の周期性や循環性を象徴しており、あなたの過去と未来が繋がっていることを示唆しています。このカードは、深い洞察や理解、そして新しい視点を得ることを促し、自己の内側と宇宙的な存在との繋がりを探求するための旅を始めることを奨励しています。",
    },]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const deck = [
      {
        title: "Knight of Disks",
        backimage: "/img/backimage.jpg",
        frontimage: "/img/knightofdisks.jpg",
        description: "全体性、無限性、統合、そして宇宙の神秘を表しており、あなたが現在経験している出来事が、あなたの内側と外側の宇宙的な要素とどのように繋がっているかを示唆しています。また、「宇宙」は、人生の周期性や循環性を象徴しており、あなたの過去と未来が繋がっていることを示唆しています。このカードは、深い洞察や理解、そして新しい視点を得ることを促し、自己の内側と宇宙的な存在との繋がりを探求するための旅を始めることを奨励しています。",
      },
      {
        title: "Prince of Swords",
        backimage: "/img/backimage.jpg",
        frontimage: "/img/princeofswords.jpg",
        description: "全体性、無限性、統合、そして宇宙の神秘を表しており、あなたが現在経験している出来事が、あなたの内側と外側の宇宙的な要素とどのように繋がっているかを示唆しています。また、「宇宙」は、人生の周期性や循環性を象徴しており、あなたの過去と未来が繋がっていることを示唆しています。このカードは、深い洞察や理解、そして新しい視点を得ることを促し、自己の内側と宇宙的な存在との繋がりを探求するための旅を始めることを奨励しています。",
      },
      {
        title: "Seven of Cups",
        backimage: "/img/backimage.jpg",
        frontimage: "/img/sevenofcups.jpg",
        description: "全体性、無限性、統合、そして宇宙の神秘を表しており、あなたが現在経験している出来事が、あなたの内側と外側の宇宙的な要素とどのように繋がっているかを示唆しています。また、「宇宙」は、人生の周期性や循環性を象徴しており、あなたの過去と未来が繋がっていることを示唆しています。このカードは、深い洞察や理解、そして新しい視点を得ることを促し、自己の内側と宇宙的な存在との繋がりを探求するための旅を始めることを奨励しています。",
      },
      {
        title: "The Aeon",
        backimage: "/img/backimage.jpg",
        frontimage: "/img/theaeon.jpg",
        description: "全体性、無限性、統合、そして宇宙の神秘を表しており、あなたが現在経験している出来事が、あなたの内側と外側の宇宙的な要素とどのように繋がっているかを示唆しています。また、「宇宙」は、人生の周期性や循環性を象徴しており、あなたの過去と未来が繋がっていることを示唆しています。このカードは、深い洞察や理解、そして新しい視点を得ることを促し、自己の内側と宇宙的な存在との繋がりを探求するための旅を始めることを奨励しています。",
      },
      {
        title: "The Emperor",
        backimage: "/img/backimage.jpg",
        frontimage: "/img/theemperor.jpg",
        description: "全体性、無限性、統合、そして宇宙の神秘を表しており、あなたが現在経験している出来事が、あなたの内側と外側の宇宙的な要素とどのように繋がっているかを示唆しています。また、「宇宙」は、人生の周期性や循環性を象徴しており、あなたの過去と未来が繋がっていることを示唆しています。このカードは、深い洞察や理解、そして新しい視点を得ることを促し、自己の内側と宇宙的な存在との繋がりを探求するための旅を始めることを奨励しています。",
      },
      {
        title: "The Empress",
        backimage: "/img/backimage.jpg",
        frontimage: "/img/theempress.jpg",
        description: "全体性、無限性、統合、そして宇宙の神秘を表しており、あなたが現在経験している出来事が、あなたの内側と外側の宇宙的な要素とどのように繋がっているかを示唆しています。また、「宇宙」は、人生の周期性や循環性を象徴しており、あなたの過去と未来が繋がっていることを示唆しています。このカードは、深い洞察や理解、そして新しい視点を得ることを促し、自己の内側と宇宙的な存在との繋がりを探求するための旅を始めることを奨励しています。",
      },
      {
        title: "The Herophant",
        backimage: "/img/backimage.jpg",
        frontimage: "/img/theherophant.jpg",
        description: "全体性、無限性、統合、そして宇宙の神秘を表しており、あなたが現在経験している出来事が、あなたの内側と外側の宇宙的な要素とどのように繋がっているかを示唆しています。また、「宇宙」は、人生の周期性や循環性を象徴しており、あなたの過去と未来が繋がっていることを示唆しています。このカードは、深い洞察や理解、そして新しい視点を得ることを促し、自己の内側と宇宙的な存在との繋がりを探求するための旅を始めることを奨励しています。",
      },
      {
        title: "The Magus",
        backimage: "/img/backimage.jpg",
        frontimage: "/img/themagus.jpg",
        description: "全体性、無限性、統合、そして宇宙の神秘を表しており、あなたが現在経験している出来事が、あなたの内側と外側の宇宙的な要素とどのように繋がっているかを示唆しています。また、「宇宙」は、人生の周期性や循環性を象徴しており、あなたの過去と未来が繋がっていることを示唆しています。このカードは、深い洞察や理解、そして新しい視点を得ることを促し、自己の内側と宇宙的な存在との繋がりを探求するための旅を始めることを奨励しています。",
      },
      {
        title: "The of Wands",
        backimage: "/img/backimage.jpg",
        frontimage: "/img/theofwands.jpg",
        description: "全体性、無限性、統合、そして宇宙の神秘を表しており、あなたが現在経験している出来事が、あなたの内側と外側の宇宙的な要素とどのように繋がっているかを示唆しています。また、「宇宙」は、人生の周期性や循環性を象徴しており、あなたの過去と未来が繋がっていることを示唆しています。このカードは、深い洞察や理解、そして新しい視点を得ることを促し、自己の内側と宇宙的な存在との繋がりを探求するための旅を始めることを奨励しています。",
      },
      {
        title: "two of Disk",
        backimage: "/img/backimage.jpg",
        frontimage: "/img/twoofdisk.jpg",
        description: "全体性、無限性、統合、そして宇宙の神秘を表しており、あなたが現在経験している出来事が、あなたの内側と外側の宇宙的な要素とどのように繋がっているかを示唆しています。また、「宇宙」は、人生の周期性や循環性を象徴しており、あなたの過去と未来が繋がっていることを示唆しています。このカードは、深い洞察や理解、そして新しい視点を得ることを促し、自己の内側と宇宙的な存在との繋がりを探求するための旅を始めることを奨励しています。",
      },
      {
        title: "Ace of Disks",
        backimage: "/img/backimage.jpg",
        frontimage: "/img/aceofdisks.jpg",
        description: "全体性、無限性、統合、そして宇宙の神秘を表しており、あなたが現在経験している出来事が、あなたの内側と外側の宇宙的な要素とどのように繋がっているかを示唆しています。また、「宇宙」は、人生の周期性や循環性を象徴しており、あなたの過去と未来が繋がっていることを示唆しています。このカードは、深い洞察や理解、そして新しい視点を得ることを促し、自己の内側と宇宙的な存在との繋がりを探求するための旅を始めることを奨励しています。",
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
      <AuthButton isAuthenticated={isAuthenticated} logout={logout} user={user} />
      <Cards cards={shuffledCards} />
    </div>
  );
};

export default ShufflePage;
