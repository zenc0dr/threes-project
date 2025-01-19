<?php

namespace Zen\Threes\Classes\Helpers;

use Str;

trait Strings
{
    public function createUuid(): string
    {
        return Str::uuid()->toString();
    }

    public function createToken($length = 8): string
    {
        return Str::random($length);
    }
}
