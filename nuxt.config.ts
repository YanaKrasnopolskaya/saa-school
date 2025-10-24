// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    css: [
        '@/assets/styles/main.scss' // глобальный SCSS
    ],

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@use "@/assets/styles/global/index" as *;`
                },
            },
        },
    },
})
