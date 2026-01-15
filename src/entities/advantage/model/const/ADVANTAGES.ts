import type {Advantages} from "@/entities/advantage/model/types/Advantages";

export  const ADVANTAGES: Advantages[] = [
    {
        title: "Небольшие группы",
        description: "Поддерживаем каждого студента и всегда рядом, если что-то не понятно",
        image: {
            src: "/images/hero-img-1.png",
            alt: "",
            sizes: {
                mobile: { width: 119, height: 78 },
                tablet: { width: 166, height: 109 },
                desktop: { width: 201, height: 132}
            },
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
            src: "/images/hero-img-2.png",
            alt: "AI ассистенты фото",
            sizes: {
                mobile: { width: 104, height: 61 },
                tablet: { width: 144, height: 84 },
                desktop: { width: 175, height: 102}
            },
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
            src: "/images/hero-img-3.png",
            alt: "Настоящий проект фото",
            sizes: {
                mobile: { width: 98, height: 75 },
                tablet: { width: 135, height: 103 },
                desktop: { width: 163, height: 124}
            },
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
            src: "/images/hero-img-4.png",
            alt: "Поиск работы фото",
            sizes: {
                mobile: { width: 68, height: 68 },
                tablet: { width: 97, height: 97 },
                desktop: { width: 117, height: 117}
            },
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
            src: "/images/hero-img-5.png",
            alt: "Сертификат Минцифры фото",
            sizes: {
                mobile: { width: 96, height: 78 },
                tablet: { width: 140, height: 114 },
                desktop: { width: 183, height: 150}
            },
        },
        reversed: false,
        horizontal: true,
        differentBg: true,
        uniqueClass: 'certificate'
    },
]