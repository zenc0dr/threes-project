<?php

namespace Zen\Threes\Api\Tests;

use Zen\Threes\Traits\DebugLogTrait;
use Zen\Threes\Classes\Crypt;

class CryptTests
{
    use DebugLogTrait;

    # http://threes.dc/threes.api/tests.CryptTests:testCryptOperations
    public function testCryptOperations(): void
    {
        try {
            $crypt = Crypt::getInstance();
            $test_key = 'test_secret_key_123';
            $test_data = 'Hello, World! This is a test message for encryption.';

            // Тест 1: Базовое шифрование и дешифрование
            $encrypted = $crypt->encrypt($test_data, $test_key);
            $decrypted = $crypt->decrypt($encrypted, $test_key);

            assert($decrypted === $test_data, 'Decrypted data must match original');
            assert($encrypted !== $test_data, 'Encrypted data must not match original');
            assert(strlen($encrypted) > strlen($test_data), 'Encrypted data must be longer than original');

            // Тест 2: Проверка уникальности шифрования (разные IV)
            $encrypted1 = $crypt->encrypt($test_data, $test_key);
            $encrypted2 = $crypt->encrypt($test_data, $test_key);

            assert($encrypted1 !== $encrypted2, 'Same data encrypted twice must produce different results');
            assert($crypt->decrypt($encrypted1, $test_key) === $test_data, 'First encryption must decrypt correctly');
            assert($crypt->decrypt($encrypted2, $test_key) === $test_data, 'Second encryption must decrypt correctly');

            // Тест 3: Проверка с разными ключами
            $key1 = 'key_one';
            $key2 = 'key_two';
            $encrypted_key1 = $crypt->encrypt($test_data, $key1);
            $encrypted_key2 = $crypt->encrypt($test_data, $key2);

            assert($encrypted_key1 !== $encrypted_key2, 'Different keys must produce different encrypted data');
            assert($crypt->decrypt($encrypted_key1, $key1) === $test_data, 'Data encrypted with key1 must decrypt with key1');
            assert($crypt->decrypt($encrypted_key2, $key2) === $test_data, 'Data encrypted with key2 must decrypt with key2');

            // Тест 4: Проверка с пустыми данными
            $empty_encrypted = $crypt->encrypt('', $test_key);
            $empty_decrypted = $crypt->decrypt($empty_encrypted, $test_key);

            assert($empty_decrypted === '', 'Empty string must encrypt and decrypt correctly');

            // Тест 5: Проверка с длинными данными
            $long_data = str_repeat('This is a very long test message. ', 100);
            $long_encrypted = $crypt->encrypt($long_data, $test_key);
            $long_decrypted = $crypt->decrypt($long_encrypted, $test_key);

            assert($long_decrypted === $long_data, 'Long data must encrypt and decrypt correctly');

            // Тест 6: Проверка с специальными символами
            $special_data = "Специальные символы: !@#$%^&*()_+-=[]{}|;':\",./<>?`~ \n\t\r";
            $special_encrypted = $crypt->encrypt($special_data, $test_key);
            $special_decrypted = $crypt->decrypt($special_encrypted, $test_key);

            assert($special_decrypted === $special_data, 'Special characters must encrypt and decrypt correctly');

            // Тест 7: Проверка с Unicode символами
            $unicode_data = 'Unicode: 🚀🌟🎉 Привет мир! 你好世界!';
            $unicode_encrypted = $crypt->encrypt($unicode_data, $test_key);
            $unicode_decrypted = $crypt->decrypt($unicode_encrypted, $test_key);

            assert($unicode_decrypted === $unicode_data, 'Unicode data must encrypt and decrypt correctly');

            // Тест 8: Проверка с разными типами ключей
            $numeric_key = '12345';
            $symbolic_key = '!@#$%^&*()';
            $mixed_key = 'Key123!@#';

            $numeric_encrypted = $crypt->encrypt($test_data, $numeric_key);
            $symbolic_encrypted = $crypt->encrypt($test_data, $symbolic_key);
            $mixed_encrypted = $crypt->encrypt($test_data, $mixed_key);

            assert($crypt->decrypt($numeric_encrypted, $numeric_key) === $test_data, 'Numeric key must work');
            assert($crypt->decrypt($symbolic_encrypted, $symbolic_key) === $test_data, 'Symbolic key must work');
            assert($crypt->decrypt($mixed_encrypted, $mixed_key) === $test_data, 'Mixed key must work');

            // Тест 9: Проверка Singleton паттерна
            $crypt1 = Crypt::getInstance();
            $crypt2 = Crypt::getInstance();

            assert($crypt1 === $crypt2, 'Crypt instances must be the same (Singleton pattern)');

            // Тест 10: Проверка с очень коротким ключом
            $short_key = 'a';
            $short_encrypted = $crypt->encrypt($test_data, $short_key);
            $short_decrypted = $crypt->decrypt($short_encrypted, $short_key);

            assert($short_decrypted === $test_data, 'Short key must work (normalized via SHA-256)');

            // Тест 11: Проверка с очень длинным ключом
            $long_key = str_repeat('very_long_key_', 100);
            $long_key_encrypted = $crypt->encrypt($test_data, $long_key);
            $long_key_decrypted = $crypt->decrypt($long_key_encrypted, $long_key);

            assert($long_key_decrypted === $test_data, 'Long key must work (normalized via SHA-256)');

            // Тест 12: Проверка формата base64
            $test_encrypted = $crypt->encrypt($test_data, $test_key);
            assert(base64_decode($test_encrypted, true) !== false, 'Encrypted data must be valid base64');

            echo "✅ testCryptOperations OK\n";
        } catch (\Throwable $e) {
            $this->logError($e);
        }
    }

    public function testCryptErrors(): void
    {
        try {
            $crypt = Crypt::getInstance();
            $test_key = 'test_key';
            $test_data = 'test message';

            // Тест 1: Попытка дешифрования с неправильным ключом
            $encrypted = $crypt->encrypt($test_data, $test_key);

            try {
                $wrong_decrypted = $crypt->decrypt($encrypted, 'wrong_key');
                assert(false, 'Decryption with wrong key should throw exception');
            } catch (\RuntimeException $e) {
                assert(strpos($e->getMessage(), 'Decryption failed') !== false, 'Wrong key should cause decryption failure');
            }

            // Тест 2: Попытка дешифрования поврежденных данных
            $damaged_data = base64_encode('damaged_encrypted_data');

            try {
                $damaged_decrypted = $crypt->decrypt($damaged_data, $test_key);
                assert(false, 'Decryption of damaged data should throw exception');
            } catch (\RuntimeException $e) {
                assert(strpos($e->getMessage(), 'Decryption failed') !== false, 'Damaged data should cause decryption failure');
            }

            // Тест 3: Попытка дешифрования некорректного base64
            try {
                $invalid_base64 = 'invalid_base64_data!@#';
                $invalid_decrypted = $crypt->decrypt($invalid_base64, $test_key);
                assert(false, 'Decryption of invalid base64 should throw exception');
            } catch (\RuntimeException $e) {
                assert(strpos($e->getMessage(), 'Decryption failed') !== false, 'Invalid base64 should cause decryption failure');
            }

            // Тест 4: Попытка дешифрования слишком коротких данных
            $short_encrypted = base64_encode('short');

            try {
                $short_decrypted = $crypt->decrypt($short_encrypted, $test_key);
                assert(false, 'Decryption of too short data should throw exception');
            } catch (\RuntimeException $e) {
                assert(strpos($e->getMessage(), 'Decryption failed') !== false, 'Too short data should cause decryption failure');
            }

            echo "✅ testCryptErrors OK\n";
        } catch (\Throwable $e) {
            $this->logError($e);
        }
    }
}
