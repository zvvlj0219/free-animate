interface Text {
    id: number
    text: string
}

interface Image {
    id: number
    src: string
}

interface Style {

}

interface Theme {

}

export type Props = {
    textData: Text[]
    imageData: Image[]
    theme: Theme
    containerStyle: Style
}