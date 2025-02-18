import './App.css'
import './Components/Header.css'
import './Components/Card.css'
import './Components/Footer.css'
import './Components/CardsGrid.css'
import './Components/Content-body.css'
import Header from './Components/Header'
import ContentBody from './Components/Content-body'
import CardGrid from './Components/CardsGrid'
import { useState } from 'react'





function App() {
  const [selectedCountry, setSelectedCountry] = useState("República Dominicana");
  return (
    <>
      <Header selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
      <CardGrid selectedCountry={selectedCountry} />

    </>
  )
}

export default App
