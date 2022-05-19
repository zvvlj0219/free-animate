import CloudIcon from '@mui/icons-material/Cloud'

type Props = {
    color: string
    opacity: number
    margin?: string
}

export const Cloud_sm = ({
    color,
    opacity,
    margin = '',
}: Props) => {
    const iconStyle = {
        color,
        opacity
    }

    return (
        <div
            className='cloud_small'
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

export const Cloud_md = ({
    color,
    opacity,
    margin = '',
}: Props) => {
    const iconStyle = {
        color,
        opacity
    }

    return (
        <div
            className='cloud_medium'
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

export const Cloud_lg = ({
    color,
    opacity,
    margin = '',
}: Props) => {
    const iconStyle = {
        color,
        opacity
    }

    return (
        <div
            className='cloud_large'
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
