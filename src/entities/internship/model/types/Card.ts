export interface Card {
    img: {
        src: string,
        alt: string,
        width: number,
        height: number
    },
    title: string,
    description: string,
    bg: string
}