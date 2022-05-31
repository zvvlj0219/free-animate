import { ParallaxLayer } from '@react-spring/parallax'

type Props = {
    offset: number
    speed: number
    children: React.ReactNode
}

const ParallaxShapes = ({ offset, speed, children }: Props) => {
    return (
        <ParallaxLayer className="parallaxshapes" offset={offset} speed={speed}>
            {children}
        </ParallaxLayer>
    )
}

export default ParallaxShapes
