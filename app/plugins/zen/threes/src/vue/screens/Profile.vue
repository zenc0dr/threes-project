<template>
    <div class="threes-profile">
        <div class="profile-container">
            <h2>Профиль пользователя</h2>
            
            <div v-if="loading" class="loading">
                Загрузка профиля...
            </div>
            
            <div v-else-if="user" class="profile-form">
                <div class="form-group">
                    <label>Логин:</label>
                    <input v-model="user.login" disabled />
                </div>
                
                <div class="form-group">
                    <label>Email:</label>
                    <input v-model="user.email" type="email" placeholder="Введите email" />
                </div>
                
                <div class="form-group">
                    <label>Имя:</label>
                    <input v-model="user.name" type="text" placeholder="Введите имя" />
                </div>
                
                <div class="form-group">
                    <label>Telegram ID:</label>
                    <input v-model="user.telegram_id" type="text" placeholder="Введите Telegram ID" />
                </div>
                
                <div class="form-group">
                    <label>Дата регистрации:</label>
                    <input v-model="user.created_at" disabled />
                </div>
                
                <div class="form-group">
                    <label>Последний вход:</label>
                    <input v-model="user.last_call_at" disabled />
                </div>
                
                <button @click="updateProfile" :disabled="updating">
                    {{ updating ? 'Обновляем...' : 'Обновить профиль' }}
                </button>
                
                <div class="password-section">
                    <h3>Смена пароля</h3>
                    <div class="form-group">
                        <label>Текущий пароль:</label>
                        <input v-model="passwordForm.current" type="password" placeholder="Введите текущий пароль" />
                    </div>
                    
                    <div class="form-group">
                        <label>Новый пароль:</label>
                        <input v-model="passwordForm.new" type="password" placeholder="Введите новый пароль" />
                    </div>
                    
                    <button @click="changePassword" :disabled="changingPassword">
                        {{ changingPassword ? 'Меняем пароль...' : 'Сменить пароль' }}
                    </button>
                </div>
                
                <div class="danger-zone">
                    <h3>Опасная зона</h3>
                    <div class="form-group">
                        <label>Пароль для подтверждения:</label>
                        <input v-model="deleteForm.password" type="password" placeholder="Введите пароль для удаления аккаунта" />
                    </div>
                    
                    <button @click="deleteAccount" :disabled="deleting" class="delete-btn">
                        {{ deleting ? 'Удаляем...' : 'Удалить аккаунт' }}
                    </button>
                </div>
                
                <p class="error" v-if="error">{{ error }}</p>
                <p class="success" v-if="success">{{ success }}</p>
            </div>
            
            <div v-else class="error">
                Не удалось загрузить профиль
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Profile",
    data() {
        return {
            user: null,
            loading: true,
            updating: false,
            changingPassword: false,
            deleting: false,
            error: null,
            success: null,
            passwordForm: {
                current: '',
                new: ''
            },
            deleteForm: {
                password: ''
            }
        };
    },
    mounted() {
        this.loadProfile();
    },
    methods: {
        async loadProfile() {
            this.loading = true;
            this.error = null;
            
            ths.api({
                api: 'user.profile:get',
                then: (response) => {
                    this.loading = false;
                    if (response.success) {
                        this.user = response.user;
                    } else {
                        this.error = response.messages?.[0]?.text || 'Ошибка загрузки профиля';
                    }
                }
            });
        },

        async updateProfile() {
            this.updating = true;
            this.error = null;
            this.success = null;
            
            const data = {};
            if (this.user.email !== null) data.email = this.user.email;
            if (this.user.name !== null) data.name = this.user.name;
            if (this.user.telegram_id !== null) data.telegram_id = this.user.telegram_id;
            
            ths.api({
                api: 'user.update:update',
                data: data,
                then: (response) => {
                    this.updating = false;
                    if (response.success) {
                        this.success = 'Профиль успешно обновлен';
                        this.user = response.user;
                    } else {
                        this.error = response.messages?.[0]?.text || 'Ошибка обновления профиля';
                    }
                }
            });
        },

        async changePassword() {
            if (!this.passwordForm.current || !this.passwordForm.new) {
                this.error = 'Заполните все поля для смены пароля';
                return;
            }
            
            if (this.passwordForm.new.length < 6) {
                this.error = 'Новый пароль должен содержать минимум 6 символов';
                return;
            }
            
            this.changingPassword = true;
            this.error = null;
            this.success = null;
            
            ths.api({
                api: 'user.update:update',
                data: {
                    current_password: this.passwordForm.current,
                    new_password: this.passwordForm.new
                },
                then: (response) => {
                    this.changingPassword = false;
                    if (response.success) {
                        this.success = 'Пароль успешно изменен';
                        this.passwordForm.current = '';
                        this.passwordForm.new = '';
                    } else {
                        this.error = response.messages?.[0]?.text || 'Ошибка смены пароля';
                    }
                }
            });
        },

        async deleteAccount() {
            if (!this.deleteForm.password) {
                this.error = 'Введите пароль для подтверждения удаления';
                return;
            }
            
            if (!confirm('Вы уверены, что хотите удалить свой аккаунт? Это действие нельзя отменить.')) {
                return;
            }
            
            this.deleting = true;
            this.error = null;
            
            ths.api({
                api: 'user.delete:delete',
                data: {
                    password: this.deleteForm.password
                },
                then: (response) => {
                    this.deleting = false;
                    if (response.success) {
                        // Удаляем токен и перенаправляем на страницу входа
                        localStorage.removeItem('ths_token');
                        this.$router.push('/login');
                    } else {
                        this.error = response.messages?.[0]?.text || 'Ошибка удаления аккаунта';
                    }
                }
            });
        }
    }
};
</script>

<style lang="scss">
.threes-profile {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: #f5f5f5;
    padding: 2rem;

    .profile-container {
        background: #fff;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 500px;

        h2 {
            text-align: center;
            margin-bottom: 2rem;
            color: #333;
        }

        .loading {
            text-align: center;
            color: #666;
            padding: 2rem;
        }

        .form-group {
            margin-bottom: 1rem;

            label {
                display: block;
                margin-bottom: 0.5rem;
                font-weight: 500;
                color: #333;
            }

            input {
                width: 100%;
                padding: 0.75rem;
                border: 1px solid #ddd;
                border-radius: 4px;
                font-size: 1rem;
                box-sizing: border-box;

                &:focus {
                    outline: none;
                    border-color: #007acc;
                }

                &:disabled {
                    background: #f5f5f5;
                    color: #666;
                }
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

            &.delete-btn {
                background: #d32f2f;

                &:hover:not(:disabled) {
                    background: #b71c1c;
                }
            }
        }

        .password-section, .danger-zone {
            margin-top: 2rem;
            padding-top: 2rem;
            border-top: 1px solid #eee;

            h3 {
                margin-bottom: 1rem;
                color: #333;
            }
        }

        .danger-zone {
            border-top-color: #ffcdd2;
            
            h3 {
                color: #d32f2f;
            }
        }

        .error {
            color: #d32f2f;
            text-align: center;
            margin-top: 1rem;
        }

        .success {
            color: #388e3c;
            text-align: center;
            margin-top: 1rem;
        }
    }
}
</style> 