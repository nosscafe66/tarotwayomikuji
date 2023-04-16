function CardDeck() {
  return (
    <div className="card-deck">
      {cards.map((card) => (
        <TarotCard key={card.id} {...card} />
      ))}
    </div>
  );
}