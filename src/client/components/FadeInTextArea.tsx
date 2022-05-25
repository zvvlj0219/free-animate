import { useRef, useCallback, useEffect, useState } from 'react'
import useFadeIn, { getScrollDirection } from './useFadeIn'

type Props = {
    id: number
    text: string
    textStyle: {
        fontSize: string
        margin: string
    }
    containerElm: string
    translate: {
        x: number
        y: number
    }
    duration: number
}

const FadeInTextArea = ({
    id,
    text,
    textStyle,
    containerElm,
    translate,
    duration
}: Props) => {
    const ref = useRef<HTMLDivElement>(null)

    const [isDownScroll, changeDirection] = useState<boolean>(true)
    const [prevPosition, reinitPosition] = useState<number>(0)

    const nodeStyle = useFadeIn({
        isDownScroll,
        containerElm,
        ref,
        margin: textStyle.margin,
        translate,
        duration
    })

    const onScroll = useCallback(() => {
        getScrollDirection(prevPosition, changeDirection, reinitPosition)
    }, [prevPosition])

    useEffect(() => {
        document.addEventListener('scroll', onScroll)
        return () => document.removeEventListener('scroll', onScroll)
    }, [onScroll])

    return (
        <div
            className="fadein_textarea"
            id={`textarea_id_${id}`}
            ref={ref}
            style={nodeStyle}
        >
            <h2 style={{ fontSize: textStyle.fontSize }}>{text}</h2>
        </div>
    )
}

export default FadeInTextArea
