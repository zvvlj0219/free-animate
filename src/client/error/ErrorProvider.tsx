import { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import { ErrorContext, errorContext } from './ErrorContext'

const ErrorProvider: React.FC = ({ children }) => {
    const [hasError, setHasError] = useState<boolean>(false)
    const [error, setError] = useState<Error | null>(null)

    const setHasErrorTrue = (_error?: Error) => {
        setError(_error)
        setHasError(true)
    }

    const setHasErrorFalse = () => {
        setError(null)
        setHasError(false)
    }

    const errorValue = useMemo<errorContext>(
        () => ({
            hasError,
            error,
            setHasErrorTrue,
            setHasErrorFalse
        }),
        [hasError, error]
    )

    return (
        <ErrorContext.Provider value={errorValue}>
            {children}
        </ErrorContext.Provider>
    )
}

ErrorProvider.defaultProps = {
    children: {}
}

ErrorProvider.propTypes = {
    children: PropTypes.node
}

export default ErrorProvider
