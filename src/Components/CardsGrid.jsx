import Card from './Card';
import ContentBody from './Content-body';
import countryData from "../data/countryData";

const CardGrid = ({ selectedCountry, selectedCard, setSelectedCard }) => {
  const handleCardClick = (nombre) => {
    setSelectedCard(nombre);
  };

  return (
    <div className="body-grid">
      {selectedCard ? ( // Aquí se usa `selectedCard`, ahora recibido como prop
        <ContentBody nombre={selectedCard} />
      ) : (
        <div className="cards-grid">
          {countryData[selectedCountry].cards.map((card, index) => (
            <Card
              key={`${card.nombre}-${index}`}
              imagen={card.imagen}
              onClick={() => handleCardClick(card.nombre)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardGrid;
