import { useState, useEffect } from "react";
import Plan from "./plan/plan";
import Recarga from "./plan/Recarga";
import { useNavigate } from "react-router-dom";

const ContentBody = ({ nombre }) => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("planes");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [planInfo, setPlanInfo] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null); // Estado para plan o recarga seleccionados
    console.log("🚀 ~ ContentBody ~ selectedOption:", selectedOption)
    const isPhoneComplete = phoneNumber.replace(/\D/g, "").length === 10;

    const formatPhoneNumber = (value) => {
        const cleaned = value.replace(/\D/g, ""); // Elimina caracteres no numéricos
    
        if (cleaned.length <= 3) return cleaned; 
        if (cleaned.length <= 6) return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
        
        if (cleaned.length > 6) return `(${cleaned.slice(0, 3)})-${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
    
        return cleaned.slice(0, 10); // Asegura que no pase de 10 caracteres
    };

    const handleClick = () => {
        navigate("/billetes");
    };

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
        const fetchPlanInfo = async () => {
            const cleanNumber = phoneNumber.replace(/\D/g, "");
            if (cleanNumber.length === 10) {
                try {
                    setPlanInfo({ plan: "Plan 1", details: "Detalles del plan" });
                    console.log("Plan info:", planInfo); // Usa la info en la UI
                } catch (error) {
                    console.error("Error fetching plan info:", error);
                }
            }
        };

        fetchPlanInfo();
    }, [phoneNumber]);

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
                                    className={`grid-buttom ${num === "Borrar" ? "borrar" : ""}`}
                                    onClick={() => handleButtonClick(num)}
                                >
                                    {num === "BorrarTodo" ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="40"
                                            height="40"
                                            fill="currentColor"
                                        >
                                            <path d="M3 12l6-6v3h8v6h-8v3l-6-6zm14-6h4v12h-4V6z"/>
                                        </svg>
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

                        <div className="tab-content">
                            {activeTab === "planes" ? (
                                <Plan onSelect={setSelectedOption} />
                            ) : (
                                <Recarga onSelect={setSelectedOption} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="action-buttom">
                <button
                    onClick={handleClick}
                    className="submit-button"
                    disabled={!isPhoneComplete || !selectedOption}
                    style={{
                        backgroundColor: isPhoneComplete && selectedOption ? "#30D99B" : "#ccc",
                        cursor: isPhoneComplete && selectedOption ? "pointer" : "not-allowed",
                        color: isPhoneComplete && selectedOption ? "white" : "#999999"
                    }}
                >
                    <h1>Realizar pago</h1>
                </button>
            </div>
        </div>
    );
};

export default ContentBody;
