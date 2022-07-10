import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import ParallaxContainer from '../components/ParallaxContainer'
import { State } from '../module/useAnimateConfig'

const Previewer = () => {
    const [state, setState] = useState<State | null>(null)
    const navigate = useNavigate()

    useEffect(() => {
        const ANIMATION_STATE = 'animationState'
        const strage = localStorage.getItem(ANIMATION_STATE) as string
        setState(JSON.parse(strage) as State)

        return () => localStorage.removeItem(ANIMATION_STATE)
    }, [])

    return (
        <div className='previewer'>
            {state?.animation === 'FadeIn' && state?.theme && (
                <FadeIn configArray={state.configArray} theme={state.theme} />
            )}
            {state?.animation === 'Parallax' && state?.theme && (
                <ParallaxContainer
                    configArray={state.configArray}
                    theme={state.theme}
                />
            )}
            {!state && '...Loading'}
            <div className='back_button'>
                <button onClick={() => navigate('/edit_animate')}>←Back</button>
            </div>
        </div>
    )
}

export default Previewer
