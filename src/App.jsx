import './App.css'
import './Components/Header.css'
import './Components/Header-nav.css'
import './Components/Input-language.css'
import './Components/Card.css'
import './Components/Depositar-billetes.css'
import './Components/Footer.css'
import './Components/CardsGrid.css'
import './Components/Content-body.css'
import './Components/plan/style.css'
import './i18n';
import HeaderNav from './Components/Header-nav'
import CardsGrid from './Components/CardsGrid'
import ContentBody from './Components/Content-body'
import CardGrid from './Components/CardsGrid'
import { useState,useEffect  } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import DepositarBilletes from './Components/Depositar-billetes'
import { Routes, Route,useLocation } from "react-router-dom";
import Confirmation from './Components/confirm/confirmation'
import { useTranslation } from 'react-i18next';

function App() {
  const [selectedCountry, setSelectedCountry] = useState("República Dominicana");
  const [selectedCard, setSelectedCard] = useState(null);
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    } else {
      i18n.changeLanguage("es"); 
    }
  }, [i18n]);
  
  const hideHeader = location.pathname === "/confirmacion" || location.pathname === "/ingresar-numero"|| location.pathname === "/billetes";

  return (
    <>
      
      {location.pathname === "/ingresar-numero" && <HeaderNav />}
      {location.pathname === "/billetes" && <HeaderNav />}
     
      {!hideHeader && (
        <Header 
          selectedCountry={selectedCountry} 
          setSelectedCountry={setSelectedCountry} 
          selectedCard={selectedCard} 
        />
      )}

      <Routes>
        <Route path="/" element={<CardsGrid selectedCountry={selectedCountry} selectedCard={selectedCard} setSelectedCard={setSelectedCard} />} />
        <Route path="/ingresar-numero" element={<ContentBody />} />
        <Route path="/billetes" element={<DepositarBilletes />} />
        <Route path="/confirmacion" element={<Confirmation />} />
      </Routes>

      {/* Mostrar Footer excepto en /ingresar-numero, /billetes y /confirmacion */}
      {!["/ingresar-numero", "/billetes", "/confirmacion"].includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;
