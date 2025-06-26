<?php

namespace Zen\Threes\Api\Tests;

use Zen\Threes\Traits\DebugLogTrait;
use Zen\Threes\Classes\Tokens;

class TokensTests
{
    use DebugLogTrait;

    # http://threes.dc/threes.api/tests.TokensTests:testTokenOperations
    public function testTokenOperations(): void
    {
        try {
            // Очистка папки токенов
            $path = ths()->env('TOKENS_STORAGE');
            foreach (glob($path . '/*.json') as $file) {
                unlink($file);
            }

            $subtype = 'auth';

            // Тест 1: Создание токена auth без данных
            $token = Tokens::create($subtype);
            $uuid = $token['uuid'];
            $token_id = "{$subtype}.{$uuid}";

            assert($token['subtype'] === $subtype, 'Subtype must be stored');
            assert(strlen($uuid) === 32, 'UUID must be 32 characters');
            assert($token['write'] === true, 'Write must be true initially');
            assert($token['data'] === null, 'Data must be null initially');

            // Тест 2: Проверка существования
            assert(Tokens::exists($token_id), 'Token must exist');

            // Тест 3: Получение токена
            $retrieved = Tokens::get($token_id);
            assert($retrieved !== null, 'Retrieved token must not be null');
            assert($retrieved['uuid'] === $uuid, 'UUID must match');
            assert($retrieved['data'] === null, 'Retrieved data must be null');

            // Тест 4: Создание токена auth с данными (должны быть зашифрованы)
            $test_data = ['user_id' => 123, 'permissions' => ['read', 'write']];
            $token_with_data = Tokens::create($subtype, ['data' => $test_data]);
            $token_with_data_id = "{$subtype}.{$token_with_data['uuid']}";

            // Проверяем, что данные зашифрованы в файле
            $file_path = $path . '/' . $token_with_data_id . '.json';
            $file_content = ths()->fromJsonFile($file_path);
            assert($file_content['data'] !== $test_data, 'Data must be encrypted in storage');
            assert(is_string($file_content['data']), 'Encrypted data must be string');

            // Проверяем, что данные расшифровываются при получении
            $retrieved_with_data = Tokens::get($token_with_data_id);
            assert($retrieved_with_data['data'] === $test_data, 'Data must be decrypted when retrieved');

            // Тест 5: Обновление токена с новыми данными
            $new_data = ['user_id' => 456, 'permissions' => ['admin']];
            $updates = [
                'data' => $new_data,
                'storage_at' => now()->toISOString(),
                'write' => false
            ];
            $updated = Tokens::update($token_with_data_id, $updates);
            assert($updated !== null, 'Updated token must not be null');
            // Проверяем, что данные зашифрованы в возвращаемом результате (как в файле)
            assert($updated['data'] !== $new_data, 'Updated data must be encrypted in returned result');
            assert(is_string($updated['data']), 'Updated data must be encrypted string');
            assert($updated['write'] === false, 'Write must be set to false');

            // Проверяем, что данные корректно расшифровываются при получении
            $retrieved_after_update = Tokens::get($token_with_data_id);
            assert($retrieved_after_update['data'] === $new_data, 'Data must be decrypted correctly when retrieved');

            // Тест 6: Попытка повторного обновления — должна быть отклонена
            $blocked = Tokens::update($token_with_data_id, ['data' => ['blocked' => true]]);
            assert($blocked === null, 'Locked token must not allow update');

            // Тест 7: Создание токена без обработчика (magic)
            $magic_token = Tokens::create('magic', ['data' => ['magic' => 'value']]);
            $magic_token_id = "magic.{$magic_token['uuid']}";

            // Данные должны быть в открытом виде (без шифрования)
            $magic_file_path = $path . '/' . $magic_token_id . '.json';
            $magic_file_content = ths()->fromJsonFile($magic_file_path);
            assert($magic_file_content['data'] === ['magic' => 'value'], 'Magic token data should not be encrypted');

            // Тест 8: Удаление токенов
            assert(Tokens::remove($token_id), 'Token must be deleted');
            assert(Tokens::remove($token_with_data_id), 'Token with data must be deleted');
            assert(Tokens::remove($magic_token_id), 'Magic token must be deleted');

            assert(!Tokens::exists($token_id), 'Token must no longer exist');
            assert(!Tokens::exists($token_with_data_id), 'Token with data must no longer exist');
            assert(!Tokens::exists($magic_token_id), 'Magic token must no longer exist');

            // Тест 9: Несуществующий токен
            $fake_id = "{$subtype}.notarealtoken";
            assert(Tokens::get($fake_id) === null, 'Getting fake token must return null');
            assert(Tokens::update($fake_id, []) === null, 'Updating fake token must return null');
            assert(Tokens::remove($fake_id) === false, 'Removing fake token must return false');

            // Тест 10: Несколько токенов и уникальность
            $t1 = Tokens::create('session');
            $t2 = Tokens::create('session');
            $t3 = Tokens::create('auth');

            assert($t1['uuid'] !== $t2['uuid'], 'Token 1 and 2 UUIDs must differ');
            assert($t2['uuid'] !== $t3['uuid'], 'Token 2 and 3 UUIDs must differ');
            assert($t1['uuid'] !== $t3['uuid'], 'Token 1 and 3 UUIDs must differ');

            Tokens::remove("session.{$t1['uuid']}");
            Tokens::remove("session.{$t2['uuid']}");
            Tokens::remove("auth.{$t3['uuid']}");

            echo "✅ testTokenOperations OK\n";
        } catch (\Throwable $e) {
            $this->logError($e);
        }
    }

    # http://threes.dc/threes.api/tests.TokensTests:testAuthTokenEncryption
    public function testAuthTokenEncryption(): void
    {
        try {
            // Очистка папки токенов
            $path = ths()->env('TOKENS_STORAGE');
            foreach (glob($path . '/*.json') as $file) {
                unlink($file);
            }

            // Тест 1: Проверка шифрования сложных данных
            $complex_data = [
                'user' => [
                    'id' => 123,
                    'name' => 'John Doe',
                    'email' => 'john@example.com',
                    'roles' => ['admin', 'user'],
                    'settings' => [
                        'theme' => 'dark',
                        'language' => 'ru'
                    ]
                ],
                'session' => [
                    'ip' => '192.168.1.1',
                    'user_agent' => 'Mozilla/5.0...',
                    'created_at' => now()->toISOString()
                ],
                'permissions' => [
                    'read' => true,
                    'write' => false,
                    'delete' => true
                ]
            ];

            $auth_token = Tokens::create('auth', ['data' => $complex_data]);
            $auth_token_id = "auth.{$auth_token['uuid']}";

            // Проверяем, что данные зашифрованы в файле
            $file_path = $path . '/' . $auth_token_id . '.json';
            $file_content = ths()->fromJsonFile($file_path);
            assert($file_content['data'] !== $complex_data, 'Complex data must be encrypted in storage');
            assert(is_string($file_content['data']), 'Encrypted data must be string');

            // Проверяем, что данные корректно расшифровываются
            $retrieved = Tokens::get($auth_token_id);
            assert($retrieved['data'] === $complex_data, 'Complex data must be decrypted correctly');

            // Тест 2: Проверка обновления части данных
            $partial_update = [
                'data' => [
                    'user' => [
                        'id' => 123,
                        'name' => 'Jane Doe', // Изменено имя
                        'email' => 'jane@example.com', // Изменен email
                        'roles' => ['admin', 'user'],
                        'settings' => [
                            'theme' => 'light', // Изменена тема
                            'language' => 'en' // Изменен язык
                        ]
                    ],
                    'session' => [
                        'ip' => '192.168.1.1',
                        'user_agent' => 'Mozilla/5.0...',
                        'created_at' => now()->toISOString()
                    ],
                    'permissions' => [
                        'read' => true,
                        'write' => true, // Изменено разрешение
                        'delete' => false // Изменено разрешение
                    ]
                ]
            ];

            $updated = Tokens::update($auth_token_id, $partial_update);
            assert($updated !== null, 'Partial update must succeed');
            // Проверяем, что данные зашифрованы в возвращаемом результате
            assert($updated['data'] !== $partial_update['data'], 'Updated data must be encrypted in returned result');
            assert(is_string($updated['data']), 'Updated data must be encrypted string');

            // Проверяем, что данные корректно расшифровываются при получении
            $retrieved_after_update = Tokens::get($auth_token_id);
            assert($retrieved_after_update['data'] === $partial_update['data'], 'Updated data must be decrypted correctly when retrieved');

            // Тест 3: Проверка с пустыми данными
            $empty_token = Tokens::create('auth', ['data' => []]);
            $empty_token_id = "auth.{$empty_token['uuid']}";

            $empty_retrieved = Tokens::get($empty_token_id);
            assert($empty_retrieved['data'] === [], 'Empty data must be handled correctly');

            // Тест 4: Проверка с null данными
            $null_token = Tokens::create('auth', ['data' => null]);
            $null_token_id = "auth.{$null_token['uuid']}";

            $null_retrieved = Tokens::get($null_token_id);
            assert($null_retrieved['data'] === null, 'Null data must be handled correctly');

            // Очистка
            Tokens::remove($auth_token_id);
            Tokens::remove($empty_token_id);
            Tokens::remove($null_token_id);

            echo "✅ testAuthTokenEncryption OK\n";
        } catch (\Throwable $e) {
            $this->logError($e);
        }
    }
}
