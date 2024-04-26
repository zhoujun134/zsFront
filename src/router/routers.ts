import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import ArticleEditorView from "@/views/admin/ArticleEditorView.vue";
import CategoryArticleListView from "@/views/CategoryArticleListView.vue";
import TagArticleListView from "@/views/TagArticleListView.vue";
import HorizontalHome from "@/views/horizontalTheme/HorizontalHomeView.vue";
import HorizontalFrendsView from "@/views/horizontalTheme/HorizontalFrendsView.vue";
import HorizontalAboutMeView from "@/views/horizontalTheme/HorizontalAboutMeView.vue";


export const constantRoutes = [
//重定向--一般设置为首页
    {
        path: '/',
        redirect: '/web'
    },
    {
        path: '/web',
        component: HorizontalHome
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
        component: ArticleEditorView
    },
    {
        path: "/friends",
        component: HorizontalFrendsView,
    },
    {
        path: "/about",
        component: HorizontalAboutMeView,
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
        component: () => import("@/components/LoginForm.vue")
    },
    {
        path: "/register",
        component: () => import("@/components/RegisterForm.vue")
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

export default router;


