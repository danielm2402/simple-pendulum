import React from 'react'
import './Header.css'
export default function Header() {
    return (
        <div className="container-header">
            <div className="container-logo">
                __Simple Pendulum
            </div>
            <div className="container-navigation">
                <a href="#">Start</a>
                <a href="#">GitHub</a>
                <a href="#">Get to know us</a>
            </div>
        </div>
    )
}
