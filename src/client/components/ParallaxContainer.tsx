import React, { useRef } from 'react'
import { Parallax, IParallax } from '@react-spring/parallax'
import { AnimationProps } from '../types/components_props'
import { Theme, createBackground } from '../view/EditAnimate'
import ParallaxImageLayer from './ParallaxImageLayer'
import ParallaxTextLayer from './ParallaxTextLayer'
import ParallaxBackground from './ParallaxBackground'

type Props = {
    theme: Theme
    configArray: AnimationProps[]
}

export const PAGES = 2

export const createOffset = (pages: number): number => {
    const min = 0.3 * 10
    const max = (pages - min / 10) * 10
    const offset = (Math.floor(Math.random() * (max + 1 - min)) + min) / 10
    return offset
}

export const createSpeed = (isShape: boolean): number => {
    const min = isShape ? -0.3 * 10 : 1 * 10
    const max = 0.8 * 10
    const speed = (Math.floor(Math.random() * (max + 1 - min)) + min) / 10
    return speed
}

const ParallaxContainer = ({ configArray, theme }: Props) => {
    const parallax = useRef<IParallax>(null)

    return (
        <div
            className='parallax_container'
            style={{
                width: '100%',
                height: '100%'
            }}
        >
            <Parallax
                ref={parallax}
                pages={PAGES}
                className='parallax'
                style={{
                    backgroundColor: createBackground(theme, true)
                }}
            >
                <ParallaxBackground theme={theme} />
                {configArray.map((el) =>
                    'text' in el ? (
                        <ParallaxTextLayer
                            key={el.id}
                            text={el.text}
                            textStyle={el.textStyle}
                        />
                    ) : (
                        <ParallaxImageLayer
                            key={el.id}
                            src={el.src}
                            imageStyle={el.imageStyle}
                        />
                    )
                )}
            </Parallax>
        </div>
    )
}

export default ParallaxContainer
