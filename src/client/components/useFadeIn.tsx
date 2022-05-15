import { useState, useMemo, useEffect } from 'react'

type State = {
    transform: string
    opacity: number
}

type Config = {
    isDownScroll: boolean,
    containerElm: string,
    ref: React.RefObject<HTMLDivElement>,
    translate: { x: number, y: number },
    duration?: number,
    adjust?: number
}

export const scrollTop = () => {
    // heights from top
    return Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop
    )
}

const useFadeIn = ({
    isDownScroll,
    containerElm,
    ref,
    translate,
    duration, 
    adjust
}: Config) => {
    const [cssState, updateStyle] = useState<State>({
      transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,
      opacity: 0
    })
  
    const animation = useMemo(
      () => ({
        width: '100%',
        transition: `all 1s ease ${duration ? duration : 0.1}s`,
        opacity: cssState.opacity,
        transform: cssState.transform,
      }),
      [cssState.opacity, cssState.transform]
    )
  
    useEffect(() => {
      const container = document.getElementById(containerElm)
      if (!ref.current || !container) return
  
      const offsetTop = ref.current.offsetTop
      const windowHeight = window.innerHeight
      
      const handleScroll = () => {
        if (
          isDownScroll && 
          offsetTop < scrollTop() + windowHeight - (adjust ? adjust : 0)
        ){
          updateStyle(_state => ({
            ..._state,
            opacity: 1,
            transform: `translateX(0) translateY(0)`
          }))
        } else {
          updateStyle(_state => ({
            ..._state,
            opacity: 0,
            transform: `translateX(${translate.x}px) translateY(${translate.y}px)`
          }))
        }
      }
  
      document.addEventListener('scroll', handleScroll)
      
      return () => document.removeEventListener('scroll', handleScroll)
    }, [])
  
    return animation
}

export default useFadeIn
