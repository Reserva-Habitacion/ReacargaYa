import { useState } from "react";

const ContentBody = () => {
    const [phoneNumber, setPhoneNumber] = useState("");

    // Función para manejar la entrada de los números
    const handleButtonClick = (value) => {
        if (value === "Borrar") {
            setPhoneNumber((prev) => prev.slice(0, -1)); // Elimina el último número
        } else {
            setPhoneNumber((prev) => prev + value.toString()); // Agrega el número al input
        }
    };

    return (
        <div className="content-body">
            <div className="left-case">
                <div className="left-case-info">
                    <div className="screen">
                        <div className="title">
                            <h1>Número telefónico</h1>
                            <span>Ingrese su número telefónico</span>
                        </div>
                        <div className="input-number">
                            <input
                                type="text"
                                name="PhoneNumber"
                                placeholder="(000)-000-0000"
                                value={phoneNumber}
                                readOnly
                            />
                        </div>
                    </div>

                    <div className="keyboard">
                        <div className="keyboard-grid">
                            {/* Generar botones del 1 al 9 y 0 dinámicamente */}
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, "Borrar", 0].map((num, index) => (
                                <button 
                                    key={index} 
                                    className={`grid-buttom ${num === "Borrar" ? "borrar" : ""}`}
                                    onClick={() => handleButtonClick(num)}
                                >
                                    <h1>{num}</h1>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="rigth-case">
                <div className="option-case">
                    <span>test</span>
                </div>
            </div>
            <div className="action-buttom">
                <button className="submit-button">
                    <h1>Realizar pago</h1>
                </button>
            </div>
        </div>
    );
};

export default ContentBody;
