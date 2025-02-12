const ContentBody = () => {
    return (
        <div className="content-body">
            <div className="left-case">
                <div className="left-case-info">
                    <div className="screen">
                        <div className="title">
                            <h1>Número telefónico</h1>
                            <span>Ingrese su número telefónico</span>
                        </div>
                        <div className="input-number">
                            <input
                                type="number"
                                name="PhoneNumbre"
                                placeholder="(000)-000-0000" />
                        </div>
                    </div>

                    <div className="keyboard">
                        <div className="keyboard-grid">
                            <button className="grid-buttom" value={1}><h1>1</h1></button>
                            <button className="grid-buttom" value={1}><h1>2</h1></button>
                            <button className="grid-buttom" value={1}><h1>3</h1></button>
                            <button className="grid-buttom" value={1}><h1>4</h1></button>
                            <button className="grid-buttom" value={1}><h1>5</h1></button>
                            <button className="grid-buttom" value={1}><h1>6</h1></button>
                            <button className="grid-buttom" value={1}><h1>7</h1></button>
                            <button className="grid-buttom" value={1}><h1>8</h1></button>
                            <button className="grid-buttom" value={1}><h1>9</h1></button>
                            <button className="grid-buttom borrar" value={1}><h1>Borrar</h1></button>
                            <button className="grid-buttom" value={1}><h1>0</h1></button>
                            <button className="grid-buttom" value={1}><h1>/</h1></button>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="rigth-case">
                <div className="option-case">
                    <span>test

                    </span>
                </div>
            </div>
            <div className="action-buttom">
                <button className="submit-button"><h1>Realizar pago</h1></button>
            </div>
        </div>
    )
}

export default ContentBody