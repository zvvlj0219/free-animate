type Props = {
    color: string
    opacity: number
    margin?: string
}

export const Rectangle_sm = ({
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
            className='rectangle_small'
            style={{
                margin: `${margin}`
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

export const Rectangle_md = ({
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
            className='rectangle_medium'
            style={{
                margin: `${margin}`
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

export const Rectangle_lg = ({
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
            className='rectangle_large'
            style={{
                margin: `${margin}`
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