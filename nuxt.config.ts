// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    ssr: false,
    css: ["~/assets/tailwind.css"],
    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxt/eslint",
        "@nuxtjs/google-fonts",
        "@nuxt/test-utils/module",
        "@pinia/nuxt",
        "@vesp/nuxt-fontawesome",
    ],
    googleFonts: {
        families: {
            "Roboto Mono": true,
        },
    },
    imports: {
        dirs: ["@/types"],
    },
    fontawesome: {
        icons: {
            // Alphabetically ordered icons
            solid: ["check", "circle-xmark", "copy", "exclamation", "microchip"],
        },
    },
});
