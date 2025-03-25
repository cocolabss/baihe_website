/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                lightgreen: '#E2E9DD',
                green: '#6FB71E',
                red: '#FB081A',
                black: '#100F11',
                darkgray: '#585250',
            },
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
            },
        },
    },
    plugins: [
        function ({ addBase, theme }) {
            addBase({
                ':root': Object.fromEntries(
                    Object.entries(theme('colors')).map(([key, value]) => [
                        `--tw-color-${key}`,
                        value,
                    ])
                ),
            });
        },
    ],
}