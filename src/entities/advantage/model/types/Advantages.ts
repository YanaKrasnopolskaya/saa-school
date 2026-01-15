export interface Advantages {
    title: string,
    description: string,
    image: {
        src: string,
        alt: string,
        sizes: {
            mobile: { width: number, height: number },
            tablet: { width: number, height: number },
            desktop: { width: number, height: number}
        }
    },
    reversed?: boolean
    horizontal?: boolean
    more?: string
    differentBg?: boolean,
    uniqueClass: string
}