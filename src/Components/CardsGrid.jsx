import Card from './Card';
import ContentBody from './Content-body';
import countryData from "../data/countryData";
import { useNavigate } from "react-router-dom";

const CardGrid = ({ selectedCountry, selectedCard, setSelectedCard }) => {
  const navigate = useNavigate();
    const handleCardClick = (nombre) => {
    setSelectedCard(nombre);
    navigate("/ingresar-numero"); // Cambia la ruta
  };

  return (
    <div className="body-grid">
      <div className="cards-grid">
        {countryData[selectedCountry].cards.map((card, index) => (
          <Card
            key={`${card.nombre}-${index}`}
            imagen={card.imagen}
            onClick={() => handleCardClick(card.nombre)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
