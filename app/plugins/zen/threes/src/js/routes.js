import { createWebHistory, createRouter } from "vue-router";

// Импорты компонентов
const Ui = () => import("../vue/screens/Ui.vue");
const Login = () => import("../vue/screens/Login.vue");
const Profile = () => import("../vue/screens/Profile.vue");

const routes = [
    {
        path: "/",
        redirect: "/app/node"
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: { requiresGuest: true }
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
        meta: { requiresAuth: true }
    },
    {
        path: "/app/node/:nid?",
        name: "FrameShort",
        component: Ui,
        props: true,
        meta: { requiresAuth: true },
    },
    {
        path: "/:backend/zen/threes/nodecontroller/node/:nid?",
        name: "Frame",
        component: Ui,
        props: true,
        meta: { requiresAuth: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Глобальный хук аутентификации
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('ths_token');
    const isAuthenticated = !!token;

    // Если требуется авторизация и пользователь не авторизован
    if (to.meta.requiresAuth && !isAuthenticated) {
        return next({ name: "Login" });
    }

    // Если требуется гость (не авторизованный) и пользователь авторизован
    if (to.meta.requiresGuest && isAuthenticated) {
        return next({ name: "FrameShort" });
    }

    next();
});

export default router;
