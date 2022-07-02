import FadeIn from "../components/FadeIn"
import ParallaxContainer from '../components/ParallaxContainer'
import { Link } from "react-router-dom"
import { State } from "../module/useAnimateConfig"
import { useEffect, useState } from "react"

const Previewer = () => {
    const [state, setState] = useState<State | null>(null)

    useEffect(() => {
        const ANIMATION_STATE = 'animationState'
        const strage = localStorage.getItem(ANIMATION_STATE) as string
        setState(JSON.parse(strage) as State)

        return () => localStorage.removeItem(ANIMATION_STATE)
    }, [])

    return (
        <div className='previewer'>
            <div>
                {
                    state?.animation === 'FadeIn' && state?.theme 
                    ? <FadeIn configArray={state.configArray} theme={state.theme} />
                    : state?.animation === 'Parallax' && state?.theme
                    ? <ParallaxContainer configArray={state.configArray} theme={state.theme} />
                    : '...Loading'
                }
            </div>
            <Link to='/edit_animate'>
                もどる
            </Link>
        </div>
    )
}

export default Previewer
