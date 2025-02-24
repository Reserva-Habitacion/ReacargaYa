import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function Confirmation() {
    const { width, height } = useWindowSize();
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/"); 
        }, 15000);

        return () => clearTimeout(timer); 
    }, [navigate]);

    return (
        <div className="body-grid">
            <Confetti width={width} height={height} />
            <div className="pay-page">
                <div className="info-transacion">
                    <h2 className="servicio-adquirido">
                        <span className="resaltado"></span>
                    </h2>
                </div>

                <span>Gracias por utilizar</span>
                <img src="../src/assets/logo.png" alt="Logo" />

                <h2>Espere su recibo</h2>
            </div>
        </div>
    );
}
