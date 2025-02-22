import animacionBillete from '../assets/animacion-billete.gif';

const DepositarBilletes = () => {
    return (
        <div className="body-grid">
            <div className="pay-page">
                <div className="info-transacion">
                    <h1>(809) 234 5673</h1>
                    <h3></h3>
                    <h2 className="servicio-adquirido">
                        (Claro) Paquete Libre-Plus 5 Días
                        <span className="resaltado">$170</span>
                    </h2>
                </div>
                
                <span>Introduzca el billete</span>
                
                <img src={animacionBillete} alt="Animación billete" />
                
                <span className="monto">RD$ 0</span>
                <h2>(Puede introducir más de un billete)</h2>
            </div>
        </div>
    );
}

export default DepositarBilletes;
