import React from 'react'
import { FormGroup, FormControlLabel, Checkbox, FormLabel } from '@material-ui/core'
import './Checks.css'
export default function Checks(props) {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="container-check" style={{ marginTop: '2.33em' }}>
                <FormLabel component="legend">Campos de entrada</FormLabel>
            </div>
            <div className="container-check">
                {props.type=='simple'?
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox color="secondary" checked={props.configInputs.length.checked} onChange={(e) => { props.handleChecks(e.target.name, e.target.checked) }} name="length" />}
                        label={<span className="check-title">Longitud de la cuerda</span>}
                    />
                    <FormControlLabel
                        control={<Checkbox color="secondary" checked={props.configInputs.gravity.checked} onChange={(e) => { props.handleChecks(e.target.name, e.target.checked) }} name="gravity" />}
                        label={<span className="check-title">Gravedad</span>}
                    />
                    <FormControlLabel
                        control={<Checkbox color="secondary" checked={props.configInputs.posInitial.checked} onChange={(e) => { props.handleChecks(e.target.name, e.target.checked) }} name="posInitial" />}
                        label={<span className="check-title">Posición inicial</span>}
                    />
                    <FormControlLabel
                        control={<Checkbox color="secondary" checked={props.configInputs.mass.checked} onChange={(e) => { props.handleChecks(e.target.name, e.target.checked) }} name="mass" />}
                        label={<span className="check-title">Masa</span>}
                    />
                </FormGroup>
                :props.type=='amortiguado'?
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox color="secondary" checked={props.configInputs.length.checked} onChange={(e) => { props.handleChecks(e.target.name, e.target.checked) }} name="length" />}
                        label={<span className="check-title">Longitud de la cuerda</span>}
                    />
                    <FormControlLabel
                        control={<Checkbox color="secondary" checked={props.configInputs.gravity.checked} onChange={(e) => { props.handleChecks(e.target.name, e.target.checked) }} name="gravity" />}
                        label={<span className="check-title">Gravedad</span>}
                    />
                    <FormControlLabel
                        control={<Checkbox color="secondary" checked={props.configInputs.posInitial.checked} onChange={(e) => { props.handleChecks(e.target.name, e.target.checked) }} name="posInitial" />}
                        label={<span className="check-title">Posición inicial</span>}
                    />
                    <FormControlLabel
                        control={<Checkbox color="secondary" checked={props.configInputs.mass.checked} onChange={(e) => { props.handleChecks(e.target.name, e.target.checked) }} name="mass" />}
                        label={<span className="check-title">Masa</span>}
                    />
                    <FormControlLabel
                        control={<Checkbox color="secondary" checked={props.configInputs.const.checked} onChange={(e) => { props.handleChecks(e.target.name, e.target.checked) }} name="mass" />}
                        label={<span className="check-title">Constante de amortiguamiento</span>}
                    />
                </FormGroup>
                :<>Hola</>}
            </div>
            <div>
                <select onChange={(e)=>props.handleType(e.target.value)} value={props.type}>
                    <option value="simple"> Simple</option>
                    <option value="amortiguado"> Amortiguado</option>
                    <option value="forzado"> Forzado</option>
                </select>
            </div>
        </div>
    )
}
