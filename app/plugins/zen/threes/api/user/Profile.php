<?php

namespace Zen\Threes\Api\User;


class Profile
{
    # http://threes.dc/threes.api/user.profile:get
    public function get(): array
    {
        $auth_data = ths()->auth()::checkAuth();
        if (!$auth_data) {
            ths()->messages()->addMessage('Требуется авторизация', 'error');
            return [
                'success' => false
            ];
        }

        $user_data = $auth_data['user'] ?? [];

        return [
            'success' => true,
            'user' => [
                'login' => $auth_data['login'],
                'email' => $user_data['email'] ?? null,
                'name' => $user_data['name'] ?? null,
                'telegram_id' => $user_data['telegram_id'] ?? null,
                'created_at' => $auth_data['created_at'] ?? null,
                'last_call_at' => $auth_data['last_call_at'] ?? null,
            ]
        ];
    }
}
