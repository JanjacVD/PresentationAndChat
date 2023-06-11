import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
export default defineConfig(({ mode }) => {
    return {
        plugins: [
            laravel({
                input: ["resources/js/main.scss", "resources/js/app.tsx"],
                refresh: true,
            }),
            react(),
            // EnvironmentPlugin("all"),
        ],
    };
});
