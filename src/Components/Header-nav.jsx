import IcoBack from "../assets/ico-back"

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
        <form className="language">
          <select name="language" id="">
            <option>Español</option>
            <option>English</option>
            <option>Creole</option>
          </select>
        </form>
      </div>

    </div>
  )
}

export default HeaderNav