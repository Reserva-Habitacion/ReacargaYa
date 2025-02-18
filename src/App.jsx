import './App.css'
//*import './Components/Header.css'
import './Components/Header-nav.css'
import './Components/Card.css'
import './Components/Footer.css'
import './Components/CardsGrid.css'
import './Components/Content-body.css'
import HeaderNav from './Components/Header-nav'
import CardsGrid from './Components/CardsGrid'
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
