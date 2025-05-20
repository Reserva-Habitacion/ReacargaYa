import IcoBack from "../assets/ico-back"
import InputLanguage from "./Input-language"
import { useNavigate } from "react-router-dom";

function HeaderNav({ name }) {
  const navigate = useNavigate();
  // console.log("🚀 ~ HeaderNav ~ navigate:", navigate)
  
  return (

    <div className="header">
      <div className="left-div" onClick={() => (window.location.href = "http://localhost:5173/")}>
          <IcoBack />
      </div>
      <div className="tittle">
        <h2>Servicios {name}</h2>
      </div>

      <div className="right-div">
        <InputLanguage />
      </div>
    </div>
  )
}

export default HeaderNav