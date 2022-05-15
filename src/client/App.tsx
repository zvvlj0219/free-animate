import { Routes, Route, Link } from 'react-router-dom'
import Home from './view/Home'
import EditAnimate from './view/EditAnimate'
import  Previewer from './view/Previewer'

const App = () => (
    <div className="app">
        <h1>this is app</h1>
        <div>
            <Link to='/' style={{ padding: '20px' }}>
                home
            </Link>
            <Link to='/edit_animate' style={{ padding: '20px' }}>
                edit animate
            </Link>
            <Link to='/previewer' style={{ padding: '20px' }}>
                previewer
            </Link>
        </div>
        <hr />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/edit_animate' element={<EditAnimate />} />
            <Route path='/previewer' element={<Previewer />} />
        </Routes>
    </div>
)

export default App
