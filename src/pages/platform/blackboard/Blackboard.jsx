import React, { useEffect } from 'react'
import Simple from './simple/index'
import Amortiguado from './amortiguado/index'
import Forzado from './forzado/index'
import Acoplado from './acoplado/index'
import './Blackboard.css'
export default function Blackboard(props) {
    return (
        <>
            {props.type === 'simple' ?
                <Simple type={props.type} inputs={props.inputs} response={props.response} energies={props.energies} />
                : props.type === 'amortiguado' ?
                    <Amortiguado type={props.type} inputs={props.inputs} response={props.responseAmortiguado} />
                    : props.type === 'acoplados' ?
                        <Acoplado type={props.type} inputs={props.inputs} response={props.responseAcoplados} />
                        : <Forzado type={props.type} inputs={props.inputs} response={props.responseForzado} />
            }</>
    )
}
