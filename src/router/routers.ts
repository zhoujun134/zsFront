import { createRouter, createWebHistory } from 'vue-router'
import HorizontalHomeView from "@/views/horizontalTheme/HorizontalHomeView.vue";


export const constantRoutes = [
//重定向--一般设置为首页
    {
        path: '/',
        redirect: '/web',
        meta: { title: 'Z 不殊' }
    },
    {
        path: '/web',
        component: HorizontalHomeView,
        meta: { title: 'Z 不殊' }
    },
    {
        path: "/casual/essay",
        component: () => import("@/views/horizontalTheme/HorizontalCasualEssayView.vue"),
        meta: { title: '随笔 | Z 不殊' }
    },
    {
        path: '/web/detail/:articleId',
        component: () => import("@/views/horizontalTheme/HorizontalDetailView.vue"),
        props: true
    },
    {
        path: "/editor",
        component: () => import("@/components/ArticleEditor.vue"),
        meta: { title: '编辑文章 | Z 不殊' }
    },
    {
        path: "/friends",
        component: () => import("@/views/horizontalTheme/HorizontalFrendsView.vue"),
        meta: { title: '友链 | Z 不殊' }
    },
    {
        path: "/about",
        component: () => import("@/views/horizontalTheme/HorizontalAboutMeView.vue"),
        meta: { title: '关于我 | Z 不殊' }
    },
    {
        path: "/archivist",
        component: () => import("@/views/horizontalTheme/HorizontalArchiveView.vue"),
        meta: { title: '归档 | Z 不殊' }
    },
    {
        path: "/login",
        component: () => import("@/components/LoginForm.vue"),
        meta: { title: '登录 | Z 不殊' }
    },
    {
        path: "/register",
        component: () => import("@/components/RegisterForm.vue"),
        meta: { title: '注册 | Z 不殊' }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: [...constantRoutes]
})

// 在路由实例上添加全局前置守卫
router.beforeEach((to, from, next) => {
    // 如果用户尝试访问根路径 '/'，则自动重定向到 '/web'
    if (to.path === '/') {
        next('/web');
    } else {
        next(); // 确保其他路由正常工作
    }
});


router.afterEach((to) => {
    let title = to.meta.title as string
    document.title =  title || '快跑小火车';
})

export default router;


