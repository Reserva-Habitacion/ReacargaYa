// import React from 'react'

export default function Confirmation() {
  return (
    <div className="body-grid">
            <div className="pay-page">
                <div className="info-transacion">
                    {/* <h1>{phoneNumber}</h1> */}
                    <h2 className="servicio-adquirido">
                        {/* {nameOption ? nameOption : "Recarga "} */}
                        <span className="resaltado">  </span>
                    </h2>
                </div>

                <span>Gracia por Utilizar</span>
             <img src="../src/assets/logo.png" alt="Animación de billete" />
                
                {/* <span className="monto">RD$ </span> */}
                <h2>Espere su Recibo</h2>

               
            </div>
        </div>
  )
}
