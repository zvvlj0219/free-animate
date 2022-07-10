import * as React from 'react'
import { ParallaxLayer } from '@react-spring/parallax'
import { PAGES, createOffset, createSpeed } from './ParallaxContainer'

type Props = {
    text: string
    textStyle: {
        fontSize: string
        padding: string
    }
}

const ParallaxTextLayer = ({ text, textStyle }: Props) => (
    <ParallaxLayer
        offset={createOffset(PAGES)}
        speed={createSpeed(false)}
        style={{
            padding: textStyle.padding,
            height: textStyle.fontSize
        }}
    >
        <h2 style={{ fontSize: textStyle.fontSize }}>{text}</h2>
    </ParallaxLayer>
)

export default ParallaxTextLayer
