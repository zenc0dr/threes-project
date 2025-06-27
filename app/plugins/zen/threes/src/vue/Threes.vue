<template>
    <div class="threes">
        <div v-if="isAuthenticated" class="threes-header">
            <div class="header-content">
                <h1>Threes</h1>
                <div class="user-info">
                    <span v-if="user">{{ user.name || user.login }}</span>
                    <Logout />
                </div>
            </div>
        </div>
        
        <router-view />
        <threes-alerts />
        <threes-submit />
    </div>
</template>

<script>
import ThreesAlerts from "./components/ThreesAlerts.vue";
import ThreesSubmit from "./components/ThreesSubmit.vue";
import Logout from "./components/Logout.vue";

export default {
    name: "Threes",
    components: {
        ThreesAlerts,
        ThreesSubmit,
        Logout
    },
    data() {
        return {
            user: null,
            checkingAuth: true
        };
    },
    mounted() {
        this.checkAuth();
    },
    computed: {
        isAuthenticated() {
            return !this.checkingAuth && !!localStorage.getItem('ths_token');
        },
    },
    methods: {
        checkAuth() {
            const token = localStorage.getItem('ths_token');
            if (!token) {
                this.checkingAuth = false;
                this.$router.push('/login');
                return;
            }

            // Проверяем валидность токена
            ths.api({
                api: 'user.profile:get',
                then: (response) => {
                    this.checkingAuth = false;
                    if (response.success) {
                        this.user = response.user;
                    } else {
                        // Токен недействителен
                        localStorage.removeItem('ths_token');
                        this.$router.push('/login');
                    }
                }
            });
        }
    }
}
</script>

<style lang="scss">
.threes {
    min-height: 100vh;
    
    .threes-header {
        background: #fff;
        border-bottom: 1px solid #eee;
        padding: 1rem 0;
        
        .header-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            h1 {
                margin: 0;
                color: #333;
                font-size: 1.5rem;
            }
            
            .user-info {
                display: flex;
                align-items: center;
                gap: 1rem;
                
                span {
                    color: #666;
                    font-size: 0.9rem;
                }
            }
        }
    }
}
</style>
