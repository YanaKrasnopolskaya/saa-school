import type {Grade} from "@/entities/grade/types/Grade";

export const GRADES: Grade[] = [
    {
        name: 'Junior',
        period: 'до года',
        maxPrice: '50 000 ₽',
    },
    {
        name: 'Middle',
        period: '1-3 года',
        minPrice: '80 000 ₽ -',
        maxPrice: '97 000 ₽'
    },
    {
        name: 'Senior',
        period: '5+ лет',
        minPrice: '100 000 ₽ -',
        maxPrice: '130 000 ₽'
    },
]