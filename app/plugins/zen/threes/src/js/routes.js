import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/:backend/zen/threes/framecontroller/create",
        name: "Frame",
        component: () => import("../vue/screens/Node.vue"),
        props: true,
    },
    {
        path: "/:backend/zen/threes/framecontroller/update/:nid",
        name: "Frame",
        component: () => import("../vue/screens/Node.vue"),
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
