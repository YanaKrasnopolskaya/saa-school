export interface Learning {
    title: string,
    description: string[],
    image: {
        src: string,
        alt: string,
    },
    classModifiers?: string,
    reversed: boolean,
    bigTitle?: boolean,
}