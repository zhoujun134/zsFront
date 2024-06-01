import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {prismjsPlugin} from 'vite-plugin-prismjs'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        prismjsPlugin({
            languages: 'all', // 语言
            plugins: ['line-numbers', 'show-language', 'copy-to-clipboard', 'inline-color'],
            theme: 'okaidia',// 主题
            css: true,
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    // 解决跨域问题
    server: {
        host: 'localhost',
        // 随便设置一个冷门port，避免和api服务器上运行的vue项目port冲突
        port: 12333,
        // https: false,
        // open: false,
        proxy: {
            '/api': {
                // 实际请求地址
                target: 'http://localhost:8080/zs',
                // target: 'https://zbus.top',
                // 是否允许跨域，在本地会创建一个虚拟的服务器
                // 然后发送请求数据
                changeOrigin: true,
                ws: false,
                rewrite: (path: string): string => {
                    return path.replace(/^\/api/, '/api');
                }
            }
        }
    }
})
