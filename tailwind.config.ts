/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
export default {
    content: [],
    theme: {
        extend: {
            colors: {
                primary: colors.teal[400],
                "primary-hover": colors.teal[600],
            },
        },
    },
    plugins: [],
};
