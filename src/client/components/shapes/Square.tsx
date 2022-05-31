import { Theme } from '../../view/EditAnimate'
import { colorProvider, opacityProvider, marginProvider } from '../FadeInShapes'

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
            className="square_small"
            style={{
                margin: `${marginProvider()}`
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
            className="square_medium"
            style={{
                margin: `${marginProvider()}`
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
            className="square_large"
            style={{
                margin: `${marginProvider()}`
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
