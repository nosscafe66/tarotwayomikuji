function TarotCard({ id, name, imageUrl }) {
    return (
      <div className="card">
        <img src={imageUrl} alt={name} />
        <p>{name}</p>
        <p>{id}</p>
      </div>
    );
  }