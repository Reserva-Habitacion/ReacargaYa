
import countryData from "../data/countryData";

function Header({ selectedCountry, setSelectedCountry }) {
return (
  
<div className="header">
    <div className="img-logo">
    <img src="src/assets/Logo.png" alt="" />
    </div>
      <div className="action-items">
        <h3>Elige tu país!</h3>
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
    )
}

export default Header