const Card = ({ imagen, nombre, onClick, description }) => {
    return (
      <div className="card" onClick={onClick} style={{ cursor: 'pointer' }}>
        <img src={imagen} alt={nombre} />
        <p>{nombre}</p>
        {/* <p>{description}</p> */}
      </div>
    );
  };
  
  export default Card;
  