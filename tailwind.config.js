/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                backgroundLight: "#FFFBF1",
                backgroundDark: "#0F0F0F",

                surfaceLight: "#FFFFFF",
                surfaceDark: "#1F1F1F",

                textLight: "#18181B",
                textDark: "#FAFAFA",

                mutedLight: "#71717A",
                mutedDark: "#A1A1AA",

                primary: "#E11D48",
                accent: "#FB7185",

                /* Skill Colors */

                html: "#e34c26",
                css: "#2965f1",
                javascript: "#f0db4f",
                react: "#61dafb",
                node: "#3c873a",
                mongo: "#0cd45b",
                tailwind: "#4dc0b5",
                python: "#4584b6",
                django: "#3c873a",

                facebook: "#1877F2",
                linkedin: "#0077B5",
                instagram: "#833AB4",
            },

            boxShadow: {
                card: "0 10px 25px rgba(0,0,0,0.2)",
                glow: "0 0 18px rgba(225,29,72,0.4)",
            },

            backgroundImage: {
                heroGradient: "linear-gradient(135deg,#E11D48,#FB7185)",
            },
        },
    },
    plugins: [],
};
