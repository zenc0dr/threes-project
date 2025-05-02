import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/:backend/zen/threes/nodecontroller",
        name: "Frame",
        component: () => import("../vue/screens/Ui.vue"),
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
