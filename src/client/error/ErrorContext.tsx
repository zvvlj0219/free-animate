import { createContext } from 'react'

export type errorContext = {
    hasError: boolean
    error: Error | undefined
    setHasErrorTrue: (error?: Error) => void
    setHasErrorFalse: () => void
}

export const ErrorContext = createContext<errorContext>({
    hasError: false,
    error: undefined,
    setHasErrorTrue: () => ({}),
    setHasErrorFalse: () => ({})
})
