import * as React from 'react'
import { colorProvider, opacityProvider } from '../FadeInShapes'
import { paddingProvider, Theme } from '../../view/EditAnimate'

type Props = {
    theme: Theme
}

export const SquareSmallIcon = ({ theme }: Props) => {
    const iconStyle = {
        backgroundColor: colorProvider(theme),
        opacity: opacityProvider()
    }

    return (
        <div
            className='square_small'
            style={{
                margin: `${paddingProvider()}`
            }}
        >
            <div
                style={{
                    ...iconStyle,
                    width: '80px',
                    height: '80px'
                }}
            />
        </div>
    )
}

export const SquareMediumIcon = ({ theme }: Props) => {
    const iconStyle = {
        backgroundColor: colorProvider(theme),
        opacity: opacityProvider()
    }

    return (
        <div
            className='square_medium'
            style={{
                margin: `${paddingProvider()}`
            }}
        >
            <div
                style={{
                    ...iconStyle,
                    width: '100px',
                    height: '100px'
                }}
            />
        </div>
    )
}

export const SquareLargeIcon = ({ theme }: Props) => {
    const iconStyle = {
        backgroundColor: colorProvider(theme),
        opacity: opacityProvider()
    }

    return (
        <div
            className='square_large'
            style={{
                margin: `${paddingProvider()}`
            }}
        >
            <div
                style={{
                    ...iconStyle,
                    width: '120px',
                    height: '120px'
                }}
            />
        </div>
    )
}
