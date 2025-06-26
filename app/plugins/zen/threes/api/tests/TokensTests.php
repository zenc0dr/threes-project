<?php

namespace Zen\Threes\Api\Tests;

use Zen\Threes\Traits\DebugLogTrait;

class TokensTests
{
    use DebugLogTrait;

    # http://threes.dc/threes.api/tests.TokensTests:testTokenOperations
    public function testTokenOperations(): void
    {
        try {
            // Очищаем тестовую директорию токенов
            $test_tokens_path = ths()->env('TOKENS_STORAGE');
            if (is_dir($test_tokens_path)) {
                $files = glob($test_tokens_path . '/*.json');
                foreach ($files as $file) {
                    unlink($file);
                }
            }

            // Тест 1: Создание токена
            $token_data = \Zen\Threes\Classes\Tokens::create();

            assert(isset($token_data['uuid']), 'Token must have UUID');
            assert(strlen($token_data['uuid']) === 32, 'Token UUID must be 32 characters long');
            assert($token_data['write'] === true, 'Token must have write permission');
            assert($token_data['data'] === null, 'Token data must be null initially');
            assert(isset($token_data['created_at']), 'Token must have created_at timestamp');
            assert($token_data['storage_at'] === null, 'Token storage_at must be null initially');

            $uuid = $token_data['uuid'];

            // Тест 2: Проверка существования токена
            assert(\Zen\Threes\Classes\Tokens::exists($uuid), 'Token must exist after creation');

            // Тест 3: Получение данных токена
            $retrieved_data = \Zen\Threes\Classes\Tokens::get($uuid);
            assert($retrieved_data !== null, 'Retrieved token data must not be null');
            assert($retrieved_data['uuid'] === $uuid, 'Retrieved token UUID must match');
            assert($retrieved_data['write'] === true, 'Retrieved token must have write permission');

            // Тест 4: Обновление токена
            $update_data = [
                'data' => ['test' => 'value'],
                'storage_at' => now()->toISOString(),
                'write' => false
            ];

            $updated_data = \Zen\Threes\Classes\Tokens::update($uuid, $update_data);
            assert($updated_data !== null, 'Updated token data must not be null');
            assert($updated_data['data']['test'] === 'value', 'Token data must be updated');
            assert($updated_data['storage_at'] !== null, 'Token storage_at must be updated');
            assert($updated_data['write'] === false, 'Token write permission must be updated');

            // Тест 5: Проверка обновленных данных
            $final_data = \Zen\Threes\Classes\Tokens::get($uuid);
            assert($final_data['data']['test'] === 'value', 'Final token data must match update');
            assert($final_data['write'] === false, 'Final token write permission must match update');

            // Тест 6: Попытка обновления несуществующего токена
            $non_existent_update = \Zen\Threes\Classes\Tokens::update('non_existent_uuid', ['data' => 'test']);
            assert($non_existent_update === null, 'Update of non-existent token must return null');

            // Тест 7: Получение несуществующего токена
            $non_existent_data = \Zen\Threes\Classes\Tokens::get('non_existent_uuid');
            assert($non_existent_data === null, 'Get of non-existent token must return null');

            // Тест 8: Проверка существования несуществующего токена
            assert(!\Zen\Threes\Classes\Tokens::exists('non_existent_uuid'), 'Non-existent token must not exist');

            // Тест 9: Удаление токена
            $delete_result = \Zen\Threes\Classes\Tokens::remove($uuid);
            assert($delete_result === true, 'Token deletion must return true');

            // Тест 10: Проверка удаления
            assert(!\Zen\Threes\Classes\Tokens::exists($uuid), 'Token must not exist after deletion');
            assert(\Zen\Threes\Classes\Tokens::get($uuid) === null, 'Deleted token must return null');

            // Тест 11: Попытка удаления несуществующего токена
            $delete_non_existent = \Zen\Threes\Classes\Tokens::remove('non_existent_uuid');
            assert($delete_non_existent === false, 'Deletion of non-existent token must return false');

            // Тест 12: Создание нескольких токенов
            $token1 = \Zen\Threes\Classes\Tokens::create();
            $token2 = \Zen\Threes\Classes\Tokens::create();
            $token3 = \Zen\Threes\Classes\Tokens::create();

            assert($token1['uuid'] !== $token2['uuid'], 'Token UUIDs must be unique');
            assert($token2['uuid'] !== $token3['uuid'], 'Token UUIDs must be unique');
            assert($token1['uuid'] !== $token3['uuid'], 'Token UUIDs must be unique');

            // Очистка после тестов
            \Zen\Threes\Classes\Tokens::remove($token1['uuid']);
            \Zen\Threes\Classes\Tokens::remove($token2['uuid']);
            \Zen\Threes\Classes\Tokens::remove($token3['uuid']);

            // Тест 13: Попытка повторного обновления после write=false
            $locked_token = \Zen\Threes\Classes\Tokens::create();
            \Zen\Threes\Classes\Tokens::update($locked_token['uuid'], ['write' => false]);

            $attempt_update = \Zen\Threes\Classes\Tokens::update($locked_token['uuid'], ['data' => ['should_not' => 'work']]);
            assert($attempt_update === null, 'Locked token must not be updatable');

            echo "✅ testTokenOperations OK\n";
        } catch (\Throwable $e) {
            $this->logError($e);
        }
    }
}
