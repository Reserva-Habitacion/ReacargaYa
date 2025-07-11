import Card from './Card';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../api/api';

// Imágenes importadas localmente
import digicel from '../assets/digicel.jpg';
import natcom from '../assets/natcom.png';
import movilnet from '../assets/movilnet.png';
import digitelNuevo from '../assets/digitelNuevo.jpg';
import cantvLogo from '../assets/cantv_logo.png';
import viva from '../assets/viva.png';
import edenorte from '../assets/edenorte.png';
import edesur from '../assets/edesur.png';
import domLoteria from '../assets/images.png';
import entreApps from '../assets/unnamed.jpg'; // Asegúrate de que esta imagen exista

const CardGrid = ({ selectedCountry, selectedCard, setSelectedCard }) => {
  // console.log("🚀 ~ CardGrid ~ selectedCountry1:", selectedCountry)
  
  const navigate = useNavigate();
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const imageMap = {
    'ALTICE': 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Altice_logo_%28new%29.png',
    'CLARO': 'https://upload.wikimedia.org/wikipedia/commons/9/99/Logo_de_Claro.svg',
    'ORANGE': 'https://logos-world.net/wp-content/uploads/2021/09/Orange-Emblem.png',
    'TRICOM': 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Altice_logo_%28new%29.png',
    'VIVA': viva,
    'DIGICEL': digicel,
    'NATCOM': natcom,
    'MOVILNET': movilnet,
    'DIGITEL': digitelNuevo,
    'CANTV': cantvLogo,
    'EDENORTE': edenorte,
    'EDESUR': edesur,
    'DOMLOTERIA': domLoteria,
    'ENTREGAPP': entreApps,
  };

  const handleCardClick = (nombre) => {
    // console.log('Nombre de la tarjeta:', nombre);
    setSelectedCard(nombre);
    navigate("/ingresar-numero");
  };

  useEffect(() => {
    api.get(`/ProductByCountry/${selectedCountry}`)
      .then((response) => {
        // console.log('Productos cargados:', response.data);
        setDatos(response.data.Data);
        setCargando(false);
      })
      .catch((err) => {
        console.error('Error al cargar productos:', err);
        setError(err.message);
        setCargando(false);
      });
  }, [selectedCountry]);

  return (
    <div className="body-grid">
      <div className="cards-grid">
        {datos.map((producto, index) => {
          const nombre = producto.OperatorName.toUpperCase();
          const imagen = imageMap[nombre] || 'https://via.placeholder.com/150';

          return (
            <Card
              key={`${nombre}-${index}`}
              imagen={imagen}
              description={producto.Description}
              onClick={() => handleCardClick(nombre)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardGrid;
