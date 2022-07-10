import * as React from 'react'
import HexagonIcon from '@mui/icons-material/Hexagon'
import { colorProvider, opacityProvider } from '../FadeInShapes'
import { paddingProvider, Theme } from '../../view/EditAnimate'

type Props = {
    theme: Theme
}

export const HexagonLeafSmallIcon = ({ theme }: Props) => {
    const commonStyle = {
        backgroundColor: 'transparant',
        fontSize: '40px',
        zIndex: 2,
        color: colorProvider(theme),
        opacity: opacityProvider()
    }

    const randamQty: number = Math.floor(Math.random() * 5)

    return (
        <div
            className='hexagonleaf_small'
            style={{
                margin: `${paddingProvider()}`
            }}
        >
            <div className='leaf_wrapper' style={{ display: 'flex' }}>
                <HexagonIcon
                    sx={{
                        ...commonStyle,
                        display: 'block'
                    }}
                />
                <HexagonIcon
                    sx={{
                        ...commonStyle,
                        paddingTop: '15px',
                        marginLeft: '-10px',
                        display: randamQty > 1 ? 'block' : 'none'
                    }}
                />
                <HexagonIcon
                    sx={{
                        ...commonStyle,
                        paddingBottom: '15px',
                        marginLeft: '-10px',
                        display: randamQty > 2 ? 'block' : 'none'
                    }}
                />
                <HexagonIcon
                    sx={{
                        ...commonStyle,
                        paddingTop: '15px',
                        marginLeft: '-10px',
                        display: randamQty > 3 ? 'block' : 'none'
                    }}
                />
            </div>
        </div>
    )
}

export const HexagonLeafMediumIcon = ({ theme }: Props) => {
    const commonStyle = {
        backgroundColor: 'transparant',
        fontSize: '80px',
        zIndex: 2,
        color: colorProvider(theme),
        opacity: opacityProvider()
    }

    const randamQty: number = Math.floor(Math.random() * 5)

    return (
        <div
            className='hexagonleaf_medium'
            style={{
                margin: `${paddingProvider()}`
            }}
        >
            <div className='leaf_wrapper' style={{ display: 'flex' }}>
                <HexagonIcon
                    sx={{
                        ...commonStyle,
                        display: 'block'
                    }}
                />
                <HexagonIcon
                    sx={{
                        ...commonStyle,
                        paddingTop: '30px',
                        marginLeft: '-25px',
                        display: randamQty > 1 ? 'block' : 'none'
                    }}
                />
                <HexagonIcon
                    sx={{
                        ...commonStyle,
                        paddingBottom: '30px',
                        marginLeft: '-25px',
                        display: randamQty > 2 ? 'block' : 'none'
                    }}
                />
                <HexagonIcon
                    sx={{
                        ...commonStyle,
                        paddingTop: '30px',
                        marginLeft: '-25px',
                        display: randamQty > 3 ? 'block' : 'none'
                    }}
                />
            </div>
        </div>
    )
}

export const HexagonLeafLargeIcon = ({ theme }: Props) => {
    const commonStyle = {
        backgroundColor: 'transparant',
        fontSize: '120px',
        zIndex: 2,
        color: colorProvider(theme),
        opacity: opacityProvider()
    }

    const randamQty: number = Math.floor(Math.random() * 5)

    return (
        <div
            className='hexagonleaf_large'
            style={{
                margin: `${paddingProvider()}`
            }}
        >
            <div className='leaf_wrapper' style={{ display: 'flex' }}>
                <HexagonIcon
                    sx={{
                        ...commonStyle,
                        display: 'block'
                    }}
                />
                <HexagonIcon
                    sx={{
                        ...commonStyle,
                        paddingTop: '45px',
                        marginLeft: '-37px',
                        display: randamQty > 1 ? 'block' : 'none'
                    }}
                />
                <HexagonIcon
                    sx={{
                        ...commonStyle,
                        paddingBottom: '45px',
                        marginLeft: '-37px',
                        display: randamQty > 2 ? 'block' : 'none'
                    }}
                />
                <HexagonIcon
                    sx={{
                        ...commonStyle,
                        paddingTop: '45px',
                        marginLeft: '-37px',
                        display: randamQty > 3 ? 'block' : 'none'
                    }}
                />
            </div>
        </div>
    )
}
