import type {Card} from "@/entities/internship";

export const INTERNSHIP_CARDS: Card[] = [
    {
        img: {
            src: '/images/intership-card-1.png',
            alt: 'Портфолио картинка',
            width: 126,
            height: 124
        },
        title: 'Не просто проект<br> в портфолио',
        description: 'Будешь работать над сложным проектом с реальной бизнес<br> задачей, а не на учебной заготовке',
        bg: 'internship-card--bg1'
    },
    {
        img: {
            src: '/images/intership-card-2.png',
            alt: 'Стажировка картинка',
            width: 126,
            height: 124
        },
        title: 'Оплачиваемая стажировка',
        description: 'Включишься в рабочий процесс, где задачи настоящие, команда рядом,<br> а твой труд ценится',
        bg: 'internship-card--bg2'
    },
    {
        img: {
            src: '/images/intership-card-3.png',
            alt: 'Опыт картинка',
            width: 126,
            height: 124
        },
        title: 'Опыт, который ценится работодателями',
        description: 'Такой опыт можно уверенно<br> вписать в резюме — он говорит<br> о тебе как о специалисте',
        bg: 'internship-card--bg3'
    },
]