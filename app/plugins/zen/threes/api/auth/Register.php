<?php

/**
 * API для регистрации пользователей
 */

namespace Zen\Threes\Api\Auth;

use Zen\Threes\Classes\Tokens;

/**
 * Класс для регистрации пользователей
 */
class Register
{
    # http://threes.dc/threes.api/auth.register:register
    /**
     * Регистрация нового пользователя
     *
     * @return array
     */
    public function register(): array
    {
        $login = request('login');
        $password = request('password');
        $email = request('email');
        $telegram_id = request('telegram_id');
        $name = request('name');
        $data = request('data', []);

        # Валидация обязательных полей
        if (!$login || !$password) {
            return [
                'success' => false,
                'messages' => [
                    ['type' => 'error', 'text' => 'Логин и пароль обязательны']
                ]
            ];
        }

        # Проверка формата логина
        if (!preg_match('/^[a-zA-Z0-9_]{3,20}$/', $login)) {
            return [
                'success' => false,
                'messages' => [
                    ['type' => 'error', 'text' => 'Логин должен содержать 3-20 символов (буквы, цифры, подчеркивания)']
                ]
            ];
        }

        # Проверка длины пароля
        if (strlen($password) < 6) {
            return [
                'success' => false,
                'messages' => [
                    ['type' => 'error', 'text' => 'Пароль должен содержать минимум 6 символов']
                ]
            ];
        }

        $login_hash = md5($login);
        $token_uuid = "user.$login_hash";

        # Проверка, что пользователь не существует
        if (Tokens::exists($token_uuid)) {
            return [
                'success' => false,
                'messages' => [
                    ['type' => 'error', 'text' => 'Пользователь с таким логином уже существует']
                ]
            ];
        }

        # Хэширование пароля
        $hashed_password = password_hash($password, PASSWORD_BCRYPT);

        # Создание токена пользователя
        $user_data = [
            'password' => $hashed_password,
            'email' => $email,
            'telegram_id' => $telegram_id,
            'name' => $name,
            'data' => $data,
        ];

        Tokens::create(
            'user',
            [
                'uuid' => $token_uuid,
                'data' => $user_data,
                'last_call_at' => now()->toISOString(),
            ]
        );

        return [
            'success' => true,
            'messages' => [
                ['type' => 'success', 'text' => 'Пользователь успешно зарегистрирован']
            ],
            'token' => $token_uuid
        ];
    }
}
