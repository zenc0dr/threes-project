<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;

class Store
{
    use SingletonTrait;

    public function getStoreNodes(): array
    {
        return [];
    }
}
