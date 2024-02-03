import { defineConfig } from 'vite';
import {resolve, join} from "path";

export default defineConfig({
    root: "./src/pages",
    publicDir: resolve(__dirname, "public"),
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
