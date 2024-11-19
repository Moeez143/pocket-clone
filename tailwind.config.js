/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                DinRoundPro: ["DINRoundPro", "sans-serif"],
            },
            container: {
                center: true,
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["light"],
        darkTheme: false,
    },
}
