import { useRef, useCallback, useEffect, useState } from 'react'
import useFadeIn, { getScrollDirection } from './useFadeIn'

type Props = {
    id: number
    src: string
    imageStyle: {
        width: string
        height: string
        margin: string
        display: string
    }
    containerElm: string
    translate: {
        x: number
        y: number
    }
    duration: number
}

const FadeInImageArea = ({
    id,
    src,
    imageStyle,
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
        margin: imageStyle.margin,
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
            className="fadein_imagearea"
            id={`imagearea_id_${id}`}
            ref={ref}
            style={nodeStyle}
        >
            <img src={src} alt="" style={imageStyle} />
        </div>
    )
}

export default FadeInImageArea
