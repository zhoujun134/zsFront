import { createRouter, createWebHistory } from 'vue-router'
import ArticleEditorView from "@/views/admin/ArticleEditorView.vue";
import CategoryArticleListView from "@/views/CategoryArticleListView.vue";
import TagArticleListView from "@/views/TagArticleListView.vue";
import HorizontalHome from "@/views/horizontalTheme/HorizontalHomeView.vue";
import HorizontalFrendsView from "@/views/horizontalTheme/HorizontalFrendsView.vue";
import HorizontalAboutMeView from "@/views/horizontalTheme/HorizontalAboutMeView.vue";
import HorizontalArchiveView from "@/views/horizontalTheme/HorizontalArchiveView.vue";


export const constantRoutes = [
//重定向--一般设置为首页
    {
        path: '/',
        redirect: '/web',
        meta: { title: '快跑小火车' }
    },
    {
        path: '/web',
        component: HorizontalHome,
        meta: { title: '快跑小火车' }
    },
    {
        path: "/casual/essay",
        component: () => import("@/views/horizontalTheme/HorizontalCasualEssayView.vue"),
        meta: { title: '随笔 | 快跑小火车' }
    },
    {
        path: '/web/detail/:articleId',
        component: () => import("@/views/horizontalTheme/HorizontalDetailView.vue"),
        props: true
    },
    {
        path: "/detail/:articleId",
        component: () => import("@/views/ArticleDetailView.vue"),
        props: true
    },
    {
        path: "/editor",
        component: ArticleEditorView,
        meta: { title: '编辑文章 | 快跑小火车' }
    },
    {
        path: "/friends",
        component: HorizontalFrendsView,
        meta: { title: '友链 | 快跑小火车' }
    },
    {
        path: "/about",
        component: HorizontalAboutMeView,
        meta: { title: '关于我 | 快跑小火车' }
    },
    {
        path: "/archivist",
        component: HorizontalArchiveView,
        meta: { title: '归档 | 快跑小火车' }
    },
    {
        path: "/categoryInfo",
        component: CategoryArticleListView,
        props: true
    },
    {
        path: "/tagInfo",
        component: TagArticleListView,
        props: true
    },
    {
        path: "/login",
        component: () => import("@/components/LoginForm.vue"),
        meta: { title: '登录 | 快跑小火车' }
    },
    {
        path: "/register",
        component: () => import("@/components/RegisterForm.vue"),
        meta: { title: '注册 | 快跑小火车' }
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


