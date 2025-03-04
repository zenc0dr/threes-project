import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/:backend/zen/threes/framecontroller/create",
        name: "CreateSprite",
        component: () => import("../vue/pages/Frame.vue"),
        props: true,
    },
    {
        path: "/:backend/zen/threes/framecontroller/update/:fid",
        name: "UpdateSprite",
        component: () => import("../vue/pages/Frame.vue"),
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
