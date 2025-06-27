<?php

namespace Zen\Threes\Api\User;

use Zen\Threes\Classes\Tokens;

class Delete
{
    # http://threes.dc/threes.api/user.delete:delete
    public function delete(): array
    {
        $auth_data = ths()->auth()::requireAuth();
        if (isset($auth_data['success']) && !$auth_data['success']) {
            return $auth_data;
        }

        $password = request('password');
        if (!$password) {
            return [
                'success' => false,
                'messages' => [
                    ['type' => 'error', 'text' => 'Для удаления аккаунта требуется указать пароль']
                ]
            ];
        }

        // Проверка пароля
        if (!ths()->auth()::verifyPassword($auth_data, $password)) {
            return [
                'success' => false,
                'messages' => [
                    ['type' => 'error', 'text' => 'Неверный пароль']
                ]
            ];
        }

        // Удаление токена
        $deleted = Tokens::remove($auth_data['token']);
        if (!$deleted) {
            return [
                'success' => false,
                'messages' => [
                    ['type' => 'error', 'text' => 'Ошибка удаления аккаунта']
                ]
            ];
        }

        return [
            'success' => true,
            'messages' => [
                ['type' => 'success', 'text' => 'Аккаунт успешно удален']
            ]
        ];
    }
}
