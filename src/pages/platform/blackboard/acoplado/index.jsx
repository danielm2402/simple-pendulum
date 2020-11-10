import React from 'react'
import MathJax from 'react-mathjax2'
import '../Blackboard.css'
import functionPlot, { } from "function-plot";

let contentsBounds = document.body.getBoundingClientRect();
let width = 800;
let height = 500;
let ratio = contentsBounds.width / width;




export default function Index(props) {
    React.useEffect(() => {
        functionPlot({
            target: "#graph",
            width,
            height,
            yAxis: { domain: [-2, 2] },
            xAxis: { domain: [0, 10] },
            grid: true,
            data: [
                {
                    fn: props.response.type==="PRIMERO"?`${props.response.a_1} * cos (${props.response.W1}*x)`:props.response.type==="SEGUNDO"?`${props.response.a_2} * cos (${props.response.W2} * x)`:props.response.type==="COMBINADO"?`${props.response.a_1} * cos(${props.response.W1}*x) +${props.response.a_2}* cos (${props.response.W2} * x)`:'0',
                    derivative: {
                        fn: "2 * x",
                        updateOnMouseMove: true
                    }
                }
            ],
            disableZoom: false
        });
        functionPlot({
            target: "#graph2",
            width,
            height,
            yAxis: { domain: [-2, 2] },
            xAxis: { domain: [0, 10] },
            grid: true,
            data: [
                {
                    fn: props.response.type==="PRIMERO"?`${props.response.a_1} * cos (${props.response.W1} * x)`:props.response.type==="SEGUNDO"?`- ${props.response.a_2} * cos (${props.response.W2} * x)`:props.response.type==="COMBINADO"?`${props.response.a_1} * cos(${props.response.W1}*x) - ${props.response.a_2} * cos (${props.response.W2} * x)`:'0',
                    derivative: {
                        fn: "2 * x",
                        updateOnMouseMove: true
                    }
                }
            ],
            disableZoom: false
        });
    },[props.response])
    return (
        <div style={{
            width: '100%', height: '100%', overflowY: 'auto',
        }}>
            <div className="container-solution" >
                <div style={{ paddingBottom:20, display: 'flex',  background: 'url(https://images.creativemarket.com/0.1.0/ps/8034524/300/200/m2/fpc/wm0/vccqltmjbp24stdhk3pftpqhf3d4ok8sy9tiaen3mca8oqvuoj4cbuwtuqa1026w-.jpg?1585512940&s=bf209619031b2f991787df522ff68b3d)' }}>
                    <div className="left-solution">
                        <div className="title">
                            <h4>Frecuencia 1</h4>
                        </div>
                        <div className="ecuation">
                            <MathJax.Context input='ascii'>
                                <div>
                                    <MathJax.Node >{`W_1^2 = frac{3*k}{2*m}+ frac{g}{l}+frac{1}{2}sqrt(frac{5*h^2}{m^2} + frac{2*g*k}{l*m})`}</MathJax.Node>
                                </div>
                            </MathJax.Context>
                            <MathJax.Context input='ascii'>
                                <div>
                                    <MathJax.Node >{`W_1^2 = frac{3*${props.inputs.constElasticidad.data}}{2*${props.inputs.mass.data}}+ frac{${props.inputs.gravity.data}}{${props.inputs.length.data}}+frac{1}{2}sqrt(frac{5*${props.inputs.constElasticidad.data}^2}{${props.inputs.mass.data}^2} + frac{2*${props.inputs.gravity.data}*${props.inputs.constElasticidad.data}}{${props.inputs.length.data}*${props.inputs.mass.data}})`}</MathJax.Node>
                                </div>
                            </MathJax.Context>
                            <MathJax.Context input='ascii'>
                                <div>
                                    <MathJax.Node >{'W_1=' + props.response.W1 + 'frac{rad}{s}'}</MathJax.Node>
                                </div>
                            </MathJax.Context>
                        </div>
                        <div className="title">
                            <h4>Frecuencia 2</h4>
                        </div>
                        <div className="ecuation">
                            <MathJax.Context input='ascii'>
                                <div>
                                    <MathJax.Node >{`W_2^2 = frac{3*k}{2*m}- frac{1}{2}*sqrt(frac{5*h^2}{m^2} + frac{2*g*k}{l*m})`}</MathJax.Node>
                                </div>
                            </MathJax.Context>
                            <MathJax.Context input='ascii'>
                                <div>
                                    <MathJax.Node >{`W_2^2= frac{3*${props.inputs.constElasticidad.data}}{2*${props.inputs.mass.data}}+ frac{${props.inputs.gravity.data}}{${props.inputs.length.data}}+frac{1}{2}sqrt(frac{5*${props.inputs.constElasticidad.data}^2}{${props.inputs.mass.data}^2} + frac{2*${props.inputs.gravity.data}*${props.inputs.constElasticidad.data}}{${props.inputs.length.data}*${props.inputs.mass.data}})`}</MathJax.Node>
                                </div>
                            </MathJax.Context>
                            <MathJax.Context input='ascii'>
                                <div>
                                    <MathJax.Node >{'W_2=' + props.response.W2 + 'frac{rad}{s}'}</MathJax.Node>
                                </div>
                            </MathJax.Context>
                        </div>
                    </div>
                    <div className="right-solution">
                        <div className="title">
                            <div className="title">
                                <h4>Ecuación de movimiento:</h4>
                            </div>
                        </div>
                        {props.response.type == 'PRIMERO' ?
                            <div className="ecuation">
                                <MathJax.Context input='ascii'>
                                    <div>
                                        <MathJax.Node >{`\\Psi_a(t)= A_1 * Cos (W_1*t)`}</MathJax.Node>
                                    </div>
                                </MathJax.Context>
                                <MathJax.Context input='ascii'>
                                    <div>
                                        <MathJax.Node >{`\\Psi_a(t)= ${props.response.a_1} * Cos (${props.response.W1}*t)`}</MathJax.Node>

                                    </div>
                                </MathJax.Context>

                                <MathJax.Context input='ascii'>
                                    <div>
                                        <MathJax.Node >{`\\Psi_b(t)= A_1 * Cos (W_1*t)`}</MathJax.Node>
                                    </div>

                                </MathJax.Context>
                                <MathJax.Context input='ascii'>
                                    <div>
                                        <MathJax.Node >{`\\Psi_b(t)= ${props.response.a_1} * Cos (${props.response.W1}*t)`}</MathJax.Node>

                                    </div>

                                </MathJax.Context>

                            </div> : props.response.type == 'SEGUNDO' ?
                                <div className="ecuation">
                                    <MathJax.Context input='ascii'>
                                        <div>
                                            <MathJax.Node >{`\\Psi_a(t)= A_2 * Cos (W_2 * t)`}</MathJax.Node>
                                        </div>
                                    </MathJax.Context>
                                    <MathJax.Context input='ascii'>
                                        <div>
                                            <MathJax.Node >{`\\Psi_a(t)= ${props.response.a_2} * Cos (${props.response.W2} * t)`}</MathJax.Node>
                                        </div>
                                    </MathJax.Context>
                                    <MathJax.Context input='ascii'>
                                        <div>
                                            <MathJax.Node >{`\\Psi_b(t)= - A_2 * Cos (W_2 * t)`}</MathJax.Node>
                                        </div>
                                    </MathJax.Context>
                                    <MathJax.Context input='ascii'>
                                        <div>
                                            <MathJax.Node >{`\\Psi_b(t)= - ${props.response.a_2} * Cos (${props.response.W2} * t)`}</MathJax.Node>
                                        </div>
                                    </MathJax.Context>
                                </div> : props.response.type == 'COMBINADO' ?
                                    <div className="ecuation">
                                        <MathJax.Context input='ascii'>
                                            <div style={{ marginBottom: 10 }}>
                                                <MathJax.Node >{`\\Psi_a(t)= A_1 * Cos(W_1*t) + A_2 * Cos (W_2 * t)`}</MathJax.Node>
                                            </div>
                                        </MathJax.Context>
                                        <MathJax.Context input='ascii'>
                                            <div style={{ marginBottom: 20 }}>
                                                <MathJax.Node >{`\\Psi_a(t)= ${props.response.a_1} * Cos(${props.response.W1}*t) +${props.response.a_2}* Cos (${props.response.W2} * t)`}</MathJax.Node>
                                            </div>
                                        </MathJax.Context>
                                        <MathJax.Context input='ascii'>
                                            <div style={{ marginBottom: 10 }}>
                                                <MathJax.Node >{`\\Psi_b(t)= A_1 * Cos(W_1*t) - A_2 * Cos (W_2 * t)`}</MathJax.Node>
                                            </div>
                                        </MathJax.Context>
                                        <MathJax.Context input='ascii'>
                                            <div>
                                                <MathJax.Node >{`\\Psi_b(t)=${props.response.a_1} * Cos(${props.response.W1}*t) - ${props.response.a_2} * Cos (${props.response.W2} * t)`}</MathJax.Node>
                                            </div>
                                        </MathJax.Context>
                                    </div> : <></>
                        }
                    </div>
                </div>
                <div style={{ border:'1px solid #50E3C4', display:'flex', flexDirection:'column', backgroundColor:'#fff'}}>
                    <div id="graph">
                    </div>
                    <div id="graph2">
                    </div>
                </div>
            </div>
        </div>

    )
}
