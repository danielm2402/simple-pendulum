import React from 'react'
import './Landing.css'
import { FaGithub } from "react-icons/fa";
import gif from '../../assets/gif-pendulum.gif'
export default function Landing() {
    return (
        <div className="page-landing-page">
            <div className="container-left-landing-page">
                <div className="container-title">
                    Welcome to your simple pendulum calculator
                </div>
                <div className="container-resume">
                    Ea culpa Lorem nulla proident labore cupidatat commodo reprehenderit veniam.
                </div>
                <div className="container-help">
                    <a rel="noopener noreferrer" href="https://github.com/danielm2402/simple-pendulum" target="_blank" className="button-git">Give me a star <FaGithub size="2rem" color="#ffffff" /></a>
                </div>
            </div>
            <div className="container-right-landing-page">
                <div className="framework-gif">
                    <div className="container-gif">
                        <img src={gif} alt="SIMPLE_PENDULUM" />
                    </div>
                </div>
            </div>
        </div>
    )
}
