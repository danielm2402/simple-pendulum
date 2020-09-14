import React from 'react'
import './Landing.css'
import { FaGithub } from "react-icons/fa";

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
                    <a href="#" className="button-git">Give me a star <FaGithub size="2rem" color="#ffffff"/></a>
                </div>
            </div>
            <div className="container-right-landing-page">
                <div className="framework-gif">

                </div>
            </div>
        </div>
    )
}
