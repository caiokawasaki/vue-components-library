import {resolve} from 'node:path'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        tailwindcss()
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'VueComponentsLibrary',
            fileName: (format) => `vue-components-library.${format}.js`
        },
        rollupOptions: {
            external: ['vue', 'vue-router'],
            output: {
                globals: {
                    vue: 'Vue',
                    'vue-router': 'VueRouter'
                },
                exports: 'named'
            }
        }
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    }
})

