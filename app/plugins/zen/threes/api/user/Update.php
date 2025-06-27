<?php

namespace Zen\Threes\Api\User;

use Zen\Threes\Classes\Tokens;

class Update
{
    # http://threes.dc/threes.api/user.update:update
    public function update(): array
    {
        $auth_data = ths()->auth()::checkAuth();
        if (!$auth_data) {
            ths()->messages()->addMessage('Требуется авторизация', 'error');
            return [
                'success' => false
            ];
        }

        $user_data = $auth_data['user'] ?? [];
        $current_password = request('current_password');
        $new_password = request('new_password');
        $email = request('email');
        $name = request('name');
        $telegram_id = request('telegram_id');
        $data = request('data');

        // Если передается новый пароль, проверяем текущий
        if ($new_password) {
            if (!$current_password) {
                ths()->messages()->addMessage('Для смены пароля требуется указать текущий пароль', 'error');
                return [
                    'success' => false
                ];
            }

            if (!ths()->auth()->verifyPassword($auth_data, $current_password)) {
                ths()->messages()->addMessage('Неверный текущий пароль', 'error');
                return [
                    'success' => false
                ];
            }

            if (strlen($new_password) < 6) {
                ths()->messages()->addMessage('Новый пароль должен содержать минимум 6 символов', 'error');
                return [
                    'success' => false
                ];
            }

            $user_data['password'] = password_hash($new_password, PASSWORD_BCRYPT);
        }

        // Обновление других полей
        if ($email !== null) {
            $user_data['email'] = $email;
        }
        if ($name !== null) {
            $user_data['name'] = $name;
        }
        if ($telegram_id !== null) {
            $user_data['telegram_id'] = $telegram_id;
        }
        if ($data !== null) {
            $user_data['data'] = $data;
        }

        // Обновление токена
        $updated_token = Tokens::update($auth_data['token'], [
            'data' => $user_data,
            'last_call_at' => now()->toISOString(),
        ]);

        if (!$updated_token) {
            ths()->messages()->addMessage('Ошибка обновления данных', 'error');
            return [
                'success' => false
            ];
        }

        ths()->messages()->addMessage('Данные пользователя обновлены');

        return [
            'success' => true,
            'user' => [
                'login' => $auth_data['login'],
                'email' => $user_data['email'] ?? null,
                'name' => $user_data['name'] ?? null,
                'telegram_id' => $user_data['telegram_id'] ?? null,
            ]
        ];
    }
}
