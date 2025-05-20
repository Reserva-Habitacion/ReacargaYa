import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const DepositarBilletes = ({  }) => {

    //                     selectedOption={selectedOption}
    //                     nameOption={nameOption}
    //                     priceOption={priceOption}
    //                     setPhoneNumber={phoneNumber}
    const location = useLocation();
    const navigate = useNavigate();
    const [total, setTotal] = useState(0);
    const [data, setData] = useState(null);

    // useEffect(() => {
    //     if (!location.state) {
    //         navigate("/"); // Redirige si no hay datos
    //     } else {
    //         setData(location.state); // Guarda los datos en el estado local
    //     }
    // }, [location.state, navigate]);

    // if (!data) {
    //     return <p>Cargando...</p>;
    // }

    const { phoneNumber, nameOption, priceOption } = location.state;

    // Función para agregar billetes al monto total
    const agregarBillete = (valor) => {
        const nuevoTotal = total + valor;
        setTotal(nuevoTotal);

        // Si el monto es suficiente, redirige a otra página
        if (nuevoTotal >= priceOption) {
            setTimeout(() => navigate("/confirmacion"), 1000); // Redirige tras 1 seg.
        }
    };

    return (
        <div className="body-grid">
            <div className="pay-page">
                <div className="info-transacion">
                    <h1>{phoneNumber}</h1>
                    <h2 className="servicio-adquirido">
                        {nameOption ? nameOption : "Recarga "}
                        <span className="resaltado"> ${priceOption} </span>
                    </h2>
                </div>

                <span>Introduzca el billete</span>
                <img src="../src/assets/animacion-billete.gif" alt="Animación de billete" />
                
                <span className="monto">RD$ {total}</span>
                <h2>(Puede introducir más de un billete)</h2>

                {/* Botones de billetes */}
                <div className="botones-billetes">
                    {[50, 100, 200, 500, 1000].map((valor) => (
                        <button key={valor} onClick={() => agregarBillete(valor)}>
                            RD$ {valor}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DepositarBilletes;
