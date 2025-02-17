const Card = ({ imagen, nombre, onClick }) => {
    return (
      <div className="card" onClick={onClick} style={{ cursor: 'pointer' }}>
        <img src={imagen} alt={nombre} />
        <p>{nombre}</p>
      </div>
    );
  };
  
  export default Card;
  