import IcoBack from "../assets/ico-back"
import InputLanguage from "./Input-language"
import { useNavigate } from "react-router-dom";

function HeaderNav({ name }) {
  const navigate = useNavigate();
  // console.log("🚀 ~ HeaderNav ~ navigate:", navigate)
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };
  return (

    <div className="header">
      <div className="left-div" onClick={() => (window.location.href = "http://localhost:5173/")}>
        <IcoBack />
      </div>
      <div className="tittle">
        <h2>Servicios {name}</h2>
      </div>

      <div className="right-div">
        <form className="input-language">
          <select onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
            <option value="es">Español</option>
            <option value="en">English</option>
            <option value="ht">Creole</option>
          </select>
        </form>
      </div>
    </div>
  )
}

export default HeaderNav