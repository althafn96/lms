import vue from '@vitejs/plugin-vue';
import Layouts from 'vite-plugin-vue-layouts'
import Pages from "vite-plugin-pages";
import AutoImport from 'unplugin-auto-import/vite'
import graphql from '@rollup/plugin-graphql';
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path';

export default ({ command }) => ({
    base: command === 'serve' ? '' : '/build/',
    publicDir: 'public',
    envDir: '../../',
    build: {
        manifest: true,
        outDir: 'public/build',
        rollupOptions: {
            input: [
                'resources/js/app.js',
                'resources/scss/app.scss',
                'resources/scss/app-dark.scss'
            ],
        },
    },
    plugins: [
        vue(),
        graphql(),
        Pages({
            dirs: ["resources/js/pages"]
        }),
        Layouts({
            layoutsDir: 'resources/js/layouts',
            defaultLayout: 'default'
        }),
        AutoImport({
            // targets to transform
            include: [
                /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                /\.vue\??/, // .vue
            ],
            imports: [
                'vue',
                'vue-router'
            ],
            dts: true,
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve('resources/js')
        }
    },
    server: {
        port: 4000
    }
});
