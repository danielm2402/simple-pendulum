import React from 'react'
import MathJax from 'react-mathjax2'
import '../Blackboard.css'
export default function Index(props) {
    return (
        <div className="container-solution" >
            <div className="left-solution">
                <div className="title">
                    <h4>Frecuencia natural de vibracion (Wo):</h4>
                </div>
                <div className="ecuation">
                    <MathJax.Context input='ascii'>
                        <div>
                            <MathJax.Node >{'W_o=sqrt (frac{g}{l})'}</MathJax.Node>
                        </div>
                    </MathJax.Context>
                    <MathJax.Context input='ascii'>
                        <div>
                            <MathJax.Node >{'W_o=sqrt (frac{' + props.inputs.gravity.data + '}{' + props.inputs.length.data + '})'}</MathJax.Node>
                        </div>
                    </MathJax.Context>
                    <MathJax.Context input='ascii'>
                        <div>
                            <MathJax.Node >{'W_o=' + props.response.frecuenciaNatural + 'frac{rad}{s}'}</MathJax.Node>
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
                            <MathJax.Node >{'f=' + props.response.frecuencia + 'hz'}</MathJax.Node>
                        </div>
                    </MathJax.Context>
                </div>
                <div className="title">
                    <h4>Gamma:</h4>
                </div>
                <div className="ecuation">
                    <MathJax.Context input='ascii'>
                        <div>
                            <MathJax.Node >{'\gamma=frac{b}{2*m}'}</MathJax.Node>
                        </div>
                    </MathJax.Context>
                    <MathJax.Context input='ascii'>
                        <div>
                            <MathJax.Node >{`\gamma=frac{${props.inputs.const.data}}{2*${props.inputs.mass.data}}`}</MathJax.Node>
                        </div>
                    </MathJax.Context>
                    <MathJax.Context input='ascii'>
                        <div>
                            <MathJax.Node >{`\gamma=${props.response.gamma}`}</MathJax.Node>
                        </div>
                    </MathJax.Context>
                </div>

            </div>
            <div className="right-solution">
                <div className="title">
                    <div className="title">
                        <h4>Ecuación de movimiento:</h4>
                    </div>

                    <div className="ecuation">
                        {props.response.type === 'subamortiguado' ?
                            <div>
                                <h5 style={{ color: '#234f4f', textAlign: 'left', marginBottom: 20 }}>Comparando Gamma con Frecuencia natural, como:</h5>
                                <div className="ecuation">
                                    <MathJax.Context input='ascii'>
                                        <div>
                                            <MathJax.Node >{'\gamma^2 < W_0^2'}</MathJax.Node>
                                        </div>
                                    </MathJax.Context>
                                    <MathJax.Context input='ascii'>
                                        <div>
                                            <MathJax.Node >{`${props.response.gamma}^2 < ${props.response.frecuenciaNatural}^2`}</MathJax.Node>
                                        </div>
                                    </MathJax.Context>
                                </div>
                                <h5 style={{ color: '#234f4f', textAlign: 'left', marginTop: 20 }}>Al ser gamma menor que la frecuencia natural</h5>
                                <h5 style={{ color: '#234f4f', textAlign: 'left', marginBottom: 20 }}> es un sistema subamortiguado, por lo tanto su ecuación está dada por: </h5>
                                <div className="ecuation">
                                    <MathJax.Context input='ascii'>
                                        <div>
                                            <MathJax.Node >{'θ(t)=c*e^(-\gamma*t)* Cos (W*t+\phi)'}</MathJax.Node>
                                        </div>
                                    </MathJax.Context>
                                    <MathJax.Context input='ascii'>
                                        <div>
                                            <MathJax.Node >{`θ(t)=${props.response.c}*e^(-${props.response.gamma}*t)* Cos (${props.response.ommega}*t+${props.response.phi})`}</MathJax.Node>
                                        </div>
                                    </MathJax.Context>

                                </div>
                            </div>
                            : props.response.type === 'amortiguado' ?
                                <div>
                                    <h5 style={{ color: '#234f4f', textAlign: 'left', marginBottom: 20 }}>Comparando Gamma con Frecuencia natural, como:</h5>
                                    <div className="ecuation">
                                        <MathJax.Context input='ascii'>
                                            <div>
                                                <MathJax.Node >{'\gamma^2 = W_0^2'}</MathJax.Node>
                                            </div>
                                        </MathJax.Context>
                                        <MathJax.Context input='ascii'>
                                            <div>
                                                <MathJax.Node >{`${props.response.gamma}^2 = ${props.response.frecuenciaNatural}^2`}</MathJax.Node>
                                            </div>
                                        </MathJax.Context>
                                    </div>
                                    <h5 style={{ color: '#234f4f', textAlign: 'left', marginBottom: 20 }}>Al ser iguales, es un sistema criticamente amortiguado, por lo tanto su ecuación está dada por: </h5>
                                    <div className="ecuation">
                                        <MathJax.Context input='ascii'>
                                            <div>
                                                <MathJax.Node >{'θ(t)=(c1+c2*t)e^(-\gamma*t)'}</MathJax.Node>
                                            </div>
                                        </MathJax.Context>
                                        <MathJax.Context input='ascii'>
                                            <div>
                                                <MathJax.Node >{`θ(t)=(${props.response.c1}+${props.response.c2}*t)e^(-${props.response.gamma}*t)`}</MathJax.Node>
                                            </div>
                                        </MathJax.Context>

                                    </div>
                                </div>
                                :
                                <div>
                                    <h5 style={{ color: '#234f4f', textAlign: 'left', marginBottom: 20 }}>Comparando Gamma con Frecuencia natural, como:</h5>
                                    <div className="ecuation">
                                        <MathJax.Context input='ascii'>
                                            <div>
                                                <MathJax.Node >{'\gamma^2 > W_0^2'}</MathJax.Node>
                                            </div>
                                        </MathJax.Context>
                                        <MathJax.Context input='ascii'>
                                            <div>
                                                <MathJax.Node >{`${props.response.gamma}^2 > ${props.response.frecuenciaNatural}^2`}</MathJax.Node>
                                            </div>
                                        </MathJax.Context>
                                    </div>
                                    <h5 style={{ color: '#234f4f', textAlign: 'left', marginTop: 20 }}>Al ser gamma mayor que la frecuencia natural</h5>
                                    <h5 style={{ color: '#234f4f', textAlign: 'left', marginBottom: 20 }}> es un sistema sobreamortiguado, por lo tanto su ecuación está dada por: </h5>
                                    <div className="ecuation">
                                        <MathJax.Context input='ascii'>
                                            <div>
                                                <MathJax.Node >{'θ(t)=c_1*e^(m_1*t)+ c_2*e^(m_2*t)'}</MathJax.Node>
                                            </div>
                                        </MathJax.Context>
                                        <MathJax.Context input='ascii'>
                                            <div>
                                                <MathJax.Node >{`θ(t)=${props.response.c1}*e^(${props.response.m1}*t)+ ${props.response.c2}*e^(${props.response.m2}*t)`}</MathJax.Node>
                                            </div>
                                        </MathJax.Context>

                                    </div>
                                </div>}
                        <div className="title">
                            <h4>Valor de la amplitud máxima</h4>
                        </div>
                        <div className="ecuation">
                            <MathJax.Context input='ascii'>
                                <div>
                                    <MathJax.Node >{`D = ${props.response.amplitudMaxima}`}</MathJax.Node>
                                </div>
                            </MathJax.Context>
                        </div>
                        <div className="title">
                            <h4>Valor del angulo de desfase</h4>
                        </div>
                        <div className="ecuation">
                            <MathJax.Context input='ascii'>
                                <div>
                                    <MathJax.Node >{`\delta= ${props.response.delta}`}</MathJax.Node>
                                </div>
                            </MathJax.Context>
                        </div>
                        <div className="title">
                            <h4>Solución Total</h4>
                        </div>
                        <div className="ecuation">
                            {props.response.type === 'subamortiguado' ?
                                <div>

                                    <div className="ecuation">
                                        <MathJax.Context input='ascii'>
                                            <div>
                                                <MathJax.Node >{`θ(t)=${props.response.c}*e^(-${props.response.gamma}*t)* Cos (${props.response.frecuenciaNatural}*t+${props.response.phi}) +${props.response.amplitudMaxima}*Cos(${props.inputs.frecuenciaFuerza.data}*t - ${props.response.delta})`}</MathJax.Node>
                                            </div>
                                        </MathJax.Context>

                                    </div>
                                </div>
                                : props.response.type === 'amortiguado' ?
                                    <div>

                                        <div className="ecuation">
                                            <MathJax.Context input='ascii'>
                                                <div>
                                                    <MathJax.Node >{`θ(t)=(${props.response.c1}+${props.response.c2}*t)e^(-${props.response.gamma}*t)+${props.response.amplitudMaxima}*Cos(${props.inputs.frecuenciaFuerza.data}*t - ${props.response.delta})`}</MathJax.Node>
                                                </div>
                                            </MathJax.Context>

                                        </div>
                                    </div>
                                    :
                                    <div>
                                        <div className="ecuation">

                                            <MathJax.Context input='ascii'>
                                                <div>
                                                    <MathJax.Node >{`θ(t)=${props.response.c1}*e^(${props.response.m1}*t)+ ${props.response.c2}*e^(${props.response.m2}*t)+${props.response.amplitudMaxima}*Cos(${props.inputs.frecuenciaFuerza.data}*t - ${props.response.delta})`}</MathJax.Node>
                                                </div>
                                            </MathJax.Context>

                                        </div>
                                    </div>}

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
