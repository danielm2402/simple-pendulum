import React, { useState } from 'react'
import TweenOne from 'rc-tween-one';
import BezierPlugin from 'rc-tween-one/lib/plugin/BezierPlugin';
import styled, {keyframes} from 'styled-components';
import './animation.css'

const moveVertically = (y) => keyframes`
    0% {
        transform : translateY(0px) 
    }
    100% {
        transform : translateY(${y}px)
    }
`;

const BallAnimation = styled.div`
    animation : ${props => moveVertically(props.y)} ${props => props.time}s linear
`;
export default function SimplePendulumAnimation() {
    const [state, setState] = useState({})

    return (
        <div style={{ position: 'relative', height: '100%', width: '100%' }}>
            <div style={{ position: 'absolute', width: '100%', height: '100%', overflow: 'hidden' }} >
                <div className="container-pendulum">
                    <div className="pendulum" >

                    </div>
                    <section class="stage">
                        <figure class="ball"><span class="shadow"></span></figure>
                    </section>
                </div>
            </div>
            <div style={{ position: 'absolute', width: '100%', height: '100%', overflow:'hidden' }} >
                <div className="protactor-angular">
                    <div className="chart chart1">
                        <span class="char1">|</span>
                       
                    </div>
                    <div className="chart chart2">
                        <span class="char1">|</span>
                        <span class="char1">80</span>
                    </div>
                    <div className="chart chart3">
                        <span class="char1">|</span>
                        <span class="char1">70</span>
                    </div>
                    <div className="chart chart4">
                        <span class="char1">|</span>
                        <span class="char1">60</span>
                    </div>
                    <div className="chart chart5">
                        <span class="char1">|</span>
                        <span class="char1">50</span>
                    </div>
                    <div className="chart chart6">
                        <span class="char1">|</span>
                        <span class="char1">40</span>
                    </div>
                    <div className="chart chart7">
                        <span class="char1">|</span>
                        <span class="char1">30</span>
                    </div>
                    <div className="chart chart8">
                        <span class="char1">|</span>
                        <span class="char1">20</span>
                    </div>
                    <div className="chart chart9">
                        <span class="char1">|</span>
                        <span class="char1">10</span>
                    </div>
                    <div className="chart chart10">
                        <span class="char1">|</span>
                        <span class="char1">0</span>
                    </div>
                    <div className="chart chart11">
                        <span class="char1">|</span>
                        <span class="char1">10</span>
                    </div>
                    <div className="chart chart12">
                        <span class="char1">|</span>
                        <span class="char1">20</span>
                    </div>
                    <div className="chart chart13">
                        <span class="char1">|</span>
                        <span class="char1">30</span>
                    </div>
                    <div className="chart chart14">
                        <span class="char1">|</span>
                        <span class="char1">40</span>
                    </div>
                    <div className="chart chart15">
                        <span class="char1">|</span>
                        <span class="char1">50</span>
                    </div>
                    <div className="chart chart16">
                        <span class="char1">|</span>
                        <span class="char1">60</span>
                    </div>
                    <div className="chart chart17">
                        <span class="char1">|</span>
                        <span class="char1">70</span>
                    </div>
                    <div className="chart chart18">
                        <span class="char1">|</span>
                        <span class="char1">80</span>
                    </div>
                    <div className="chart chart19">
                        <span class="char1">|</span>
                       
                    </div>
                </div>
                <div className="subprotactor-angular">

                </div>
            </div>

        </div>
    )
}
