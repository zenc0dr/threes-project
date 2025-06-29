<?php

namespace Zen\Threes\Api\Auth;

use Zen\Threes\Classes\Tokens;

class Login
{
    # http://threes.dc/threes.api/auth.login:login
    public function login(): array
    {
        $login = request('login');
        $password = request('password');

        # Валидация обязательных полей
        if (!$login || !$password) {
            return [
                'success' => false,
                'messages' => [
                    ['type' => 'error', 'text' => 'Логин и пароль обязательны']
                ]
            ];
        }

        if (!$this->checkWhiteList($login)) {
            return [
                'success' => false,
                'messages' => [
                    ['type' => 'error', 'text' => 'Ваш логин должен быть активирован администратором']
                ]
            ];
        }

        # Проверка существования пользователя
        $login_hash = md5($login);
        $token_uuid = 'user.' . $login_hash;
        $token_data = Tokens::get($token_uuid);

        if (!$token_data) {
            return [
                'success' => false,
                'messages' => [
                    ['type' => 'error', 'text' => 'Пользователь не найден']
                ]
            ];
        }

        # Проверка пароля
        $user_data = $token_data['data'] ?? [];
        if (!isset($user_data['password']) || !password_verify($password, $user_data['password'])) {
            return [
                'success' => false,
                'messages' => [
                    ['type' => 'error', 'text' => 'Неверный пароль']
                ]
            ];
        }

        # Обновление времени последнего входа
        Tokens::update($token_uuid, [
            'last_call_at' => now()->toISOString(),
        ]);

        return [
            'success' => true,
            'messages' => [
                ['type' => 'success', 'text' => 'Успешная авторизация']
            ],
            'token' => $token_uuid,
            'user' => [
                'login' => $login,
                'email' => $user_data['email'] ?? null,
                'name' => $user_data['name'] ?? null,
                'telegram_id' => $user_data['telegram_id'] ?? null,
            ]
        ];
    }

    private function checkWhiteList(string $login): bool
    {
        $white_list = ths()->env('THREES_WHITE_LIST', '');
        $white_list = array_map('trim', explode(',', $white_list));
        return in_array($login, $white_list);
    }
}
