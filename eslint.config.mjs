import withNuxt from "./.nuxt/eslint.config.mjs";
import js from "@eslint/js";

export default withNuxt([
    js.configs.recommended,
    {
        files: ["**/*.vue", "**/*.js", "**/*.ts", "**/*.jsx", "**/*.cjs", "**/*.mjs"],
        languageOptions: {
            globals: {
                defineNuxtConfig: true,
                RequestInfo: true,
            },
            parserOptions: {
                ecmaVersion: "latest",
            },
        },
        rules: {
            "vue/multi-word-component-names": "off",
            "vue/html-self-closing": [
                "error",
                {
                    html: {
                        void: "always",
                        normal: "always",
                        component: "always",
                    },
                    svg: "always",
                    math: "always",
                },
            ],
        },
    },
]);
