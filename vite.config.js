import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3003,
    },
    plugins: [
        react(), 
        tsconfigPaths(), 
        tailwindcss()
    ]
});