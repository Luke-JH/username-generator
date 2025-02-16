// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    ssr: false,
    css: ["assets/tailwind.css"],
    modules: ["@nuxtjs/tailwindcss", "@nuxt/eslint", "@nuxtjs/google-fonts"],
    googleFonts: {
        families: {
            "Roboto Mono": true,
        },
    },
});
