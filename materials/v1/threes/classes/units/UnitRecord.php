<?php

namespace Zen\Threes\Classes\Units;

use Zen\Threes\Models\Unit;

trait UnitRecord
{
    public function get(string $uid) : Unit | null
    {
        return Unit::find($uid);
    }
}
