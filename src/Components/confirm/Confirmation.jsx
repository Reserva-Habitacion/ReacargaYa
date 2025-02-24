// import React from 'react'
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'

export default function Confirmation() {
    const { width, height } = useWindowSize();
    return (
        <div className="body-grid">
            <Confetti
                width={width}
                height={height}
            />
            <div className="pay-page">
                <div className="info-transacion">
                 
                    <h2 className="servicio-adquirido">
                      
                        <span className="resaltado">  </span>
                    </h2>
                </div>

                <span>Gracia por Utilizar</span>
                <img src="../src/assets/logo.png" alt="Animación de billete" />

            
                <h2>Espere su Recibo</h2>


            </div>
        </div>
    )
}
