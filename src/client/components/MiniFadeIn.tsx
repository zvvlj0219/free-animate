import React, { useEffect, useState, useRef, useCallback, useMemo } from 'react'
import useWindowSize from '../module/useWindowSize'
import { Theme } from '../view/EditAnimate'
import { AutoAwesomeMediumIcon } from './shapes/AutoAwesome'
import { HexagonLeafSmallIcon } from './shapes/HexagonLeaf'
import { AcUnitSmallIcon, AcUnitMediumIcon } from './shapes/AcUnit'
import { LightModeSmallIcon, LightModeMediumIcon } from './shapes/LightMode'
import { RectangleSmallIcon } from './shapes/Rectangle'

import js from '../assets/sample/JavaScript.png'
import node from '../assets/sample/Node.js.png'
import ts from '../assets/sample/TypeScript.png'
import vue from '../assets/sample/Vue.js.png'

type Children = {
    children: React.ReactNode
}

type State = {
    transform: string
    opacity: number
}

type NodeStyle = {
    width: string
    padding: string
    transition: string
    opacity: number
    transform: string
}

type Config = {
    isDownScroll: boolean
    container: string
    ref: React.RefObject<HTMLDivElement>
    translate: { x: number; y: number }
    padding?: string
    duration?: number
    adjust?: number
}

type Image = {
    id: string
    src: string
    imageStyle: {
        width: string
        height: string
        padding: string
        display: string
    }
    container: string
    translate: {
        x: number
        y: number
    }
    duration: number
    adjust: number
}

type Text = {
    id: string
    text: string
    textStyle: {
        fontSize: string
        padding: string
    }
    container: string
    translate: {
        x: number
        y: number
    }
    duration: number
    adjust: number
}

const CONTAINER = 'mini_container'

const theme: Theme = 'stylish'

const scrollTop = () => {
    const container = document.getElementById(CONTAINER)
    if (!container) return 0
    return Math.max(container.scrollTop)
}

const getScrollDirection = (
    prevPosition: number,
    changeDirection: (value: React.SetStateAction<boolean>) => void,
    reinitPosition: (value: React.SetStateAction<number>) => void
) => {
    const currentPosition = scrollTop()
    if (!currentPosition) return

    if (currentPosition > prevPosition ) {
        changeDirection(true)
    } else {
        changeDirection(false)
    }
    reinitPosition(currentPosition)
}

const useMiniFadeIn = ({
    isDownScroll,
    container,
    ref,
    translate,
    padding = '',
    duration = 0.1,
    adjust = 0
}: Config) => {
    const [cssState, updateStyle] = useState<State>({
        transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,
        opacity: 0
    })

    const nodeStyle = useMemo<NodeStyle>(
        () => ({
            width: '100%',
            padding: `${padding}`,
            transition: `all ${duration}s ease`,
            opacity: cssState.opacity,
            transform: cssState.transform
        }),
        [cssState.opacity, cssState.transform, padding, duration]
    )

    useEffect(() => {
        const containerElm = document.getElementById(container)
        if (!ref.current || !containerElm) {
            throw new Error('no ref or container')
        }

        const { offsetTop } = ref.current
        const windowHeight = window.innerHeight

        const handleScroll = () => {
            // down scroll
            if (
                isDownScroll &&
                offsetTop < scrollTop() + windowHeight - adjust
            ) {
                updateStyle((_state) => ({
                    ..._state,
                    opacity: 1,
                    transform: `translateX(0) translateY(0)`
                }))
            } else {
                updateStyle((_state) => ({
                    ..._state,
                    opacity: 0,
                    transform: `translateX(${translate.x}px) translateY(${translate.y}px)`
                }))
            }

            // up scroll
            if (!isDownScroll && offsetTop > scrollTop() + windowHeight * 1.5) {
                updateStyle((_state) => ({
                    ..._state,
                    opacity: 0,
                    transform: `translateX(${translate.x}px) translateY(${translate.y}px)`
                }))
            } else {
                updateStyle((_state) => ({
                    ..._state,
                    opacity: 1,
                    transform: `translateX(0) translateY(0)`
                }))
            }
        }
        containerElm.addEventListener('scroll', handleScroll)
        return () => containerElm.removeEventListener('scroll', handleScroll)
    })
    return nodeStyle
}

const MiniShape = ({ children }: Children) => {
    const ref = useRef<HTMLDivElement>(null)
    const [isDownScroll, changeDirection] = useState<boolean>(true)
    const [prevPosition, reinitPosition] = useState<number>(0)

    const nodeStyle = useMiniFadeIn({
        isDownScroll,
        container: CONTAINER,
        ref,
        padding: '',
        translate: { x: 0, y: 25 },
        duration: 0.5,
        adjust: 150
    })

    const onScroll = useCallback(() => {
        getScrollDirection(prevPosition, changeDirection, reinitPosition)
    }, [prevPosition])

    useEffect(() => {
        const containerElm = document.getElementById(CONTAINER)
        if (!containerElm) return 
        containerElm.addEventListener('scroll', onScroll)
        return () => containerElm.removeEventListener('scroll', onScroll)
    }, [onScroll])

    return (
        <div className='fadeinshapes' ref={ref} style={nodeStyle}>
            {children}
        </div>
    )
}

const MiniFadeInTextArea = ({
    id,
    text,
    textStyle,
    container,
    translate,
    duration,
    adjust = 0
}: Text) => {
    const ref = useRef<HTMLDivElement>(null)
    const [isDownScroll, changeDirection] = useState<boolean>(true)
    const [prevPosition, reinitPosition] = useState<number>(0)

    const nodeStyle = useMiniFadeIn({
        isDownScroll,
        container,
        ref,
        padding: textStyle.padding,
        translate,
        duration,
        adjust
    })

    const onScroll = useCallback(() => {
        getScrollDirection(prevPosition, changeDirection, reinitPosition)
    }, [prevPosition])

    useEffect(() => {
        const containerElm = document.getElementById(CONTAINER)
        if (!containerElm) return 
        containerElm.addEventListener('scroll', onScroll)
        return () => containerElm.removeEventListener('scroll', onScroll)
    }, [onScroll])

    return (
        <div
            className='fadein_textarea'
            id={`textarea_id_${id}`}
            ref={ref}
            style={{
                ...nodeStyle,
                height: textStyle.fontSize
            }}
        >
            <h2 style={{ fontSize: textStyle.fontSize }}>{text}</h2>
        </div>
    )
}

const MiniFadeInImageArea = ({
    id,
    src,
    imageStyle,
    container,
    translate,
    duration,
    adjust = 0
}: Image) => {
    const ref = useRef<HTMLDivElement>(null)

    const [isDownScroll, changeDirection] = useState<boolean>(true)
    const [prevPosition, reinitPosition] = useState<number>(0)

    const nodeStyle = useMiniFadeIn({
        isDownScroll,
        container,
        ref,
        padding: imageStyle.padding,
        translate,
        duration,
        adjust
    })

    const onScroll = useCallback(() => {
        getScrollDirection(prevPosition, changeDirection, reinitPosition)
    }, [prevPosition])

    useEffect(() => {
        const containerElm = document.getElementById(CONTAINER)
        if (!containerElm) return 
        containerElm.addEventListener('scroll', onScroll)
        return () => containerElm.removeEventListener('scroll', onScroll)
    }, [onScroll])

    return (
        <div
            className='fadein_imagearea'
            id={`imagearea_id_${id}`}
            ref={ref}
            style={{
                ...nodeStyle,
                height: imageStyle.height
            }}
        >
            <img
                src={src}
                alt=''
                style={{
                    width: imageStyle.width,
                    height: imageStyle.height,
                    display: imageStyle.display
                }}
            />
        </div>
    )
}

const MiniFadeIn = () => {
    const [contentWidth, setContentWidth] = useState<number>(300)
    const { width } = useWindowSize()

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
            className='mini_fadein'
            style={{
                width: `${contentWidth}px`,
                height: `${contentWidth}px`,
                backgroundColor: 'hotpink',
                overflowY: 'scroll',
                overflowX: 'hidden'
            }}
            id={CONTAINER}
        >
            <h1 style={{ textAlign: 'center' }}>Scroll Here !</h1>

            <MiniShape>
                <HexagonLeafSmallIcon theme={theme} />
            </MiniShape>

            <MiniFadeInTextArea
                id='MiniFadeInTextArea1'
                text='Fadein'
                textStyle={{
                    fontSize: '50px',
                    padding: '0 10%'
                }}
                container={CONTAINER}
                translate={{ x: 20, y: 0 }}
                duration={0.3}
                adjust={330}
            />

            <MiniFadeInImageArea
                id='MiniFadeInImageArea2'
                src={node}
                imageStyle={{
                    width: '100px',
                    height: '100px',
                    padding: '0 50%',
                    display: 'block'
                }}
                container={CONTAINER}
                translate={{ x: 25, y: 0 }}
                duration={0.4}
                adjust={400}
            />

            <MiniShape>
                <AcUnitSmallIcon theme={theme} />
            </MiniShape>

            <MiniFadeInImageArea
                id='MiniFadeInImageArea3'
                src={ts}
                imageStyle={{
                    width: '100px',
                    height: '100px',
                    padding: '0 60%',
                    display: 'block'
                }}
                container={CONTAINER}
                translate={{ x: 10, y: 0 }}
                duration={0.4}
                adjust={400}
            />

            <MiniFadeInTextArea
                id='MiniFadeInImageArea4'
                text='Free-Animate'
                textStyle={{
                    fontSize: '30px',
                    padding: '0 40%'
                }}
                container={CONTAINER}
                translate={{ x: 20, y: 0 }}
                duration={0.2}
                adjust={380}
            />

            <MiniShape>
                <LightModeMediumIcon theme={theme} />
            </MiniShape>

            <MiniFadeInImageArea
                id='MiniFadeInImageArea5'
                src={js}
                imageStyle={{
                    width: '90px',
                    height: '90px',
                    padding: '0 30%',
                    display: 'block'
                }}
                container={CONTAINER}
                translate={{ x: 30, y: 0 }}
                duration={0.3}
                adjust={380}
            />

            <MiniShape>
                <RectangleSmallIcon theme={theme} />
            </MiniShape>

            <MiniFadeInTextArea
                id='MiniFadeInImageArea6'
                text='hello world'
                textStyle={{
                    fontSize: '20px',
                    padding: '0 10%'
                }}
                container={CONTAINER}
                translate={{ x: 20, y: 0 }}
                duration={0.5}
                adjust={400}
            />

            <MiniShape>
                <AutoAwesomeMediumIcon theme={theme} />
            </MiniShape>

            <MiniShape>
                <LightModeSmallIcon theme={theme} />
            </MiniShape>

            <MiniFadeInTextArea
                id='MiniFadeInImageArea7'
                text='Scroll'
                textStyle={{
                    fontSize: '25px',
                    padding: '0 50%'
                }}
                container={CONTAINER}
                translate={{ x: 20, y: 0 }}
                duration={0.4}
                adjust={380}
            />

            <MiniShape>
                <AcUnitMediumIcon theme={theme} />
            </MiniShape>

            <MiniFadeInImageArea
                id='MiniFadeInImageArea8'
                src={vue}
                imageStyle={{
                    width: '70px',
                    height: '70px',
                    padding: '0 20%',
                    display: 'block'
                }}
                container={CONTAINER}
                translate={{ x: 40, y: 0 }}
                duration={0.3}
                adjust={380}
            />
        </div>
    )
}

export default MiniFadeIn
