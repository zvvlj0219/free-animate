import * as React from 'react'
import CloudIcon from '@mui/icons-material/Cloud'
import { colorProvider, opacityProvider } from '../FadeInShapes'
import { paddingProvider, Theme } from '../../view/EditAnimate'

type Props = {
    theme: Theme
}

export const CloudSmallIcon = ({ theme }: Props) => {
    const iconStyle = {
        color: colorProvider(theme),
        opacity: opacityProvider()
    }

    return (
        <div
            className='cloud_small'
            style={{
                margin: `${paddingProvider()}`
            }}
        >
            <CloudIcon
                sx={{
                    ...iconStyle,
                    fontSize: '70px'
                }}
            />
        </div>
    )
}

export const CloudMediumIcon = ({ theme }: Props) => {
    const iconStyle = {
        color: colorProvider(theme),
        opacity: opacityProvider()
    }

    return (
        <div
            className='cloud_medium'
            style={{
                margin: `${paddingProvider()}`
            }}
        >
            <CloudIcon
                sx={{
                    ...iconStyle,
                    fontSize: '80px'
                }}
            />
        </div>
    )
}

export const CloudLargeIcon = ({ theme }: Props) => {
    const iconStyle = {
        color: colorProvider(theme),
        opacity: opacityProvider()
    }

    return (
        <div
            className='cloud_large'
            style={{
                margin: `${paddingProvider()}`
            }}
        >
            <CloudIcon
                sx={{
                    ...iconStyle,
                    fontSize: '90px'
                }}
            />
        </div>
    )
}
