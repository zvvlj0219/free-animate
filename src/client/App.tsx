import { useCallback, useEffect, useState } from 'react'

// sample
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

const sample = async () => {
  type Data = {
    result: string
  }
  const response:AxiosResponse<Data> = await axios.get('/api')
  console.log(response)
  const { data } = response
  console.log(data.result)
}

sample()

const App: React.VFC = () => (
    <div className='app'>
      <h1>hello world</h1>
    </div>
  )

export default App
