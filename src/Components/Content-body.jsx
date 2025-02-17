import { useState, useEffect } from "react";

const ContentBody = ({ nombre }) => {
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
                    // const response = await fetch(`https://api.example.com/plan-info/${cleanNumber}`);
                    // const data = await response.json();
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
                    {planInfo && (
                        <>
                            {/* Aquí puedes mostrar la info del plan  hacer componente*/}
                            <div className="plan-info">
                                <h2>Plan: {planInfo.plan}</h2>
                                <p>Detalles: {planInfo.details}</p>
                            </div>
                        </>
                    )}
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
