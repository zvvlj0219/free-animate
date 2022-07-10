import * as React from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import { colorProvider, opacityProvider } from '../FadeInShapes'
import { paddingProvider, Theme } from '../../view/EditAnimate'

type Props = {
    theme: Theme
}

export const AcUnitSmallIcon = ({ theme }: Props) => {
    const iconStyle = {
        color: colorProvider(theme),
        opacity: opacityProvider()
    }

    return (
        <div
            className='acunit_small'
            style={{
                margin: `${paddingProvider()}`
            }}
        >
            <AcUnitIcon
                sx={{
                    ...iconStyle,
                    fontSize: '30px'
                }}
            />
        </div>
    )
}

export const AcUnitMediumIcon = ({ theme }: Props) => {
    const iconStyle = {
        color: colorProvider(theme),
        opacity: opacityProvider()
    }

    return (
        <div
            className='acunit_medium'
            style={{
                margin: `${paddingProvider()}`
            }}
        >
            <AcUnitIcon
                sx={{
                    ...iconStyle,
                    fontSize: '40px'
                }}
            />
        </div>
    )
}
export const AcUnitLargeIcon = ({ theme }: Props) => {
    const iconStyle = {
        color: colorProvider(theme),
        opacity: opacityProvider()
    }

    return (
        <div
            className='acunit_large'
            style={{
                margin: `${paddingProvider()}`
            }}
        >
            <AcUnitIcon
                sx={{
                    ...iconStyle,
                    fontSize: '50px'
                }}
            />
        </div>
    )
}
