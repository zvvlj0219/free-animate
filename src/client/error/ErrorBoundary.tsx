import React, { Component, ReactNode } from 'react'

type Props = {
    children: ReactNode
}

type State = {
    hasError: boolean
    error: Error | null
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            hasError: false,
            error: null
        }
    }

    static getDerivedStateFromError(_error: Error): State {
        // Update state so the next render will show the fallback UI.
        return {
            hasError: true,
            error: _error
        }
    }

    componentDidCatch(_error: Error): State {
        this.setState({
            hasError: true,
            error: _error
        })

        return {
            hasError: true,
            error: _error
        }
    }

    render() {
        const { hasError, error } = this.state
        const { children } = this.props

        if (hasError && process.env.NODE_ENV === 'production') {
            window.location.reload()
        }

        if (
            hasError &&
            process.env.NODE_ENV === ('development' || undefined) &&
            error
        ) {
            return (
                <div>
                    <h1>!!Error!! Something went wrong. by ErrorBoundary</h1>
                    <h3>{error.name}</h3>
                    <h3>{error.message}</h3>
                </div>
            )
        }

        return children
    }
}

export default ErrorBoundary
