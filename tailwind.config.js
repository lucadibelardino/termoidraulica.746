/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0f172a', // Slate 900
                    foreground: '#f8fafc',
                },
                secondary: {
                    DEFAULT: '#3b82f6', // Blue 500
                    foreground: '#ffffff',
                },
                accent: {
                    DEFAULT: '#f97316', // Orange 500
                    foreground: '#ffffff',
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            container: {
                center: true,
                padding: '1rem',
                screens: {
                    '2xl': '1400px',
                },
            },
        },
    },
    plugins: [],
}
