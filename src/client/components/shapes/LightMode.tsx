import LightModeIcon from '@mui/icons-material/LightMode'

type Props = {
    color: string
    opacity: number
    margin?: string
}

export const LightMode_sm = ({
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
            className='lightmode_small'
            style={{
                margin: `${margin}`
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

export const LightMode_md = ({
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
            className='lightmode_medium'
            style={{
                margin: `${margin}`
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

export const LightMode_lg = ({
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
            className='lightmode_large'
            style={{
                margin: `${margin}`
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
