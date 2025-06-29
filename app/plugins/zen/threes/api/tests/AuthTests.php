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
            echo "  - Subtype: {$token_data['subtype']}\n";
            echo "  - Write: " . ($token_data['write'] ? 'true' : 'false') . "\n";
            echo "  - Email: {$token_data['data']['email']}\n";
            echo "  - Name: {$token_data['data']['name']}\n";

            // Проверяем структуру токена
            if ($token_data['subtype'] !== 'user') {
                throw new \Exception("Неверный subtype токена. Ожидалось: user, получено: {$token_data['subtype']}");
            }

            if (!$token_data['write']) {
                throw new \Exception("Токен должен иметь write: true после создания");
            }

            echo "✓ Структура токена корректна\n";

            // Проверяем, что данные пользователя сохранены корректно
            if ($token_data['data']['email'] !== $test_email) {
                throw new \Exception("Email в данных токена не совпадает. Ожидалось: {$test_email}, получено: {$token_data['data']['email']}");
            }

            if ($token_data['data']['name'] !== $test_name) {
                throw new \Exception("Name в данных токена не совпадает. Ожидалось: {$test_name}, получено: {$token_data['data']['name']}");
            }

            if ($token_data['data']['telegram_id'] !== '123456789') {
                throw new \Exception("Telegram ID в данных токена не совпадает");
            }

            echo "✓ Данные пользователя сохранены корректно\n";

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

            // Проверяем данные пользователя в ответе
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

            // Проверяем, что last_call_at обновился
            $updated_token_data = Tokens::get($expected_token);
            if (!$updated_token_data['last_call_at']) {
                throw new \Exception("last_call_at не обновился после входа");
            }

            echo "✓ Время последнего входа обновлено\n";

            echo "\n3. Тест класса Auth...\n";

            // Симулируем заголовок авторизации
            $_SERVER['HTTP_THREESAUTH'] = $expected_token;

            $auth_data = \Zen\Threes\Classes\Auth::getAuthData();
            if (!$auth_data) {
                throw new \Exception("Auth::getAuthData() не смог проверить авторизацию");
            }

            echo "✓ Auth::getAuthData() работает\n";
            echo "  - Token: {$auth_data['token']}\n";
            echo "  - Login: {$auth_data['login']}\n";
            echo "  - Email: {$auth_data['user']['email']}\n";

            // Проверяем структуру данных авторизации
            if ($auth_data['token'] !== $expected_token) {
                throw new \Exception("Токен в данных авторизации не совпадает");
            }

            if ($auth_data['login'] !== $expected_token) {
                throw new \Exception("Login в данных авторизации не совпадает с UUID токена");
            }

            if ($auth_data['user']['email'] !== $test_email) {
                throw new \Exception("Email в данных авторизации не совпадает");
            }

            echo "✓ Структура данных авторизации корректна\n";

            // Тест метода check()
            try {
                $auth_check = \Zen\Threes\Classes\Auth::check();
                echo "✓ Auth::check() работает\n";
            } catch (\Exception $e) {
                throw new \Exception("Auth::check() должен работать с валидным токеном");
            }

            // Тест проверки пароля
            $password_valid = \Zen\Threes\Classes\Auth::verifyPassword($auth_data, $test_password);
            if (!$password_valid) {
                throw new \Exception("Auth::verifyPassword() не смог проверить пароль");
            }

            echo "✓ Auth::verifyPassword() работает\n";

            // Тест с неверным паролем
            $password_invalid = \Zen\Threes\Classes\Auth::verifyPassword($auth_data, 'wrong_password');
            if ($password_invalid) {
                throw new \Exception("Auth::verifyPassword() должен возвращать false для неверного пароля");
            }

            echo "✓ Проверка неверного пароля работает\n";

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
            echo "  - Created at: {$profile_result['user']['created_at']}\n";
            echo "  - Last call at: {$profile_result['user']['last_call_at']}\n";

            // Проверяем данные профиля
            if ($profile_result['user']['login'] !== $expected_token) {
                throw new \Exception("Login в профиле должен быть UUID токена");
            }

            if ($profile_result['user']['email'] !== $test_email) {
                throw new \Exception("Email в профиле не совпадает");
            }

            if ($profile_result['user']['name'] !== $test_name) {
                throw new \Exception("Имя в профиле не совпадает");
            }

            echo "✓ Данные профиля корректны\n";

            echo "\n5. Тест ошибок аутентификации...\n";

            // Тест входа с неверным паролем
            $wrong_password_data = http_build_query([
                'login' => $test_login,
                'password' => 'wrong_password'
            ]);

            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, 'http://threes.dc/threes.api/auth.login:login');
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $wrong_password_data);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, [
                'Content-Type: application/x-www-form-urlencoded'
            ]);

            $response = curl_exec($ch);
            $wrong_password_result = json_decode($response, true);
            curl_close($ch);

            if ($wrong_password_result['success']) {
                throw new \Exception("Вход с неверным паролем должен завершиться ошибкой");
            }

            echo "✓ Вход с неверным паролем корректно отклонен\n";

            // Тест входа несуществующего пользователя
            $wrong_login_data = http_build_query([
                'login' => 'nonexistent_user',
                'password' => 'any_password'
            ]);

            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, 'http://threes.dc/threes.api/auth.login:login');
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $wrong_login_data);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, [
                'Content-Type: application/x-www-form-urlencoded'
            ]);

            $response = curl_exec($ch);
            $wrong_login_result = json_decode($response, true);
            curl_close($ch);

            if ($wrong_login_result['success']) {
                throw new \Exception("Вход несуществующего пользователя должен завершиться ошибкой");
            }

            echo "✓ Вход несуществующего пользователя корректно отклонен\n";

            // Тест без заголовка авторизации
            unset($_SERVER['HTTP_THREESAUTH']);
            $no_auth_data = \Zen\Threes\Classes\Auth::getAuthData();
            if ($no_auth_data !== null) {
                throw new \Exception("Auth::getAuthData() должен возвращать null без заголовка");
            }

            echo "✓ Проверка без заголовка авторизации работает\n";

            // Тест с неверным токеном
            $_SERVER['HTTP_THREESAUTH'] = 'user.invalid_token';
            $invalid_auth_data = \Zen\Threes\Classes\Auth::getAuthData();
            if ($invalid_auth_data !== null) {
                throw new \Exception("Auth::getAuthData() должен возвращать null для неверного токена");
            }

            echo "✓ Проверка неверного токена работает\n";

            // Очистка
            Tokens::remove($expected_token);

            echo "\n=== Все тесты пройдены успешно! ===\n";
            echo "Система аутентификации работает корректно.\n";

        } catch (\Throwable $e) {
            $this->logError($e);
        }
    }

    # http://threes.dc/threes.api/tests.AuthTests:testValidation
    public function testValidation(): void
    {
        try {
            echo "=== Тест валидации ===\n\n";

            // Очистка папки токенов
            $path = ths()->env('TOKENS_STORAGE');
            foreach (glob($path . '/user.*.json') as $file) {
                unlink($file);
            }

            echo "1. Тест валидации логина...\n";

            // Тест короткого логина
            $short_login_data = http_build_query([
                'login' => 'ab',
                'password' => 'test123456'
            ]);

            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, 'http://threes.dc/threes.api/auth.register:register');
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $short_login_data);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, [
                'Content-Type: application/x-www-form-urlencoded'
            ]);

            $response = curl_exec($ch);
            $result = json_decode($response, true);
            curl_close($ch);

            if ($result['success']) {
                throw new \Exception("Регистрация с коротким логином должна завершиться ошибкой");
            }

            echo "✓ Короткий логин отклонен\n";

            // Тест длинного логина
            $long_login_data = http_build_query([
                'login' => 'very_long_login_name_that_exceeds_limit',
                'password' => 'test123456'
            ]);

            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, 'http://threes.dc/threes.api/auth.register:register');
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $long_login_data);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, [
                'Content-Type: application/x-www-form-urlencoded'
            ]);

            $response = curl_exec($ch);
            $result = json_decode($response, true);
            curl_close($ch);

            if ($result['success']) {
                throw new \Exception("Регистрация с длинным логином должна завершиться ошибкой");
            }

            echo "✓ Длинный логин отклонен\n";

            // Тест логина с недопустимыми символами
            $invalid_login_data = http_build_query([
                'login' => 'test-user',
                'password' => 'test123456'
            ]);

            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, 'http://threes.dc/threes.api/auth.register:register');
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $invalid_login_data);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, [
                'Content-Type: application/x-www-form-urlencoded'
            ]);

            $response = curl_exec($ch);
            $result = json_decode($response, true);
            curl_close($ch);

            if ($result['success']) {
                throw new \Exception("Регистрация с недопустимыми символами должна завершиться ошибкой");
            }

            echo "✓ Логин с недопустимыми символами отклонен\n";

            echo "\n2. Тест валидации пароля...\n";

            // Тест короткого пароля
            $short_password_data = http_build_query([
                'login' => 'testuser',
                'password' => '123'
            ]);

            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, 'http://threes.dc/threes.api/auth.register:register');
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $short_password_data);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, [
                'Content-Type: application/x-www-form-urlencoded'
            ]);

            $response = curl_exec($ch);
            $result = json_decode($response, true);
            curl_close($ch);

            if ($result['success']) {
                throw new \Exception("Регистрация с коротким паролем должна завершиться ошибкой");
            }

            echo "✓ Короткий пароль отклонен\n";

            echo "\n3. Тест обязательных полей...\n";

            // Тест без логина
            $no_login_data = http_build_query([
                'password' => 'test123456'
            ]);

            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, 'http://threes.dc/threes.api/auth.register:register');
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $no_login_data);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, [
                'Content-Type: application/x-www-form-urlencoded'
            ]);

            $response = curl_exec($ch);
            $result = json_decode($response, true);
            curl_close($ch);

            if ($result['success']) {
                throw new \Exception("Регистрация без логина должна завершиться ошибкой");
            }

            echo "✓ Регистрация без логина отклонена\n";

            // Тест без пароля
            $no_password_data = http_build_query([
                'login' => 'testuser'
            ]);

            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, 'http://threes.dc/threes.api/auth.register:register');
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $no_password_data);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, [
                'Content-Type: application/x-www-form-urlencoded'
            ]);

            $response = curl_exec($ch);
            $result = json_decode($response, true);
            curl_close($ch);

            if ($result['success']) {
                throw new \Exception("Регистрация без пароля должна завершиться ошибкой");
            }

            echo "✓ Регистрация без пароля отклонена\n";

            echo "\n=== Все тесты валидации пройдены успешно! ===\n";

        } catch (\Throwable $e) {
            $this->logError($e);
        }
    }
}
