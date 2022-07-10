import * as React from 'react'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import { colorProvider, opacityProvider } from '../FadeInShapes'
import { paddingProvider, Theme } from '../../view/EditAnimate'

type Props = {
    theme: Theme
}

export const AutoAwesomeSmallIcon = ({ theme }: Props) => {
    const iconStyle = {
        color: colorProvider(theme),
        opacity: opacityProvider()
    }

    return (
        <div
            className='autoawesome_small'
            style={{
                margin: `${paddingProvider()}`
            }}
        >
            <AutoAwesomeIcon
                sx={{
                    ...iconStyle,
                    fontSize: '30px'
                }}
            />
        </div>
    )
}

export const AutoAwesomeMediumIcon = ({ theme }: Props) => {
    const iconStyle = {
        color: colorProvider(theme),
        opacity: opacityProvider()
    }

    return (
        <div
            className='autoawesome_medium'
            style={{
                margin: `${paddingProvider()}`
            }}
        >
            <AutoAwesomeIcon
                sx={{
                    ...iconStyle,
                    fontSize: '40px'
                }}
            />
        </div>
    )
}

export const AutoAwesomeLargeIcon = ({ theme }: Props) => {
    const iconStyle = {
        color: colorProvider(theme),
        opacity: opacityProvider()
    }

    return (
        <div
            className='autoawesome_large'
            style={{
                margin: `${paddingProvider()}`
            }}
        >
            <AutoAwesomeIcon
                sx={{
                    ...iconStyle,
                    fontSize: '50px'
                }}
            />
        </div>
    )
}
