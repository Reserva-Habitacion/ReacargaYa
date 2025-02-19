import { useState, useEffect } from "react";
import Plan from "./plan/paln";
import Recarga from "./plan/Recarga";


const ContentBody = ({ nombre }) => {
    const [activeTab, setActiveTab] = useState("planes");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [planInfo, setPlanInfo] = useState(null);
    const isPhoneComplete = phoneNumber.replace(/\D/g, "").length === 10;

    const formatPhoneNumber = (value) => {
        const cleaned = value.replace(/\D/g, "");
        let formattedNumber = "";

        if (cleaned.length > 0) formattedNumber += `(${cleaned.slice(0, 3)}`;
        if (cleaned.length >= 4) formattedNumber += `)-${cleaned.slice(3, 6)}`;
        if (cleaned.length >= 7) formattedNumber += `-${cleaned.slice(6, 10)}`;

        return formattedNumber;
    };

    const handleButtonClick = (value) => {
        setPhoneNumber((prev) => {
            if (value === "Borrar") {
                return formatPhoneNumber(prev.slice(0, -1));
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
                    {/* {planInfo && (
                        <>


                        </>
                    )} */}
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
                <button className="submit-button" disabled={!isPhoneComplete} style={{
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
