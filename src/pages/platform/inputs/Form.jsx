import React from 'react'
import './Form.css'
export default function Form() {
    return (
        <div className="container-form">
            <div className="item-form">
                <h6>Longitud de la cuerda</h6>
                <input defaultValue="1" type="number" />
            </div>
            <div className="item-form">
                <h6>Masa del objeto</h6>
                <input type="number" />
            </div>
            <div className="item-form">
                <h6>Periodo</h6>
                <input
                    type="number"
                />
            </div>
            <div className="item-form">
                <h6>Frecuencia</h6>
                <input
                    type="number"
                />
            </div>
            <div className="item-form">
                <h6>Gravedad *</h6>
                <input
                    defaultValue="9.8"
                    type="number" />
            </div>
            <div className="item-form">
                <h6>Grados sobre la vertical</h6>
                <input
                    type="number"
                />
            </div>
            <div className="item-form">
                <h6>Velocidad inicial</h6>
                <input
                    type="number"
                />
            </div>
            <div className="item-form">
                <h6>Fuerza amortiguadora</h6>
                <input
                    type="number"
                />
            </div>
        </div>
    )
}
