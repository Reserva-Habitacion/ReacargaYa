const card = ({ imagen, nombre }) => {
    return (
        <div className="card">
            <img src={imagen} alt={nombre} />
        </div>
    )
}
export default card