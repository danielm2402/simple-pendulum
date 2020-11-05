import React from 'react'
import Simple from './simple/index'
import './Blackboard.css'
export default function Blackboard(props) {
    return (
        <>
            <Simple type={props.type} inputs={props.inputs} response={props.response} energies={props.energies} />
        </>
    )
}
