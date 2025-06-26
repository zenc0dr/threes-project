<?php

namespace Zen\Threes\Classes;

/**
 * Класс для управления токенами с поддержкой подтипов
 *
 * Каждый токен создаётся с обязательным подтипом, который указывается в имени файла:
 * Пример: auth.8jg9gjdlprsygqjboybmpzhntpsxobqf.json
 */
class Tokens
{
    /** @var string|null Путь к директории хранения токенов */
    protected static ?string $storage_path = null;

    /**
     * Возвращает путь к директории хранения токенов
     */
    protected static function path(): string
    {
        return self::$storage_path ??= rtrim(ths()->env('TOKENS_STORAGE'), '/');
    }

    /**
     * Формирует путь к файлу токена
     */
    protected static function file(string $subtype, string $uuid): string
    {
        return self::path() . "/{$subtype}.{$uuid}.json";
    }

    /**
     * Создаёт токен с подтипом
     */
    public static function create(string $subtype, array $payload = []): array
    {
        $uuid = ths()->createToken(32);

        $data = array_merge([
            'uuid' => $uuid,
            'subtype' => $subtype,
            'write' => true,
            'data' => null,
            'created_at' => now()->toISOString(),
            'storage_at' => null,
        ], $payload);

        ths()->toJsonFile(self::file($subtype, $uuid), $data);
        return $data;
    }

    /**
     * Получает данные токена
     */
    public static function get(string $subtype, string $uuid): ?array
    {
        $file = self::file($subtype, $uuid);
        return file_exists($file) ? ths()->fromJsonFile($file) : null;
    }

    /**
     * Проверяет существование токена
     */
    public static function exists(string $subtype, string $uuid): bool
    {
        return file_exists(self::file($subtype, $uuid));
    }

    /**
     * Удаляет токен
     */
    public static function remove(string $subtype, string $uuid): bool
    {
        $file = self::file($subtype, $uuid);
        return file_exists($file) && unlink($file);
    }

    /**
     * Обновляет токен (если он ещё не заблокирован)
     */
    public static function update(string $subtype, string $uuid, array $updates): ?array
    {
        if (!self::exists($subtype, $uuid)) {
            return null;
        }

        $data = self::get($subtype, $uuid);

        if (!($data['write'] ?? false)) {
            return null;
        }

        if (isset($updates['write']) && $updates['write'] === true) {
            unset($updates['write']);
        }

        $data = array_merge($data, $updates);

        ths()->toJsonFile(self::file($subtype, $uuid), $data);
        return $data;
    }
}
