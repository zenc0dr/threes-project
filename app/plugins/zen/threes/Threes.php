<?php

namespace Zen\Threes;

use Zen\Threes\Traits\SingletonTrait;

class Threes
{
    use SingletonTrait;

    public function api(string $path, string $method, ...$data): mixed
    {
        $path = str_replace('.', '\\', $path);
        return app("Zen\Threes\Api\\$path")->{$method}(...$data);
    }
}
