export interface Learning {
    title: string,
    description: string[],
    image: {
        src: string,
        alt: string,
        width: number,
        height: number,
    },
    classModifiers?: string,
    reversed: boolean
}