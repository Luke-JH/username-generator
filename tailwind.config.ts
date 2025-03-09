/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
export default {
    imporant: true,
    content: [
        "./app.vue",
        "./components/**/*.{vue,js,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
    ],
    theme: {
        extend: {
            colors: {
                primary: colors.teal[400],
                "primary-hover": colors.teal[600],
            },
        },
    },
    plugins: [],
    safelist: [/./],
};
