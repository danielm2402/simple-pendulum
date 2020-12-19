import React from 'react'
import MathJax from 'react-mathjax2'

import '../Blackboard.css'
import functionPlot, { } from "function-plot";

let contentsBounds = document.body.getBoundingClientRect();
let width = 800;
let height = 200;

let width1 = 800;
let height1 = 200;

let ratio = contentsBounds.width / width;
// ondaIncidenteEY: parEMax* Math.cos((k*x)+parOmmega*t) campo electrito
// ondaIncidenteBZ: parBmax* Math.cos((k*x)+parOmmega*t) campo magnetico

// ondaReflejadaEY: parEMax* Math.cos((k*x)-parOmmega*t) campo electrito
// ondaReflejadaBZ: parBmax* Math.cos((k*x)-parOmmega*t) campo magnetico

// ondaEstacionariaEY: -2*parE2Max*sen(kx)*sen(parOmmega*t) campo electrico
// ondaEstacionariaBZ: -2*parBmax*cos(kx)*cos(parOmmega*t) campo magnetico
export default function Index(props) {

    React.useEffect(() => {
        try {
            functionPlot({
                target: "#graph",
                width,
                height,
                xAxis: { domain: [-10, 10] },
                grid: false,
                data: [
                    {
                        fn: `(-2*${props.inputs.emax.data})*sin(${props.response.k ? props.response.k : 0}*x)*sin(${props.inputs.ommega.data})`,
                        color: 'red'
                    }
                ],
                disableZoom: false
            });


            functionPlot({
                target: "#graph2",
                width,
                height,
                xAxis: { domain: [-10, 10] },
                grid: false,
                data: [
                    {
                        fn: `(-2*${props.inputs.emax.data})*sin(${props.response.k ? props.response.k : 0}*x)*sin(${props.inputs.ommega.data})`,
                        color: 'blue'
                    }
                ],
                disableZoom: false
            });

            functionPlot({
                target: "#graph3",
                width1,
                height1,
                xAxis: { domain: [-10, 10] },
                grid: true,
                data: [
                    {
                        fn: `${props.inputs.emax.data}*cos((${props.response.k ? props.response.k : 0}*x)-${props.inputs.ommega.data})`,
                        color: 'red'
                    },
                    {
                        fn: `${props.inputs.emax.data}*cos((${props.response.k_2 ? props.response.k_2 : 0}*x)-${props.inputs.ommega.data})`,
                        color: 'blue'
                    },
                    {
                        fn: `${props.inputs.er.data}*cos((${props.response.k ? props.response.k : 0}*x)+${props.inputs.ommega.data})`,
                        color: 'green'
                    }
                ],
                disableZoom: false
            });


        } catch (error) {
            console.log(error)
        }

    }, [props.response])
    return (
        <div style={{
            width: '100%', height: '100%', overflowY: 'auto',
        }}>
            <div className="container-solution" >
                <div style={{ paddingBottom: 20, display: 'flex' }}>
                    <div className="left-solution">
                        <div className="title">
                            <h4>Onda incidente:</h4>
                        </div>
                        <div className="ecuation">
                            <MathJax.Context input='ascii'>
                                <div>
                                    <MathJax.Node >{`Ey= Emax * Cos(k*x - w*t))`}</MathJax.Node>
                                </div>
                            </MathJax.Context>
                            <MathJax.Context input='ascii'>
                                <div>
                                    <MathJax.Node >{`Ey= ${props.inputs.emax.data} * Cos(${props.response.k}*c*x - w*t))`}</MathJax.Node>
                                </div>
                            </MathJax.Context>
                            <MathJax.Context input='ascii'>
                                <div>
                                    <MathJax.Node >{`Bz= Bmax * Cos((k*x)-w*t)`}</MathJax.Node>
                                </div>
                            </MathJax.Context>
                            <MathJax.Context input='ascii'>
                                <div>
                                    <MathJax.Node >{`Bz= ${props.response.bi} * Cos((${props.response.k}*c*x)-w*t)`}</MathJax.Node>
                                </div>
                            </MathJax.Context>
                        </div>
                        <div className="title">
                            <h4>Onda Reflejada</h4>
                        </div>
                        <div className="ecuation">
                            <MathJax.Context input='ascii'>
                                <div>
                                    <MathJax.Node >{`Ey= Emax * Cos(k*x +w*t))`}</MathJax.Node>
                                </div>
                            </MathJax.Context>
                            <MathJax.Context input='ascii'>
                                <div>
                                    <MathJax.Node >{`Ey= ${props.inputs.emax.data} * Cos(${props.response.k}*c*x + w*t))`}</MathJax.Node>
                                </div>
                            </MathJax.Context>
                            <MathJax.Context input='ascii'>
                                <div>
                                    <MathJax.Node >{`Bz= -Bmax * Cos((k*x)+w*t)`}</MathJax.Node>
                                </div>
                            </MathJax.Context>
                            <MathJax.Context input='ascii'>
                                <div>
                                    <MathJax.Node >{`Bz= -${props.response.br} * Cos((${props.response.k}*c*x)+w*t)`}</MathJax.Node>
                                </div>
                            </MathJax.Context>
                        </div>

                        <div className="title">
                            <h4>Onda Transmitida</h4>
                        </div>
                        <div className="ecuation">
                            <MathJax.Context input='ascii'>
                                <div>
                                    <MathJax.Node >{`Ey= Emax * Cos(k_2*x - w*t))`}</MathJax.Node>
                                </div>
                            </MathJax.Context>
                            <MathJax.Context input='ascii'>
                                <div>
                                    <MathJax.Node >{`Ey= ${props.inputs.emax.data} * Cos(${props.response.k_2}*x - w*t))`}</MathJax.Node>
                                </div>
                            </MathJax.Context>
                            <MathJax.Context input='ascii'>
                                <div>
                                    <MathJax.Node >{`Bz= Bmax * Cos((k_2*x)-w*t)`}</MathJax.Node>
                                </div>
                            </MathJax.Context>
                            <MathJax.Context input='ascii'>
                                <div>
                                    <MathJax.Node >{`Bz= ${props.response.bt} * Cos((${props.response.k_2}*c*x)-w*t)`}</MathJax.Node>
                                </div>
                            </MathJax.Context>
                        </div>

                        <div className="title">
                            <h4>Ondas estacionarias:</h4>
                        </div>
                        <div className="ecuation">
                            <MathJax.Context input='ascii'>
                                <div>
                                    <MathJax.Node >{`Ey= -2*Emax*Sen(kx)*Sen(\Omega*t)`}</MathJax.Node>
                                </div>
                            </MathJax.Context>
                            <MathJax.Context input='ascii'>
                                <div>
                                    <MathJax.Node >{`Ey= -2*${props.inputs.emax.data}*Sen(${props.response.k}*c*x)*Sen(\Omega*t)`}</MathJax.Node>
                                </div>
                            </MathJax.Context>
                            <MathJax.Context input='ascii'>
                                <div>
                                    <MathJax.Node >{`Bz= -2*Bmax*Cos(kx)*Cos(\Omega*t)`}</MathJax.Node>
                                </div>
                            </MathJax.Context>
                            <MathJax.Context input='ascii'>
                                <div>
                                    <MathJax.Node >{`Bz= -2*${props.response.bi}*Cos(${props.response.k}*c*x)*Cos(\Omega*t)`}</MathJax.Node>
                                </div>
                            </MathJax.Context>
                        </div>
                    </div>
                    <div className="right-solution">
                        <div className="title">
                            <h4>Coeficiente de reflexión</h4>
                        </div>
                        <div className="ecuation">
                            <MathJax.Context input='ascii'>
                                <div>
                                    <MathJax.Node >{`R= frac{v2 - v1}{v2 + v1}`}</MathJax.Node>
                                </div>
                            </MathJax.Context>
                            <MathJax.Context input='ascii'>
                                <div>
                                    <MathJax.Node >{`R=${props.response.coeficienteR}`}</MathJax.Node>
                                </div>
                            </MathJax.Context>

                        </div>

                        <div className="title">
                            <h4>Coeficiente de transmisión</h4>
                        </div>
                        <div className="ecuation">
                            <MathJax.Context input='ascii'>
                                <div>
                                    <MathJax.Node >{`T= frac{2*v2}{v2 + v1}`}</MathJax.Node>
                                </div>
                            </MathJax.Context>
                            <MathJax.Context input='ascii'>
                                <div>
                                    <MathJax.Node >{`T=${props.response.coeficienteT}`}</MathJax.Node>
                                </div>
                            </MathJax.Context>

                        </div>
                    </div>

                </div>
                <h5>Grafica Ondas estacionarias</h5>
                <div style={{ paddingTop: 120, position: 'relative', display: 'flex', flexDirection: 'column' }}>
                    <div id="graph">
                    </div>
                    <div id="graph2">
                    </div>

                </div>

                <h5>Grafica Ondas reflejada e incidente</h5>
                <div style={{ paddingTop: 120, display: 'flex', flexDirection: 'column' }}>
                    <div id="graph3">
                    </div>


                </div>
            </div>

        </div>
    )
}
