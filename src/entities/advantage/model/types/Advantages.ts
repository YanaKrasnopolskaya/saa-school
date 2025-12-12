export interface Advantages {
    title: string,
    description: string,
    image: {
        src: string,
        alt: string,
        width: number,
        height: number,
    },
    reversed?: boolean
    horizontal?: boolean
    more?: string
    differentBg?: boolean
}