interface CourseItem {
    name: string,
    texts: string[]
}

export interface CourseProgram {
    term: string,
    title: string,
    description: string,
    items: CourseItem[]
}