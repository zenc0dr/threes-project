<?php

namespace Zen\Threes\Classes\Helpers;

use Str;

trait Strings
{
    /**
     * Сгенерировать UUID
     * @return string
     */
    public function createUuid(): string
    {
        return Str::uuid()->toString();
    }

    /**
     * Сгенерировать токен с заданной длинной
     * @param int $length
     * @return string
     */
    public function createToken(int $length = 8): string
    {
        return strtolower(Str::random($length));
    }

    /**
     * Сгенерировать строку из безопасных символов
     * @param int $length
     * @return string
     */
    public function createShortId(int $length = 8): string
    {
        $chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
        return substr(str_shuffle(str_repeat($chars, 5)), 0, $length);
    }

    /**
     * Преобразует kebab-case в camelCase
     * @param string $value
     * @return string
     */
    public function kebabToCamel(string $value): string
    {
        return Str::camel($value);
    }
}
