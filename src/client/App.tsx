import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimationConfigContextProvider } from './module/useAnimateConfig'
import ContentRouter from './ContentRouter'

const App = () => {
    const [isPreviewer, setIsPreviewer] = useState<boolean>(false)

    const { pathname } = useLocation()

    const contentStyle = {
        display: isPreviewer ? 'none' : ''
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
                <h3>Free Animate</h3>
                <div className='menu'>
                    <Link to='/' className='link'>Home</Link>
                    <Link to='/edit_animate' className='link'>Edit Animate</Link>
                </div>
            </div>
            <AnimationConfigContextProvider>
                <ContentRouter />
            </AnimationConfigContextProvider>
        </div>
    )
}

export default App
