import { useState } from 'react';
import Card from './Card';
import ContentBody from './Content-body';
import countryData from "../data/countryData";

const CardGrid = ({ selectedCountry }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (nombre) => {
    setSelectedCard(nombre);
  };

  return (
    <div className="body-grid">
      {selectedCard ? (
        <ContentBody nombre={selectedCard} />
      ) : (
        <div className="cards-grid">
          {countryData[selectedCountry].cards.map((card, index) => (
            <Card
              key={`${card.nombre}-${index}`}
              imagen={card.imagen}
              // nombre={card.nombre}
              onClick={() => handleCardClick(card.nombre)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardGrid;
