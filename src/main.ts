import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "@/router/routers";

import 'element-plus/theme-chalk/display.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
/* import font awesome icon component */
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import './assets/css/css-vars.css'

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import axios from 'axios'
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
import { createHead } from '@unhead/vue'

import "prismjs/plugins/line-numbers/prism-line-numbers.js"//行号插件
import "prismjs/themes/prism-okaidia.css"//高亮主题
import "prismjs/plugins/line-numbers/prism-line-numbers.css"//行号插件的样式
const head = createHead()

const app = createApp(App);
app.use(ElementPlus)
    .use(router)
    .use(mavonEditor)
    .use(head)
    .mount('#app');
app.component('font-awesome-icon', FontAwesomeIcon)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
