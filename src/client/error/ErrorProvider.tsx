import { useState, useMemo } from 'react'
import { ErrorContext, errorContext } from './ErrorContext'

type Props = {
    children: React.ReactNode
}

const ErrorProvider = ({ children }: Props) => {
    const [hasError, setHasError] = useState<boolean>(false)
    const [error, setError] = useState<Error | undefined>(undefined)

    const setHasErrorTrue = (_error?: Error) => {
        setError(_error)
        setHasError(true)
    }

    const setHasErrorFalse = () => {
        setError(undefined)
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

export default ErrorProvider
