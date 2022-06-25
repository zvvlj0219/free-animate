import React, { createContext, useContext, useCallback, useEffect, useMemo, useState } from 'react'
import useAnimateConfig, { localStorageFactory, State, Animation } from '../module/useAnimateConfig'
import EditTextArea from '../components/uikit/EditTextArea'
import EditImageArea from '../components/uikit/EditImageArea'
import { useLocation, useNavigate } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import ParallaxContainer from '../components/ParallaxContainer'

export interface Text {
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

export interface Image {
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
import { Link } from 'react-router-dom'

export const idProvider = (): number => {
    // ほんとはランダムで
    return Date.now()
}

export const paddingProvider = (): string => {
    const min = 5
    const max = 95
    const percent = Math.floor(Math.random() * (max + 1 - min)) + min
    return `0 0 0 ${percent}%`
}

export const translateProvider = (): { x: number, y: number } => {
    // ほんとはランダムで
    return { x: 300, y: 0 }
}

export const durationProvider = (): number => {
    // ほんとはランダムで
    return 0.5
}

const sampleImgStyle1 = {
    width: '150px',
    height: '150px',
    padding: paddingProvider(),
    display: 'block'
}
const sampleImgStyle2 = {
    width: '170px',
    height: '170px',
    padding: paddingProvider(),
    display: 'block'
}
const sampleImgStyle3 = {
    width: '200px',
    height: '200px',
    padding: paddingProvider(),
    display: 'block'
}

const sampleImgStyle4 = {
    width: '200px',
    height: '200px',
    padding: paddingProvider(),
    display: 'block'
}

const sampleTextStyle1 = {
    fontSize: '30px',
    padding: paddingProvider()
}

const sampleTextStyle2 = {
    fontSize: '40px',
    padding: paddingProvider()
}

const sampleTextStyle3 = {
    fontSize: '50px',
    padding: paddingProvider()
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
        imageStyle: sampleImgStyle2,
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
        imageStyle: sampleImgStyle1,
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
        imageStyle: sampleImgStyle1,
        translate: { x: 400, y: 0 },
        duration: 0.6
    },
    {
        id: 644,
        src: node,
        imageStyle: sampleImgStyle2,
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
        imageStyle: sampleImgStyle4,
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
        imageStyle: sampleImgStyle2,
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


export const createBackground = (theme: Theme, a: boolean): string => {
    switch (theme) {
        case 'stylish':
            return `rgba(202, 240, 248, ${a ? 0.3 : 1})`
            break
        case 'pop':
            return `rgba(247, 37, 133, ${a ? 0.1 : 1})`
            break
        case 'sick':
            return `rgba(198, 172, 143, ${a ? 0.4 : 1})`
            break
        default:
            return ''
    }
}

const EditAnimate = () => {
    const [text1, setText1] = useState<Text>({
        id: idProvider(),
        text: '',
        textStyle: {
            fontSize: '40px',
            padding: paddingProvider()
        },
        translate: {
            x: 0,
            y: 0
        },
        duration: durationProvider()
    })
    const [image1, setImage1] = useState<Image>({
        id: idProvider(),
        src: '',
        imageStyle: {
            width: '170px',
            height: 'auto',
            padding: paddingProvider(),
            display: 'block'
        },
        translate: {
            x: 0,
            y: 0
        },
        duration: durationProvider()
    })
    const [text2, setText2] = useState<Text>({
        id: idProvider(),
        text: '',
        textStyle: {
            fontSize: '40px',
            padding: paddingProvider()
        },
        translate: {
            x: 0,
            y: 0
        },
        duration: durationProvider()
    })
    const [image2, setImage2] = useState<Image>({
        id: idProvider(),
        src: '',
        imageStyle: {
            width: '170px',
            height: 'auto',
            padding: paddingProvider(),
            display: 'block'
        },
        translate: {
            x: 0,
            y: 0
        },
        duration: durationProvider()
    })
    const [text3, setText3] = useState<Text>({
        id: idProvider(),
        text: '',
        textStyle: {
            fontSize: '40px',
            padding: paddingProvider()
        },
        translate: {
            x: 0,
            y: 0
        },
        duration: durationProvider()
    })
    const [image3, setImage3] = useState<Image>({
        id: idProvider(),
        src: '',
        imageStyle: {
            width: '170px',
            height: 'auto',
            padding: paddingProvider(),
            display: 'block'
        },
        translate: {
            x: 0,
            y: 0
        },
        duration: durationProvider()
    })

    const [preConfig, setPreConfig] = useState<AnimationProps[]>([])

    const [theme, setTheme] = useState<Theme>('stylish')

    const [animation, setAnimation] = useState<Animation>('FadeIn')

    const { state, updateConfig } = useAnimateConfig()

    const handleTheme = (selectedTheme: Theme) => {
        setTheme(selectedTheme)
    }

    const handleAnimation = (selectAnimation: Animation) => {
        setAnimation(selectAnimation)
    }

    useEffect(() => {
        setPreConfig([text1, image1, text2, image2, text3, image3])
    }, [text1, image1, text2, image2, text3, image3, theme])

    useEffect(() => {
        localStorageFactory(state)
    }, [state])

    const openPreview = () => {
        // 簡単なバリデーション
        // if (state.configArray === []) return alert('configArrayがありません')
        // if (state.theme === null) return alert('themeがありません')
        console.log(animation)
        updateConfig(preConfig, theme, animation)
    }

    return (
        <div className='editAnimate'>
            <h1>this is editAnimate</h1>
            <div>
                <div>
                    <button onClick={() => handleTheme('stylish')}>STYLISH</button>
                    <button onClick={() => handleTheme('pop')}>POP</button>
                    <button onClick={() => handleTheme('sick')}>SICK</button>
                </div>
                <div>ここにサンプル背景 {theme}</div>
                <hr />
                <div>
                    <button onClick={() => handleAnimation('FadeIn')}>FadeIn</button>
                    <button onClick={() => handleAnimation('Parallax')}>Parallax</button>
                </div>
                <div>{animation}</div>
                <hr />
                <EditTextArea num={1} text={text1} setText={setText1} />
                <hr />
                <EditImageArea num={1} image={image1} setImage={setImage1} />
                <hr />
                <EditTextArea num={2} text={text2} setText={setText2} />
                <hr />
                <EditImageArea num={2} image={image2} setImage={setImage2} />
                <hr />
                <EditTextArea num={3} text={text3} setText={setText3} />
                <hr />
                <EditImageArea num={3} image={image3} setImage={setImage3} />
            </div>
            <hr />
            <Link
                to='/previewer'
                target='_blank'
                onClick={() => openPreview()}
            >
                open preview
            </Link>
        </div>
    )
}

export default EditAnimate
