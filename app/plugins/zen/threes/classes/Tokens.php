<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Handlers\TokensHandlerInterface;

/**
 * Класс для управления токенами (создание, получение, обновление, удаление).
 * Токены хранятся в виде JSON-файлов в директории, заданной переменной окружения TOKENS_STORAGE.
 * Поддерживает обработчики для разных подтипов токенов (auth, session и др.).
 */
class Tokens
{
    /**
     * Путь к директории хранения токенов
     * @var string|null
     */
    protected static ?string $storage_path = null;

    /**
     * Карта обработчиков токенов по подтипу
     * @var array<string, class-string<TokensHandlerInterface>>
     */
    protected static array $handlers_map = [
        'auth' => \Zen\Threes\Handlers\TokensAuthHandler::class,
        //'session' => \Zen\Threes\Handlers\TokensSessionHandler::class, # for example
    ];

    /**
     * Кеш обработчиков токенов
     * @var array<string, TokensHandlerInterface|null>
     */
    protected static array $handlers = [];

    /**
     * Получить путь к директории хранения токенов
     * @return string
     */
    protected static function path(): string
    {
        return self::$storage_path ??= rtrim(ths()->env('TOKENS_STORAGE'), '/');
    }

    /**
     * Получить путь к файлу токена по его идентификатору
     * @param string $token
     * @return string
     */
    protected static function file(string $token): string
    {
        return self::path() . '/' . $token . '.json';
    }

    /**
     * Разобрать идентификатор токена на подтип и уникальную часть
     * @param string $token
     * @return array{0: string, 1: string} [subtype, id]
     * @throws \InvalidArgumentException
     */
    protected static function parseTokenId(string $token): array
    {
        $parts = explode('.', $token, 2);
        if (count($parts) !== 2 || !$parts[0] || !$parts[1]) {
            throw new \InvalidArgumentException("Invalid token ID format: {$token}");
        }
        return [$parts[0], $parts[1]];
    }

    /**
     * Получить обработчик для подтипа токена
     * @param string $subtype
     * @return TokensHandlerInterface|null
     */
    protected static function handler(string $subtype): ?TokensHandlerInterface
    {
        if (!isset(self::$handlers[$subtype])) {
            $class = self::$handlers_map[$subtype] ?? null;
            self::$handlers[$subtype] = $class && class_exists($class)
                ? new $class()
                : null;
        }
        return self::$handlers[$subtype];
    }

    /**
     * Создать новый токен
     * @param string $subtype Подтип токена (например, 'auth')
     * @param array $payload Данные токена (uuid, data, ...)
     * @return array Данные созданного токена
     */
    public static function create(string $subtype, array $payload = []): array
    {
        $uuid = $payload['uuid'] ??= "$subtype." . ths()->createToken(32);
        $data = array_merge([
            'uuid' => $uuid,
            'subtype' => $subtype,
            'write' => true,
            'data' => null,
            'created_at' => now()->toISOString(),
            'storage_at' => null,
        ], $payload);

        if ($handler = self::handler($subtype)) {
            $data = $handler->onCreate($data);
        }

        ths()->toJsonFile(self::file($uuid), $data);
        return $data;
    }

    /**
     * Получить данные токена по идентификатору
     * @param string $token
     * @return array|null Данные токена или null, если не найден
     */
    public static function get(string $token): ?array
    {
        if (!file_exists(self::file($token))) {
            return null;
        }

        $data = ths()->fromJsonFile(self::file($token));
        [$subtype] = self::parseTokenId($token);

        if ($handler = self::handler($subtype)) {
            $data = $handler->onGet($data);
        }

        return $data;
    }

    /**
     * Проверить существование токена
     * @param string $token
     * @return bool
     */
    public static function exists(string $token): bool
    {
        return file_exists(self::file($token));
    }

    /**
     * Удалить токен
     * @param string $token
     * @return bool true, если токен был удалён, иначе false
     */
    public static function remove(string $token): bool
    {
        if (!file_exists(self::file($token))) {
            return false;
        }

        $data = ths()->fromJsonFile(self::file($token));
        [$subtype] = self::parseTokenId($token);

        if ($handler = self::handler($subtype)) {
            $handler->onRemove($data);
        }

        return unlink(self::file($token));
    }

    /**
     * Обновить данные токена
     * @param string $token
     * @param array $updates Массив обновляемых данных
     * @return array|null Обновлённые данные токена или null, если токен не найден или не разрешено обновление
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

        [$subtype] = self::parseTokenId($token);
        if ($handler = self::handler($subtype)) {
            $data = $handler->onUpdate($data, $updates);
        } else {
            $data = array_merge($data, $updates);
        }

        ths()->toJsonFile(self::file($token), $data);
        return $data;
    }
}
