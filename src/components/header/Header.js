import React from 'react'
import './Header.css'
export default function Header() {
    return (
        <div className="container-header">
            <div className="container-logo">
                __Electromagnetic Waves
            </div>
            <div className="container-navigation">
                <a href="#/" onClick={() => document?.querySelector(`.page-platform`)
                    .scrollIntoView({ behavior: "smooth" })}>Start</a>
            <a rel="noopener noreferrer" href="https://github.com/danielm2402/simple-pendulum" target="_blank">GitHub</a>
            <a href="#/">Get to know us</a>
        </div>
        </div >
    )
}
