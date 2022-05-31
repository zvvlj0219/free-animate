import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import { Theme } from '../../view/EditAnimate'
import { colorProvider, opacityProvider, marginProvider } from '../FadeInShapes'

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
            className="autoawesome_small"
            style={{
                margin: `${marginProvider()}`
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
            className="autoawesome_medium"
            style={{
                margin: `${marginProvider()}`
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
            className="autoawesome_large"
            style={{
                margin: `${marginProvider()}`
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
