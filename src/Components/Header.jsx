import countryData from "../data/countryData";
import HeaderNav from "./Header-nav";
import logo from '../assets/logo.png';
import { useTranslation } from "react-i18next";

function Header({ selectedCountry, setSelectedCountry, selectedCard }) {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };
  return (
    <>
      {selectedCard === null ? (
        <div className="header">
          <div className="img-logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="action-items">
          <h3>{selectedCard ? `${t("selected_card")} ${selectedCard}` : t("select_country")}</h3>
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
            <select onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
              <option value="es">Español</option>
              <option value="en">English</option>
              <option value="ht">Creole</option>
            </select>
          </div>
        </div>

      ) : (
        <HeaderNav />
      )}
    </>
  );
}

export default Header;
