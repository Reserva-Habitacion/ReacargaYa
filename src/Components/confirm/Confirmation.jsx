// import React from 'react'
import { useEffect } from 'react';
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'
import { useNavigate } from 'react-router-dom';

export default function Confirmation() {

    const { width, height } = useWindowSize();
    const navigate = useNavigate();
    useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
      window.location.reload(); 
    }, 10000); 

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

                <span>{t("thank_you")}</span>
                <img src="../src/assets/logo.png" alt="Logo" />

                <h2>{t("wait_receipt")}</h2>
            </div>
        </div>
    );
}
