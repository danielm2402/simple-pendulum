import React from 'react'
import TweenOne from 'rc-tween-one';
import BezierPlugin from 'rc-tween-one/lib/plugin/BezierPlugin';

import './animation.css'
TweenOne.plugins.push(BezierPlugin);

export default function SimplePendulumAnimation() {
    return (
        <div style={{ position: 'relative', height: 200, width: 650, margin: '40px auto' }}>
            <TweenOne
                animation={{
                    bezier: {
                        type: 'soft',
                        autoRotate: true,
                        vars: [
                            { x: 150, y: 150 },
                            { x: 300, y: 0 },
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
