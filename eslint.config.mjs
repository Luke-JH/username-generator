import withNuxt from "./.nuxt/eslint.config.mjs";
import js from "@eslint/js";
import vuePlugin from "eslint-plugin-vue";

export default withNuxt([
  js.configs.recommended,
  {
    files: [
      "**/*.vue",
      "**/*.js",
      "**/*.ts",
      "**/*.jsx",
      "**/*.cjs",
      "**/*.mjs",
    ],
    plugins: {
      vue: vuePlugin,
    },
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
