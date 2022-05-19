import { useState, useCallback, useEffect, useRef } from 'react'
import useFadeIn, { scrollTop } from './useFadeIn'
// sample
import js from '../assets/sample/JavaScript.png'
import node from '../assets/sample/Node.js.png'
import ts from '../assets/sample/TypeScript.png'
import vue from '../assets/sample/Vue.js.png'

const sampleImgStyle = {
    width: '200px',
    height: '200px',
    display: 'block'
}

const sampleContainerStyle = {
    backgroundColor: 'lightgray',
    overflow: 'hidden'
}

// ↑↑↑↑↑sample

const FadeIn = () => {
    const ref1 = useRef<HTMLDivElement>(null)
    const ref2 = useRef<HTMLDivElement>(null)
    const ref3 = useRef<HTMLDivElement>(null)

    const [isDownScroll, changeDirection] = useState<boolean>(true)
    const [prev_position, reinitPosition] = useState<number>(0)
  
    const fadeAnimationStyle1 = useFadeIn({
        isDownScroll,
        containerElm: 'main_scroll',
        ref: ref1,
        translate: { x: 100,y: 0 },
        duration: 0.1, 
    })
    const fadeAnimationStyle2 = useFadeIn({
        isDownScroll,
        containerElm: 'main_scroll',
        ref: ref2,
        translate: { x: 300,y: 0 },
        duration: 0.3, 
    })
    const fadeAnimationStyle3 = useFadeIn({
        isDownScroll,
        containerElm: 'main_scroll',
        ref: ref3,
        translate: { x: 100,y: 0 },
        duration: 0.2, 
    })

    const onScroll = useCallback(() => {
        const current_position = scrollTop()
        if (current_position > prev_position) {
            changeDirection(true)
        } else {
            changeDirection(false)
        }
        reinitPosition(current_position)
    }, [prev_position])

    useEffect(() => {
        document.addEventListener('scroll', onScroll)
        return () => document.removeEventListener('scroll', onScroll)
    }, [onScroll])
  
    return (
        <div className='fade_in' id='main_scroll' style={sampleContainerStyle}>
            <h1>this is fade in</h1>
            <h1>fadein</h1>
            <div className='content_1'>
                <p className='text fadeIn'>content_1</p>
                <img src={js} alt='' style={sampleImgStyle} />
            </div>
            <div className='content_2'>
                <p className='text'>content_2</p>
                <img src={vue} alt='' style={sampleImgStyle} />
            </div>
            <div className='content_3'
                ref={ref1}
                style={fadeAnimationStyle1}
            >
                <p className='text fadeIn'>content_3</p>
                <img src={node} className='fadeIn' alt='' style={sampleImgStyle} />
            </div>
            <div className='content_4'
                ref={ref2}
                style={fadeAnimationStyle2}
            >      
                <p className='text fadeIn'>content_4</p>
                <img src={ts} className='fadeIn' alt='' style={sampleImgStyle} />
            </div>
            <div className='content_5'
                ref={ref3}
                style={fadeAnimationStyle3}
            >      
                <p className='text fadeIn'>content_4</p>
                <img src={js} className='fadeIn' alt='' style={sampleImgStyle} />
            </div>
        </div>
    )
}

export default FadeIn
