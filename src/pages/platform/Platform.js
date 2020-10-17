import React from 'react'
import './Platform.css'
import SimplePendulumAnimation from './animations/SimplePendulumAnimation'

export default function Platform() {
    return (
        <div className="page-platform">
            <div className="platform-header">
                <div className="platform-tools">
                </div>
                <div className="platform-draw">
                </div>
                <div className="platform-inputs">
                </div>
            </div>
            <div className="platform-canvas">
                <div className="platform-tools">
                </div>
                <div className="platform-draw">
                    xdd
                    <SimplePendulumAnimation/>
                </div>
                <div className="platform-inputs">
                </div>
            </div>
        </div>
    )
}
