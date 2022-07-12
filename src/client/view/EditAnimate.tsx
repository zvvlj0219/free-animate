import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    useAnimateConfig,
    localStorageFactory
} from '../module/useAnimateConfig'
import EditTextArea from '../components/uikit/EditTextArea'
import EditImageArea from '../components/uikit/EditImageArea'
import '../scss/editAnimate.scss'

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
    const max = 7
    const percent = Math.floor(Math.random() * (max + 1 - min)) + min
    return `0 0 0 ${percent * 10}%`
}

export const translateProvider = (): { x: number; y: number } => ({
    x: 300,
    y: 0
})

export const durationProvider = (): number => 0.5

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

const borderStyle = (
    el: Theme | Animation | null,
    text: string
): React.CSSProperties | undefined => {
    if (el === text) {
        return {
            border: '5px solid limegreen'
        }
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

    const [theme, setTheme] = useState<Theme | null>(null)

    const [animation, setAnimation] = useState<Animation | null>(null)

    const navigate = useNavigate()

    const [validationMsg, setValidationMsg] = useState<string>('')

    const { state, updateConfig } = useAnimateConfig()

    const handleTheme = (selectedTheme: Theme) => {
        setTheme(selectedTheme)
    }

    const handleAnimation = (selectAnimation: Animation) => {
        setAnimation(selectAnimation)
    }

    useEffect(() => {
        if (!theme || !animation) return
        updateConfig(
            [text1, image1, text2, image2, text3, image3],
            theme,
            animation
        )
    }, [
        updateConfig,
        text1,
        image1,
        text2,
        image2,
        text3,
        image3,
        theme,
        animation
    ])

    const openPreview = () => {
        if (!theme || !animation) {
            setValidationMsg('No Theme or Animation has been set.')
        } else {
            localStorageFactory(state)

            const configArray = [text1, image1, text2, image2, text3, image3]
            updateConfig(configArray, theme, animation)
            navigate('/previewer')
        }
    }

    return (
        <div className='editAnimate'>
            <div className='form_wrapper'>
                <div className='describe'>
                    Please set the animation.<br />
                    First, select a theme and animation.<br />
                    Then set your favorite text and image.
                </div>
                <div className='edit_theme'>
                    <h3>Choose Theme</h3>
                    <div className='button_wrapper'>
                        <button
                            className='stylish'
                            onClick={() => handleTheme('stylish')}
                            style={borderStyle(theme, 'stylish')}
                        >
                            STYLISH
                        </button>
                        <button
                            className='pop'
                            onClick={() => handleTheme('pop')}
                            style={borderStyle(theme, 'pop')}
                        >
                            POP
                        </button>
                        <button
                            className='sick'
                            onClick={() => handleTheme('sick')}
                            style={borderStyle(theme, 'sick')}
                        >
                            SICK
                        </button>
                    </div>
                </div>
                <div className='edit_animation'>
                    <h3>Choose Animation</h3>
                    <div className='button_wrapper'>
                        <button
                            className='fadein'
                            onClick={() => handleAnimation('FadeIn')}
                            style={borderStyle(animation, 'FadeIn')}
                        >
                            FadeIn
                        </button>
                        <button
                            className='parallax'
                            onClick={() => handleAnimation('Parallax')}
                            style={borderStyle(animation, 'Parallax')}
                        >
                            Parallax
                        </button>
                    </div>
                </div>
                <EditTextArea num={1} text={text1} setText={setText1} />
                <EditImageArea num={1} image={image1} setImage={setImage1} />
                <EditTextArea num={2} text={text2} setText={setText2} />
                <EditImageArea num={2} image={image2} setImage={setImage2} />
                <EditTextArea num={3} text={text3} setText={setText3} />
                <EditImageArea num={3} image={image3} setImage={setImage3} />
            </div>
            <div className='link'>
                <h3>{validationMsg}</h3>
                <button onClick={() => openPreview()}>Open Preview</button>
            </div>
        </div>
    )
}

export default EditAnimate
