import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'

type Props = {
    color: string
    opacity: number
    margin: string
}

export const AutoAwesomeSmallIcon = ({
    color,
    opacity,
    margin = ''
}: Props) => {
    const iconStyle = {
        color,
        opacity
    }

    return (
        <div
            className="autoawesome_small"
            style={{
                margin: `${margin}`
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

export const AutoAwesomeMediumIcon = ({
    color,
    opacity,
    margin = ''
}: Props) => {
    const iconStyle = {
        color,
        opacity
    }

    return (
        <div
            className="autoawesome_medium"
            style={{
                margin: `${margin}`
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

export const AutoAwesomeLargeIcon = ({
    color,
    opacity,
    margin = ''
}: Props) => {
    const iconStyle = {
        color,
        opacity
    }

    return (
        <div
            className="autoawesome_large"
            style={{
                margin: `${margin}`
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
