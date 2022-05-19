type Props = {
    color: string
    opacity: number
    margin?: string
}

export const Square_sm = ({
    color,
    opacity,
    margin = '',
}: Props) => {
    const iconStyle = {
        backgroundColor: color,
        opacity
    }

    return (
        <div
            className='square_small'
            style={{
                margin: `${margin}`
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

export const Square_md = ({
    color,
    opacity,
    margin = '',
}: Props) => {
    const iconStyle = {
        backgroundColor: color,
        opacity
    }

    return (
        <div
            className='square_medium'
            style={{
                margin: `${margin}`
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

export const Square_lg = ({
    color,
    opacity,
    margin = '',
}: Props) => {
    const iconStyle = {
        backgroundColor: color,
        opacity
    }

    return (
        <div
            className='square_large'
            style={{
                margin: `${margin}`
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