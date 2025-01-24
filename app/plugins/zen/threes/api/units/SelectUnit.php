<?php

namespace Zen\Threes\Api\Units;

use Zen\Threes\Models\Unit;

class SelectUnit
{
    /**
     * http://threes.dc/zen/threes/api/Units.SelectUnit:records
     */
    public function records()
    {
        $units = Unit::active()->get();

        $output = [];
        foreach ($units as $unit) {
            $output[] = [
                'tid' => $unit->tid,
                'name' => $unit->name,
                'icon' => $unit->icon_path,
                'description' => $unit->description,
            ];
        }

        return [
            'units' => $output
        ];
    }

    /**
     * http://threes.dc/zen/threes/api/Units.SelectUnit:makeNode
     * @return array
     */
    public function makeNode(): array
    {
        $tid = request('tid');
        $unit = Unit::find($tid);
        return [
            'tid' => $tid,
            'name' => $unit->name,
            'icon' => $unit->icon_path,
            'io' => $unit->io,
        ];
    }
}
