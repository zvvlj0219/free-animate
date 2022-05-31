import FadeIn from '../components/Fadein'
import ParallaxContainer from '../components/ParallaxContainer'

interface Text {
    id: number
    text: string
    textStyle: {
        fontSize: string
        padding: string
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
        padding: string
        display: string
    }
    translate: {
        x: number
        y: number
    }
    duration: number
}

type AnimationProps = Text | Image

// sample Data
import js from '../assets/sample/JavaScript.png'
import node from '../assets/sample/Node.js.png'
import ts from '../assets/sample/TypeScript.png'
import vue from '../assets/sample/Vue.js.png'

const sampleImgStyle1 = {
    width: '150px',
    height: '150px',
    padding: '0 20%',
    display: 'block'
}
const sampleImgStyle2 = {
    width: '170px',
    height: '170px',
    padding: '0 30%',
    display: 'block'
}
const sampleImgStyle3 = {
    width: '200px',
    height: '200px',
    padding: '0 20%',
    display: 'block'
}

const sampleImgStyle4 = {
    width: '200px',
    height: '200px',
    padding: '0 10%',
    display: 'block'
}

const sampleTextStyle1 = {
    fontSize: '30px',
    padding: '0 30%'
}
const sampleTextStyle2 = {
    fontSize: '40px',
    padding: '0 40%'
}
const sampleTextStyle3 = {
    fontSize: '50px',
    padding: '0 50%'
}

const samplePropsArray: AnimationProps[] = [
    {
        id: 511,
        src: js,
        imageStyle: sampleImgStyle1,
        translate: { x: 300, y: 0 },
        duration: 0.4
    },
    {
        id: 303,
        text: '323',
        textStyle: sampleTextStyle3,
        translate: { x: 400, y: 0 },
        duration: 0.5
    },
    {
        id: 522,
        src: ts,
        imageStyle: sampleImgStyle2,
        translate: { x: 200, y: 0 },
        duration: 0.3
    },
    {
        id: 111,
        text: '131',
        textStyle: sampleTextStyle1,
        translate: { x: 300, y: 0 },
        duration: 0.4
    },
    {
        id: 733,
        src: vue,
        imageStyle: sampleImgStyle3,
        translate: { x: 400, y: 0 },
        duration: 0.5
    },
    {
        id: 744,
        src: node,
        imageStyle: sampleImgStyle4,
        translate: { x: 200, y: 0 },
        duration: 0.3
    },
    {
        id: 33,
        text: '313',
        textStyle: sampleTextStyle3,
        translate: { x: 400, y: 0 },
        duration: 0.5
    },
    {
        id: 611,
        src: js,
        imageStyle: sampleImgStyle1,
        translate: { x: 300, y: 0 },
        duration: 0.6
    },
    {
        id: 323,
        text: '343',
        textStyle: sampleTextStyle3,
        translate: { x: 400, y: 0 },
        duration: 0.2
    },
    {
        id: 212,
        text: '232',
        textStyle: sampleTextStyle2,
        translate: { x: 200, y: 0 },
        duration: 0.5
    },
    {
        id: 622,
        src: ts,
        imageStyle: sampleImgStyle2,
        translate: { x: 200, y: 0 },
        duration: 0.3
    },
    {
        id: 313,
        text: '333',
        textStyle: sampleTextStyle3,
        translate: { x: 400, y: 0 },
        duration: 0.3
    },
    {
        id: 131,
        text: '151',
        textStyle: sampleTextStyle1,
        translate: { x: 300, y: 0 },
        duration: 0.2
    },
    {
        id: 633,
        src: vue,
        imageStyle: sampleImgStyle3,
        translate: { x: 400, y: 0 },
        duration: 0.6
    },
    {
        id: 644,
        src: node,
        imageStyle: sampleImgStyle4,
        translate: { x: 200, y: 0 },
        duration: 0.4
    },
    {
        id: 11,
        text: '111',
        textStyle: sampleTextStyle1,
        translate: { x: 300, y: 0 },
        duration: 0.3
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
    }
]

export type Theme = 'stylish' | 'pop' | 'sick'

// sample Theme 実際は動的に取得
const sampleTheme = 'sick'

// いろんなところで使う
export const sampleColor = [
    {
        theme: 'stylish',
        color: ['#F72585', '#B5179E', '#4361EE', '#4895EF']
    },
    {
        theme: 'pop',
        color: ['#FF595E', '#FFCA3A', '#8AC926', '#1982C4']
    },
    {
        theme: 'sick',
        color: ['black', '#363635', '#595A4A']
    }
]

const EditAnimate = () => {
    return (
        <div className="editAnimate">
            <h1>this is editAnimate</h1>
            <hr />
            <FadeIn configArray={samplePropsArray} theme={sampleTheme} />
            {/* <ParallaxContainer /> */}
        </div>
    )
}

export default EditAnimate
