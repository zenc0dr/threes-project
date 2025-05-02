<template>
    <div class="threes-nt w-64 h-full bg-gray-50 overflow-auto p-2 text-sm">
        <div class="tree-list">
            <tree-item
                v-for="item in tree_data"
                :key="item.id"
                :node="item"
                :depth="0"
                :active_id="active_id"
                @select="handleSelect"
            />
        </div>
    </div>
</template>

<script>
import TreeItem from './TreeItem.vue'

export default {
    name: 'Tree',
    components: { TreeItem },
    data() {
        return {
            active_id: null,
            tree_data: [
                {
                    id: 'frontend',
                    name: '🖥️ Фронтенд',
                    children: [
                        {
                            id: 'landing-page',
                            name: 'Посадочная страница',
                            children: [
                                { id: 'header', name: 'Шапка сайта', children: [] },
                                { id: 'features-section', name: 'Features Section', children: [] },
                                { id: 'cta-section', name: 'CTA Section', children: [] }
                            ]
                        },
                        {
                            id: 'auth-ui',
                            name: 'Authentication UI',
                            children: [
                                { id: 'login-form', name: 'Login Form', children: [] },
                                { id: 'register-form', name: 'Register Form', children: [] },
                                { id: 'forgot-password', name: 'Forgot Password', children: [] }
                            ]
                        },
                        {
                            id: 'dashboard-ui',
                            name: 'Dashboard',
                            children: [
                                { id: 'stats-widget', name: 'Stats Widget', children: [] },
                                { id: 'activity-feed', name: 'Activity Feed', children: [] },
                                { id: 'settings-panel', name: 'Settings Panel', children: [] }
                            ]
                        },
                        {
                            id: 'i18n',
                            name: 'Internationalization',
                            children: []
                        },
                        {
                            id: 'accessibility',
                            name: 'Accessibility',
                            children: []
                        }
                    ]
                },
                {
                    id: 'backend',
                    name: '⚙️ Backend',
                    children: [
                        {
                            id: 'user-api',
                            name: 'User API',
                            children: [
                                { id: 'user-login', name: 'Login Endpoint', children: [] },
                                { id: 'user-register', name: 'Register Endpoint', children: [] },
                                { id: 'user-profile', name: 'Profile Endpoint', children: [] }
                            ]
                        },
                        {
                            id: 'product-api',
                            name: 'Product API',
                            children: [
                                { id: 'product-list', name: 'List Endpoint', children: [] },
                                { id: 'product-detail', name: 'Detail Endpoint', children: [] }
                            ]
                        },
                        {
                            id: 'order-processing',
                            name: 'Order Processing',
                            children: [
                                { id: 'cart-service', name: 'Cart Service', children: [] },
                                { id: 'checkout-service', name: 'Checkout Service', children: [] }
                            ]
                        },
                        {
                            id: 'email-notifications',
                            name: 'Email Notifications',
                            children: []
                        },
                        {
                            id: 'reporting',
                            name: 'Reporting',
                            children: []
                        },
                        {
                            id: 'testing',
                            name: 'Unit & Integration Tests',
                            children: []
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        handleSelect(id) {
            this.active_id = id
            this.$emit('select', id)
        }
    }
}
</script>

<style lang="scss">
.threes-nt {
    .tree-list {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }
}
</style>
