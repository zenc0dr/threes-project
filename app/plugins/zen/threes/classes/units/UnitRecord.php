<?php

namespace Zen\Threes\Classes\Units;

use Zen\Threes\Models\Unit;

trait UnitRecord
{
    public function getUnitData(string $tid): array | null
    {
        $unit = Unit::find($tid);
        if (!$unit) {
            return null;
        }

        return [
            'io' => $unit->io,
        ];
    }

    public function get(string $tid) : Unit | null
    {
        return Unit::find($tid);
    }
}
