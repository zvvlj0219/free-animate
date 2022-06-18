import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimationConfigContextProvider } from './module/useAnimateConfig'
import ContentRouter from './ContentRouter'


const App = () => {
    const [isPreviewer, setIsPreviewer] = useState<boolean>(false)

    const { pathname } = useLocation()

    const contentStyle = {
        display: isPreviewer ? 'none' : 'block'
    }

    useEffect(() => {   
        if (pathname === '/previewer') {
            setIsPreviewer(true)
        } else {
            setIsPreviewer(false)
        }
    }, [pathname])

    return (
        <div className='app'>
            <div
                className='header'
                style={contentStyle}
            >
                <h1>this is header</h1>
            </div>
            <div
                className='menu'
                style={contentStyle}
            >
                <Link to='/' style={{ padding: '20px' }}>
                    home
                </Link>
                <Link to='/edit_animate' style={{ padding: '20px' }}>
                    edit animate
                </Link>
            </div>
            <AnimationConfigContextProvider>
                <ContentRouter />
            </AnimationConfigContextProvider>
        </div>
    )
}

export default App
