import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@ui': path.resolve(__dirname, 'src/ui'),
            '@services': path.resolve(__dirname, 'src/services'),
            '@features': path.resolve(__dirname, 'src/features'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
        },
    },
})
