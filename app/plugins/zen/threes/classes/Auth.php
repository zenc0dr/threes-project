<?php

namespace Zen\Threes\Classes;

/**
 * Класс аутентификации
 * разрешены только статические методы
 */
class Auth
{
    /**
     * Проверяет авторизацию пользователя
     *
     * @return array|null Возвращает данные пользователя или null если не авторизован
     */
    public static function checkAuth(): ?array
    {
        $auth_token = request()->header('ThreesAuth');

        if (!$auth_token) {
            return null;
        }

        $token_data = Tokens::get($auth_token);
        if (!$token_data) {
            return null;
        }

        return [
            'token' => $auth_token,
            'user' => $token_data['data'] ?? [],
            'login' => $token_data['uuid'],
            'created_at' => $token_data['created_at'] ?? null,
            'last_call_at' => $token_data['last_call_at'] ?? null,
        ];
    }

//    /**
//     * Проверяет авторизацию и возвращает ошибку если не авторизован
//     *
//     * @return array|null Возвращает данные пользователя или массив с ошибкой
//     */
//    public static function requireAuth(): ?array
//    {
//        $auth_data = self::checkAuth();
//
//        if (!$auth_data) {
//            return [
//                'success' => false,
//                'messages' => [
//                    ['type' => 'error', 'text' => 'Требуется авторизация']
//                ]
//            ];
//        }
//
//        return $auth_data;
//    }

    /**
     * Проверяет пароль пользователя
     *
     * @param array $auth_data Данные авторизации
     * @param string $password Пароль для проверки
     * @return bool
     */
    public static function verifyPassword(array $auth_data, string $password): bool
    {
        $user_data = $auth_data['user'] ?? [];
        $hashed_password = $user_data['password'] ?? '';

        return password_verify($password, $hashed_password);
    }
}
