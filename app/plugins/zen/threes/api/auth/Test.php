<?php

namespace Zen\Threes\Api\Auth;

use Zen\Threes\Classes\Tokens;
use Zen\Threes\Classes\Auth;

class Test
{
    # http://threes.dc/threes.api/auth.test:test
    public function test(): array
    {
        return [
            'success' => true,
            'message' => 'Auth API работает!',
            'timestamp' => now()->toISOString()
        ];
    }

    # http://threes.dc/threes.api/auth.test:create-test-user
    public function createTestUser(): array
    {
        $login = 'test_user_' . time();
        $password = 'test123';

        // Проверка, что пользователь не существует
        $token_id = "user.{$login}";
        if (Tokens::exists($token_id)) {
            return [
                'success' => false,
                'messages' => [
                    ['type' => 'error', 'text' => 'Тестовый пользователь уже существует']
                ]
            ];
        }

        // Хэширование пароля
        $hashed_password = password_hash($password, PASSWORD_BCRYPT);

        // Создание токена пользователя
        $user_data = [
            'password' => $hashed_password,
            'email' => 'test@example.com',
            'name' => 'Тестовый пользователь',
            'telegram_id' => '123456789',
            'data' => ['test' => true],
        ];

        $token = Tokens::create('user', [
            'uuid' => $login,
            'data' => $user_data,
            'last_call_at' => now()->toISOString(),
        ]);

        return [
            'success' => true,
            'messages' => [
                ['type' => 'success', 'text' => 'Тестовый пользователь создан']
            ],
            'test_user' => [
                'login' => $login,
                'password' => $password,
                'token' => $token_id
            ]
        ];
    }

    # http://threes.dc/threes.api/auth.test:check-auth
    public function checkAuth(): array
    {
        $auth_data = Auth::checkAuth();

        if (!$auth_data) {
            return [
                'success' => false,
                'authenticated' => false,
                'messages' => [
                    ['type' => 'info', 'text' => 'Пользователь не авторизован']
                ]
            ];
        }

        return [
            'success' => true,
            'authenticated' => true,
            'user' => [
                'login' => $auth_data['login'],
                'email' => $auth_data['user']['email'] ?? null,
                'name' => $auth_data['user']['name'] ?? null,
                'created_at' => $auth_data['created_at'],
                'last_call_at' => $auth_data['last_call_at'],
            ]
        ];
    }
}
