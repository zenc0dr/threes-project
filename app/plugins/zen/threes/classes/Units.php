<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;
use Zen\Threes\Models\Unit;

class Units
{
    use SingletonTrait;

    public function get(string $uid): Unit
    {
        return Unit::find($uid);
    }
}
