import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import fs from 'fs';

// Читаем конфигурацию
const microfrontends = JSON.parse(
    fs.readFileSync('./microfrontends.json', 'utf-8')
);

// Генерация точек входа для приложений
const inputs = Object.fromEntries(
    microfrontends.apps.map((app) => [app.name, path.resolve(__dirname, `src/apps/${app.name}/main.js`)])
);

export default defineConfig({
    plugins: [vue()],
    build: {
        outDir: path.resolve(__dirname, 'dist'),
        rollupOptions: {
            input: inputs,
            output: {
                entryFileNames: 'js/[name].[hash].js',
                chunkFileNames: 'js/[name].[hash].js',
                assetFileNames: 'assets/[name].[hash][extname]',
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
});
