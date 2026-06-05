import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#020617",
                foreground: "#f8fafc",
                primary: "#6366f1",
                secondary: "#0f172a",
                accent: "#22d3ee",
            },
        },
    },
    plugins: [],
};
export default config;