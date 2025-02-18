import { useState } from 'react';
import Card from './Card';
import ContentBody from './Content-body';

const CardGrid = () => {
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
          <Card
            imagen="https://upload.wikimedia.org/wikipedia/commons/9/99/Logo_de_Claro.svg"
            nombre=""
            onClick={() => handleCardClick('Claro')}
          />

          <Card
            imagen="https://upload.wikimedia.org/wikipedia/commons/e/e7/Altice_logo_%28new%29.png"
            nombre="Altice"
            onClick={() => handleCardClick('Altice')}
          />
          <Card
            imagen="https://logos-world.net/wp-content/uploads/2021/09/Orange-Emblem.png"
            nombre="Orange"
            onClick={() => handleCardClick('Orange')}
          />
          <Card
            imagen="https://edeeste.com.do/transparencia/wp-content/uploads/2017/01/Logo-EDEEste-Azul-Amarillo.png"
            nombre="EdeEste"
            onClick={() => handleCardClick('EdeEste')}
          />
          <Card
            imagen="https://edenorte.com.do/wp-content/uploads/2016/04/LOGOS-EDE.png"
            nombre="Edenorte"
            onClick={() => handleCardClick('Edenorte')}
          />
          <Card
            imagen="https://upload.wikimedia.org/wikipedia/commons/f/fd/Logo_de_Edesur_Dominicana%2C_S.A.png"
            nombre="Edesur"
            onClick={() => handleCardClick('Edesur')}
          />
           <Card
            imagen="https://upload.wikimedia.org/wikipedia/commons/9/99/Logo_de_Claro.svg"
            nombre="Claro"
            onClick={() => handleCardClick('Claro')}
          />
          
          <Card
            imagen="https://upload.wikimedia.org/wikipedia/commons/e/e7/Altice_logo_%28new%29.png"
            nombre="Altice"
            onClick={() => handleCardClick('Altice')}
          />
          <Card
            imagen="https://logos-world.net/wp-content/uploads/2021/09/Orange-Emblem.png"
            nombre="Orange"
            onClick={() => handleCardClick('Orange')}
          />
          <Card
            imagen="https://edeeste.com.do/transparencia/wp-content/uploads/2017/01/Logo-EDEEste-Azul-Amarillo.png"
            nombre="EdeEste"
            onClick={() => handleCardClick('EdeEste')}
          />
          <Card
            imagen="https://edenorte.com.do/wp-content/uploads/2016/04/LOGOS-EDE.png"
            nombre="Edenorte"
            onClick={() => handleCardClick('Edenorte')}
          />
          <Card
            imagen="https://upload.wikimedia.org/wikipedia/commons/f/fd/Logo_de_Edesur_Dominicana%2C_S.A.png"
            nombre="Edesur"
            onClick={() => handleCardClick('Edesur')}
          />
          
        </div>
      )}
    </div>
  );
};

export default CardGrid;
