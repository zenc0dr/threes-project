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

            // Тест 1: Создание токена
            $token = Tokens::create($subtype);
            $uuid = $token['uuid'];
            $token_id = "{$subtype}.{$uuid}";

            assert($token['subtype'] === $subtype, 'Subtype must be stored');
            assert(strlen($uuid) === 32, 'UUID must be 32 characters');
            assert($token['write'] === true, 'Write must be true initially');

            // Тест 2: Проверка существования
            assert(Tokens::exists($token_id), 'Token must exist');

            // Тест 3: Получение токена
            $retrieved = Tokens::get($token_id);
            assert($retrieved !== null, 'Retrieved token must not be null');
            assert($retrieved['uuid'] === $uuid, 'UUID must match');

            // Тест 4: Обновление токена
            $updates = [
                'data' => ['x' => 123],
                'storage_at' => now()->toISOString(),
                'write' => false
            ];
            $updated = Tokens::update($token_id, $updates);
            assert($updated !== null, 'Updated token must not be null');
            assert($updated['data']['x'] === 123, 'Data must be updated');
            assert($updated['write'] === false, 'Write must be set to false');

            // Тест 5: Попытка повторного обновления — должна быть отклонена
            $blocked = Tokens::update($token_id, ['data' => ['y' => 999]]);
            assert($blocked === null, 'Locked token must not allow update');

            // Тест 6: Удаление
            assert(Tokens::remove($token_id), 'Token must be deleted');
            assert(!Tokens::exists($token_id), 'Token must no longer exist');

            // Тест 7: Несуществующий токен
            $fake_id = "{$subtype}.notarealtoken";
            assert(Tokens::get($fake_id) === null, 'Getting fake token must return null');
            assert(Tokens::update($fake_id, []) === null, 'Updating fake token must return null');
            assert(Tokens::remove($fake_id) === false, 'Removing fake token must return false');

            // Тест 8: Несколько токенов и уникальность
            $t1 = Tokens::create('session');
            $t2 = Tokens::create('session');
            $t3 = Tokens::create('magic');

            assert($t1['uuid'] !== $t2['uuid'], 'Token 1 and 2 UUIDs must differ');
            assert($t2['uuid'] !== $t3['uuid'], 'Token 2 and 3 UUIDs must differ');
            assert($t1['uuid'] !== $t3['uuid'], 'Token 1 and 3 UUIDs must differ');

            Tokens::remove("session.{$t1['uuid']}");
            Tokens::remove("session.{$t2['uuid']}");
            Tokens::remove("magic.{$t3['uuid']}");

            echo "✅ testTokenOperations OK\n";
        } catch (\Throwable $e) {
            $this->logError($e);
        }
    }
}
