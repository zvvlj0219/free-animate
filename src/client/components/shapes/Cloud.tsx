import CloudIcon from '@mui/icons-material/Cloud'

type Props = {
    color: string
    opacity: number
    margin: string
}

export const CloudSmallIcon = ({ color, opacity, margin = '' }: Props) => {
    const iconStyle = {
        color,
        opacity
    }

    return (
        <div
            className="cloud_small"
            style={{
                margin: `${margin}`
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

export const CloudMediumIcon = ({ color, opacity, margin = '' }: Props) => {
    const iconStyle = {
        color,
        opacity
    }

    return (
        <div
            className="cloud_medium"
            style={{
                margin: `${margin}`
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

export const CloudLargeIcon = ({ color, opacity, margin = '' }: Props) => {
    const iconStyle = {
        color,
        opacity
    }

    return (
        <div
            className="cloud_large"
            style={{
                margin: `${margin}`
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
