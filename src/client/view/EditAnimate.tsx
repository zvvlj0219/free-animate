import React, { useEffect, useState } from 'react'
import useAnimateConfig, { localStorageFactory } from '../module/useAnimateConfig'
import { Link } from 'react-router-dom'
import EditTextArea from '../components/uikit/EditTextArea'
import EditImageArea from '../components/uikit/EditImageArea'

export interface Text {
    id: string
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
    id: string
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

export type AnimationProps = Text | Image

export type Animation = 'FadeIn' | 'Parallax'

export const paddingProvider = (): string => {
    const min = 1
    const max = 9
    const percent = Math.floor(Math.random() * (max + 1 - min)) + min
    return `0 0 0 ${percent*10}%`
}

export const translateProvider = (): { x: number, y: number } => {
    return { x: 300, y: 0 }
}

export const durationProvider = (): number => {
    return 0.5
}

export type Theme = 'stylish' | 'pop' | 'sick'

export const themeColor = [
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
        id: 'text1',
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
        id: 'image1',
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
        id: 'text2',
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
        id: 'image2',
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
        id: 'text3',
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
        id: 'image3',
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
