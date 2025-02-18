import IcoBack from "../assets/ico-back"
import InputLanguage from "./Input-language"


function HeaderNav() {
  return (

    <div className="header">
      <div className="left-div">
        <IcoBack />
      </div>
      <div className="tittle">
        <h2>Servicios Claro</h2>
      </div>

      <div className="right-div">
        <InputLanguage />
      </div>
    </div>
  )
}

export default HeaderNav