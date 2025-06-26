<?php

namespace Zen\Threes\Classes;

/**
 * Класс для управления токенами
 *
 * Предоставляет функциональность для создания, обновления, удаления и получения токенов.
 * Токены хранятся в JSON файлах в указанной директории.
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
     * @param string $uuid Уникальный идентификатор токена
     * @return string Полный путь к JSON файлу токена
     */
    protected static function file(string $uuid): string
    {
        return self::path() . '/' . $uuid . '.json';
    }

    /**
     * Создает новый токен
     *
     * Генерирует уникальный UUID и создает JSON файл с данными токена.
     *
     * @return array Массив с данными созданного токена:
     *               - uuid: уникальный идентификатор
     *               - write: флаг разрешения записи
     *               - data: данные токена (изначально null)
     *               - created_at: время создания в ISO формате
     *               - storage_at: время сохранения (изначально null)
     */
    public static function create(): array
    {
        $uuid = ths()->createToken(32);

        $data = [
            'uuid' => $uuid,
            'write' => true,
            'data' => null,
            'created_at' => now()->toISOString(),
            'storage_at' => null,
        ];

        ths()->toJsonFile(self::file($uuid), $data);
        return $data;
    }

    /**
     * Обновляет данные существующего токена
     *
     * @param string $uuid Уникальный идентификатор токена
     * @param array $updates Массив с данными для обновления
     * @return array|null Обновленные данные токена или null, если токен не найден
     */
    public static function update(string $uuid, array $updates): ?array
    {
        if (!self::exists($uuid)) {
            return null;
        }

        $data = self::get($uuid);

        // Если токен уже заблокирован для записи — запрещаем любые обновления
        if (!($data['write'] ?? false)) {
            return null;
        }

        // Запрещаем установить write обратно в true
        if (isset($updates['write']) && $updates['write'] === true) {
            unset($updates['write']);
        }

        // Обновляем только разрешённые поля
        $data = array_merge($data, $updates);

        ths()->toJsonFile(self::file($uuid), $data);
        return $data;
    }


    /**
     * Удаляет токен
     *
     * @param string $uuid Уникальный идентификатор токена для удаления
     * @return bool true, если файл был успешно удален, false в противном случае
     */
    public static function remove(string $uuid): bool
    {
        $file = self::file($uuid);
        return file_exists($file) && unlink($file);
    }

    /**
     * Проверяет существование токена
     *
     * @param string $uuid Уникальный идентификатор токена
     * @return bool true, если токен существует, false в противном случае
     */
    public static function exists(string $uuid): bool
    {
        return file_exists(self::file($uuid));
    }

    /**
     * Получает данные токена
     *
     * @param string $uuid Уникальный идентификатор токена
     * @return array|null Данные токена в виде массива или null, если токен не найден
     */
    public static function get(string $uuid): ?array
    {
        return self::exists($uuid)
            ? ths()->fromJsonFile(self::file($uuid))
            : null;
    }
}
