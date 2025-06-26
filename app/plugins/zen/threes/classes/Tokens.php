<?php

namespace Zen\Threes\Classes;

/**
 * Класс для управления токенами
 * 
 * Предоставляет функциональность для создания, обновления, удаления и получения токенов.
 * Токены имеют формат "subtype.uuid" и хранятся в JSON файлах в указанной директории.
 * Поддерживает механизм блокировки записи через флаг 'write'.
 */
class Tokens
{
    /** @var string|null Путь к директории хранения токенов */
    protected static ?string $storage_path = null;

    /**
     * Получает путь к директории хранения токенов
     * 
     * @return string Абсолютный путь к директории хранения
     */
    protected static function path(): string
    {
        return self::$storage_path ??= rtrim(ths()->env('TOKENS_STORAGE'), '/');
    }

    /**
     * Формирует полный путь к файлу токена
     * 
     * @param string $token Полный идентификатор токена в формате "subtype.uuid"
     * @return string Полный путь к JSON файлу токена
     */
    protected static function file(string $token): string
    {
        return self::path() . '/' . $token . '.json';
    }

    /**
     * Парсит идентификатор токена на подтип и UUID
     * 
     * @param string $token Полный идентификатор токена в формате "subtype.uuid"
     * @return array Массив [subtype, uuid]
     * @throws \InvalidArgumentException Если формат токена неверный
     */
    protected static function parseTokenId(string $token): array
    {
        $parts = explode('.', $token, 2);

        if (count($parts) !== 2 || !$parts[0] || !$parts[1]) {
            throw new \InvalidArgumentException("Invalid token ID format: {$token}");
        }

        return [$parts[0], $parts[1]]; // [subtype, uuid]
    }

    /**
     * Создает новый токен
     * 
     * Генерирует уникальный UUID и создает JSON файл с данными токена.
     * Токен имеет формат "subtype.uuid" и изначально доступен для записи.
     * 
     * @param string $subtype Подтип токена (например, 'auth', 'session', 'magic')
     * @param array $payload Дополнительные данные для токена
     * @return array Массив с данными созданного токена:
     *               - uuid: уникальный идентификатор (32 символа)
     *               - subtype: подтип токена
     *               - write: флаг разрешения записи (изначально true)
     *               - data: данные токена (изначально null)
     *               - created_at: время создания в ISO формате
     *               - storage_at: время сохранения (изначально null)
     *               - дополнительные поля из $payload
     */
    public static function create(string $subtype, array $payload = []): array
    {
        $uuid = ths()->createToken(32);
        $token = "{$subtype}.{$uuid}";

        $data = array_merge([
            'uuid' => $uuid,
            'subtype' => $subtype,
            'write' => true,
            'data' => null,
            'created_at' => now()->toISOString(),
            'storage_at' => null,
        ], $payload);

        ths()->toJsonFile(self::file($token), $data);
        return $data;
    }

    /**
     * Получает данные токена
     * 
     * @param string $token Полный идентификатор токена в формате "subtype.uuid"
     * @return array|null Данные токена в виде массива или null, если токен не найден
     */
    public static function get(string $token): ?array
    {
        return file_exists(self::file($token))
            ? ths()->fromJsonFile(self::file($token))
            : null;
    }

    /**
     * Проверяет существование токена
     * 
     * @param string $token Полный идентификатор токена в формате "subtype.uuid"
     * @return bool true, если токен существует, false в противном случае
     */
    public static function exists(string $token): bool
    {
        return file_exists(self::file($token));
    }

    /**
     * Удаляет токен
     * 
     * @param string $token Полный идентификатор токена в формате "subtype.uuid"
     * @return bool true, если файл был успешно удален, false в противном случае
     */
    public static function remove(string $token): bool
    {
        $file = self::file($token);
        return file_exists($file) && unlink($file);
    }

    /**
     * Обновляет данные существующего токена
     * 
     * Обновление возможно только если токен существует и имеет флаг write = true.
     * При попытке установить write = true, это поле игнорируется (токен остается заблокированным).
     * 
     * @param string $token Полный идентификатор токена в формате "subtype.uuid"
     * @param array $updates Массив с данными для обновления
     * @return array|null Обновленные данные токена или null, если токен не найден или заблокирован
     */
    public static function update(string $token, array $updates): ?array
    {
        if (!self::exists($token)) {
            return null;
        }

        $data = self::get($token);

        if (!($data['write'] ?? false)) {
            return null;
        }

        if (isset($updates['write']) && $updates['write'] === true) {
            unset($updates['write']);
        }

        $data = array_merge($data, $updates);
        ths()->toJsonFile(self::file($token), $data);
        return $data;
    }
}
