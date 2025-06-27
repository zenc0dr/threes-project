<template>
    <div class="threes-auth">
        <form @submit.prevent="login" class="auth-form">
            <input v-model="email" type="text" placeholder="Email" />
            <input v-model="password" type="password" placeholder="Пароль" />
            <button :disabled="loading" type="submit">Войти</button>
            <div class="error" v-if="error">{{ error }}</div>
        </form>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: "",
            loading: false,
            error: null,
        };
    },
    methods: {
        login() {
            this.loading = true;
            this.error = null;

            ths.api({
                url: "/login", // Laravel стандартный
                data: {
                    email: this.email,
                    password: this.password,
                },
                then: () => {
                    location.reload(); // Чтобы перезапустился <meta name="csrf-token">
                },
            });
        },
    },
};
</script>

<style scoped>
.threes-auth {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
.auth-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 300px;
}
input, button {
    padding: 0.5rem;
    font-size: 1rem;
}
.error {
    color: red;
    font-size: 0.9rem;
}
</style>
