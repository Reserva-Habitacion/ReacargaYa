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
import { Routes, Route } from "react-router-dom";




function App() {
  const [selectedCountry, setSelectedCountry] = useState("República Dominicana");
  const [selectedCard, setSelectedCard] = useState(null);
  return (
    <>
      {/* <HeaderNav /> */}
      <Header selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} selectedCard={selectedCard} />
      <Routes>
        <Route path="/" element={<CardsGrid selectedCountry={selectedCountry} selectedCard={selectedCard} setSelectedCard={setSelectedCard} />} />
        <Route path="/ingresar-numero" element={<ContentBody />} />
        <Route path="/billetes" element={<DepositarBilletes />} />
      </Routes>

      {/* <Footer /> */}
    </>
  )
}

export default App
