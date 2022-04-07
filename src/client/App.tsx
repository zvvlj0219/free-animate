import { useCallback, useEffect, useState } from 'react'

// sample
import axios from 'axios'
const sample = async () => {
  const { data } = await axios.get('/api')
  console.log(data.result)
}

const App: React.VFC = () => {
  useEffect(() => { sample()},[])
  return (
    <div className='app'>
      <h1>hello world</h1>
    </div>
  )
}

export default App
