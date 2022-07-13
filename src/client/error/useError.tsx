import React, { useContext, createContext, useMemo, useCallback } from 'react'
import { AxiosError } from 'axios'

type ErrorMessage = {
    message: string
}

const ErrorContext = createContext(
    {} as {
        customErrorThrow: (error: unknown) => ErrorMessage
    }
)

export const ErrorContextProvider = ({
    children
}: {
    children: React.ReactNode
}) => {
    const customErrorThrow = useCallback((error: unknown): ErrorMessage => {
        const axiosError = error as AxiosError<ErrorMessage>

        if (axiosError.response && axiosError.response.status === 400) {
            const { data } = axiosError.response

            return {
                message: data.message
            }
        }

        if (error instanceof Error) {
            // error log
            console.error(error.name)
            console.error(error.message)

            return {
                message: `${error.name}_${error.message}`
            }
        }

        return {
            message: 'uncaught error'
        }
    }, [])

    const value = useMemo(
        () => ({
            customErrorThrow
        }),
        [customErrorThrow]
    )

    return (
        <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>
    )
}

export const useError = () => useContext(ErrorContext)

export default useError
