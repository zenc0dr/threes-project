<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Exceptions\AuthException;

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
    public static function getAuthData(): ?array
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

    public static function check(): array
    {
        $auth = self::getAuthData();
        if (!$auth) {
            throw new AuthException();
        }
        return $auth;
    }

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
