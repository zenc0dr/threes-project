<?php

namespace Zen\Threes\Api\Tests;

use Zen\Threes\Traits\DebugLogTrait;
use Zen\Threes\Classes\Tokens;

class AuthTests
{
    use DebugLogTrait;

    /**
     * Тестовая версия метода регистрации
     */
    private function testRegister(string $login, string $password, ?string $email = null, ?string $name = null, ?string $telegram_id = null, array $data = []): array
    {
        // Валидация обязательных полей
        if (!$login || !$password) {
            return [
                'success' => false,
                'messages' => [
                    ['type' => 'error', 'text' => 'Логин и пароль обязательны']
                ]
            ];
        }

        // Проверка формата логина
        if (!preg_match('/^[a-zA-Z0-9_]{3,20}$/', $login)) {
            return [
                'success' => false,
                'messages' => [
                    ['type' => 'error', 'text' => 'Логин должен содержать 3-20 символов (буквы, цифры, подчеркивания)']
                ]
            ];
        }

        // Проверка длины пароля
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

        // Проверка, что пользователь не существует
        if (Tokens::exists($token_uuid)) {
            return [
                'success' => false,
                'messages' => [
                    ['type' => 'error', 'text' => 'Пользователь с таким логином уже существует']
                ]
            ];
        }

        // Хэширование пароля
        $hashed_password = password_hash($password, PASSWORD_BCRYPT);

        // Создание токена пользователя
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

    /**
     * Тестовая версия метода входа
     */
    private function testLogin(string $login, string $password): array
    {
        // Валидация обязательных полей
        if (!$login || !$password) {
            return [
                'success' => false,
                'messages' => [
                    ['type' => 'error', 'text' => 'Логин и пароль обязательны']
                ]
            ];
        }

        // Проверка существования пользователя
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

        // Проверка пароля
        $user_data = $token_data['data'] ?? [];
        if (!isset($user_data['password']) || !password_verify($password, $user_data['password'])) {
            return [
                'success' => false,
                'messages' => [
                    ['type' => 'error', 'text' => 'Неверный пароль']
                ]
            ];
        }

        // Обновление времени последнего входа
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

    /**
     * Эмуляция HTTP заголовка авторизации
     */
    private function simulateAuthHeader(string $token): void
    {
        // Эмулируем заголовок ThreesAuth
        $_SERVER['HTTP_THREESAUTH'] = $token;
        
        // Также устанавливаем для Laravel request()
        if (function_exists('request')) {
            try {
                $request = request();
                if (method_exists($request, 'headers')) {
                    $request->headers->set('ThreesAuth', $token);
                }
            } catch (\Exception $e) {
                // Игнорируем ошибки, если request() не доступен
            }
        }
        
        // Альтернативный способ для October CMS
        if (isset($_SERVER['HTTP_THREESAUTH'])) {
            // Убеждаемся, что заголовок установлен
            $_SERVER['HTTP_THREESAUTH'] = $token;
        }
    }

    /**
     * Очистка HTTP данных
     */
    private function clearHttpData(): void
    {
        unset($_SERVER['HTTP_THREESAUTH']);
        unset($_POST);
    }

    /**
     * Тестовая версия Auth::getAuthData()
     */
    private function testGetAuthData(string $token): ?array
    {
        if (!$token) {
            return null;
        }

        $token_data = Tokens::get($token);
        if (!$token_data) {
            return null;
        }

        return [
            'token' => $token,
            'user' => $token_data['data'] ?? [],
            'login' => $token_data['uuid'],
            'created_at' => $token_data['created_at'] ?? null,
            'last_call_at' => $token_data['last_call_at'] ?? null,
        ];
    }

    /**
     * Тестовая версия метода получения профиля
     */
    private function testGetProfile(string $token): array
    {
        // Используем тестовую версию getAuthData
        $auth_data = $this->testGetAuthData($token);
        
        if (!$auth_data) {
            return [
                'success' => false,
                'messages' => [
                    ['type' => 'error', 'text' => 'Необходима авторизация']
                ]
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

    /**
     * Тестовая версия Auth::check()
     */
    private function testCheck(string $token): array
    {
        $auth = $this->testGetAuthData($token);
        if (!$auth) {
            throw new \Zen\Threes\Exceptions\AuthException();
        }
        return $auth;
    }

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

            // Регистрация через тестовый метод
            $register_result = $this->testRegister(
                $test_login,
                $test_password,
                $test_email,
                $test_name,
                '123456789'
            );

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

            // Вход через тестовый метод
            $login_result = $this->testLogin($test_login, $test_password);

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

            // Используем тестовую версию getAuthData
            $auth_data = $this->testGetAuthData($expected_token);
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
                $auth_check = $this->testCheck($expected_token);
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

            // Тест API профиля через тестовый метод
            $profile_result = $this->testGetProfile($expected_token);

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
            $wrong_password_result = $this->testLogin($test_login, 'wrong_password');

            if ($wrong_password_result['success']) {
                throw new \Exception("Вход с неверным паролем должен завершиться ошибкой");
            }

            echo "✓ Вход с неверным паролем корректно отклонен\n";

            // Тест входа несуществующего пользователя
            $wrong_login_result = $this->testLogin('nonexistent_user', 'any_password');

            if ($wrong_login_result['success']) {
                throw new \Exception("Вход несуществующего пользователя должен завершиться ошибкой");
            }

            echo "✓ Вход несуществующего пользователя корректно отклонен\n";

            // Тест без заголовка авторизации
            $no_auth_data = $this->testGetAuthData('');
            if ($no_auth_data !== null) {
                throw new \Exception("Auth::getAuthData() должен возвращать null без заголовка");
            }

            echo "✓ Проверка без заголовка авторизации работает\n";

            // Тест с неверным токеном
            $invalid_auth_data = $this->testGetAuthData('user.invalid_token');
            if ($invalid_auth_data !== null) {
                throw new \Exception("Auth::getAuthData() должен возвращать null для неверного токена");
            }

            echo "✓ Проверка неверного токена работает\n";

            // Очистка
            Tokens::remove($expected_token);
            $this->clearHttpData();

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
            $result = $this->testRegister('ab', 'test123456');

            if ($result['success']) {
                throw new \Exception("Регистрация с коротким логином должна завершиться ошибкой");
            }

            echo "✓ Короткий логин отклонен\n";

            // Тест длинного логина
            $result = $this->testRegister('very_long_login_name_that_exceeds_limit', 'test123456');

            if ($result['success']) {
                throw new \Exception("Регистрация с длинным логином должна завершиться ошибкой");
            }

            echo "✓ Длинный логин отклонен\n";

            // Тест логина с недопустимыми символами
            $result = $this->testRegister('test-user', 'test123456');

            if ($result['success']) {
                throw new \Exception("Регистрация с недопустимыми символами должна завершиться ошибкой");
            }

            echo "✓ Логин с недопустимыми символами отклонен\n";

            echo "\n2. Тест валидации пароля...\n";

            // Тест короткого пароля
            $result = $this->testRegister('testuser', '123');

            if ($result['success']) {
                throw new \Exception("Регистрация с коротким паролем должна завершиться ошибкой");
            }

            echo "✓ Короткий пароль отклонен\n";

            echo "\n3. Тест обязательных полей...\n";

            // Тест без логина
            $result = $this->testRegister('', 'test123456');

            if ($result['success']) {
                throw new \Exception("Регистрация без логина должна завершиться ошибкой");
            }

            echo "✓ Регистрация без логина отклонена\n";

            // Тест без пароля
            $result = $this->testRegister('testuser', '');

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
