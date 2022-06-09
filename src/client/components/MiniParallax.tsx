import { useEffect, useState, useRef } from 'react'
import { Parallax, IParallax, ParallaxLayer } from '@react-spring/parallax'
import useWindowSize from '../module/useWindowSize'

import css from '../assets/sample/Css.png'
import html from '../assets/sample/Html.png'
import react from '../assets/sample/React.png'
import wp from '../assets/sample/Webpack.png'

const PAGES = 2

const MiniParallax = () => {
    const [contentWidth, setContentWidth] = useState<number>(300)
    const { width } = useWindowSize()
    const parallax = useRef<IParallax>(null)

    const onResize = (wdt: number) => {
        if (wdt < 300) {
            setContentWidth(250)
        }

        if (wdt > 300 && wdt <= 400) {
            setContentWidth(330)
        }

        if (wdt > 400 && wdt <= 500) {
            setContentWidth(370)
        }

        if (wdt > 600) {
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
                backgroundColor: 'rgba(202, 240, 248, 0.7)'
            }}
        >
            <Parallax
                ref={parallax}
                pages={PAGES}
                className='parallax'
                style={{
                    width: `${contentWidth}px`,
                    height: `${contentWidth}px`
                }}
            >
                <h1 style={{ textAlign: 'center' }}>Scroll Here !</h1>
                <h2 style={{ padding: '0 10%', fontSize: '45px' }}>Parallax</h2>

                <ParallaxLayer offset={1.1} speed={1.3}>
                    <div
                        style={{
                            width: '100%',
                            height: '150px',
                            backgroundColor: 'skyblue'
                        }}
                    />
                </ParallaxLayer>

                <ParallaxLayer offset={0.6} speed={-0.9}>
                    <div
                        style={{
                            width: '100%',
                            height: '150px',
                            backgroundColor: 'rgba(202, 240, 248, 0.7)'
                        }}
                    />
                </ParallaxLayer>

                <ParallaxLayer offset={1.4} speed={-1}>
                    <img
                        src={react}
                        style={{
                            width: '130px',
                            height: '120px',
                            padding: '0 60%',
                            display: 'block'
                        }}
                        alt=''
                    />
                </ParallaxLayer>

                <ParallaxLayer offset={0.6} speed={1.2}>
                    <img
                        src={html}
                        style={{
                            width: '100px',
                            height: '100px',
                            padding: '0 15%',
                            display: 'block'
                        }}
                        alt=''
                    />
                </ParallaxLayer>

                <ParallaxLayer offset={1.7} speed={1.2}>
                    <img
                        src={wp}
                        style={{
                            width: '120px',
                            height: '120px',
                            padding: '0 10%',
                            display: 'block'
                        }}
                        alt=''
                    />
                </ParallaxLayer>

                <ParallaxLayer offset={1.4} speed={-0.3}>
                    <img
                        src={css}
                        style={{
                            width: '100px',
                            height: '100px',
                            padding: '0 30%',
                            display: 'block'
                        }}
                        alt=''
                    />
                </ParallaxLayer>

                <ParallaxLayer offset={0.7} speed={-0.2}>
                    <h2
                        style={{
                            fontSize: '30px',
                            padding: '0 37%'
                        }}
                    >
                        components
                    </h2>
                </ParallaxLayer>

                <ParallaxLayer offset={1.6} speed={1}>
                    <h2
                        style={{
                            fontSize: '50px',
                            padding: '0 45%'
                        }}
                    >
                        free&nbsp;style
                    </h2>
                </ParallaxLayer>

                {/* <ParallaxTextLayer
                    text='component'
                    textStyle={{
                        fontSize: '40px',
                        padding: '0 30%'
                    }}
                />
                <ParallaxTextLayer
                    text='anything'
                    textStyle={{
                        fontSize: '30px',
                        padding: '0 60%'
                    }}
                /> */}
            </Parallax>
        </div>
    )
}

export default MiniParallax
