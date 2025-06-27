<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Handlers\TokensHandlerInterface;

class Tokens
{
    protected static ?string $storage_path = null;

    protected static array $handlers_map = [
        'auth' => \Zen\Threes\Handlers\TokensAuthHandler::class,
        //'session' => \Zen\Threes\Handlers\TokensSessionHandler::class,
    ];

    protected static array $handlers = [];

    protected static function path(): string
    {
        return self::$storage_path ??= rtrim(ths()->env('TOKENS_STORAGE'), '/');
    }

    protected static function file(string $token): string
    {
        return self::path() . '/' . $token . '.json';
    }

    protected static function parseTokenId(string $token): array
    {
        $parts = explode('.', $token, 2);
        if (count($parts) !== 2 || !$parts[0] || !$parts[1]) {
            throw new \InvalidArgumentException("Invalid token ID format: {$token}");
        }
        return [$parts[0], $parts[1]];
    }

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

        if ($handler = self::handler($subtype)) {
            $data = $handler->onCreate($data);
        }

        ths()->toJsonFile(self::file($token), $data);
        return $data;
    }

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

    public static function exists(string $token): bool
    {
        return file_exists(self::file($token));
    }

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
