import { AnimationProps } from '../types/components_props'
import { Theme } from '../view/EditAnimate'
import FadeInTextArea from './FadeInTextArea'
import FadeInImageArea from './FadeInImageArea'
import FadeInShapes from './FadeInShapes'
import '../scss/index.scss'

type Props = {
    theme: Theme
    configArray: AnimationProps[]
}

const CONTAINER = 'scroll_container'

const createBackground = (theme: Theme): string => {
    switch (theme) {
        case 'stylish':
            return 'rgba(202, 240, 248, 0.3)'
            break
        case 'pop':
            return 'rgba(247, 37, 133, 0.1)'
            break
        case 'sick':
            return 'rgba(198, 172, 143, 0.4)'
            break
        default:
            return ''
    }
}

const FadeIn = ({ configArray, theme }: Props) => (
    <div
        className="fadein"
        style={{
            backgroundColor: createBackground(theme),
            overflow: 'hidden'
        }}
        id={CONTAINER}
    >
        <FadeInShapes containerElm={CONTAINER} theme={theme} />
        {configArray.map(
            (el) =>
                'text' in el && (
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
                )
        )}
        {configArray.map(
            (el) =>
                'src' in el && (
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
