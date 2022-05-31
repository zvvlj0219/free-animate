import { ParallaxLayer } from '@react-spring/parallax'

type Props = {
    offset: number
    speed: number
    text: string
    textStyle: {
        fontSize: string
        padding: string
    }
}

const ParallaxTextLayer = ({ offset, speed, text, textStyle }: Props) => {
    return (
        <ParallaxLayer
            offset={offset}
            speed={speed}
            style={{
                padding: textStyle.padding,
                height: textStyle.fontSize
            }}
        >
            <h2 style={{ fontSize: textStyle.fontSize }}>{text}</h2>
        </ParallaxLayer>
    )
}

export default ParallaxTextLayer
