import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import { Props } from '../types/components_props'

// sample
import ts from '../assets/sample/TypeScript.png'

const sampleImageStyle = {
    width: '150px',
    height: '150px',
    display: 'block'
}

const sampleContainerStyle = {
    width: '70%',
    height: '500px',
    margin: '0 auto'
}

const ParallaxContainer = ({
    textData,
    imageData,
    theme,
    containerStyle
}: Props) => {
    const parallax = useRef<IParallax>(null)
    return (
        <div
            className="parallax_container"
            style={{
                width: '70%',
                height: '500px',
                margin: '0 auto'
            }}
        >
            <Parallax
                ref={parallax}
                pages={3}
                className="parallax"
                style={sampleContainerStyle}
            >
                <ParallaxLayer
                    className="parallaxLayer"
                    offset={0}
                    speed={1}
                    style={{
                        backgroundColor: '#87BCDE'
                    }}
                >
                    <ParallaxLayer
                        offset={1}
                        speed={1.5}
                        style={{
                            backgroundColor: 'lightpink'
                        }}
                    >
                        <p>c1111</p>
                    </ParallaxLayer>
                    <ParallaxLayer
                        offset={2}
                        speed={2}
                        style={{
                            backgroundColor: 'lightgray'
                        }}
                    >
                        <div>
                            <img src={ts} style={sampleImageStyle} alt="" />
                        </div>
                    </ParallaxLayer>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}

export default ParallaxContainer
