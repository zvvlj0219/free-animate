import FadeIn from '../components/Fadein'
import useFadeIn, { NodeStyle } from '../components/useFadeIn'
import ParallaxContainer from '../components/ParallaxContainer'
import { SquareSmallIcon } from '../components/shapes/Square'

type FadeInProps = {
    id: number
    src?: string
    imageStyle?: {
        width: string
        height: string
        margin: string
        display: string
    }
    text?: string
    textStyle?: {
        fontSize: string
        margin: string
    }
    translate: {
        x: number
        y: number
    }
    duration: number
}

const EditAnimate = () => {
    return (
        <div className="editAnimate">
            <h1>this is editAnimate</h1>
            <hr />
            <FadeIn />
        </div>
    )
}

export default EditAnimate
