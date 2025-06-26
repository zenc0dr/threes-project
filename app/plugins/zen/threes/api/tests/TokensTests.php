<?php

namespace Zen\Threes\Api\Tests;

use Zen\Threes\Traits\DebugLogTrait;
use Zen\Threes\Classes\Tokens;

class TokensTests
{
    use DebugLogTrait;

    public function testTokenOperations(): void
    {
        try {
            $path = ths()->env('TOKENS_STORAGE');
            foreach (glob($path . '/*.json') as $file) {
                unlink($file);
            }

            $subtype = 'auth';

            // Создание
            $token = Tokens::create($subtype);
            $uuid = $token['uuid'];

            assert($token['subtype'] === $subtype, 'Token must contain correct subtype');
            assert(strlen($uuid) === 32, 'UUID must be 32 chars');
            assert($token['write'] === true, 'Token must be writable');

            // Проверка существования
            assert(Tokens::exists($subtype, $uuid), 'Token must exist');

            // Получение
            $retrieved = Tokens::get($subtype, $uuid);
            assert($retrieved['uuid'] === $uuid, 'UUIDs must match');

            // Обновление
            $updates = [
                'data' => ['x' => 123],
                'storage_at' => now()->toISOString(),
                'write' => false
            ];
            $updated = Tokens::update($subtype, $uuid, $updates);

            assert($updated['data']['x'] === 123, 'Data must update');
            assert($updated['write'] === false, 'Write must be false now');

            // Попытка повторного обновления
            $attempt = Tokens::update($subtype, $uuid, ['data' => ['y' => 999]]);
            assert($attempt === null, 'Locked token must not update');

            // Удаление
            assert(Tokens::remove($subtype, $uuid), 'Token must delete');
            assert(!Tokens::exists($subtype, $uuid), 'Token must be gone');

            // Несуществующий
            assert(Tokens::get($subtype, 'fakeid') === null, 'Nonexistent get should return null');
            assert(Tokens::update($subtype, 'fakeid', []) === null, 'Nonexistent update should return null');
            assert(Tokens::remove($subtype, 'fakeid') === false, 'Nonexistent delete should return false');

            echo "✅ testTokenOperations OK\n";
        } catch (\Throwable $e) {
            $this->logError($e);
        }
    }
}
