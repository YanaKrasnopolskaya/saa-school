import { fileURLToPath } from 'url'
import { resolve, dirname } from 'path'
import viteTsconfigPaths from 'vite-tsconfig-paths'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    alias: {
        '@': resolve(__dirname, 'src'),
    },
    dir: {
        pages: './src/app/routes',
        layouts: './src/app/layouts',
        assets: "./src/app/assets",
    },
    devtools: { enabled: true },
    css: [
        '@/app/assets/styles/main.scss' , // глобальный SCSS
    ],
    vite: {
        plugins: [viteTsconfigPaths()],
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@use "@/app/assets/styles/global/index" as *;`,
                },
            },
        },
    },
})
