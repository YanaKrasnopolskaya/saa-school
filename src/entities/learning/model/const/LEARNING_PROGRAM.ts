import type {Learning} from "@/entities/learning/model/types/Learning";

export const LEARNING_PROGRAM: Learning[] = [
    {
        title: "Время на обучение:",
        description: ["3 занятия <b>по часу</b> в день <b>по будням</b>", "3-5 часов на практику<br> <b>в&nbsp;любое удобное время</b>"],
        image: {
            src: "/images/learning-time.webp",
            alt: "Время обучения",
        },
        classModifiers: "time",
        reversed: false,
    },
    {
        title: "Формат обучения:",
        description: ["<b>Часовые лекции</b>, удобные для&nbsp;восприятия", "Презентации и практические задания помогут <b>лучше усвоить материал</b>"],
        image: {
            src: "/images/learning-format.webp",
            alt: "Формат обучения",
        },
        classModifiers: "format",
        reversed: true
    },
    {
        title: "Что внутри курса:",
        description: ["<b>Онлайн-лекции</b> от&nbsp;профессионалов", "<b>Тренажеры</b> с десятками заданий", "<b>Домашки</b> и проекты с&nbsp;проверкой от&nbsp;ментора"],
        image: {
            src: "/images/learning-course.webp",
            alt: "Что внутри курса",
        },
        classModifiers: "course",
        reversed: false,
        bigTitle: true
    },
    {
        title: "Используем<br> реальные инструменты:",
        description: ["Таск-трекеры, TMS, спринты<br> и канбан-доски — это то, что ты будешь использовать в реальных проектах.", "Мы даём тебе навыки <b>для реальной работы</b>"],
        image: {
            src: "/images/learning-tools.webp",
            alt: "Инструменты",
        },
        classModifiers: "tools",
        reversed: true
    },
    {
        title: "Обратная связь:",
        description: ["Менторы с богатым опытом в&nbsp;тестировании будут <b>поддерживать тебя</b> и отвечать на все вопросы"],
        image: {
            src: "/images/learning-connection.webp",
            alt: "Контакты",
        },
        classModifiers: "feedback",
        reversed: false,
        bigTitle: true
    },
]