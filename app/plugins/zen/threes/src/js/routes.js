import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/app/node/:nid?",
        name: "FrameShort",
        component: () => import("../vue/screens/Ui.vue"),
        props: true,
    },
    {
        path: "/:backend/zen/threes/nodecontroller/node/:nid?",
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
