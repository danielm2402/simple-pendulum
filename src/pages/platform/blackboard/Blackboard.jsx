import React,{useEffect} from 'react'
import Simple from './simple/index'
import Amortiguado from './amortiguado/index'
import Forzado from './forzado/index'
import Waves from './waves/index'

import './Blackboard.css'
export default function Blackboard(props) {
    return (
        <>
        {/* {props.type==='simple'?
            <Simple type={props.type} inputs={props.inputs} response={props.response} energies={props.energies} />
            :props.type==='amortiguado'?
            <Amortiguado type={props.type} inputs={props.inputs} response={props.responseAmortiguado}/>
            :
            <Forzado type={props.type} inputs={props.inputs} response={props.responseForzado}/>
        } */}
        <Waves type={props.type} inputs={props.inputs} response={props.responseWaves}/>
        </>
    )
}
