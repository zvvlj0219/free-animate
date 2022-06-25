import { useContext, createContext, useState, useEffect,useReducer, useMemo, useCallback } from "react"

type Children = {
    children: React.ReactNode
}

interface Text {
    id: number
    text: string
    textStyle: {
        fontSize: string
        padding: string
    }
    translate: {
        x: number
        y: number
    }
    duration: number
}

interface Image {
    id: number
    src: string
    imageStyle: {
        width: string
        height: string
        padding: string
        display: string
    }
    translate: {
        x: number
        y: number
    }
    duration: number
}

type AnimationProps = Text | Image

type Theme = 'stylish' | 'pop' | 'sick'

export type Animation = 'FadeIn' | 'Parallax'

export type State = {
    configArray: AnimationProps[]
    theme: Theme | null
    animation: Animation | null
}

const AnimationConfigContext = createContext({} as {
    state: State,
    updateConfig: (configArray: AnimationProps[], theme: Theme, animation: Animation) => void
})

const initialStateFactory = (initialState?: State): State => {
    return {
        configArray: [],
        theme: null,
        animation: null,
        ...initialState
    }
}

export const localStorageFactory = (state: State): void => {
    const ANIMATION_STATE = 'animationState'
    localStorage.setItem(ANIMATION_STATE, JSON.stringify(state))
}

export const useAnimateConfig = () => useContext(AnimationConfigContext)

export const AnimationConfigContextProvider = ({ children }: Children) => {
    const [state, setState] = useState<State>(
        initialStateFactory()
    )

    const updateConfig = (_configArray: AnimationProps[], _theme: Theme, _animation: Animation) => {
        if (_configArray === [] || _theme === null) {
            throw new Error('no exist config array or theme')
        }
        setState({
            configArray: _configArray,
            theme: _theme,
            animation: _animation
        })
    }

    const value = useMemo(
        () => ({
            state,
            updateConfig
        }),
        [state]
    )

    return (
        <AnimationConfigContext.Provider value={value}>
            { children }
        </AnimationConfigContext.Provider>
    )
}

export default useAnimateConfig
