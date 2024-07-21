/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                chickenMain: " #ffe5c9",
                chickenPoint: "#fc9d38",
                chickenNeutral: "#fed7aa",
                chickenPositive: "#6cbd7c",
                chickenNegative: "#fc3838",
                chickenHover: "#fffec9",
            },
        },
        screens: {
            sm: { max: "1023px" },
            lg: { min: "1024px" },
        },
    },
    plugins: [],
};

