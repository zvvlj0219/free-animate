import { useState, useMemo, useEffect } from 'react'

type State = {
    transform: string
    opacity: number
}

export type NodeStyle = {
    width: string
    margin: string
    transition: string
    opacity: number
    transform: string
}

export type Config = {
    isDownScroll: boolean
    containerElm: string
    ref: React.RefObject<HTMLDivElement>
    translate: { x: number; y: number }
    margin?: string
    duration?: number
    adjust?: number
}

export const scrollTop = () =>
    Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop
    )

export const getScrollDirection = (
    prevPosition: number,
    changeDirection: (value: React.SetStateAction<boolean>) => void,
    reinitPosition: (value: React.SetStateAction<number>) => void
) => {
    const currentPosition = scrollTop()
    if (currentPosition > prevPosition) {
        changeDirection(true)
    } else {
        changeDirection(false)
    }
    reinitPosition(currentPosition)
}

const useFadeIn = ({
    isDownScroll,
    containerElm,
    ref,
    translate,
    margin = '',
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
            margin: `${margin}`,
            transition: `all ${duration}s ease`,
            opacity: cssState.opacity,
            transform: cssState.transform
        }),
        [cssState.opacity, cssState.transform, margin, duration]
    )

    useEffect(() => {
        const container = document.getElementById(containerElm)
        if (!ref.current || !container) {
            console.log('no ref or container')
            return
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
            if (!isDownScroll && offsetTop > scrollTop() + windowHeight * 0.5) {
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

        document.addEventListener('scroll', handleScroll)

        return () => document.removeEventListener('scroll', handleScroll)
    })

    return nodeStyle
}

export default useFadeIn
