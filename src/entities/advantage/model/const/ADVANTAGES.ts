import type {Advantages} from "@/entities/advantage/model/types/Advantages";

export  const ADVANTAGES: Advantages[] = [
    {
        title: "Небольшие группы",
        description: "Поддерживаем каждого студента и всегда рядом, если что-то не понятно",
        image: {
            src: '/images/hero-img-1.webp',
            alt: "",
        },
        reversed: false,
        horizontal: false,
        more: "до 10 человек",
        differentBg: false,
        uniqueClass: 'group'
    },
    {
        title: "AI ассистенты",
        description: "Учим использовать искусственный интеллект для автоматизации процессов",
        image: {
            src: '/images/hero-img-2.webp',
            alt: "AI ассистенты фото",
        },
        reversed: false,
        horizontal: false,
        differentBg: false,
        uniqueClass: 'ai'
    },
    {
        title: "Как в настоящем проекте",
        description: "На курсе полностью повторяем рабочие процессы и задачи",
        image: {
            src: '/images/hero-img-3.webp',
            alt: "Настоящий проект фото",
        },
        reversed: false,
        horizontal: true,
        differentBg: false,
        uniqueClass: 'project'
    },
    {
        title: "Помогаем с поиском работы",
        description: "Вместе составляем резюме и проводим тестовое собеседование",
        image: {
            src: '/images/hero-img-4.webp',
            alt: "Поиск работы фото",
        },
        reversed: true,
        horizontal: true,
        differentBg: true,
        uniqueClass: 'help'
    },
    {
        title: "Сертификат Минцифры",
        description: "Помогаем получить сертификат, который подтвердит твои навыки",
        image: {
            src: '/images/hero-img-5.webp',
            alt: "Сертификат Минцифры фото",
        },
        reversed: false,
        horizontal: true,
        differentBg: true,
        uniqueClass: 'certificate'
    },
]