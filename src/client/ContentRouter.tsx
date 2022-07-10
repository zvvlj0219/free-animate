import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './view/Home'
import EditAnimate from './view/EditAnimate'
import Previewer from './view/Previewer'

const ContentRouter = () => (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/edit_animate' element={<EditAnimate />} />
        <Route path='/previewer' element={<Previewer />} />
    </Routes>
)

export default ContentRouter
