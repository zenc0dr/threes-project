<?php

namespace Zen\Threes\Handlers;

class TokensAuthHandler implements TokensHandlerInterface
{
    /**
     * При создании токена — шифруем data, если она задана
     */
    public function onCreate(array $data): array
    {
        if (isset($data['data'])) {
            $json = ths()->toJson([$data['data']]);
            $data['data'] = ths()->crypt()->encrypt($json);
        }

        return $data;
    }

    /**
     * При получении токена — расшифровываем data
     */
    public function onGet(array $data): array
    {
        if (isset($data['data'])) {
            $json = ths()->crypt()->decrypt($data['data']);
            $data['data'] = ths()->fromJson($json)[0];
        }

        return $data;
    }

    /**
     * При обновлении токена — шифруем data, если она передана
     */
    public function onUpdate(array $data, array $updates): array
    {
        if (array_key_exists('data', $updates)) {
            $json = ths()->toJson([$updates['data']]);
            $updates['data'] = ths()->crypt()->encrypt($json);
        }

        return array_merge($data, $updates);
    }

    /**
     * Хук при удалении токена
     */
    public function onRemove(array $data): void
    {
        //
    }
}
