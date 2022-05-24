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

    static getDerivedStateFromError(error: Error): State {
        // Update state so the next render will show the fallback UI.
        return {
            hasError: true,
            error
        }
    }

    componentDidCatch(error: Error): State {
        this.setState({
            hasError: true,
            error
        })

        return {
            hasError: true,
            error
        }
    }

    render() {
        const { hasError, error } = this.state
        const { children } = this.props

        if (hasError && process.env.NODE_ENV === 'production') {
            window.location.reload()
        }

        if (hasError && process.env.NODE_ENV === ('development' || undefined)) {
            return (
                <div>
                    <h1>!!Error!! Something went wrong. This is fallback UI</h1>
                    <h3>{error.name}</h3>
                    <h3>{error.message}</h3>
                </div>
            )
        }

        return children
    }
}

export default ErrorBoundary
