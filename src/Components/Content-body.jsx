import { useState, useEffect } from "react";
import Plan from "./plan/paln";
import Recarga from "./plan/Recarga";
import { useNavigate } from "react-router-dom";
import Delete from "../assets/Delete";

const ContentBody = ({ nombre }) => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("planes");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [planInfo, setPlanInfo] = useState(null);
    const isPhoneComplete = phoneNumber.replace(/\D/g, "").length === 10;

    const formatPhoneNumber = (value) => {
        const cleaned = value.replace(/\D/g, ""); // Elimina caracteres no numéricos
    
        if (cleaned.length <= 3) return cleaned; 
        if (cleaned.length <= 6) return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
        
        // Después del octavo dígito, se aplican los paréntesis
        if (cleaned.length > 6) return `(${cleaned.slice(0, 3)})-${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
    
        return cleaned.slice(0, 10); // Asegura que no pase de 10 caracteres
    };

    const handleClick = () => {
        navigate("/billetes")
    }

    const handleButtonClick = (value) => {
        setPhoneNumber((prev) => {
            if (value === "BorrarTodo") {
                return formatPhoneNumber(prev.slice(0, -1)); // Elimina un número
            } else if (value === "Borrar") {
                return ""; // Borra todo el número
            } else if (prev.replace(/\D/g, "").length < 10) {
                return formatPhoneNumber(prev + value.toString());
            }
            return prev;
        });
    };


    useEffect(() => {
        //aqui se hace la peticion a la api
        const fetchPlanInfo = async () => {
            const cleanNumber = phoneNumber.replace(/\D/g, "");
            if (cleanNumber.length === 10) {
                try {

                    setPlanInfo({ plan: "Plan 1", details: "Detalles del plan" });
                    console.log("Plan info:", data); // Puedes manejar esta info en el UI
                } catch (error) {
                    // console.error("Error fetching plan info:", error);
                }
            }
        };

        fetchPlanInfo();
    }, [phoneNumber]);
    console.log("phoneNumber", planInfo);
    return (
        <div className="content-body">
            <div className="left-case">
                <div className="left-case-info">
                    <div className="screen">
                        <div className="title">
                            <h1>Número telefónico {nombre}</h1>
                            <span>Ingrese su número telefónico</span>
                        </div>
                        <div className="input-number">
                            <input
                                type="text"
                                name="PhoneNumber"
                                placeholder="(000)-000-0000"
                                value={phoneNumber}
                                style={{ color: "black" }}
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="keyboard">
                        <div className="keyboard-grid">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, "Borrar", 0, "BorrarTodo"].map((num, index) => (
                                <button
                                    key={index}
                                    className={`grid-buttom ${num === "Borrar"  ? "borrar" : ""}`}
                                    onClick={() => handleButtonClick(num)}
                                >
                                    {num === "BorrarTodo" ? (
                                      < Delete/>
                                    ) : (
                                        <h1>{num}</h1>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>


                </div>
            </div>
            <div className="rigth-case">
                <div className="option-case">
                    <div className="plan-info">
                        {/* Contenedor de botones */}
                        <div className="tabs-container">
                            <button
                                className={`tab-button ${activeTab === "planes" ? "active" : ""}`}
                                onClick={() => setActiveTab("planes")}
                            >
                                Planes
                            </button>
                            <button
                                className={`tab-button ${activeTab === "recargas" ? "active" : ""}`}
                                onClick={() => setActiveTab("recargas")}
                            >
                                Recargas
                            </button>
                        </div>

                        {/* Contenido de los tabs */}
                        <div className="tab-content">
                            {activeTab === "planes" ? <Plan /> : <Recarga />}
                        </div>
                    </div>

                </div>
            </div>
            <div className="action-buttom">
                <button onClick={handleClick} className="submit-button" disabled={!isPhoneComplete} style={{
                    backgroundColor: isPhoneComplete ? "#30D99B" : "#ccc",
                    cursor: isPhoneComplete ? "pointer" : "not-allowed",
                    color: isPhoneComplete ? "white" : "#999999"
                }}>
                    <h1>Realizar pago</h1>
                </button>
            </div>
        </div>
    );
};

export default ContentBody;
