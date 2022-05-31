import { ParallaxLayer } from '@react-spring/parallax'

type Props = {
    offset: number
    speed: number
    src: string
    imageStyle: {
        width: string
        height: string
        padding: string
        display: string
    }
}

const ParallaxImageLayer = ({ offset, speed, src, imageStyle }: Props) => {
    return (
        <ParallaxLayer
            offset={offset}
            speed={speed}
            style={{
                height: imageStyle.height,
                padding: imageStyle.padding
            }}
        >
            <img
                src={src}
                alt=""
                style={{
                    width: imageStyle.width,
                    height: imageStyle.height,
                    display: imageStyle.display
                }}
            />
        </ParallaxLayer>
    )
}

export default ParallaxImageLayer
