import Card from "@/components/Card/cartd";
import React from "react";

const Cards = () => {
  const cards= [
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
    },]
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
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          grid-gap: 0.82rem;
      }
      `}</style>
    </div>
  );
};

export default Cards;