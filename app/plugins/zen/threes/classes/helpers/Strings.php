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
     * Сгенерировать случайную строку с заданной длинной
     * @param int $length
     * @return string
     */
    public function createToken(int $length = 8): string
    {
        return strtolower(Str::random($length));
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
