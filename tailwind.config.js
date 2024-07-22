/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                chickenMain: " #FCC580",
                chickenPoint: "#fc9d38",
                chickenNeutral: "#A4A4A4",
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

