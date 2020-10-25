import React, { useRef, useEffect } from 'react'
import MathJax from 'react-mathjax2'
import './Blackboard.css'

const ascii = 'U = 1/(R_(si) + sum_(i=1)^n(s_n/lambda_n) + R_(se))'

export default function Index(props) {

    useEffect(() => {

    }, [])

    useEffect(() => {

    }, [props.response])
    return (
        <div className="container-solution" >
            <div className="left-solution">
                <div className="title">
                    <h4>Frecuencia natural de vibracion (Wo):</h4>
                </div>
                <div className="ecuation">
                    <MathJax.Context input='ascii'>
                        <div>
                            <MathJax.Node >{'W_o=\sqrt (frac{g}{l})'}</MathJax.Node>
                        </div>
                    </MathJax.Context>
                    <MathJax.Context input='ascii'>
                        <div>
                            <MathJax.Node >{'W_o=\sqrt (frac{' + props.inputs.gravity.data + '}{' + props.inputs.length.data + '})'}</MathJax.Node>
                        </div>
                    </MathJax.Context>
                    <MathJax.Context input='ascii'>
                        <div>
                            <MathJax.Node >{'W_o=' + props.response.frecuenciaNatural}</MathJax.Node>
                        </div>
                    </MathJax.Context>
                </div>
                <div className="title">
                    <h4>Frecuencia (f):</h4>
                </div>
                <div className="ecuation">
                    <MathJax.Context input='ascii'>
                        <div>
                            <MathJax.Node >{'f=frac{W_o}{2\\pi}'}</MathJax.Node>
                        </div>
                    </MathJax.Context>
                    <MathJax.Context input='ascii'>
                        <div>
                            <MathJax.Node >{'f=frac{' + props.response.frecuenciaNatural + '}{2\\pi}'}</MathJax.Node>
                        </div>
                    </MathJax.Context>
                    <MathJax.Context input='ascii'>
                        <div>
                            <MathJax.Node >{'f=' + props.response.frecuencia}</MathJax.Node>
                        </div>
                    </MathJax.Context>
                </div>

                <div className="title">
                    <h4>Periodo (T):</h4>
                </div>
                <div className="ecuation">
                    <MathJax.Context input='ascii'>
                        <div>
                            <MathJax.Node >{'T=2pi\sqrt(frac{l}{g})'}</MathJax.Node>
                        </div>
                    </MathJax.Context>
                    <MathJax.Context input='ascii'>
                        <div>
                            <MathJax.Node >{'T=2pi\sqrt(frac{'+props.inputs.length.data+'}{'+props.inputs.gravity.data+'})'}</MathJax.Node>
                        </div>
                    </MathJax.Context>
                    <MathJax.Context input='ascii'>
                        <div>
                            <MathJax.Node >{'T='+props.response.periodo}</MathJax.Node>
                        </div>
                    </MathJax.Context>
                </div>
            </div>
            <div className="right-solution">
                <div className="title">
                    <div className="title">
                        <h4>Ecuación diferencial de movimiento:</h4>
                    </div>
                    <div className="ecuation">
                        <MathJax.Context input='ascii'>
                            <div>
                                <MathJax.Node >{'θ(t)=θ_0 Cos(W_0t+\\varphi)'}</MathJax.Node>
                            </div>
                        </MathJax.Context>
                        <h5 style={{ color: '#234f4f', textAlign: 'left', marginBottom: 20 }}>[1] Evaluar las condiciones iniciales en t=0 </h5>
                        <MathJax.Context input='ascii'>
                            <div>
                                <MathJax.Node >{'θ(0)=θ_0 Cos(W_0t+\\varphi)=' + props.inputs.posInitial.data}</MathJax.Node>
                            </div>
                        </MathJax.Context>
                        <MathJax.Context input='ascii'>
                            <div>
                                <MathJax.Node >{'θ(0)=θ_0 Cos(varphi)=' + props.inputs.posInitial.data}</MathJax.Node>
                            </div>
                        </MathJax.Context>
                        <h5 style={{ color: '#234f4f', textAlign: 'left', marginBottom: 20 }}>[2] Evaluar las condiciones iniciales en t=0</h5>
                        <MathJax.Context input='ascii'>
                            <div>
                                <MathJax.Node >{'frac{dθ(0)}{dt}= -W_o θ_0 Sin(W_o + \\varphi) =' + props.inputs.velInitial.data}</MathJax.Node>
                            </div>
                        </MathJax.Context>

                        <MathJax.Context input='ascii'>
                            <div>
                                <MathJax.Node >{'frac{dθ(0)}{dt}= -W_o θ_0 Cos(\\varphi) =' + props.inputs.velInitial.data}</MathJax.Node>

                            </div>
                        </MathJax.Context>
                        <h5 style={{ color: '#234f4f', textAlign: 'left', marginBottom: 20 }}>Dividimos [2] entre [1] y despejamos para hallar Phi</h5>
                        <MathJax.Context input='ascii'>
                            <div>
                                <MathJax.Node >{'frac{-W_o θ_0 Cos(\\varphi)}{θ_0 Cos(\\varphi)} =' + props.inputs.velInitial.data}</MathJax.Node>
                            </div>
                        </MathJax.Context>
                        <MathJax.Context input='ascii'>
                            <div>
                                <MathJax.Node >{'\\varphi=arctan(frac{' + props.inputs.velInitial.data + '}{' + props.response.frecuenciaNatural + props.inputs.posInitial.data + '})'}</MathJax.Node>
                            </div>
                        </MathJax.Context>
                        <MathJax.Context input='ascii'>
                            <div>
                                <MathJax.Node >{'\\varphi=' + props.response.desfase}</MathJax.Node>
                            </div>
                        </MathJax.Context>
                        <h5 style={{ color: '#234f4f', textAlign: 'left', marginBottom: 20 }}>Hallamos el valor de la amplitud</h5>
                        <MathJax.Context input='ascii'>
                            <div>
                                <MathJax.Node >{'θ_0= frac{' + props.inputs.posInitial.data + '}{cos(' + props.response.desfase + ')}'}</MathJax.Node>
                            </div>
                        </MathJax.Context>
                        <h5 style={{ color: '#234f4f', textAlign: 'left', marginBottom: 20 }}>La ecuación que describe el movimiento del pendulo es:</h5>
                        <MathJax.Context input='ascii'>
                            <div>
                                <MathJax.Node >{'θ(t)=' + props.response.amplitud + '*Cos(' + props.response.frecuenciaNatural + ' t+' + props.response.desfase + ')'}</MathJax.Node>
                            </div>
                        </MathJax.Context>
                    </div>
                </div>
            </div>
        </div>
    )
}
