import LightModeIcon from '@mui/icons-material/LightMode'
import { Theme } from '../../view/EditAnimate'
import { colorProvider, opacityProvider, marginProvider } from '../FadeInShapes'

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
            className="lightmode_small"
            style={{
                margin: `${marginProvider()}`
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
            className="lightmode_medium"
            style={{
                margin: `${marginProvider()}`
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
            className="lightmode_large"
            style={{
                margin: `${marginProvider()}`
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
