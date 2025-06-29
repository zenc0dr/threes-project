<template>
    <div class="threes-user">
        <div class="tree-user-info">
            <div v-if="user" class="user-name" @click="$router.push('/profile')">
                {{ user.name || user.login }}
            </div>
            <div class="logout-component">
                <button @click="logout" class="logout-btn">
                    Выйти
                </button>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'User',
    data() {
        return {
            user: ths.data.user
        }
    },
    methods: {
        logout() {
            // Удаляем токен из localStorage
            localStorage.removeItem('ths_token');

            // Перенаправляем на страницу входа
            this.$router.push('/login');
        }
    }
}
</script>
<style lang="scss">
.threes-user {
    flex-shrink: 0;
    background: #f8f9fa;
    border-top: 1px solid #e9ecef;

    .tree-user-info {
        padding: 12px 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        min-height: 60px;
        box-sizing: border-box;

        .user-name {
            color: #495057;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: color 0.2s;
            flex: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

            &:hover {
                color: #007acc;
            }
        }
    }

    .logout-component {
        .logout-btn {
            padding: 0.5rem 1rem;
            background: #d32f2f;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.9rem;

            &:hover {
                background: #b71c1c;
            }
        }
    }
}
</style>
