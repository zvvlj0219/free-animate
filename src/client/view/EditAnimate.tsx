import FadeIn from "../components/Fadein"
import ParallaxContainer from "../components/parallax"
import { Square_sm } from "../components/shapes/Square"

const EditAnimate = () => {
    return (
        <div className="editAnimate">
            <h1>this is editAnimate</h1>
            <hr />
            <Square_sm color='blue' opacity={1} margin='0 20%' />
        </div>
    )
}

export default EditAnimate
