import { useEffect, useState, useRef } from 'react'
import { Parallax, IParallax, ParallaxLayer } from '@react-spring/parallax'

import useWindowSize from '../module/useWindowSize'

const MiniParallax = () => {
    const [contentWidth, setContentWidth] = useState<number>(300)
    const { width } = useWindowSize()
    const parallax = useRef<IParallax>(null)

    const onResize = (width: number) => {
        if (width < 300) {
            setContentWidth(260)
        }

        if (width > 300 && width <= 400) {
            setContentWidth(330)
        }

        if (width > 400 && width <= 500) {
            setContentWidth(430)
        }

        if (width > 600) {
            setContentWidth(350)
        }
    }

    useEffect(() => {
        onResize(width)
    }, [width])

    return (
        <div
            className='mini_parallax'
            style={{
                maxWidth: `${contentWidth}px`,
                minHeight: `${contentWidth}px`,
                backgroundColor: 'skyblue'
            }}
        >
            <Parallax
                ref={parallax}
                pages={2}
                className='parallax'
                style={{
                    width: `${contentWidth}px`,
                    height: `${contentWidth}px`
                }}
            >
                <ParallaxLayer offset={0.5} speed={1}>
                    <h2>parallax</h2>
                </ParallaxLayer>
                <ParallaxLayer offset={1.3} speed={0.6}>
                    <h2>parallax</h2>
                </ParallaxLayer>
                <ParallaxLayer offset={1.5} speed={0.5}>
                    <h2>parallax</h2>
                </ParallaxLayer>
                <ParallaxLayer offset={1.7} speed={1}>
                    <h2>parallax</h2>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}

export default MiniParallax
