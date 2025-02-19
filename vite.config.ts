import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    base: "/testtask1/",
    plugins: [react(), tailwindcss()],
    build: {
        outDir: "dist", // Vercel ищет файлы в dist
    },
});
