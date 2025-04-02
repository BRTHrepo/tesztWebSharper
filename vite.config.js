import { defineConfig } from 'vite';

export default defineConfig({
    root: './bin/html', // Az index.html helye
    build: {
        outDir: '../dist', // Az output könyvtár helye
        emptyOutDir: true,
    },
});