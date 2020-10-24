import React, { useRef, useEffect } from 'react'
import './Blackboard.css'

export default function Index(props) {

    useEffect(() => {

    }, [])

    useEffect(() => {
        /*
  
          ctx.fillText("periodo (T):", 10, 290)
          ctx.fillText("T = 2*PI*(l/g)^1/2", 100, 320)
          ctx.fillText(`T = 2*PI*(${props.inputs.length.data}/${props.inputs.gravity.data})^(2*PI)`, 100, 350)
          ctx.fillText("f= "+props.response.periodo, 100, 380);
  
          ctx.fillText("Ecuación diferencial de movimiento", 10, 410)
          ctx.fillText("Theta(t) = Theta0 * Cos(Wo t + phi)", 100, 440)
          ctx.fillText("Theta(t) = Theta0 * Cos(Wo t + phi)", 100, 440)
         // Theta(0) = Theta0 * Cos(Wo*0 + phi) = */


    }, [props.response])
    return (
        <div className="container-solution" >
            <div className="left-solution">
                <div className="title">
                    <h4>Frecuencia natural de vibracion (Wo):</h4>
                </div>
                <div className="ecuation">
                    <h5>W<sub>0</sub>=&#8730;<div class="frac">
                        <span>g</span>
                        <span class="symbol">/</span>
                        <span class="bottom">l</span>
                    </div></h5>
                    <h5>W<sub>0</sub>=&#8730;<div class="frac">
                        <span>{props.inputs.gravity.data}</span>
                        <span class="symbol">/</span>
                        <span class="bottom">{props.inputs.length.data}</span>
                    </div></h5>
                    <h5>W<sub>0</sub>={props.response.frecuenciaNatural}</h5>
                </div>
                <div className="title">
                    <h4>Frecuencia (f):</h4>
                </div>
                <div className="ecuation">
                    <h5>f=<div class="frac">
                        <span>W<sub>0</sub></span>
                        <span class="symbol">/</span>
                        <span class="bottom">2&Pi;</span>
                    </div></h5>
                    <h5>f=<div class="frac">
                        <span>{props.response.frecuenciaNatural}</span>
                        <span class="symbol">/</span>
                        <span class="bottom">2&Pi;</span>
                    </div></h5>
                    <h5>
                        f={props.response.frecuencia}
                    </h5>
                </div>

              {/*   ctx.fillText("periodo (T):", 10, 290)
        ctx.fillText("T = 2*PI*(l/g)^1/2", 100, 320)
        ctx.fillText(`T = 2*PI*(${props.inputs.length.data}/${props.inputs.gravity.data})^(2*PI)`, 100, 350)
        ctx.fillText("f= "+props.response.periodo, 100, 380); */}
                <div className="title">
                    <h4>Periodo (T):</h4>
                </div>
                <div className="ecuation">
                    <h5>T=2&Pi;&#8730;<div class="frac">
                        <span>l</span>
                        <span class="symbol">/</span>
                        <span class="bottom">g</span>
                    </div></h5>
                    <h5>T=2&Pi;&#8730;<div class="frac">
                        <span>{props.inputs.length.data}</span>
                        <span class="symbol">/</span>
                        <span class="bottom">{props.inputs.gravity.data}</span>
                    </div></h5>
                    <h5>
                        f={props.response.periodo}
                    </h5>
                </div>

            </div>
            <div className="right-solution">
                <div className="title">
                    <h4>Hola mundo</h4>
                </div>
            </div>
        </div>
    )
}
