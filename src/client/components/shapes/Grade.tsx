import GradeIcon from '@mui/icons-material/Grade'

type Props = {
    color: string
    opacity: number
    margin?: string
}

export const Grade_sm = ({
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
            className='grade_small'
            style={{
                margin: `${margin}`
            }}
        >
            <GradeIcon
                sx={{
                    ...iconStyle,
                    fontSize: '30px'
                }}
            />
        </div>
    )
}

export const Grade_md = ({
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
            className='grade_medium'
            style={{
                margin: `${margin}`
            }}
        >
            <GradeIcon
                sx={{
                    ...iconStyle,
                    fontSize: '40px'
                }}
            />
        </div>
    )
}

export const Grade_lg = ({
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
            className='grade_large'
            style={{
                margin: `${margin}`
            }}
        >
            <GradeIcon
                sx={{
                    ...iconStyle,
                    fontSize: '50px'
                }}
            />
        </div>
    )
}
