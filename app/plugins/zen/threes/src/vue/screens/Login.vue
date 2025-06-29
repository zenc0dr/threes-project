<template>
    <div class="threes-auth">
        <div class="auth-box">
            <h2>{{ isRegister ? 'Регистрация' : 'Вход' }}</h2>

            <div v-if="isRegister">
                <input v-model="login" type="text" placeholder="Логин" />
                <input v-model="email" type="email" placeholder="Email (необязательно)" />
                <input v-model="name" type="text" placeholder="Имя (необязательно)" />
                <input v-model="telegram_id" type="text" placeholder="Telegram ID (необязательно)" />
            </div>

            <div v-else>
                <input v-model="login" type="text" placeholder="Логин" />
            </div>

            <input v-model="password" type="password" placeholder="Пароль" />

            <button @click="handleAuth" :disabled="loading">
                {{ loading ? (isRegister ? "Регистрируем..." : "Входим...") : (isRegister ? "Зарегистрироваться" : "Войти") }}
            </button>

            <p class="toggle-mode" @click="toggleMode">
                {{ isRegister ? 'Уже есть аккаунт? Войти' : 'Нет аккаунта? Зарегистрироваться' }}
            </p>

            <p class="error" v-if="error">{{ error }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            isRegister: false,
            login: "",
            password: "",
            email: "",
            name: "",
            telegram_id: "",
            loading: false,
            error: null,
        };
    },
    methods: {
        handleAuth() {
            this.loading = true;
            this.error = null;

            const finalize = () => {
                this.loading = false;
            };

            const callback = (response) => {
                if (response.success) {
                    localStorage.setItem('ths_token', response.token);
                    this.$router.push('/');
                } else {
                    this.error = response.messages?.[0]?.text || (this.isRegister ? 'Ошибка регистрации' : 'Ошибка авторизации');
                }
                finalize();
            };

            const data = {
                login: this.login,
                password: this.password,
            };

            if (this.isRegister) {
                if (this.email) data.email = this.email;
                if (this.name) data.name = this.name;
                if (this.telegram_id) data.telegram_id = this.telegram_id;

                ths.api({
                    api: 'auth.register:register',
                    data,
                    then: callback,
                    catch: (err) => {
                        console.error(err);
                        this.error = "Ошибка сети или сервера";
                        finalize();
                    }
                });
            } else {
                ths.api({
                    api: 'auth.login:login',
                    data,
                    then: callback,
                    catch: (err) => {
                        console.error(err);
                        this.error = "Ошибка сети или сервера";
                        finalize();
                    }
                });
            }
        },

        toggleMode() {
            this.isRegister = !this.isRegister;
            this.error = null;
        },
    },
};
</script>

<style lang="scss">
.threes-auth {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: #f5f5f5;

    .auth-box {
        background: #fff;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        width: 350px;

        h2 {
            text-align: center;
            margin-bottom: 1.5rem;
            color: #333;
        }

        input {
            display: block;
            width: 100%;
            margin-bottom: 1rem;
            padding: 0.75rem;
            font-size: 1rem;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box;

            &:focus {
                outline: none;
                border-color: #007acc;
            }
        }

        button {
            width: 100%;
            padding: 0.75rem;
            background: #007acc;
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 4px;
            font-size: 1rem;
            margin-bottom: 1rem;

            &:disabled {
                background: #ccc;
                cursor: not-allowed;
            }

            &:hover:not(:disabled) {
                background: #005a9e;
            }
        }

        .toggle-mode {
            text-align: center;
            color: #007acc;
            cursor: pointer;
            margin: 0;
            font-size: 0.9rem;

            &:hover {
                text-decoration: underline;
            }
        }

        .error {
            margin-top: 1rem;
            color: #d32f2f;
            font-size: 0.9rem;
            text-align: center;
        }
    }
}
</style>
