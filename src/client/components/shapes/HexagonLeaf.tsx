import HexagonIcon from '@mui/icons-material/Hexagon'

type Props = {
    color: string
    opacity: number
    justifyContent?: string
    margin?: string
    qty?: number
}

export const HexagonLeaf_sm = ({
    color,
    opacity,
    justifyContent,
    margin,
    qty = 1
}: Props) => {
    const commonStyle = {
        backgroundColor: 'transparant',
        fontSize: '40px',
        zIndex:2,
        color,
        opacity
    }

    return (
        <div
            className='hexagonleaf_small'
            style={{
                display: 'flex',
                justifyContent: `${justifyContent}`,
                margin: `${margin}`
            }}
        >
            <HexagonIcon
                sx={{
                    ...commonStyle,
                    display: 'block'
                }}
            />
            <HexagonIcon 
                sx={{
                    ...commonStyle,
                    paddingTop:'15px',
                    marginLeft: '-10px',
                    display: qty > 1 ? 'block' : 'none'
                }}
            />
            <HexagonIcon
                sx={{
                    ...commonStyle,
                    paddingBottom:'15px',
                    marginLeft: '-10px',
                    display: qty > 2 ? 'block' : 'none'
                }}
            />
            <HexagonIcon 
                sx={{
                    ...commonStyle,
                    paddingTop:'15px',
                    marginLeft: '-10px',
                    display: qty > 3 ? 'block' : 'none'
                }}
            />
        </div>
    )
}

export const HexagonLeaf_md = ({
    color,
    opacity,
    justifyContent,
    margin,
    qty = 1
}: Props) => {
    const commonStyle = {
        backgroundColor: 'transparant',
        fontSize: '80px',
        zIndex:2,
        color,
        opacity
    }

    return (
        <div
            className='hexagonleaf_medium'
            style={{
                display: 'flex',
                justifyContent: `${justifyContent}`,
                margin: `${margin}`
            }}
        >
            <HexagonIcon
                sx={{
                    ...commonStyle,
                    display: 'block'
                }}
            />
            <HexagonIcon 
                sx={{
                    ...commonStyle,
                    paddingTop:'30px',
                    marginLeft: '-25px',
                    display: qty > 1 ? 'block' : 'none'
                }}
             />
            <HexagonIcon
                sx={{
                    ...commonStyle,
                    paddingBottom:'30px',
                    marginLeft: '-25px',
                    display: qty > 2 ? 'block' : 'none'
                }}
            />
            <HexagonIcon 
                sx={{
                    ...commonStyle,
                    paddingTop:'30px',
                    marginLeft: '-25px',
                    display: qty > 3 ? 'block' : 'none'
                }}
             />
        </div>
    )
}

export const HexagonLeaf_lg = ({
    color,
    opacity,
    justifyContent,
    margin,
    qty = 1
}: Props) => {
    const commonStyle = {
        backgroundColor: 'transparant',
        fontSize: '120px',
        zIndex:2,
        color,
        opacity
    }

    return (
        <div
            className='hexagonleaf_large'
            style={{
                display: 'flex',
                justifyContent: `${justifyContent}`,
                margin: `${margin}`
            }}
        >
            <HexagonIcon
                sx={{
                    ...commonStyle,
                    display: 'block'
                }}
            />
            <HexagonIcon 
                sx={{
                    ...commonStyle,
                    paddingTop:'45px',
                    marginLeft: '-37px',
                    display: qty > 1 ? 'block' : 'none'
                }}
             />
            <HexagonIcon
                sx={{
                    ...commonStyle,
                    paddingBottom:'45px',
                    marginLeft: '-37px',
                    display: qty > 2 ? 'block' : 'none'
                }}
            />
            <HexagonIcon 
                sx={{
                    ...commonStyle,
                    paddingTop:'45px',
                    marginLeft: '-37px',
                    display: qty > 3 ? 'block' : 'none'
                }}
             />
        </div>
    )
}
