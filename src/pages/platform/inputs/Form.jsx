import React from 'react'
import './Form.css'
export default function Form(props) {
    return (
        <div className="container-form">
            <div style={{ overflowY:'scroll', paddingBottom:20}}>
                {Object.values(props.configInputs).map(item => {
                    if (item.checked) {
                        return <div className="item-form">
                            <h6>{item.label}</h6>
                            <input name={item.name} value={item.data} onChange={(e) => props.handleInputs(e.target.name, e.target.value)} type="number" />
                        </div>
                    }
                    return <></>
                })}
            </div>
        </div>
    )
}
