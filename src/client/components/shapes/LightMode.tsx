import LightModeIcon from '@mui/icons-material/LightMode'
import { Theme } from '../../view/EditAnimate'
import { colorProvider, opacityProvider } from '../FadeInShapes'
import { paddingProvider } from '../../view/EditAnimate'

type Props = {
    theme: Theme
}

export const LightModeSmallIcon = ({ theme }: Props) => {
    const iconStyle = {
        color: colorProvider(theme),
        opacity: opacityProvider()
    }

    return (
        <div
            className='lightmode_small'
            style={{
                margin: `${paddingProvider()}`
            }}
        >
            <LightModeIcon
                sx={{
                    ...iconStyle,
                    fontSize: '90px'
                }}
            />
        </div>
    )
}

export const LightModeMediumIcon = ({ theme }: Props) => {
    const iconStyle = {
        color: colorProvider(theme),
        opacity: opacityProvider()
    }

    return (
        <div
            className='lightmode_medium'
            style={{
                margin: `${paddingProvider()}`
            }}
        >
            <LightModeIcon
                sx={{
                    ...iconStyle,
                    fontSize: '100px'
                }}
            />
        </div>
    )
}

export const LightModeLargeIcon = ({ theme }: Props) => {
    const iconStyle = {
        color: colorProvider(theme),
        opacity: opacityProvider()
    }

    return (
        <div
            className='lightmode_large'
            style={{
                margin: `${paddingProvider()}`
            }}
        >
            <LightModeIcon
                sx={{
                    ...iconStyle,
                    fontSize: '110px'
                }}
            />
        </div>
    )
}
