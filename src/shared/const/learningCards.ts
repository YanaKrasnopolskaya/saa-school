import type {LearningCard} from "@/shared/types/LearningCard";

export const LearningCards: LearningCard[] = [
    {
        title: "Время на обучение:",
        description: ["3 занятия <b>по часу</b> в день <b>по будням</b>", "3-5 часов на практику <b>в любое удобное время</b>"],
        image: {
            src: "/images/learning-time.webp",
            alt: "Время обучения",
            width: 289,
            height: 247,
        },
        classModifiers: "time",
        reversed: false,
    },
    {
        title: "Формат обучения:",
        description: ["<b>Часовые лекции</b>, удобные для восприятия", "Презентации и практические задания помогут <b>лучше усвоить материал</b>"],
        image: {
            src: "/images/learning-format.webp",
            alt: "Формат обучения",
            width: 276,
            height: 244,
        },
        reversed: true
    },
    {
        title: "Что внутри курса:",
        description: ["<b>Онлайн-лекции</b> от профессионалов", "<b>Тренажеры</b> с десятками заданий", "<b>Домашки</b> и проекты с проверкой от ментора"],
        image: {
            src: "/images/learning-course.webp",
            alt: "Что внутри курса",
            width: 257,
            height: 236,
        },
        classModifiers: "course",
        reversed: false
    },
    {
        title: "Используем реальные инструменты:",
        description: ["Таск-трекеры, TMS, спринты и канбан-доски — это то, что ты будешь использовать в реальных проектах.", "Мы даём тебе навыки <b>для реальной работы</b>"],
        image: {
            src: "/images/learning-tools.webp",
            alt: "Инструменты",
            width: 284,
            height: 216,
        },
        reversed: true
    },
    {
        title: "Обратная связь:",
        description: ["Менторы с богатым опытом в тестировании будут <b>поддерживать тебя</b> и отвечать на все вопросы"],
        image: {
            src: "/images/learning-connection.webp",
            alt: "Контакты",
            width: 268,
            height: 230,
        },
        reversed: false
    },
]