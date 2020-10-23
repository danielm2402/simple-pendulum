import React, { useRef, useEffect } from 'react'
import './Blackboard.css'

export default function Index(props) {
    const canvasRef = useRef(null)
    const containerRef = useRef(null)
    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        canvas.width = containerRef.current.clientWidth;     // equals window dimension
        canvas.height = containerRef.current.clientHeight;
    }, [])

    useEffect(()=>{
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        canvas.width = containerRef.current.clientWidth;     // equals window dimension
        canvas.height = containerRef.current.clientHeight;
        ctx.font = "20px Arial";
        
        ctx.fillText("frecuencia natural de vibracion (Wo):", 10, 50)
        ctx.fillText("Wo = (g/l)^1/2", 100, 80)
        ctx.fillText(`Wo = (${props.inputs.gravity.data}/${props.inputs.length.data})^1/2`, 100, 110)
        ctx.fillText("Wo= "+props.response.frecuenciaNatural, 100, 140);

        ctx.fillText("frecuencia (f):", 10, 170)
        ctx.fillText("f = Wo/(2*PI)", 100, 200)
        ctx.fillText(`f =  ${props.response.frecuenciaNatural}/(2*PI)`, 100, 230)
        ctx.fillText("f= "+props.response.frecuencia, 100, 260);

        ctx.fillText("periodo (T):", 10, 290)
        ctx.fillText("T = 2*PI*(l/g)^1/2", 100, 320)
        ctx.fillText(`T = 2*PI*(${props.inputs.length.data}/${props.inputs.gravity.data})^(2*PI)`, 100, 350)
        ctx.fillText("f= "+props.response.periodo, 100, 380);

        ctx.fillText("Ecuación diferencial de movimiento", 10, 410)
        ctx.fillText("Theta(t) = Theta0 * Cos(Wo t + phi)", 100, 440)
        

        console.log(containerRef)
    },[props.response])
    return (
        <div className="container-solution" ref={containerRef}>
            <canvas className="canvas" ref={canvasRef}>

            </canvas>
        </div>
    )
}
