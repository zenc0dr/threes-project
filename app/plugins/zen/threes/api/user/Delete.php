<?php

namespace Zen\Threes\Api\User;

use Zen\Threes\Classes\Tokens;

class Delete
{
    # http://threes.dc/threes.api/user.delete:delete
    public function delete(): array
    {
        $auth_data = ths()->auth()::checkAuth();
        if (!$auth_data) {
            ths()->messages()->addMessage('Требуется авторизация', 'error');
            return [
                'success' => false
            ];
        }

        $password = request('password');
        if (!$password) {
            ths()->messages()->addMessage('Для удаления аккаунта требуется указать пароль', 'error');
            return [
                'success' => false
            ];
        }

        # Проверка пароля
        if (!ths()->auth()->verifyPassword($auth_data, $password)) {
            ths()->messages()->addMessage('Неверный пароль', 'error');
            return [
                'success' => false
            ];
        }

        # Удаление токена
        $deleted = Tokens::remove($auth_data['token']);
        if (!$deleted) {
            ths()->messages()->addMessage('Ошибка удаления аккаунта', 'error');
            return [
                'success' => false,
            ];
        }

        ths()->messages()->addMessage('Аккаунт успешно удален');
        return [
            'success' => true,
        ];
    }
}
