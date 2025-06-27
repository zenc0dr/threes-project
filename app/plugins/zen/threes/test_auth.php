<?php

/**
 * Тестовый скрипт для проверки системы аутентификации Threes
 * 
 * Запуск: php test_auth.php
 */

require_once __DIR__ . '/../../../vendor/autoload.php';

// Инициализация Laravel
$app = require_once __DIR__ . '/../../../bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();

use Zen\Threes\Classes\Tokens;
use Zen\Threes\Classes\AuthMiddleware;

echo "=== Тест системы аутентификации Threes ===\n\n";

// 1. Тест создания токена
echo "1. Создание тестового пользователя...\n";
$test_login = 'test_user_' . time();
$test_password = 'test123';

try {
    $user_data = [
        'password' => password_hash($test_password, PASSWORD_BCRYPT),
        'email' => 'test@example.com',
        'name' => 'Тестовый пользователь',
        'telegram_id' => '123456789',
        'data' => ['test' => true],
    ];

    $token = Tokens::create('user', [
        'uuid' => $test_login,
        'data' => $user_data,
        'last_call_at' => now()->toISOString(),
    ]);

    $token_id = "user.{$test_login}";
    echo "✓ Пользователь создан: {$token_id}\n";
} catch (Exception $e) {
    echo "✗ Ошибка создания пользователя: " . $e->getMessage() . "\n";
    exit(1);
}

// 2. Тест получения токена
echo "\n2. Получение данных токена...\n";
try {
    $token_data = Tokens::get($token_id);
    if ($token_data) {
        echo "✓ Токен получен успешно\n";
        echo "  - UUID: {$token_data['uuid']}\n";
        echo "  - Email: {$token_data['data']['email']}\n";
        echo "  - Name: {$token_data['data']['name']}\n";
    } else {
        echo "✗ Токен не найден\n";
        exit(1);
    }
} catch (Exception $e) {
    echo "✗ Ошибка получения токена: " . $e->getMessage() . "\n";
    exit(1);
}

// 3. Тест проверки существования
echo "\n3. Проверка существования токена...\n";
if (Tokens::exists($token_id)) {
    echo "✓ Токен существует\n";
} else {
    echo "✗ Токен не существует\n";
    exit(1);
}

// 4. Тест обновления токена
echo "\n4. Обновление данных токена...\n";
try {
    $updated_data = [
        'data' => [
            'password' => $token_data['data']['password'],
            'email' => 'updated@example.com',
            'name' => 'Обновленный пользователь',
            'telegram_id' => '987654321',
            'data' => ['test' => true, 'updated' => true],
        ],
        'last_call_at' => now()->toISOString(),
    ];

    $updated_token = Tokens::update($token_id, $updated_data);
    if ($updated_token) {
        echo "✓ Токен обновлен успешно\n";
        echo "  - Новый email: {$updated_token['data']['email']}\n";
        echo "  - Новое имя: {$updated_token['data']['name']}\n";
    } else {
        echo "✗ Ошибка обновления токена\n";
        exit(1);
    }
} catch (Exception $e) {
    echo "✗ Ошибка обновления токена: " . $e->getMessage() . "\n";
    exit(1);
}

// 5. Тест проверки пароля
echo "\n5. Проверка пароля...\n";
$user_data = $updated_token['data'];
if (password_verify($test_password, $user_data['password'])) {
    echo "✓ Пароль проверен успешно\n";
} else {
    echo "✗ Ошибка проверки пароля\n";
    exit(1);
}

// 6. Тест AuthMiddleware
echo "\n6. Тест AuthMiddleware...\n";
try {
    // Симулируем заголовок авторизации
    $_SERVER['HTTP_THREESAUTH'] = $token_id;
    
    $auth_data = AuthMiddleware::checkAuth();
    if ($auth_data) {
        echo "✓ AuthMiddleware работает\n";
        echo "  - Login: {$auth_data['login']}\n";
        echo "  - Email: {$auth_data['user']['email']}\n";
    } else {
        echo "✗ AuthMiddleware не работает\n";
        exit(1);
    }
} catch (Exception $e) {
    echo "✗ Ошибка AuthMiddleware: " . $e->getMessage() . "\n";
    exit(1);
}

// 7. Тест удаления токена
echo "\n7. Удаление тестового токена...\n";
try {
    if (Tokens::remove($token_id)) {
        echo "✓ Токен удален успешно\n";
    } else {
        echo "✗ Ошибка удаления токена\n";
        exit(1);
    }
} catch (Exception $e) {
    echo "✗ Ошибка удаления токена: " . $e->getMessage() . "\n";
    exit(1);
}

// 8. Проверка удаления
echo "\n8. Проверка удаления...\n";
if (!Tokens::exists($token_id)) {
    echo "✓ Токен успешно удален\n";
} else {
    echo "✗ Токен все еще существует\n";
    exit(1);
}

echo "\n=== Все тесты пройдены успешно! ===\n";
echo "Система аутентификации Threes работает корректно.\n"; 