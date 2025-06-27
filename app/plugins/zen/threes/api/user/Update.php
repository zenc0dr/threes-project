<?php

namespace Zen\Threes\Api\User;

use Zen\Threes\Classes\Tokens;
use Zen\Threes\Classes\AuthMiddleware;

class Update
{
    # http://threes.dc/threes.api/user.update:update
    public function update(): array
    {
        $auth_data = AuthMiddleware::requireAuth();
        if (isset($auth_data['success']) && !$auth_data['success']) {
            return $auth_data;
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
                return [
                    'success' => false,
                    'messages' => [
                        ['type' => 'error', 'text' => 'Для смены пароля требуется указать текущий пароль']
                    ]
                ];
            }

            if (!AuthMiddleware::verifyPassword($auth_data, $current_password)) {
                return [
                    'success' => false,
                    'messages' => [
                        ['type' => 'error', 'text' => 'Неверный текущий пароль']
                    ]
                ];
            }

            if (strlen($new_password) < 6) {
                return [
                    'success' => false,
                    'messages' => [
                        ['type' => 'error', 'text' => 'Новый пароль должен содержать минимум 6 символов']
                    ]
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
            return [
                'success' => false,
                'messages' => [
                    ['type' => 'error', 'text' => 'Ошибка обновления данных']
                ]
            ];
        }

        return [
            'success' => true,
            'messages' => [
                ['type' => 'success', 'text' => 'Данные пользователя обновлены']
            ],
            'user' => [
                'login' => $auth_data['login'],
                'email' => $user_data['email'] ?? null,
                'name' => $user_data['name'] ?? null,
                'telegram_id' => $user_data['telegram_id'] ?? null,
            ]
        ];
    }
} 