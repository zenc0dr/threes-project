<template>
    <div class="logout-component">
        <button @click="logout" class="logout-btn">
            Выйти
        </button>
    </div>
</template>

<script>
export default {
    name: "Logout",
    methods: {
        logout() {
            // Удаляем токен из localStorage
            localStorage.removeItem('ths_token');
            
            // Перенаправляем на страницу входа
            this.$router.push('/login');
        }
    }
};
</script>

<style lang="scss">
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
</style> 