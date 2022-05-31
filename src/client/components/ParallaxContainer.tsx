import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import ParallaxShapes from './ParallaxShapes'
import { HexagonLeafMediumIcon } from './shapes/HexagonLeaf'
import ParallaxImageLayer from './ParallaxImageLayer'
import ParallaxTextLayer from './ParallaxTextLayer'

// sample
import js from '../assets/sample/JavaScript.png'
import node from '../assets/sample/Node.js.png'
import ts from '../assets/sample/TypeScript.png'
import vue from '../assets/sample/Vue.js.png'

interface Text {
    id: number
    text: string
    textStyle: {
        fontSize: string
        margin: string
    }
    translate: {
        x: number
        y: number
    }
    duration: number
}

interface Image {
    id: number
    src: string
    imageStyle: {
        width: string
        height: string
        margin: string
        display: string
    }
    translate: {
        x: number
        y: number
    }
    duration: number
}

type AnimationProps = Text | Image

const sampleImgStyle1 = {
    width: '150px',
    height: '150px',
    margin: '0 20%',
    display: 'block'
}
const sampleImgStyle2 = {
    width: '170px',
    height: '170px',
    margin: '0 30%',
    display: 'block'
}
const sampleImgStyle3 = {
    width: '200px',
    height: '200px',
    margin: '0 20%',
    display: 'block'
}

const sampleImgStyle4 = {
    width: '200px',
    height: '200px',
    margin: '0 10%',
    display: 'block'
}

const sampleTextStyle1 = {
    fontSize: '30px',
    margin: '0 30%'
}
const sampleTextStyle2 = {
    fontSize: '40px',
    margin: '0 40%'
}
const sampleTextStyle3 = {
    fontSize: '50px',
    margin: '0 50%'
}

const samplePropsArray: AnimationProps[] = [
    {
        id: 511,
        src: js,
        imageStyle: sampleImgStyle1,
        translate: { x: 300, y: 0 },
        duration: 0.8
    },
    {
        id: 303,
        text: '323',
        textStyle: sampleTextStyle3,
        translate: { x: 400, y: 0 },
        duration: 0.9
    },
    {
        id: 522,
        src: ts,
        imageStyle: sampleImgStyle2,
        translate: { x: 200, y: 0 },
        duration: 0.7
    },
    {
        id: 111,
        text: '131',
        textStyle: sampleTextStyle1,
        translate: { x: 300, y: 0 },
        duration: 0.8
    },
    {
        id: 733,
        src: vue,
        imageStyle: sampleImgStyle3,
        translate: { x: 400, y: 0 },
        duration: 0.9
    },
    {
        id: 744,
        src: node,
        imageStyle: sampleImgStyle4,
        translate: { x: 200, y: 0 },
        duration: 0.7
    },
    {
        id: 33,
        text: '313',
        textStyle: sampleTextStyle3,
        translate: { x: 400, y: 0 },
        duration: 0.9
    },
    {
        id: 611,
        src: js,
        imageStyle: sampleImgStyle1,
        translate: { x: 300, y: 0 },
        duration: 0.8
    },
    {
        id: 323,
        text: '343',
        textStyle: sampleTextStyle3,
        translate: { x: 400, y: 0 },
        duration: 0.9
    },
    {
        id: 212,
        text: '232',
        textStyle: sampleTextStyle2,
        translate: { x: 200, y: 0 },
        duration: 0.7
    },
    {
        id: 622,
        src: ts,
        imageStyle: sampleImgStyle2,
        translate: { x: 200, y: 0 },
        duration: 0.7
    },
    {
        id: 313,
        text: '333',
        textStyle: sampleTextStyle3,
        translate: { x: 400, y: 0 },
        duration: 0.9
    },
    {
        id: 131,
        text: '151',
        textStyle: sampleTextStyle1,
        translate: { x: 300, y: 0 },
        duration: 0.8
    },
    {
        id: 633,
        src: vue,
        imageStyle: sampleImgStyle3,
        translate: { x: 400, y: 0 },
        duration: 0.9
    },
    {
        id: 644,
        src: node,
        imageStyle: sampleImgStyle4,
        translate: { x: 200, y: 0 },
        duration: 0.7
    },
    {
        id: 11,
        text: '111',
        textStyle: sampleTextStyle1,
        translate: { x: 300, y: 0 },
        duration: 0.8
    },
    {
        id: 722,
        src: ts,
        imageStyle: sampleImgStyle2,
        translate: { x: 200, y: 0 },
        duration: 0.7
    },
    {
        id: 101,
        text: '121',
        textStyle: sampleTextStyle1,
        translate: { x: 300, y: 0 },
        duration: 0.8
    },
    {
        id: 533,
        src: vue,
        imageStyle: sampleImgStyle3,
        translate: { x: 400, y: 0 },
        duration: 0.9
    },
    {
        id: 22,
        text: '212',
        textStyle: sampleTextStyle2,
        translate: { x: 200, y: 0 },
        duration: 0.7
    },
    {
        id: 711,
        src: js,
        imageStyle: sampleImgStyle1,
        translate: { x: 300, y: 0 },
        duration: 0.8
    },
    {
        id: 202,
        text: '222',
        textStyle: sampleTextStyle2,
        translate: { x: 200, y: 0 },
        duration: 0.7
    },
    {
        id: 121,
        text: '141',
        textStyle: sampleTextStyle1,
        translate: { x: 300, y: 0 },
        duration: 0.8
    },
    {
        id: 222,
        text: '242',
        textStyle: sampleTextStyle2,
        translate: { x: 200, y: 0 },
        duration: 0.7
    },
    {
        id: 544,
        src: node,
        imageStyle: sampleImgStyle4,
        translate: { x: 200, y: 0 },
        duration: 0.7
    },
    {
        id: 232,
        text: '252',
        textStyle: sampleTextStyle2,
        translate: { x: 200, y: 0 },
        duration: 0.7
    },
    {
        id: 333,
        text: '353',
        textStyle: sampleTextStyle3,
        translate: { x: 400, y: 0 },
        duration: 0.9
    }
]

const ParallaxContainer = () => {
    const parallax = useRef<IParallax>(null)

    return (
        <div
            className="parallax_container"
            style={{
                width: '70%',
                height: '500px',
                margin: '0 auto'
            }}
        >
            <Parallax
                ref={parallax}
                pages={3}
                className="parallax"
                style={{
                    width: '500px',
                    height: '500px',
                    display: 'block',
                    background: 'skyblue'
                }}
            >
                <ParallaxShapes offset={1} speed={2}>
                    <HexagonLeafMediumIcon
                        color="red"
                        opacity={0.4}
                        margin="0 30%"
                        qty={4}
                    />
                </ParallaxShapes>
                <ParallaxTextLayer
                    offset={1}
                    speed={2}
                    text="sasasa"
                    textStyle={{
                        fontSize: '40px',
                        padding: '0 20%'
                    }}
                />
            </Parallax>
        </div>
    )
}

export default ParallaxContainer
