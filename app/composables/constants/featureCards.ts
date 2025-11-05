import type {FeatureCard} from "~/types/FeaturesCard";

export  const featureCards: FeatureCard[] = [
    {
        title: "Небольшие группы",
        description: "Поддерживаем каждого студента и всегда рядом, если что-то не понятно",
        image: {
            src: "/images/hero-img-1.png",
            alt: "",
            width: 200,
            height: 132,
        },
        reversed: false,
        horizontal: false,
        more: "до 10 человек",
        differentBg: false
    },
    {
        title: "AI ассистенты",
        description: "Учим использовать искусственный интеллект для автоматизации процессов",
        image: {
            src: "/images/hero-img-2.png",
            alt: "AI ассистенты фото",
            width: 175,
            height: 102,
        },
        reversed: false,
        horizontal: false,
        differentBg: false
    },
    {
        title: "Как в настоящем проекте",
        description: "На курсе полностью повторяем рабочие процессы и задачи",
        image: {
            src: "/images/hero-img-3.png",
            alt: "Настоящий проект фото",
            width: 163,
            height: 125,
        },
        reversed: false,
        horizontal: true,
        differentBg: false
    },
    {
        title: "Помогаем с поиском работы",
        description: "Вместе составляем резюме и проводим тестовое собеседование",
        image: {
            src: "/images/hero-img-4.png",
            alt: "Поиск работы фото",
            width: 118,
            height: 117,
        },
        reversed: true,
        horizontal: true,
        differentBg: true
    },
    {
        title: "Сертификат Минцифры",
        description: "Помогаем получить сертификат, который подтвердит твои навыки",
        image: {
            src: "/images/hero-img-5.png",
            alt: "Сертификат Минцифры фото",
            width: 183,
            height: 150,
        },
        reversed: false,
        horizontal: true,
        differentBg: true
    },
]