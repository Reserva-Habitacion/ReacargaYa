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
import HeaderNav from './Components/Header-nav'
import CardsGrid from './Components/CardsGrid'
import ContentBody from './Components/Content-body'
import CardGrid from './Components/CardsGrid'
import { useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import DepositarBilletes from './Components/Depositar-billetes'





function App() {
  const [selectedCountry, setSelectedCountry] = useState("República Dominicana");
  const [selectedCard, setSelectedCard] = useState(null);
  return (
    <>
      {/* <HeaderNav /> */}
      <Header
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        selectedCard={selectedCard} // Pasar `selectedCard` al Header
      />
      
      <CardGrid
        selectedCountry={selectedCountry}
        selectedCard={selectedCard} // Pasar `selectedCard` a CardGrid
        setSelectedCard={setSelectedCard} // Permitir actualizar el estado
      />
      <Footer />
    </>
  )
}

export default App
