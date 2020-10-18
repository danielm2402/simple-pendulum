import React, { useState } from 'react'
import TweenOne from 'rc-tween-one';
import BezierPlugin from 'rc-tween-one/lib/plugin/BezierPlugin';

import './animation.css'
TweenOne.plugins.push(BezierPlugin);

export default function SimplePendulumAnimation() {
    const [state, setState] = useState({})
    return (
        <div style={{ position: 'relative', height: '100%', width: '100%' }}>
            <TweenOne
                animation={{
                    bezier: {
                        type: 'soft',
                        autoRotate: true,
                        vars: [
                            { x: 150, y: 0 },
                            { x: 0, y: 0 },

                           
                        ],
                    },
                    repeat: -1,
                    yoyo: true,
                    duration: 1000,
                }
                }
                style={{ margin: 0 }}
                className="code-box-shape"
                paused={false}
            >
                <div className="code-box-shape"></div>
            </TweenOne>

        </div>
    )
}
