import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const DepositarBilletes = () => {
    const { t } = useTranslation();  // Obtener la función de traducción
    const location = useLocation();
    const navigate = useNavigate();
    const [total, setTotal] = useState(0);

    const { phoneNumber, nameOption, priceOption } = location.state;

    const agregarBillete = (valor) => {
        const nuevoTotal = total + valor;
        setTotal(nuevoTotal);

        if (nuevoTotal >= priceOption) {
            setTimeout(() => navigate("/confirmacion"), 1000);
        }
    };

    return (
        <div className="body-grid">
            <div className="pay-page">
                <div className="info-transacion">
                    <h1>{phoneNumber}</h1>
                    <h2 className="servicio-adquirido">
                        {nameOption ? nameOption : t("recharge")}
                        <span className="resaltado"> ${priceOption} </span>
                    </h2>
                </div>

                <span>{t("introduce_bill")}</span>
                <img src="../src/assets/animacion-billete.gif" alt="Animación de billete" />
                
                <span className="monto">RD$ {total}</span>
                <h2>{t("insert_more")}</h2>

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
