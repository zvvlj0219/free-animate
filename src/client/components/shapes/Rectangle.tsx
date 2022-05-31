import { Theme } from '../../view/EditAnimate'
import { colorProvider, opacityProvider, marginProvider } from '../FadeInShapes'

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
            className="rectangle_small"
            style={{
                margin: `${marginProvider()}`
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
            className="rectangle_medium"
            style={{
                margin: `${marginProvider()}`
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
            className="rectangle_large"
            style={{
                margin: `${marginProvider()}`
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
