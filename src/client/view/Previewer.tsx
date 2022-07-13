import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Fadein from '../components/Fadein'
import ParallaxContainer from '../components/ParallaxContainer'
import { State } from '../module/useAnimateConfig'
import { Animation } from './EditAnimate'

const Previewer = () => {
    const [state, setState] = useState<State | null>(null)
    const [animation, setAnimation] = useState<Animation | null>(null)

    const navigate = useNavigate()

    useEffect(() => {
        const ANIMATION_STATE = 'animationState'
        const strage = localStorage.getItem(ANIMATION_STATE) as string
        setState(JSON.parse(strage) as State)
        setAnimation((JSON.parse(strage) as State).animation)

        return () => localStorage.removeItem(ANIMATION_STATE)
    }, [])

    return (
        <div className={`previewer ${animation !== null ? animation : ''}`}>
            <div className='attention'>Let&apos;s Scroll</div>
            {(() => {
                if (!state) return

                if (state.animation === 'FadeIn' && state.theme) {
                    return (
                        <Fadein
                            configArray={state.configArray}
                            theme={state.theme}
                        />
                    )
                }

                if (state.animation === 'Parallax' && state.theme) {
                    return (
                        <ParallaxContainer
                            configArray={state.configArray}
                            theme={state.theme}
                        />
                    )
                }
            })()}
            <div className='back_button'>
                <button onClick={() => navigate('/edit_animate')}>←Back</button>
            </div>
        </div>
    )
}

export default Previewer
