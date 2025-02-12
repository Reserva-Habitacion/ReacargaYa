function Header() {
return (
  
<div className="header">
    <div className="img-logo">
    <img src="src/assets/Logo.png" alt="" />
    </div>
      <div className="action-items">
        <h3>Elige tu país!</h3>
        <img src="src/assets/RD.png" alt="" />
          <select className= "country" name="country" id="">
            <option>República Dominicana</option>
            <option>Haití</option>
            <option>Venezuela</option>
          </select>
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