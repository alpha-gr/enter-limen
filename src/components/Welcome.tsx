
import React from 'react';
import './welcome.css';

export const Welcome = () => {
    return (
        <div className="welcome">
            <svg
                viewBox="0 0 300 200"
                preserveAspectRatio="xMidYMid slice"
                width="100%"
                height="100%"
                xmlns='http://www.w3.org/2000/svg'
            >
                <defs>
                    {/* <filter id='screen-noise'>
                        <feTurbulence baseFrequency="0.01 1" result="waves" numOctaves="2" />
                        <feDisplacementMap in="SourceGraphic" in2="waves" scale="2" xChannelSelector="R" yChannelSelector="R">
                            <animate attributeName="scale" values="0;10;0;50;5" dur="9s" repeatCount="indefinite" />
                        </feDisplacementMap>
                    </filter> */}
                    <filter id="Glow" x="-30%" y="-30%" width="160%" height="160%">
                        <feGaussianBlur stdDeviation="1" result="glow" />
                        <feMerge>
                            <feMergeNode in="glow" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    <pattern id="Grid" x="0" y="0" width="0.2" height="0.2">
                        <rect x="0" y="0" width="100px" height="100px" stroke='yellow' fill='transparent' strokeWidth='2' />
                        <rect x="2" y="0" width="100px" height="100px" stroke='blue' fill='transparent' strokeWidth='2' />
                        <animateTransform attributeType="xml" attributeName="patternTransform" type="translate" values="0,0;60,40" dur="5s" repeatCount="indefinite" />
                    </pattern>
                </defs>
                <rect height="100%" width="100%" fill="url(#Grid)" filter="url(#Glow)" />
                <text x="50%" y="50%" textAnchor="middle">
                    <tspan x="50%" dy="1px" style={{ fontSize: '20px' }}>
                        ENTER: /LIMEN
                    </tspan>
                    <tspan x="50%" dy="5px" style={{ fontSize: '4px' }}>
                        clicca sullo schermo o premi un tasto per entrare
                    </tspan>
                </text>

                {/* <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0,0;0,3;0,-2;0,0;0,5;0,0;0,-3" dur="2s" repeatCount="indefinite" /> */}
            </svg>
        </div>
    );
};