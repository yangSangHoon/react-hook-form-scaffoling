import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import react from 'vite-preset-react';
import svgr from 'vite-plugin-svgr';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    resolve: {
        alias: {
            '~': path.resolve(__dirname, './src')
        }
    },
    server: {
        https: true
    }
});
