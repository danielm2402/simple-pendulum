import React, { useState } from 'react'
import TweenOne from 'rc-tween-one';
import BezierPlugin from 'rc-tween-one/lib/plugin/BezierPlugin';

import './animation.css'
TweenOne.plugins.push(BezierPlugin);

export default function SimplePendulumAnimation() {
    const [state, setState] = useState({})

    return (
        <div style={{ position: 'relative', height: '100%', width: '100%' }}>
            <div style={{ position: 'absolute', width: '100%', height: '100%' }} >
                <div className="pendulum" >

                </div>
            </div>
            <div className="section-ball">
                <section class="stage">
                    <figure class="ball"><span class="shadow"></span></figure>
                </section>
                {/*  <div className="code-box-shape"></div> */}
            </div>
        </div>
    )
}
