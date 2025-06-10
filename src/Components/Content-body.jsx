import { useState, useEffect } from "react";
import Plan from "./plan/plan";
import Recarga from "./plan/Recarga";
import { useNavigate } from "react-router-dom";
import DepositarBilletes from "./Depositar-billetes";
import IcoDelete from "../assets/icoDelete";
import { useTranslation } from "react-i18next";
import InfoAlert from "../assets/InfoAlert";
import api from "../api/api";
import Swal from 'sweetalert2';

const ContentBody = ({ selectedCountry, selectedCard }) => {

    const { t } = useTranslation();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [planInfo, setPlanInfo] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const [nameOption, setNameOption] = useState(null);
    const [priceOption, setPriceOption] = useState(null);
    const [showDepositar, setShowDepositar] = useState(false);
    const [option, setOption] = useState(false);
    const [planData, SetPlanData] = useState([]);



    const isPhoneComplete = phoneNumber.replace(/\D/g, "").length === 10;

    const formatPhoneNumber = (value) => {
        const cleaned = value.replace(/\D/g, "");
        if (cleaned.length <= 3) return cleaned;
        if (cleaned.length <= 6) return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
        if (cleaned.length > 6) return `(${cleaned.slice(0, 3)})-${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
        return cleaned.slice(0, 10);
    };

    const handleClick = () => {
        setShowDepositar(true);
        navigate("/billetes", {
            state: { phoneNumber: phoneNumber, selectedOption: selectedOption, nameOption: nameOption, priceOption: priceOption }
        });
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

    const handleChange = (e) => {
        const input = e.target.value.replace(/\D/g, ''); // Solo números
        if (input.length <= 10) {
            setPhoneNumber(input);
        }
    };

    useEffect(() => {
        const fetchPlanInfo = async () => {
            const cleanNumber = phoneNumber.replace(/\D/g, "");
            if (cleanNumber.length === 10) {
                api.get(`/ProductByOperator/${selectedCountry}/${selectedCard}/${cleanNumber}`)
                    .then((res) => {
                        console.log("data=>", res.data.RespCode);
                        if (res.data.RespCode != 0) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'No se pudo obtener la información del plan. Intente nuevamente.',
                        });
                        setOption(false);
                        return;
                    }

                        SetPlanData(res.data.Data[0]?.PlanDatos || []);
                        const precios = res.data.Data[0]?.PlanRecarga || [];
                        setOption(true)
                        // const formateado = precios.map((price, index) => ({
                        //     id: index + 1,
                        //     price,
                        // }));
                        // setRecargas(formateado);
                    })
                    .catch((err) => {
                        console.error("Error al cargar las recargas:", err);
                    });
            } else {
                setOption(false);
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
                            <h1>{t("Número telefónico")}</h1>
                            <span>{t("Ingrese su número telefónico")}</span>
                        </div>
                        <div className="input-number">
                            <input
                                type="text"
                                name="PhoneNumber"
                                placeholder="(000)-000-0000"
                                value={phoneNumber}
                                onChange={handleChange}
                                style={{ color: "black" }}
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="keyboard">
                        <div className="keyboard-grid">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, t("delete"), 0, "BorrarTodo"].map((num, index) => (
                                <button
                                    key={index}
                                    className={`grid-buttom ${num === "Borrar" ? "borrar" : ""}`}
                                    onClick={() => handleButtonClick(num)}
                                >
                                    {num === "BorrarTodo" ? (
                                        <IcoDelete />
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
                    {!option ? (
                        <InfoAlert />
                    ) : (
                        <div>
                            {!activeTab && (
                                <>
                                    <h2 className="selection-title">Selecciona una opción para continuar</h2>
                                    <div className="button-selection-vertical">
                                        <button onClick={() => setActiveTab("planes")} className="big-button">
                                            Planes de Datos
                                        </button>
                                        <button onClick={handleClick} className="big-button">
                                            Recargas
                                        </button>
                                    </div>
                                </>
                            )}

                            {activeTab === "planes" && (
                                <>
                                    <button onClick={() => setActiveTab(null)} className="back-button">
                                        🔙 Volver
                                    </button>
                                    <Plan
                                        onSelect={(option, name, price) => {
                                            setSelectedOption(option);
                                            setNameOption(name);
                                            setPriceOption(price);
                                        }}
                                        pricePlan={planData}
                                    />
                                </>
                            )}

                            {activeTab === "recargas" && (
                                <>
                                    <button onClick={() => setActiveTab(null)} className="back-button">
                                        🔙 Volver
                                    </button>
                                    {/* <Recarga
                                        onSelect={(option, price) => {
                                            setSelectedOption(option);
                                            setPriceOption(price);
                                        }}
                                        planRecarga={planRecarga}
                                    /> */}

                                  
                                </>
                            )}
                        </div>
                    )}
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
                    <h1>{t('make_payment')}</h1>
                </button>
                {showDepositar && (
                    <DepositarBilletes
                        selectedOption={selectedOption}
                        nameOption={nameOption}
                        priceOption={priceOption}
                        setPhoneNumber={phoneNumber}
                    />
                )}
            </div>
        </div>
    );
};


export default ContentBody;
