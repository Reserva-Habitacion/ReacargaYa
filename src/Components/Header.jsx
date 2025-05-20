import countryData from "../data/countryData";
import { useEffect, useState } from "react";
import HeaderNav from "./Header-nav";
import logo from '../assets/logo.png';
import api from "../api/api";
import flagMap from "../data/flagMap";

function Header({ selectedCard, onCountryChange }) {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    api.get('/Country')
      .then((res) => {
        console.log("Países cargados:", res.data[0].CountryCode);
        setCountries(res.data);
        const firstCountry = res.data[0].CountryCode;
        setSelectedCountry(firstCountry);
        onCountryChange(firstCountry); // Notificar al padre
      })
      .catch((err) => {
        console.error("Error al cargar los países:", err);
      });
  }, []);

  const handleChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    onCountryChange(country); // Notificar al padre cuando cambia
  };

  return (
    <>
      {selectedCard === null ? (
        <div className="header">
          <div className="img-logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="action-items">
            <h3>{selectedCard ? `Seleccionaste: ${selectedCard}` : "Elige tu país!"}</h3>
            <form>
              {flagMap[selectedCountry] && (
                <img
                  src={flagMap[selectedCountry]}
                  alt={`Bandera de ${selectedCountry}`}
                  style={{ width: "30px", marginRight: "10px" }}
                />
              )}
              <select
                className="country"
                name="country"
                value={selectedCountry}
                onChange={handleChange}
              >
                <option value=''>-- Selecciona un país --</option>
                {countries.map((country) => (
                  <option key={country.CountryCode} value={country.CountryCode}>
                    {country.Country}
                  </option>
                ))}
              </select>
            </form>
            <select name="language" id="">
              <option>Español</option>
              <option>English</option>
              <option>Creole</option>
            </select>
          </div>
        </div>
      ) : (
        <HeaderNav name={selectedCard} />
      )}
    </>
  );
}

export default Header;
