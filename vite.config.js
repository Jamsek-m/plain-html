import { defineConfig } from 'vite';
import {resolve, join} from "path";

export default defineConfig({
    root: "./src/pages",
    appType: "mpa",
    plugins: [],
    build: {
        outDir: join(__dirname, "dist"),
        emptyOutDir: true,
        rollupOptions: {
            input: {
                index: resolve(__dirname, "src", "pages", "index.html"),
                second: resolve(__dirname, "src", "pages", "second", "index.html"),
            },
        },
    },
});
