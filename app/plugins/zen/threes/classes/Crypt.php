<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;

/**
 * Класс для шифрования и дешифрования данных
 *
 * Предоставляет функциональность для безопасного шифрования и дешифрования строк
 * с использованием алгоритма AES-256-CBC. Использует паттерн Singleton для
 * обеспечения единственного экземпляра класса.
 */
class Crypt
{
    use SingletonTrait;

    /** @var string Алгоритм шифрования */
    protected string $cipher = 'AES-256-CBC';

    protected function getDefaultKey(): string
    {
        $raw = env('APP_KEY');

        if (str_starts_with($raw, 'base64:')) {
            $raw = base64_decode(substr($raw, 7));
        }

        return $raw;
    }

    /**
     * Шифрует строку с использованием AES-256-CBC
     *
     * Ключ нормализуется через SHA-256 хеш для обеспечения совместимости.
     * Генерируется случайный вектор инициализации (IV) для каждого шифрования.
     * Результат кодируется в base64 для безопасной передачи.
     *
     * @param string $plaintext Исходная строка для шифрования
     * @param string $key Ключ шифрования (будет нормализован через SHA-256)
     * @return string Зашифрованная строка в формате base64 (IV + данные)
     * @throws \RuntimeException Если шифрование не удалось
     */
    public function encrypt(string $plaintext, ?string $key = null): string
    {
        $key ??= $this->getDefaultKey();
        $key = hash('sha256', $key, true); // нормализуем ключ
        $iv = random_bytes(openssl_cipher_iv_length($this->cipher));

        $encrypted = openssl_encrypt($plaintext, $this->cipher, $key, OPENSSL_RAW_DATA, $iv);

        if ($encrypted === false) {
            throw new \RuntimeException("Encryption failed");
        }

        return base64_encode($iv . $encrypted); // склеиваем iv + данные
    }

    /**
     * Дешифрует строку, зашифрованную методом encrypt()
     *
     * Извлекает вектор инициализации (IV) из начала зашифрованных данных
     * и использует его вместе с нормализованным ключом для дешифрования.
     *
     * @param string $ciphertext Зашифрованная строка в формате base64
     * @param string $key Ключ дешифрования (должен совпадать с ключом шифрования)
     * @return string Расшифрованная строка
     * @throws \RuntimeException Если дешифрование не удалось
     */
    public function decrypt(string $ciphertext, ?string $key = null): string
    {
        $key ??= $this->getDefaultKey();
        $key = hash('sha256', $key, true);
        $raw = base64_decode($ciphertext);

        $iv_length = openssl_cipher_iv_length($this->cipher);
        $iv = substr($raw, 0, $iv_length);
        $encrypted = substr($raw, $iv_length);

        $decrypted = openssl_decrypt($encrypted, $this->cipher, $key, OPENSSL_RAW_DATA, $iv);

        if ($decrypted === false) {
            throw new \RuntimeException("Decryption failed");
        }

        return $decrypted;
    }
}
