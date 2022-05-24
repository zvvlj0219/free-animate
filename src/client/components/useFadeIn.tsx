import { useState, useMemo, useEffect } from 'react'

type State = {
    transform: string
    opacity: number
}

type Config = {
    isDownScroll: boolean
    containerElm: string
    ref: React.RefObject<HTMLDivElement>
    translate: { x: number; y: number }
    duration?: number
    adjust?: number
}

export const scrollTop = () =>
    Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop
    )

const useFadeIn = ({
    isDownScroll,
    containerElm,
    ref,
    translate,
    duration = 0.1,
    adjust = 0
}: Config) => {
    const [cssState, updateStyle] = useState<State>({
        transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,
        opacity: 0
    })

    const nodeStyle = useMemo(
        () => ({
            width: '100%',
            transition: `all ${duration}s ease`,
            opacity: cssState.opacity,
            transform: cssState.transform
        }),
        [cssState.opacity, cssState.transform, duration]
    )

    useEffect(() => {
        const container = document.getElementById(containerElm)
        if (!ref.current || !container) return

        const { offsetTop } = ref.current
        const windowHeight = window.innerHeight

        const handleScroll = () => {
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
        }

        document.addEventListener('scroll', handleScroll)

        return () => document.removeEventListener('scroll', handleScroll)
    })

    return nodeStyle
}

export default useFadeIn
