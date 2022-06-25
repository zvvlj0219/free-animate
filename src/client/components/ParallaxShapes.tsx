import { useMemo } from 'react'
import { ParallaxLayer } from '@react-spring/parallax'
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
import { PAGES, createOffset, createSpeed } from './ParallaxContainer'

type Shape = {
    theme: Theme
    component: JSX.Element
}

type Props = {
    theme: 'stylish' | 'pop' | 'sick'
}

const generateShapeArr = (): Shape[] => [
    {
        theme: 'stylish',
        component: <AutoAwesomeSmallIcon theme='stylish' />
    },
    {
        theme: 'stylish',
        component: <AutoAwesomeMediumIcon theme='stylish' />
    },
    {
        theme: 'stylish',
        component: <AutoAwesomeLargeIcon theme='stylish' />
    },
    {
        theme: 'stylish',
        component: <HexagonLeafSmallIcon theme='stylish' />
    },
    {
        theme: 'stylish',
        component: <HexagonLeafMediumIcon theme='stylish' />
    },
    {
        theme: 'stylish',
        component: <HexagonLeafLargeIcon theme='stylish' />
    },
    {
        theme: 'stylish',
        component: <AcUnitSmallIcon theme='stylish' />
    },
    {
        theme: 'stylish',
        component: <AcUnitMediumIcon theme='stylish' />
    },
    {
        theme: 'stylish',
        component: <AcUnitLargeIcon theme='stylish' />
    },
    {
        theme: 'pop',
        component: <CloudSmallIcon theme='pop' />
    },
    {
        theme: 'pop',
        component: <CloudMediumIcon theme='pop' />
    },
    {
        theme: 'pop',
        component: <CloudLargeIcon theme='pop' />
    },
    {
        theme: 'pop',
        component: <GradeSmallIcon theme='pop' />
    },
    {
        theme: 'pop',
        component: <GradeMediumIcon theme='pop' />
    },
    {
        theme: 'pop',
        component: <GradeLargeIcon theme='pop' />
    },
    {
        theme: 'pop',
        component: <LightModeSmallIcon theme='pop' />
    },
    {
        theme: 'pop',
        component: <LightModeMediumIcon theme='pop' />
    },
    {
        theme: 'pop',
        component: <LightModeLargeIcon theme='pop' />
    },
    {
        theme: 'sick',
        component: <RectangleSmallIcon theme='sick' />
    },
    {
        theme: 'sick',
        component: <RectangleMediumIcon theme='sick' />
    },
    {
        theme: 'sick',
        component: <RectangleLargeIcon theme='sick' />
    },
    {
        theme: 'sick',
        component: <SquareSmallIcon theme='sick' />
    },
    {
        theme: 'sick',
        component: <SquareMediumIcon theme='sick' />
    },
    {
        theme: 'sick',
        component: <SquareLargeIcon theme='sick' />
    }
]

const randomShape = (theme: Theme): JSX.Element => {
    const allShapes = generateShapeArr()

    const arr = allShapes.filter((data) => theme === data.theme)

    const index = Math.floor(Math.random() * arr.length)

    return arr[index].component
}

export const colorProvider = (theme: Theme): string => {
    if (!theme) return 'lightgray'

    const themeObj = sampleColor.filter((palette) => theme === palette.theme)

    const colorArr = themeObj[0].color

    const index = Math.floor(Math.random() * colorArr.length)

    const randomColor = colorArr[index]

    return randomColor
}

export const opacityProvider = (): number => Math.random()

const ParallaxShapes = ({ theme }: Props) => {
    const shape = useMemo(() => randomShape(theme), [theme])

    return (
        <ParallaxLayer
            className='parallaxshapes'
            offset={createOffset(PAGES)}
            speed={createSpeed(true)}
        >
            {shape}
        </ParallaxLayer>
    )
}

export default ParallaxShapes
