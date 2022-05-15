import * as React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from './error/ErrorBoundary'
import ErrorProvider from './error/ErrorProvider'
import App from './App'
import './scss/index.scss'

ReactDom.render(
    <ErrorProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </BrowserRouter>
    </ErrorProvider>,
    document.getElementById('root')
)
