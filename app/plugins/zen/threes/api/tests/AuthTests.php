<?php

namespace Zen\Threes\Api\Tests;

use Zen\Threes\Traits\DebugLogTrait;
use Zen\Threes\Classes\Tokens;

class AuthTests
{
    use DebugLogTrait;

    # http://threes.dc/threes.api/tests.AuthTests:testRegistrationAndLogin
    public function testRegistrationAndLogin(): void
    {
        try {
            echo "=== Тест регистрации и входа ===\n\n";

            // Очистка папки токенов
            $path = ths()->env('TOKENS_STORAGE');
            foreach (glob($path . '/user.*.json') as $file) {
                unlink($file);
            }

            $test_login = 'test_user_' . time();
            $test_password = 'test123456';
            $test_email = 'test@example.com';
            $test_name = 'Тестовый пользователь';

            echo "1. Тест регистрации пользователя...\n";
            
            // Регистрация через curl
            $register_data = http_build_query([
                'login' => $test_login,
                'password' => $test_password,
                'email' => $test_email,
                'name' => $test_name,
                'telegram_id' => '123456789'
            ]);

            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, 'http://threes.dc/threes.api/auth.register:register');
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $register_data);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, [
                'Content-Type: application/x-www-form-urlencoded'
            ]);

            $response = curl_exec($ch);
            $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            curl_close($ch);

            if ($http_code !== 200) {
                throw new \Exception("HTTP ошибка: {$http_code}");
            }

            $register_result = json_decode($response, true);
            if (!$register_result || !isset($register_result['success'])) {
                throw new \Exception('Неверный ответ от API регистрации');
            }

            if (!$register_result['success']) {
                throw new \Exception('Ошибка регистрации: ' . ($register_result['messages'][0]['text'] ?? 'Неизвестная ошибка'));
            }

            echo "✓ Пользователь зарегистрирован\n";
            echo "  - Логин: {$test_login}\n";
            echo "  - Токен: {$register_result['token']}\n";

            // Проверяем, что токен создан с правильным UUID (md5 от логина)
            $expected_uuid = md5($test_login);
            $expected_token = "user.{$expected_uuid}";
            
            if ($register_result['token'] !== $expected_token) {
                throw new \Exception("Неверный токен. Ожидалось: {$expected_token}, получено: {$register_result['token']}");
            }

            echo "✓ Токен создан с правильным UUID\n";

            // Проверяем, что файл токена существует
            if (!Tokens::exists($expected_token)) {
                throw new \Exception("Файл токена не найден: {$expected_token}");
            }

            echo "✓ Файл токена создан\n";

            // Получаем данные токена
            $token_data = Tokens::get($expected_token);
            if (!$token_data) {
                throw new \Exception("Не удалось получить данные токена");
            }

            echo "✓ Данные токена получены\n";
            echo "  - UUID: {$token_data['uuid']}\n";
            echo "  - Email: {$token_data['data']['email']}\n";
            echo "  - Name: {$token_data['data']['name']}\n";
            echo "  - Login: {$token_data['data']['login']}\n";

            // Проверяем, что логин сохранен в данных токена
            if ($token_data['data']['login'] !== $test_login) {
                throw new \Exception("Логин в данных токена не совпадает. Ожидалось: {$test_login}, получено: {$token_data['data']['login']}");
            }

            echo "✓ Логин сохранен в данных токена\n";

            echo "\n2. Тест входа пользователя...\n";

            // Вход через curl
            $login_data = http_build_query([
                'login' => $test_login,
                'password' => $test_password
            ]);

            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, 'http://threes.dc/threes.api/auth.login:login');
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $login_data);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, [
                'Content-Type: application/x-www-form-urlencoded'
            ]);

            $response = curl_exec($ch);
            $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            curl_close($ch);

            if ($http_code !== 200) {
                throw new \Exception("HTTP ошибка: {$http_code}");
            }

            $login_result = json_decode($response, true);
            if (!$login_result || !isset($login_result['success'])) {
                throw new \Exception('Неверный ответ от API входа');
            }

            if (!$login_result['success']) {
                throw new \Exception('Ошибка входа: ' . ($login_result['messages'][0]['text'] ?? 'Неизвестная ошибка'));
            }

            echo "✓ Пользователь вошел в систему\n";
            echo "  - Токен: {$login_result['token']}\n";

            // Проверяем, что токен совпадает
            if ($login_result['token'] !== $expected_token) {
                throw new \Exception("Токен входа не совпадает с токеном регистрации");
            }

            echo "✓ Токен входа совпадает с токеном регистрации\n";

            // Проверяем данные пользователя
            if ($login_result['user']['login'] !== $test_login) {
                throw new \Exception("Логин в ответе не совпадает");
            }

            if ($login_result['user']['email'] !== $test_email) {
                throw new \Exception("Email в ответе не совпадает");
            }

            if ($login_result['user']['name'] !== $test_name) {
                throw new \Exception("Имя в ответе не совпадает");
            }

            echo "✓ Данные пользователя корректны\n";

            echo "\n3. Тест AuthMiddleware...\n";

            // Симулируем заголовок авторизации
            $_SERVER['HTTP_THREESAUTH'] = $expected_token;
            
            $auth_data = \Zen\Threes\Classes\AuthMiddleware::checkAuth();
            if (!$auth_data) {
                throw new \Exception("AuthMiddleware не смог проверить авторизацию");
            }

            echo "✓ AuthMiddleware работает\n";
            echo "  - Login: {$auth_data['login']}\n";
            echo "  - Email: {$auth_data['user']['email']}\n";

            // Проверяем, что логин получен из данных токена
            if ($auth_data['login'] !== $test_login) {
                throw new \Exception("AuthMiddleware вернул неверный логин. Ожидалось: {$test_login}, получено: {$auth_data['login']}");
            }

            echo "✓ Логин получен из данных токена\n";

            echo "\n4. Тест API профиля...\n";

            // Тест API профиля через curl
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, 'http://threes.dc/threes.api/user.profile:get');
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, [
                'ThreesAuth: ' . $expected_token
            ]);

            $response = curl_exec($ch);
            $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            curl_close($ch);

            if ($http_code !== 200) {
                throw new \Exception("HTTP ошибка при получении профиля: {$http_code}");
            }

            $profile_result = json_decode($response, true);
            if (!$profile_result || !isset($profile_result['success'])) {
                throw new \Exception('Неверный ответ от API профиля');
            }

            if (!$profile_result['success']) {
                throw new \Exception('Ошибка получения профиля: ' . ($profile_result['messages'][0]['text'] ?? 'Неизвестная ошибка'));
            }

            echo "✓ Профиль получен\n";
            echo "  - Login: {$profile_result['user']['login']}\n";
            echo "  - Email: {$profile_result['user']['email']}\n";
            echo "  - Name: {$profile_result['user']['name']}\n";

            // Проверяем данные профиля
            if ($profile_result['user']['login'] !== $test_login) {
                throw new \Exception("Логин в профиле не совпадает");
            }

            if ($profile_result['user']['email'] !== $test_email) {
                throw new \Exception("Email в профиле не совпадает");
            }

            if ($profile_result['user']['name'] !== $test_name) {
                throw new \Exception("Имя в профиле не совпадает");
            }

            echo "✓ Данные профиля корректны\n";

            // Очистка
            Tokens::remove($expected_token);

            echo "\n=== Все тесты пройдены успешно! ===\n";
            echo "Система аутентификации работает корректно.\n";

        } catch (\Throwable $e) {
            $this->logError($e);
        }
    }
}
