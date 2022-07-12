import * as React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from './error/ErrorBoundary'
import { ErrorContextProvider } from './error/useError'
import App from './App'
import './scss/index.scss'

ReactDom.render(
    <ErrorContextProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </BrowserRouter>
    </ErrorContextProvider>,
    document.getElementById('root')
)
