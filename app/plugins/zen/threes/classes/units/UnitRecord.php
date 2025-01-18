<?php

namespace Zen\Threes\Classes\Units;

use Zen\Threes\Models\Unit;

trait UnitRecord
{
    public function getUnitData(string $uid)
    {
        $unit = Unit::find($uid);
        if (!$unit) {
            return null;
        }

        return [
            'io' => $unit->io,
        ];
    }
}
