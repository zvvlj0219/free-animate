import * as React from 'react'
import { Theme, createBackground, AnimationProps } from '../view/EditAnimate'
import FadeInTextArea from './FadeInTextArea'
import FadeInImageArea from './FadeInImageArea'
import FadeInShapes from './FadeInShapes'
import '../scss/index.scss'

type Props = {
    theme: Theme
    configArray: AnimationProps[]
}

const CONTAINER = 'main_container'

const FadeIn = ({ configArray, theme }: Props) => (
    <div
        className='fadein'
        style={{
            backgroundColor: createBackground(theme, true)
        }}
        id={CONTAINER}
    >
        <FadeInShapes containerElm={CONTAINER} theme={theme} />
        {configArray.map((el) =>
            'text' in el ? (
                <div key={el.id}>
                    <FadeInShapes containerElm={CONTAINER} theme={theme} />
                    <FadeInTextArea
                        id={el.id}
                        text={el.text}
                        textStyle={el.textStyle}
                        containerElm={CONTAINER}
                        translate={el.translate}
                        duration={el.duration}
                    />
                    <FadeInShapes containerElm={CONTAINER} theme={theme} />
                </div>
            ) : (
                <div key={el.id}>
                    <FadeInShapes containerElm={CONTAINER} theme={theme} />
                    <FadeInImageArea
                        id={el.id}
                        src={el.src}
                        imageStyle={el.imageStyle}
                        containerElm={CONTAINER}
                        translate={el.translate}
                        duration={el.duration}
                    />
                    <FadeInShapes containerElm={CONTAINER} theme={theme} />
                </div>
            )
        )}
        <FadeInShapes containerElm={CONTAINER} theme={theme} />
        <FadeInShapes containerElm={CONTAINER} theme={theme} />
    </div>
)

export default FadeIn
