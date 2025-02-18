import countryData from "../data/countryData";
import HeaderNav from "./Header-nav";

function Header({ selectedCountry, setSelectedCountry, selectedCard }) {

  console.log(selectedCard);

  return (
    <>
    {selectedCard === null ?(
    <div className="header">
      <div className="img-logo">
        <img src="src/assets/Logo.png" alt="Logo" />
      </div>
      <div className="action-items">
        <h3>{selectedCard ? `Seleccionaste: ${selectedCard}` : "Elige tu país!"}</h3>
        <form>
          <img src={countryData[selectedCountry].flag} alt="Bandera" />
          <select
            className="country"
            name="country"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            {Object.keys(countryData).map((country) => (
              <option key={country} value={country}>
                {country}
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

    ):(
        <HeaderNav /> 
    )}
    </>
  );
}

export default Header;
