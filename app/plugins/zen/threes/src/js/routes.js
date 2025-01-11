import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/:backend/zen/threes/spritecontroller/create",
        name: "CreateSprite",
        component: () => import("../vue/pages/SpriteScheme.vue"),
        props: true,
    },
    {
        path: "/:backend/zen/threes/spritecontroller/update/:sid",
        name: "UpdateSprite",
        component: () => import("../vue/pages/SpriteScheme.vue"),
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
