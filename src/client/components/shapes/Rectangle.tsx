import * as React from 'react'
import { colorProvider, opacityProvider } from '../FadeInShapes'
import { paddingProvider, Theme } from '../../view/EditAnimate'

type Props = {
    theme: Theme
}

export const RectangleSmallIcon = ({ theme }: Props) => {
    const iconStyle = {
        backgroundColor: colorProvider(theme),
        opacity: opacityProvider()
    }

    return (
        <div
            className='rectangle_small'
            style={{
                margin: `${paddingProvider()}`
            }}
        >
            <div
                style={{
                    ...iconStyle,
                    width: '100px',
                    height: '50px'
                }}
            />
        </div>
    )
}

export const RectangleMediumIcon = ({ theme }: Props) => {
    const iconStyle = {
        backgroundColor: colorProvider(theme),
        opacity: opacityProvider()
    }

    return (
        <div
            className='rectangle_medium'
            style={{
                margin: `${paddingProvider()}`
            }}
        >
            <div
                style={{
                    ...iconStyle,
                    width: '150px',
                    height: '75px'
                }}
            />
        </div>
    )
}

export const RectangleLargeIcon = ({ theme }: Props) => {
    const iconStyle = {
        backgroundColor: colorProvider(theme),
        opacity: opacityProvider()
    }

    return (
        <div
            className='rectangle_large'
            style={{
                margin: `${paddingProvider()}`
            }}
        >
            <div
                style={{
                    ...iconStyle,
                    width: '200px',
                    height: '100px'
                }}
            />
        </div>
    )
}
