<?php

namespace Zen\Threes\Api\User;


use Zen\Threes\Api\ThreesApi;

class Profile extends ThreesApi
{
    # http://threes.dc/threes.api/user.profile:get
    public function get(): array
    {
        return $this->requireAuth(function () {
            $auth_data = ths()->auth()::getAuthData();
            $user_data = $auth_data['user'] ?? [];

            return [
                'success' => true,
                'user' => [
                    'login' => $user_data['login'] ?? ' -- ',
                    'email' => $user_data['email'] ?? null,
                    'name' => $user_data['name'] ?? null,
                    'telegram_id' => $user_data['telegram_id'] ?? null,
                    'created_at' => $auth_data['created_at'] ?? null,
                    'last_call_at' => $auth_data['last_call_at'] ?? null,
                ]
            ];
        });
    }
}
