import GradeIcon from '@mui/icons-material/Grade'
import { Theme } from '../../view/EditAnimate'
import { colorProvider, opacityProvider } from '../FadeInShapes'
import { paddingProvider } from '../../view/EditAnimate'

type Props = {
    theme: Theme
}

export const GradeSmallIcon = ({ theme }: Props) => {
    const iconStyle = {
        color: colorProvider(theme),
        opacity: opacityProvider()
    }

    return (
        <div
            className='grade_small'
            style={{
                margin: `${paddingProvider()}`
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

export const GradeMediumIcon = ({ theme }: Props) => {
    const iconStyle = {
        color: colorProvider(theme),
        opacity: opacityProvider()
    }

    return (
        <div
            className='grade_medium'
            style={{
                margin: `${paddingProvider()}`
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

export const GradeLargeIcon = ({ theme }: Props) => {
    const iconStyle = {
        color: colorProvider(theme),
        opacity: opacityProvider()
    }

    return (
        <div
            className='grade_large'
            style={{
                margin: `${paddingProvider()}`
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
