import { createContext } from 'react'

export type errorContext = {
    hasError: boolean
    error: Error | null
    setHasErrorTrue: (error?: Error) => void
    setHasErrorFalse: () => void
}

export const ErrorContext = createContext<errorContext>({
    hasError: false,
    error: null,
    setHasErrorTrue: () => ({}),
    setHasErrorFalse: () => ({})
})
