import React, { useState, useEffect } from 'react'
import './Platform.css'
import SimplePendulumAnimation from './animations/AcompladoPendulum'
import Form from './inputs/Form'
import { ButtonGroup, Button } from '@material-ui/core'
import Checks from './checks/Checks'
import { MdSettings } from 'react-icons/md'
import Blackboard from './blackboard/Blackboard'
import { pendulum, energies, amortiguado, forzado, acoplados } from '../../services/index'

export default function Platform() {
    const [page, setPage] = useState('solution')
    const [pageConfig, setPageConfig] = useState('data')
    const [type, setType] = useState('acoplados')
    const [configInputs, setConfigInputs] = useState({ length: { name: 'length', data: 1, checked: true, label: 'Longitud de la cuerda' }, gravity: { name: 'gravity', data: 9.8, checked: true, label: 'Valor de la gravedad' }, posInitial: { name: 'posInitial', data: 7, checked: true, label: 'Ángulo inicial' }, velInitial: { name: 'velInitial', data: 0, checked: true, label: 'Velocidad inicial' }, mass: { name: 'mass', data: 10, checked: true, label: 'Masa del objeto' } })
    const [configInputsAmortiguado, setConfigInputsAmortiguado] = useState({ length: { name: 'length', data: 1, checked: true, label: 'Longitud de la cuerda' }, gravity: { name: 'gravity', data: 9.8, checked: true, label: 'Valor de la gravedad' }, posInitial: { name: 'posInitial', data: 7, checked: true, label: 'Ángulo inicial' }, velInitial: { name: 'velInitial', data: 0, checked: true, label: 'Velocidad inicial' }, mass: { name: 'mass', data: 10, checked: true, label: 'Masa del objeto' }, const: { name: 'const', data: 10, checked: true, label: 'Constante de amortiguamiento' } })
    const [configInputsForzado, setConfigInputsForzado] = useState({ length: { name: 'length', data: 1, checked: true, label: 'Longitud de la cuerda' }, gravity: { name: 'gravity', data: 9.8, checked: true, label: 'Valor de la gravedad' }, posInitial: { name: 'posInitial', data: 7, checked: true, label: 'Ángulo inicial' }, velInitial: { name: 'velInitial', data: 0, checked: true, label: 'Velocidad inicial' }, mass: { name: 'mass', data: 10, checked: true, label: 'Masa del objeto' }, const: { name: 'const', data: 10, checked: true, label: 'Constante de amortiguamiento' }, fuerzaInicial: { name: 'fuerzaInicial', data: 1, checked: true, label: 'Fuerza Inicial' }, frecuenciaFuerza: { name: 'frecuenciaFuerza', data: 1, checked: true, label: 'Frecuencia Fuerza' } })
    const [configInputsAcoplados, setConfigInputsAcoplados] = useState({ length: { name: 'length', data: 1, checked: true, label: 'Longitud de la cuerda' }, gravity: { name: 'gravity', data: 9.8, checked: true, label: 'Valor de la gravedad' }, posInitial: { name: 'posInitial', data: 3, checked: true, label: 'Ángulo inicial' }, velInitial: { name: 'velInitial', data: 0, checked: true, label: 'Velocidad inicial' }, mass: { name: 'mass', data: 10, checked: true, label: 'Masa del objeto' }, posBlock: { name: 'posBlock', data: 3, checked: true, label: 'Posición del bloque' }, constElasticidad: { name: 'constElasticidad', data: 10, checked: true, label: 'Constante de elasticidad',  } })

    const [response, setResponse] = useState({})
    const [responseAmortiguado, setResponseAmortiguado] = useState({})
    const [responseForzado, setResponseForzado] = useState({})
    const [responseAcoplados, setResponseAcoplado] = useState({})
    const [responseEnergies, setResponseEnergies] = useState({})

    const handleChecks = (name, value) => {
        switch (type) {
            case 'simple':
                setConfigInputs({ ...configInputs, [name]: { ...configInputs[name], checked: value } })
                break;
            case 'amortiguado':
                setConfigInputsAmortiguado({ ...configInputsAmortiguado, [name]: { ...configInputsAmortiguado[name], checked: value } })
                break;
            case 'forzado':
                setConfigInputsForzado({ ...configInputsForzado, [name]: { ...configInputsForzado[name], checked: value } })
            case 'acoplados':
                setConfigInputsAcoplados({ ...configInputsAcoplados, [name]: { ...configInputsAcoplados[name], checked: value } })
                break;
            default:
                break;
        }

    }
    const handleInputs = (name, value) => {

        switch (type) {
            case 'simple':
                setConfigInputs({ ...configInputs, [name]: { ...configInputs[name], data: value } })
                break;
            case 'amortiguado':
                setConfigInputsAmortiguado({ ...configInputsAmortiguado, [name]: { ...configInputsAmortiguado[name], data: name === 'mass' && value <= 0 ? 1 : value } })
                break;
            case 'forzado':
                setConfigInputsForzado({ ...configInputsForzado, [name]: { ...configInputsForzado[name], data: name === 'mass' && value <= 0 ? 1 : value } })
                break;
            case 'acoplados':
                setConfigInputsAcoplados({ ...configInputsAcoplados, [name]: { ...configInputsAcoplados[name], data: name === 'mass' && value <= 0 ? 1 : value } })
                break;
            default:
                break;
        }

    }
    const handleType = (name) => {

        setType(name)
    }
    useEffect(() => {

        switch (type) {
            case 'simple':

                setResponse(pendulum(configInputs.length.data, configInputs.gravity.data, configInputs.posInitial.data, configInputs.velInitial.data))
                if (configInputs.mass.checked) {
                    setResponseEnergies(energies(configInputs.mass.data, configInputs.gravity.data, configInputs.length.data, configInputs.posInitial.data, configInputs.velInitial.data))
                }
                break;
            case 'amortiguado':
                setResponseAmortiguado(amortiguado(configInputsAmortiguado.length.data, configInputsAmortiguado.gravity.data, configInputsAmortiguado.posInitial.data, configInputsAmortiguado.velInitial.data, configInputsAmortiguado.mass.data, configInputsAmortiguado.const.data))
                break;
            case 'forzado':

                setResponseForzado(forzado(configInputsForzado.length.data, configInputsForzado.gravity.data, configInputsForzado.posInitial.data, configInputsForzado.velInitial.data, configInputsForzado.mass.data, configInputsForzado.const.data, configInputsForzado.fuerzaInicial.data, configInputsForzado.frecuenciaFuerza.data))
                break;
            case 'acoplados':
                setResponseAcoplado(acoplados(configInputsAcoplados.length.data, configInputsAcoplados.gravity.data, configInputsAcoplados.posInitial.data, configInputsAcoplados.velInitial.data, configInputsAcoplados.mass.data, configInputsAcoplados.posBlock.data, configInputsAcoplados.constElasticidad.data))
                break;

            default:
                break;
        }
    }, [configInputs, configInputsAmortiguado, configInputsForzado, configInputsAcoplados])


    return (
        <div className="page-platform">
            <div className="platform-header">
                <div className="platform-tools">
                </div>
                <div className="platform-draw">
                    <div className="button-group">
                        <ButtonGroup size='small' color='primary'>
                            <Button variant={page === 'solution' ? 'contained' : null} onClick={() => setPage('solution')}>Solution</Button>
                            <Button variant={page === 'graph' ? 'contained' : null} onClick={() => setPage('graph')}>Graphic</Button>
                        </ButtonGroup>
                    </div>
                </div>
                <div className="platform-inputs">
                </div>
            </div>
            <div className="platform-canvas">
                <div className="platform-tools">
                </div>
                <div className="platform-draw">
                    {page === 'solution' ? <Blackboard type={type} inputs={type === 'simple' ? configInputs : type === 'amortiguado' ? configInputsAmortiguado: type === 'acoplados' ? configInputsAcoplados : configInputsForzado } response={response} responseAmortiguado={responseAmortiguado} responseForzado={responseForzado} responseAcoplados={responseAcoplados} energies={responseEnergies} /> :
                        <SimplePendulumAnimation mass={configInputs.mass.checked ? configInputs.mass.data + 'kg' : ''} angle={7} length={configInputs.length.data} time={2} />
                    }
                </div>
                <div className="platform-inputs">
                    <ButtonGroup size='small' color='primary'>
                        <Button variant={pageConfig === 'data' ? 'contained' : null} onClick={() => setPageConfig('data')}>Data</Button>
                        <Button variant={pageConfig === 'configuration' ? 'contained' : null} onClick={() => setPageConfig('configuration')}><MdSettings /></Button>
                    </ButtonGroup>
                    {pageConfig === 'data' ? <Form configInputs={type === 'simple' ? configInputs : type === 'amortiguado' ? configInputsAmortiguado : type === 'acoplados' ? configInputsAcoplados : configInputsForzado} handleInputs={handleInputs} /> :
                        <Checks handleType={handleType} type={type} configInputs={type === 'simple' ? configInputs : type === 'amortiguado' ? configInputsAmortiguado : configInputsForzado} handleChecks={handleChecks} />
                    }
                </div>
            </div>
        </div>
    )
}
