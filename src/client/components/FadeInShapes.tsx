import { useRef, useMemo, useCallback, useEffect, useState } from 'react'
import useFadeIn, { getScrollDirection } from './useFadeIn'
import { sampleColor, Theme } from '../view/EditAnimate'
import {
    AutoAwesomeSmallIcon,
    AutoAwesomeMediumIcon,
    AutoAwesomeLargeIcon
} from './shapes/AutoAwesome'
import {
    HexagonLeafSmallIcon,
    HexagonLeafMediumIcon,
    HexagonLeafLargeIcon
} from './shapes/HexagonLeaf'
import {
    AcUnitSmallIcon,
    AcUnitMediumIcon,
    AcUnitLargeIcon
} from './shapes/AcUnit'
import { CloudSmallIcon, CloudMediumIcon, CloudLargeIcon } from './shapes/Cloud'
import { GradeSmallIcon, GradeMediumIcon, GradeLargeIcon } from './shapes/Grade'
import {
    LightModeSmallIcon,
    LightModeMediumIcon,
    LightModeLargeIcon
} from './shapes/LightMode'
import {
    RectangleSmallIcon,
    RectangleMediumIcon,
    RectangleLargeIcon
} from './shapes/Rectangle'
import {
    SquareSmallIcon,
    SquareMediumIcon,
    SquareLargeIcon
} from './shapes/Square'

type Shape = {
    theme: Theme
    component: JSX.Element
}

type Props = {
    containerElm: string
    theme: 'stylish' | 'pop' | 'sick'
}

const generateShapeArr = (): Shape[] => [
    {
        theme: 'stylish',
        component: <AutoAwesomeSmallIcon theme="stylish" />
    },
    {
        theme: 'stylish',
        component: <AutoAwesomeMediumIcon theme="stylish" />
    },
    {
        theme: 'stylish',
        component: <AutoAwesomeLargeIcon theme="stylish" />
    },
    {
        theme: 'stylish',
        component: <HexagonLeafSmallIcon theme="stylish" />
    },
    {
        theme: 'stylish',
        component: <HexagonLeafMediumIcon theme="stylish" />
    },
    {
        theme: 'stylish',
        component: <HexagonLeafLargeIcon theme="stylish" />
    },
    {
        theme: 'stylish',
        component: <AcUnitSmallIcon theme="stylish" />
    },
    {
        theme: 'stylish',
        component: <AcUnitMediumIcon theme="stylish" />
    },
    {
        theme: 'stylish',
        component: <AcUnitLargeIcon theme="stylish" />
    },
    {
        theme: 'pop',
        component: <CloudSmallIcon theme="pop" />
    },
    {
        theme: 'pop',
        component: <CloudMediumIcon theme="pop" />
    },
    {
        theme: 'pop',
        component: <CloudLargeIcon theme="pop" />
    },
    {
        theme: 'pop',
        component: <GradeSmallIcon theme="pop" />
    },
    {
        theme: 'pop',
        component: <GradeMediumIcon theme="pop" />
    },
    {
        theme: 'pop',
        component: <GradeLargeIcon theme="pop" />
    },
    {
        theme: 'pop',
        component: <LightModeSmallIcon theme="pop" />
    },
    {
        theme: 'pop',
        component: <LightModeMediumIcon theme="pop" />
    },
    {
        theme: 'pop',
        component: <LightModeLargeIcon theme="pop" />
    },
    {
        theme: 'sick',
        component: <RectangleSmallIcon theme="sick" />
    },
    {
        theme: 'sick',
        component: <RectangleMediumIcon theme="sick" />
    },
    {
        theme: 'sick',
        component: <RectangleLargeIcon theme="sick" />
    },
    {
        theme: 'sick',
        component: <SquareSmallIcon theme="sick" />
    },
    {
        theme: 'sick',
        component: <SquareMediumIcon theme="sick" />
    },
    {
        theme: 'sick',
        component: <SquareLargeIcon theme="sick" />
    }
]

const randomShape = (theme: Theme): JSX.Element => {
    const allShapes = generateShapeArr()

    const arr = allShapes.filter((data) => theme === data.theme)

    const index = Math.floor(Math.random() * arr.length)

    return arr[index].component
}

export const colorProvider = (theme: Theme): string => {
    if (!theme) return

    const themeObj = sampleColor.filter((palette) => theme === palette.theme)

    const colorArr = themeObj[0].color

    const index = Math.floor(Math.random() * colorArr.length)

    const randomColor = colorArr[index]

    return randomColor
}

export const marginProvider = (): string => {
    const min = 2
    const max = 9
    const percent =
        (Math.floor(Math.random() * (max + 1 - min)) + min) *
        (Math.floor(Math.random() * (max + 1 - min)) + min)
    return `0 ${percent}%`
}

export const opacityProvider = (): number => Math.random()

const FadeInShapes = ({ containerElm, theme }: Props) => {
    const ref = useRef<HTMLDivElement>(null)
    const [isDownScroll, changeDirection] = useState<boolean>(true)
    const [prevPosition, reinitPosition] = useState<number>(0)

    const nodeStyle = useFadeIn({
        isDownScroll,
        containerElm,
        ref,
        padding: '',
        translate: { x: 0, y: 25 },
        duration: 0.5,
        adjust: 150
    })

    const shape = useMemo(() => randomShape(theme), [theme])

    const onScroll = useCallback(() => {
        getScrollDirection(prevPosition, changeDirection, reinitPosition)
    }, [prevPosition])

    useEffect(() => {
        document.addEventListener('scroll', onScroll)
        return () => document.removeEventListener('scroll', onScroll)
    }, [onScroll])

    return (
        <div className="fadeinshapes" ref={ref} style={nodeStyle}>
            {shape}
        </div>
    )
}
export default FadeInShapes
