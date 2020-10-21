import React, { useState } from 'react'
import './Platform.css'
import SimplePendulumAnimation from './animations/SimplePendulumAnimation'
import Form from './inputs/Form'
import { ButtonGroup, Button } from '@material-ui/core'
import ExampleAnimation from './animations/ExampleAnimation'

export default function Platform() {
    const [page, setPage] = useState('solution')
    const [pageConfing, setPageConfig] = useState('data')
    const [configInputs, setConfigInputs] = useState({})
    const [inputsData, setInputsData] = useState({})
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
                    {page === 'solution' ? <></>:
                        <SimplePendulumAnimation />
                    }
                </div>
                <div className="platform-inputs">
                    <ButtonGroup size='small' color='primary'>
                        <Button variant={pageConfing === 'data' ? 'contained' : null} onClick={() => setPageConfig('data')}>Data</Button>
                        <Button variant={pageConfing === 'configuration' ? 'contained' : null} onClick={() => setPageConfig('configuration')}>Config</Button>
                    </ButtonGroup>
                    {pageConfing === 'data' ? <Form /> :
                        <></>
                    }
                </div>
            </div>
        </div>
    )
}
