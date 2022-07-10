import * as React from 'react'
import { ParallaxLayer } from '@react-spring/parallax'
import { PAGES, createOffset, createSpeed } from './ParallaxContainer'

type Props = {
    src: string
    imageStyle: {
        width: string
        height: string
        padding: string
        display: string
    }
}

const ParallaxImageLayer = ({ src, imageStyle }: Props) => (
    <ParallaxLayer
        offset={createOffset(PAGES)}
        speed={createSpeed(true)}
        style={{
            height: imageStyle.height,
            padding: imageStyle.padding
        }}
    >
        <img
            src={src}
            alt=''
            style={{
                width: imageStyle.width,
                height: imageStyle.height,
                display: imageStyle.display
            }}
        />
    </ParallaxLayer>
)

export default ParallaxImageLayer
