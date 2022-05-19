import AcUnitIcon from '@mui/icons-material/AcUnit'

type Props = {
    color: string
    opacity: number
    margin?: string
}

export const AcUnit_sm = ({
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
            className='acunit_small'
            style={{
                margin: `${margin}`
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

export const AcUnit_md = ({
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
            className='acunit_medium'
            style={{
                margin: `${margin}`
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
export const AcUnit_lg = ({
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
            className='acunit_large'
            style={{
                margin: `${margin}`
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